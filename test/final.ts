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

// INCOME STATEMENT
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

const rawMaterialsSuppliesAccountList = [
  4000, 4010, 4200, 4211, 4212, 4400, 4415, 4416, 4417, 4425, 4426, 4427, 4500,
  4512, 4515, 4516, 4517, 4518, 4531, 4532, 4533, 4534, 4535, 4536, 4537, 4538,
  4545, 4546, 4547, 4549, 4598, 4600, 4700, 4730, 4731, 4732, 4733, 4790, 4900,
  4910, 4920, 4930, 4931, 4932, 4940, 4944, 4945, 4947, 4970, 4974, 4975, 4977,
  4980, 4981, 4987, 4988, 4990,
];

const tradeGoodsAccountList = [4950, 4960];

const otherExternalCostsAccountList = [
  5000, 5010, 5011, 5012, 5013, 5020, 5030, 5040, 5050, 5060, 5061, 5062, 5063,
  5064, 5065, 5070, 5090, 5098, 5099, 5100, 5110, 5120, 5130, 5131, 5132, 5140,
  5160, 5161, 5162, 5163, 5164, 5165, 5170, 5190, 5191, 5192, 5193, 5198, 5199,
  5200, 5210, 5211, 5212, 5220, 5221, 5222, 5250, 5251, 5252, 5290, 5300, 5310,
  5320, 5330, 5340, 5350, 5360, 5370, 5380, 5390, 5400, 5410, 5411, 5412, 5420,
  5430, 5440, 5460, 5480, 5490, 5491, 5492, 5493, 5500, 5510, 5520, 5530, 5550,
  5580, 5590, 5600, 5610, 5611, 5612, 5613, 5615, 5616, 5619, 5620, 5630, 5640,
  5650, 5660, 5670, 5690, 5700, 5710, 5720, 5730, 5790, 5800, 5810, 5820, 5830,
  5831, 5832, 5841, 5842, 5843, 5844, 5845, 5846, 5890, 5900, 5910, 5920, 5930,
  5940, 5950, 5960, 5970, 5980, 5990, 6000, 6010, 6020, 6030, 6040, 6050, 6055,
  6060, 6061, 6062, 6063, 6064, 6069, 6070, 6071, 6072, 6080, 6090, 6100, 6110,
  6150, 6200, 6210, 6211, 6212, 6213, 6214, 6215, 6230, 6250, 6300, 6310, 6320,
  6330, 6340, 6341, 6342, 6350, 6351, 6352, 6360, 6361, 6362, 6370, 6380, 6390,
  6400, 6410, 6420, 6421, 6422, 6423, 6424, 6430, 6440, 6450, 6490, 6500, 6510,
  6520, 6530, 6540, 6550, 6560, 6570, 6580, 6590, 6800, 6810, 6820, 6830, 6840,
  6850, 6860, 6870, 6880, 6890, 6900, 6910, 6920, 6930, 6940, 6950, 6970, 6980,
  6981, 6982, 6990, 6991, 6992, 6993, 6996, 6997, 6998, 6999,
];

const personnelCostsAccountList = [
  7000, 7010, 7011, 7012, 7013, 7014, 7015, 7016, 7017, 7018, 7019, 7030, 7031,
  7032, 7033, 7034, 7035, 7036, 7037, 7038, 7039, 7080, 7081, 7082, 7083, 7090,
  7200, 7210, 7211, 7212, 7213, 7214, 7215, 7216, 7217, 7218, 7219, 7220, 7221,
  7222, 7223, 7224, 7225, 7227, 7228, 7229, 7230, 7231, 7232, 7233, 7234, 7235,
  7236, 7237, 7238, 7239, 7240, 7280, 7281, 7282, 7283, 7284, 7285, 7286, 7288,
  7289, 7290, 7291, 7292, 7300, 7310, 7311, 7312, 7313, 7314, 7315, 7316, 7317,
  7318, 7319, 7320, 7321, 7322, 7323, 7324, 7330, 7331, 7332, 7333, 7350, 7370,
  7380, 7381, 7382, 7383, 7384, 7385, 7386, 7387, 7388, 7389, 7390, 7391, 7392,
  7399, 7400, 7410, 7411, 7412, 7418, 7420, 7421, 7430, 7440, 7441, 7448, 7460,
  7461, 7462, 7463, 7470, 7490, 7500, 7510, 7511, 7512, 7515, 7516, 7518, 7519,
  7520, 7521, 7522, 7525, 7526, 7528, 7529, 7530, 7531, 7532, 7533, 7550, 7560,
  7570, 7571, 7572, 7580, 7581, 7582, 7583, 7589, 7590, 7600, 7610, 7620, 7621,
  7622, 7623, 7630, 7631, 7632, 7650, 7670, 7671, 7678, 7690, 7691, 7692, 7693,
  7699,
];

