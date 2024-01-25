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

const rentalIncomeAccounts = [
  3000, 3001, 3002, 3003, 3004, 3010, 3011, 3012, 3013, 3014, 3071, 3089, 3099,
  3105, 3106, 3107, 3108, 3200, 3211, 3212, 3223, 3231, 3305, 3308, 3389, 3401,
  3402, 3403, 3404, 3500, 3510, 3511, 3518, 3520, 3521, 3522, 3530, 3540, 3541,
  3542, 3550, 3560, 3561, 3562, 3563, 3570, 3590,
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

// Net sales
function calculateNetSales(
  data: SIEDataType,
  startDate: string,
  endDate: string
) {
  let netSales = 0;

  const { VER, KONTO, RAR } = data;

  const _start = startDate.split("-").join("");
  const _slut = endDate.split("-").join("");

  const fiscalYear = RAR.find(
    ({ start, slut }) => _start >= start && _slut <= slut
  );

  if (!fiscalYear) {
    throw new Error("No fiscal year found for the specified date range.");
  }

  // Extract revenue accounts from KONTO (you may need to adjust this based on your data structure)
  // const revenueAccounts = KONTO.filter((account) => /* Add condition to identify revenue accounts */);

  Object.values(VER).forEach((entry) => {
    const entryVerDate = entry.verdatum;
    const entryRegDate = entry.regdatum;

    if (
      (entryVerDate >= _start && entryVerDate <= _slut) ||
      (entryRegDate >= _start && entryRegDate <= _slut)
    ) {
      entry.TRANS.forEach((transaction) => {
        netSales += parseFloat(transaction.belop);

        // if (revenueAccounts.includes(transaction.kontonr)) {
        //   netSales += parseFloat(transaction.belop);
        // }
      });
    }
  });

  return netSales;
}

function calculateFinancialResults(
  data: SIEDataType,
  startDate: string,
  endDate: string
) {
  let financialResults = 0;

  const { VER, KONTO, RAR } = data;

  const _start = startDate.split("-").join("");
  const _slut = endDate.split("-").join("");

  const fiscalYear = RAR.find(
    ({ start, slut }) => _start >= start && _slut <= slut
  );

  if (!fiscalYear) {
    throw new Error("No fiscal year found for the specified date range.");
  }

  // Extract accounts representing financial items from KONTO (modify this based on your data structure)
  // const financialItemAccounts = KONTO.filter((account) => /* Add condition to identify financial item accounts */);

  Object.values(VER).forEach((entry) => {
    // Check both "verdatum" and "regdatum" to ensure the transaction is within the specified date range
    const entryVerDate = entry.verdatum;
    const entryRegDate = entry.regdatum;

    if (
      (entryVerDate >= startDate && entryVerDate <= endDate) ||
      (entryRegDate >= startDate && entryRegDate <= endDate)
    ) {
      // Add logic to sum up financial results based on financial item accounts
      entry.TRANS.forEach((transaction) => {
        if (
          transaction.kontonr.startsWith("20") ||
          transaction.kontonr.startsWith("26") ||
          transaction.kontonr.startsWith("37") ||
          transaction.kontonr.startsWith("62")
        ) {
          console.log(transaction);
          financialResults += parseFloat(transaction.belop);
        }
      });
    }
  });

  return financialResults;
}

// Rental income
function rentalIncome(data: SIEDataType, startDate: string, endDate: string) {}

try {
  let jsonData = sieObject as SIEDataType;

  // const data = rangeOfFiscalYearCoved(jsonData.RAR);
  // console.log(data);
  const startDate = "2021-07-01";
  const endDate = "2022-06-30";

  const netSales = calculateNetSales(jsonData, startDate, endDate);
  console.log(netSales);

  const result = calculateFinancialResults(jsonData, startDate, endDate);
  console.log("Financial Results:", result);
} catch (error) {
  console.log(error);
}
