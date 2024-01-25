import fs from "fs";
const data = fs.readFileSync("./test/sie.json", "utf-8");
const sieObject = JSON.parse(data);

interface fiscalYearCovered {
  årsnr: string;
  start: string;
  slut: string;
}

interface FiscalYearFormatted {
  no: number;
  start: string;
  end: string;
}

interface Transaction {
  kontonr: string;
  belop: string;
}

interface VerEntry {
  serie: string;
  vernr: string;
  verdatum: string;
  vertext: string;
  regdatum: string; //reg date
  TRANS: Transaction[];
  RTRANS: [];
  BTRANS: [];
}

interface SIEDataType {
  // VER: Transactions (verifikationer). This is where the individual accounting entries are listed.
  VER: {
    [key: string]: VerEntry;
  };
  // FLAGGA: Flags, possibly indicating special conditions or states of the entries.
  FLAGGA: string;
  // PROGRAM: The software used to generate the SIE file.
  PROGRAM: {
    programnamn: string;
    verision: string;
  };
  // FORMAT: The format version of the SIE standard used.
  FORMAT: string;
  // GEN: General information about when and how the file was generated.
  GEN: {
    datum: string;
  };
  // SIETYP: Type of SIE file (there are different types for different purposes).
  SIETYP: string;
  // ORGNR: Organization number, the unique identifier for the company.
  ORGNR: {
    orgnr: string;
  };
  // FNAM: The name of the company (företagsnamn).
  FNAM: string;
  // RAR: Accounting years (räkenskapsår). This will show the start and end of the fiscal years covered.
  RAR: [fiscalYearCovered];
  // KPTYP: Account plan type.
  KPTYP: string;
  // KONTO: Accounts. This is where you would find the revenue accounts.
  KONTO: [];
  // SRU: Codes used for reporting to the Swedish tax authorities.
  SRU: [];
  // IB: Initial balance (Ingångsbalans) at the start of the accounting period.
  IB: [];
  // UB: Closing balance (Utgångsbalans) at the end of the accounting period.
  UB: [];
  // RES: Result, possibly indicating the result for the period.
  RES: [];
}

const netTurnoverAccountList = [
  3000, 3001, 3002, 3003, 3004, 3010, 3011, 3012, 3013, 3014, 3071, 3089, 3099,
  3105, 3106, 3107, 3108, 3200, 3211, 3212, 3223, 3231, 3305, 3308, 3389, 3401,
  3402, 3403, 3404, 3500, 3510, 3511, 3518, 3520, 3521, 3522, 3530, 3540, 3541,
  3542, 3550, 3560, 3561, 3562, 3563, 3570, 3590,
];

const rentalIncomeAccountList = [3900, 3910, 3911, 3912, 3913, 3914];

const capitalizedWorkOwnAccountList = [3800, 3840, 3850, 3870];
const otherOperatingIncomeAccountList = [
  3600, 3610, 3611, 3612, 3613, 3619, 3620, 3630, 3670, 3671, 3672, 3679, 3680,
  3690, 3700, 3710, 3730, 3731, 3732, 3740, 3750, 3751, 3752, 3790, 3920, 3921,
  3922, 3925, 3929, 3930, 3940, 3950, 3960, 3970, 3971, 3972, 3973, 3980, 3981,
  3985, 3987, 3988, 3989, 3990, 3991, 3992, 3993, 3994, 3995, 3996, 3997, 3998,
  3999, 8230, 8231, 8236, 8491, 8710,
];

function formatDate(dateStr: string): string {
  return `${dateStr.substring(0, 4)}-${dateStr.substring(
    4,
    6
  )}-${dateStr.substring(6)}`;
}

function rangeOfFiscalYearCoved(
  data: fiscalYearCovered[]
): FiscalYearFormatted[] {
  return data.map((year) => ({
    no: Math.abs(parseInt(year.årsnr)) + 1,
    start: formatDate(year.start),
    end: formatDate(year.slut),
  }));
}

function isAccountInclude(kontonr: string, accountList: number[]): boolean {
  const numericKontonr = parseInt(kontonr);
  return accountList.includes(numericKontonr);
}

function netTurnover(data: SIEDataType, startDate: string, endDate: string) {
  const { VER, RAR } = data;

  const _start = startDate.split("-").join("");
  const _slut = endDate.split("-").join("");

  const fiscalYear = RAR.find(
    ({ start, slut }) => _start >= start && _slut <= slut
  );

  if (!fiscalYear) {
    throw new Error("No fiscal year found for the specified date range.");
  }

  let totalNetTurnover = 0;

  Object.values(VER).forEach((entry) => {
    const entryVerDate = entry.verdatum;
    const entryRegDate = entry.regdatum;

    if (
      (entryVerDate >= startDate && entryVerDate <= endDate) ||
      (entryRegDate >= startDate && entryRegDate <= endDate)
    ) {
      entry.TRANS.forEach((transaction) => {
        if (isAccountInclude(transaction.kontonr, netTurnoverAccountList)) {
          totalNetTurnover += parseFloat(transaction.belop);
        }
      });
    }
  });

  return totalNetTurnover;
}