const depreciationAmortizationAccountList = [
  7710, 7720, 7730, 7740, 7760, 7770, 7780, 7790, 7810, 7811, 7812, 7813, 7814,
  7815, 7816, 7817, 7819, 7820, 7821, 7824, 7829, 7830, 7831, 7832, 7833, 7834,
  7835, 7836, 7839, 7840,
];

const otherOperatingExpenseAccountList = [
  7940, 7960, 7970, 7971, 7972, 7973, 7990, 8430, 8431, 8436, 8750,
];

const resultFromSharesGroupCompaniesAccountList = [
  8010, 8012, 8013, 8019, 8020, 8022, 8023, 8030,
];

const resultFromFinancialAssetsAccountList = [8110, 8112, 8116, 8120, 8130];

const interestIncomeAccountList = [
  8210, 8212, 8216, 8220, 8221, 8222, 8223, 8228, 8240, 8290, 8291, 8295, 8320,
  8321, 8325, 8330, 8331, 8336, 8340, 8350, 8450, 8451, 8455, 8390, 8398, 8490,
];

const depreciationImpairmentOfSharesGroupCompaniesAccountList = [
  8070, 8072, 8073, 8076, 8077, 8078, 8080, 8082, 8083, 8086, 8087, 8088, 8170,
  8171, 8172, 8180, 8181, 8182,
];

const depreciationImpairmentOfFinancialAssetsAccountList = [
  8270, 8271, 8272, 8273, 8280, 8281, 8282, 8283, 8370, 8380,
];

const interestExpenseAccountList = [
  8400, 8410, 8411, 8412, 8413, 8414, 8415, 8417, 8418, 8419, 8420, 8421, 8422,
  8423, 8429, 8460, 8461, 8462, 8463, 8480, 8480,
];

const groupContributionsReceivedPaidAccountList = [
  8014, 8016, 8820, 8830, 8840,
];

const changeInTaxAllocationFundsAccountList = [
  8810, 8811, 8819, 8869, 8880, 8881, 8882, 8885, 8886,
];

const changeInExcessDepreciationAccountList = [
  8850, 8851, 8852, 8853, 8860, 8861, 8862, 8863, 8864, 8865, 8866,
];

const otherFinancialStatementAllocationsAccountList = [
  8890, 8891, 8892, 8896, 8899,
];

const taxesOnCurrentYearsProfitLossAccountList = [8910, 8920, 8930, 8940, 8980];

// BALANCE SHEET
// - Intangible Fixed Assets
const developmentExpenditureAccountList = [1010, 1011, 1012, 1018, 1019];

const concessionsPatentsLicenseAccountList = [
  1020, 1028, 1029, 1030, 1038, 1039, 1040, 1048, 1049,
];

const trademarksAccountList = [1050, 1058, 1059];

const tenanciesLeaseholdsSimilarAccountList = [1060, 1068, 1069];

const goodwillAccountList = [1070, 1078, 1079];

const advancesRegardingIntangibleFixedAssetsAccountList = [1080, 1081, 1088];

// 'Tangible Fixed Assets

const buildingsLandAccountList = [
  1110, 1111, 1112, 1118, 1119, 1130, 1140, 1150, 1158, 1159, 1180, 1181, 1188,
];

const expensesIncurredOnAnotherPropertyAccountList = [1120, 1129];

const investmentPropertiesAccountList = [];

const machineryOtherTechnicalEquipment = [1210, 1211, 1213, 1218, 1219];

const equipmentTools = [
  1220, 1221, 1222, 1223, 1225, 1228, 1229, 1230, 1231, 1232, 1238, 1239, 1240,
  1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1257, 1258,
  1259, 1260, 1269,
];