// Rental income
function rentalIncome(data: SIEDataType, startDate: string, endDate: string) {
  const { VER, RAR } = data;

  const _start = startDate.split("-").join("");
  const _slut = endDate.split("-").join("");

  const fiscalYear = RAR.find(
    ({ start, slut }) => _start >= start && _slut <= slut
  );

  if (!fiscalYear) {
    throw new Error("No fiscal year found for the specified date range.");
  }

  let totalRentalIncome = 0;

  Object.values(VER).forEach((entry) => {
    const entryVerDate = entry.verdatum;
    const entryRegDate = entry.regdatum;

    if (
      (entryVerDate >= startDate && entryVerDate <= endDate) ||
      (entryRegDate >= startDate && entryRegDate <= endDate)
    ) {
      entry.TRANS.forEach((transaction) => {
        if (isAccountInclude(transaction.kontonr, rentalIncomeAccountList)) {
          totalRentalIncome += parseFloat(transaction.belop);
        }
      });
    }
  });

  return totalRentalIncome;
}

function CapitalizedWorkOwnAccount(
  data: SIEDataType,
  startDate: string,
  endDate: string
) {
  const { VER, RAR } = data;

  const _start = startDate.split("-").join("");
  const _slut = endDate.split("-").join("");

  const fiscalYear = RAR.find(
    ({ start, slut }) => _start >= start && _slut <= slut
  );

  if (!fiscalYear) {
    throw new Error("No fiscal year found for the specified date range.");
  }

  let totalCapitalizedWorkOwn = 0;

  Object.values(VER).forEach((entry) => {
    const entryVerDate = entry.verdatum;
    const entryRegDate = entry.regdatum;

    if (
      (entryVerDate >= startDate && entryVerDate <= endDate) ||
      (entryRegDate >= startDate && entryRegDate <= endDate)
    ) {
      entry.TRANS.forEach((transaction) => {
        if (
          isAccountInclude(transaction.kontonr, capitalizedWorkOwnAccountList)
        ) {
          console.log(transaction);
          totalCapitalizedWorkOwn += parseFloat(transaction.belop);
        }
      });
    }
  });

  return totalCapitalizedWorkOwn;
}

function OtherOperatingIncome(
  data: SIEDataType,
  startDate: string,
  endDate: string
) {
  const { VER, RAR } = data;

  const _start = startDate.split("-").join("");
  const _slut = endDate.split("-").join("");

  const fiscalYear = RAR.find(
    ({ start, slut }) => _start >= start && _slut <= slut
  );

  if (!fiscalYear) {
    throw new Error("No fiscal year found for the specified date range.");
  }

  let totalOtherOperatingIncome = 0;

  Object.values(VER).forEach((entry) => {
    const entryVerDate = entry.verdatum;
    const entryRegDate = entry.regdatum;

    if (
      (entryVerDate >= startDate && entryVerDate <= endDate) ||
      (entryRegDate >= startDate && entryRegDate <= endDate)
    ) {
      entry.TRANS.forEach((transaction) => {
        if (
          isAccountInclude(transaction.kontonr, otherOperatingIncomeAccountList)
        ) {
          console.log(transaction);
          totalOtherOperatingIncome += parseFloat(transaction.belop);
        }
      });
    }
  });

  return totalOtherOperatingIncome;
}

try {
  let jsonData = sieObject as SIEDataType;

  const startDate = "2021-07-01";
  const endDate = "2022-06-30";

  // const result = rentalIncome(jsonData, startDate, endDate);

  const netTurnover_result = netTurnover(jsonData, startDate, endDate);
  const rentalIncome_result = rentalIncome(jsonData, startDate, endDate);
  const CapitalizedWorkOwn_result = CapitalizedWorkOwnAccount(
    jsonData,
    startDate,
    endDate
  );

  const OtherOperatingIncome_result = OtherOperatingIncome(
    jsonData,
    startDate,
    endDate
  );

  console.log(`netTurnover: `, netTurnover_result);
  console.log(`rentalIncome result: `, rentalIncome_result);
  console.log(`Capitalized work on own account: `, CapitalizedWorkOwn_result);
  console.log(`Other operating income: `, OtherOperatingIncome_result);

  console.log(
    `Operating income: `,
    netTurnover_result +
      rentalIncome_result +
      CapitalizedWorkOwn_result +
      OtherOperatingIncome_result
  );
} catch (error) {
  console.log(error);
}