const constructionInProgressAdvancesOnTangibleFixedAssets = [1280, 1281, 1288];

const otherTangibleFixedAssetsAccountList = [1290, 1291, 1292, 1298, 1299];

// Financial fixed assets

const sharesInGroupCompaniesAccountList = [
  1310, 1311, 1312, 1313, 1314, 1316, 1318,
];

const longTermReceivablesFromGroupCompanies = [1320, 1321, 1322, 1323, 1328];

const sharesInGroupCompanies = [1330, 1336, 1338];

const longTermReceivablesFromAssociates = [1340, 1348];

const capitalInsurance = []; // no account fount
const otherLongTermReceivables = [1350, 1351, 1352, 1353, 1354, 1356, 1358];

const loansToShareholdersRelatedParties = [1360, 1369];

const deferredTaxReceivables = [1370];

// Stocks of goods

const rawMaterialsSupplies = [
  1410, 1419, 1420, 1429, 1430, 1431, 1432, 1438, 1439,
];

const workInProgress = [1440, 1449];
const finishedGoods = [1450, 1459];
const BRtradeGoodsAccountList = [1460, 1465, 1466, 1467, 1469];
const ongoingWork = [1470, 1471, 1478, 1479];
const advancesForGoodsServices = [1480, 1481, 1489];
const otherInventoryAssets = [1490, 1491, 1492, 1493];

// Short-term receivables

const accountsReceivable = [
  1510, 1511, 1512, 1513, 1515, 1516, 1518, 1519, 1520, 1525, 1529, 1530, 1531,
  1532, 1535, 1536, 1539, 1550,
];

const accountsReceivableFromGroupCompanies = [
  1560, 1561, 1562, 1563, 1565, 1568, 1569,
];

const accountsReceivableFromAssociatedCompanies = [
  1570, 1575, 1578, 1579, 1580,
];

const taxReceivables = [1640];

const accruedButUnInvoicedRevenue = [1620];

const shortTermReceivablesFromGroupCompanies = [1660, 1661, 1662, 1663];

const shortTermReceivablesFromAssociates = [1670];

const otherReceivables = [
  1610, 1611, 1612, 1613, 1614, 1619, 1630, 1650, 1680, 1681, 1682, 1683, 1684,
  1685, 1687, 1688, 1689, 1690,
];

const prepaidExpensesAccruedIncome = [
  1710, 1720, 1730, 1740, 1750, 1760, 1770, 1780, 1790,
];

// Short-term investments

const otherShortTermInvestments = [
  1810, 1820, 1830, 1860, 1869, 1880, 1886, 1889, 1890,
];

const cashAndCashEquivalent = [
  1910, 1911, 1912, 1913, 1914, 1920, 1930, 1931, 1940, 1950, 1960, 1970, 1972,
  1973, 1974, 1979, 1980, 1990,
];

//  EQUITY AND LIABILITIES

//  --> Equity
// -----> Restricted equity

const shareCapital = [
  2010, 2011, 2012, 2013, 2017, 2018, 2019, 2020, 2023, 2028, 2029, 2030, 2033,
  2038, 2039, 2040, 2043, 2048, 2049, 2050, 2060, 2061, 2065, 2066, 2067, 2068,
  2069, 2070, 2071, 2072, 2080, 2081, 2082,
];
const revaluationFund = [2083, 2084, 2085];
const reserveFund = [2086, 2087];
const fundForDevelopmentExpenditure = [2088];

// ------> Unrestricted equity
const sharePremiumReserve = [2097];
const retainedEarnings = [2090, 2091, 2092, 2093, 2094, 2095, 2096, 2098];
const stockOptions = []; // no account found
const currentYearsEarnings = [2099];

// ---> Untaxed reserves

const untaxedReserves = [
  2110, 2111, 2112, 2113, 2120, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2150,
  2151, 2152, 2153, 2160, 2161, 2162, 2163, 2164, 2180, 2181, 2185, 2190, 2196,
  2199,
];
// ---------> Provisions

const provisionsForPensionsSimilarObligations = [2210, 2220, 2230];
const provisionsForDeferredTaxes = [2240, 2250, 2252, 2253];
const otherProvisions = [2290];

// -----> Long-term liabilities
const bondLoans = [2320, 2321, 2322, 2323, 2324];
const liabilitiesToCreditInstitutions = [2330, 2340, 2350, 2351, 2355, 2359];
const longTermLiabilitiesToGroupCompanies = [2360, 2361, 2362, 2363];
const longTermLiabilitiesToAssociatedCompanies = [2370];
const otherLongTermLiabilities = [
  2390, 2391, 2392, 2393, 2394, 2395, 2396, 2397, 2399,
];

//  shortTermLiabilities
const ShortTermLiabilitiesToCreditInstitutions = [2410, 2411, 2417, 2419];
const advancesFromCustomers = [2420, 2421, 2429];
const ShortTermOngoingWork = [2430, 2431, 2438, 2439];
const accountsPayable = [2440, 2441, 2443, 2445, 2448];
const invoicedButNotAccruedIncome = [2450];
const accountsPayableToGroupCompanies = [2460, 2461, 2462, 2463];
const accountsPayableToAssociatedCompanies = [2470];
const otherShortTermLiabilitiesToCreditInstitutions = [2480, 2490, 2491, 2492];
const taxLiabilities = [2510, 2512, 2513, 2514, 2515, 2516, 2517, 2518];
const otherShortTermLiabilities = [
  2499, 2610, 2611, 2612, 2613, 2614, 2615, 2616, 2617, 2618, 2620, 2621, 2622,
  2623, 2624, 2625, 2626, 2627, 2628, 2630, 2631, 2632, 2633, 2634, 2635, 2636,
  2637, 2638, 2640, 2641, 2642, 2645, 2646, 2647, 2648, 2649, 2650, 2660, 2661,
  2668, 2669, 2710, 2730, 2731, 2732, 2740, 2750, 2760, 2761, 2762, 2790, 2791,
  2792, 2793, 2794, 2795, 2799, 2810, 2811, 2812, 2820, 2821, 2822, 2823, 2829,
  2830, 2850, 2880, 2890, 2891, 2892, 2893, 2895, 2897, 2898, 2899,
];

const shortTermBorrowings = [2840, 2841, 2849];
const liabilitiesToGroupCompanies = [2860, 2861, 2862, 2863];
const liabilitiesToAssociates = [2870];
const accruedExpensesAndDeferredIncome = [
  2910, 2911, 2912, 2919, 2920, 2930, 2931, 2940, 2941, 2942, 2943, 2944, 2950,
  2951, 2959, 2960, 2970, 2971, 2972, 2979, 2980, 2990, 2991, 2992, 2993, 2998,
  2999,
];

// ------------------------------ function List ------------------------

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
          totalOtherOperatingIncome += parseFloat(transaction.belop);
        }
      });
    }
  });

  return totalOtherOperatingIncome;
}

function functionTemplate(
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

  let totalFunctionTemplate = 0;

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
          totalFunctionTemplate += parseFloat(transaction.belop);
        }
      });
    }
  });

  return totalFunctionTemplate;
}

// Raw materials and supplies
function rawMaterialSupplies(
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

  let totalRawMaterialSupplies = 0;

  Object.values(VER).forEach((entry) => {
    const entryVerDate = entry.verdatum;
    const entryRegDate = entry.regdatum;

    if (
      (entryVerDate >= startDate && entryVerDate <= endDate) ||
      (entryRegDate >= startDate && entryRegDate <= endDate)
    ) {
      entry.TRANS.forEach((transaction) => {
        if (
          isAccountInclude(transaction.kontonr, rawMaterialsSuppliesAccountList)
        ) {
          totalRawMaterialSupplies += parseFloat(transaction.belop);
        }
      });
    }
  });

  return totalRawMaterialSupplies;
}

// Trade goods
function tradeGoods(data: SIEDataType, startDate: string, endDate: string) {
  const { VER, RAR } = data;

  const _start = startDate.split("-").join("");
  const _slut = endDate.split("-").join("");

  const fiscalYear = RAR.find(
    ({ start, slut }) => _start >= start && _slut <= slut
  );

  if (!fiscalYear) {
    throw new Error("No fiscal year found for the specified date range.");
  }

  let totalTradeGoods = 0;

  Object.values(VER).forEach((entry) => {
    const entryVerDate = entry.verdatum;
    const entryRegDate = entry.regdatum;

    if (
      (entryVerDate >= startDate && entryVerDate <= endDate) ||
      (entryRegDate >= startDate && entryRegDate <= endDate)
    ) {
      entry.TRANS.forEach((transaction) => {
        if (isAccountInclude(transaction.kontonr, tradeGoodsAccountList)) {
          console.log(transaction);
          totalTradeGoods += parseFloat(transaction.belop);
        }
      });
    }
  });

  return totalTradeGoods;
}

// Other external costs
function otherExternalCosts(
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

  let totalOtherExternalCosts = 0;

  Object.values(VER).forEach((entry) => {
    const entryVerDate = entry.verdatum;
    const entryRegDate = entry.regdatum;

    if (
      (entryVerDate >= startDate && entryVerDate <= endDate) ||
      (entryRegDate >= startDate && entryRegDate <= endDate)
    ) {
      entry.TRANS.forEach((transaction) => {
        if (
          isAccountInclude(transaction.kontonr, otherExternalCostsAccountList)
        ) {
          totalOtherExternalCosts += parseFloat(transaction.belop);
        }
      });
    }
  });

  return totalOtherExternalCosts;
}

// Personnel costs
function personnelCosts(data: SIEDataType, startDate: string, endDate: string) {
  const { VER, RAR } = data;

  const _start = startDate.split("-").join("");
  const _slut = endDate.split("-").join("");

  const fiscalYear = RAR.find(
    ({ start, slut }) => _start >= start && _slut <= slut
  );

  if (!fiscalYear) {
    throw new Error("No fiscal year found for the specified date range.");
  }

  let totalPersonnelCosts = 0;

  Object.values(VER).forEach((entry) => {
    const entryVerDate = entry.verdatum;
    const entryRegDate = entry.regdatum;

    if (
      (entryVerDate >= startDate && entryVerDate <= endDate) ||
      (entryRegDate >= startDate && entryRegDate <= endDate)
    ) {
      entry.TRANS.forEach((transaction) => {
        if (isAccountInclude(transaction.kontonr, personnelCostsAccountList)) {
          console.log(transaction);
          totalPersonnelCosts += parseFloat(transaction.belop);
        }
      });
    }
  });

  return totalPersonnelCosts;
}

// Depreciation and amortization

function depreciationAmortization(
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

  let totalDepreciationAmortization = 0;

  Object.values(VER).forEach((entry) => {
    const entryVerDate = entry.verdatum;
    const entryRegDate = entry.regdatum;

    if (
      (entryVerDate >= startDate && entryVerDate <= endDate) ||
      (entryRegDate >= startDate && entryRegDate <= endDate)
    ) {
      entry.TRANS.forEach((transaction) => {
        if (
          isAccountInclude(
            transaction.kontonr,
            depreciationAmortizationAccountList
          )
        ) {
          console.log(transaction);
          totalDepreciationAmortization += parseFloat(transaction.belop);
        }
      });
    }
  });

  return totalDepreciationAmortization;
}

// Other operating expense

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
    `------\nOperating income: `,
    netTurnover_result +
      rentalIncome_result +
      CapitalizedWorkOwn_result +
      OtherOperatingIncome_result
  );
  console.log(`------`);

  // Raw materials and supplies
  const rawMaterialSupplies_result = rawMaterialSupplies(
    jsonData,
    startDate,
    endDate
  );

  console.log(`Raw materials and supplies: `, rawMaterialSupplies_result);

  // Trade goods

  const tradeGoods_result = tradeGoods(jsonData, startDate, endDate);
  console.log(`Trade goods: `, tradeGoods_result);

  // Other external costs
  const otherExternalCosts_result = otherExternalCosts(
    jsonData,
    startDate,
    endDate
  );

  console.log(`Other external costs: `, otherExternalCosts_result);

  // Personnel costs

  const personnelCosts_result = personnelCosts(jsonData, startDate, endDate);

  console.log(`Personnel costs: `, personnelCosts_result);

  // Depreciation and amortization

  const depreciationAmortization_result = depreciationAmortization(
    jsonData,
    startDate,
    endDate
  );

  console.log(
    `Depreciation and amortization: `,
    depreciationAmortization_result
  );

  // Other operating expenses

  // 'Operating profit
} catch (error) {
  console.log(error);
}
