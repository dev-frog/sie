// read a file sie.json
import fs from "fs";
const data = fs.readFileSync("./test/sie.json", "utf-8");
const sieObject = JSON.parse(data);

interface Account {
  kontonr: string;
  kontonamn: string;
  IB: string; // Initial Balance
  UB: string; // Closing Balance
}

interface Transaction {
  kontonr: string;
  belop: string;
}

interface VerEntry {
  verdatum: string;
  TRANS: Transaction[];
}

interface IBEntry {
  årsnr: string;
  konto: string;
  saldo: string;
}

interface RevenueData {
  KONTO: Account[];
  VER: { [key: string]: VerEntry };
}

interface SIEData {
  KONTO: Account[];
  VER: VerEntry[];
  // other relevant fields
}

interface IncomeStatement {
  totalRevenue: number;
  totalExpenses: number;
  netIncome: number;
}

interface BalanceSheetItem {
  name: string;
  balance: number;
}

interface BalanceDate {
  KONTO: Account[];
  VER: { [key: string]: VerEntry };
  IB: { [key: string]: IBEntry };
  UB: { [key: string]: IBEntry };
}

interface BalanceSheet {
  assets: BalanceSheetItem[];
  liabilities: BalanceSheetItem[];
  equity: BalanceSheetItem[];
}

function calculateRevenueGrowth(
  data: RevenueData,
  revenueAccountRange: { start: number; end: number },
  year1: number,
  year2: number
): number {
  const revenueAccounts = data.KONTO.filter((account) => {
    const accountNumber = parseInt(account.kontonr, 10);
    return (
      !isNaN(accountNumber) &&
      accountNumber >= revenueAccountRange.start &&
      accountNumber <= revenueAccountRange.end
    );
  }).map((account) => account.kontonr);

  let revenueYear1 = 0;
  let revenueYear2 = 0;

  Object.values(data.VER).forEach((ver) => {
    const year = parseInt(ver.verdatum.substring(0, 4));
    ver.TRANS.forEach((trans) => {
      if (revenueAccounts.includes(trans.kontonr)) {
        const amount = parseFloat(trans.belop);
        if (year === year1) {
          revenueYear1 += amount;
        } else if (year === year2) {
          revenueYear2 += amount;
        }
      }
    });
  });

  //   if (revenueYear1 === 0) {
  //     throw new Error("No revenue data for year " + year1);
  //   }
  //   if (revenueYear2 === 0) {
  //     throw new Error("No revenue data for year " + year2);
  //   }

  console.log("Revenue Year " + year1 + ": " + revenueYear1);
  console.log("Revenue Year " + year2 + ": " + revenueYear2);

  let growth = ((revenueYear2 - revenueYear1) / revenueYear1) * 100;
  return growth;
}

function generateIncomeStatement(
  data: RevenueData,
  revenueAccountRange: { start: number; end: number },
  expenseAccountRange: { start: number; end: number },
  year: number
): IncomeStatement {
  let totalRevenue = 0;
  let totalExpenses = 0;

  const revenueAccounts = data.KONTO.filter((account) => {
    const accountNumber = parseInt(account.kontonr, 10);
    return (
      !isNaN(accountNumber) &&
      accountNumber >= revenueAccountRange.start &&
      accountNumber <= revenueAccountRange.end
    );
  }).map((account) => account.kontonr);

  const expenseAccounts = data.KONTO.filter((account) => {
    const accountNumber = parseInt(account.kontonr, 10);
    return (
      !isNaN(accountNumber) &&
      accountNumber >= expenseAccountRange.start &&
      accountNumber <= expenseAccountRange.end
    );
  }).map((account) => account.kontonr);

  Object.values(data.VER).forEach((ver) => {
    const verYear = parseInt(ver.verdatum.substring(0, 4), 10);
    if (verYear === year) {
      ver.TRANS.forEach((trans) => {
        const amount = parseFloat(trans.belop);
        if (revenueAccounts.includes(trans.kontonr)) {
          totalRevenue += amount;
        } else if (expenseAccounts.includes(trans.kontonr)) {
          totalExpenses += amount;
        }
      });
    }
  });

  let netIncome = totalRevenue - totalExpenses;

  return {
    totalRevenue,
    totalExpenses,
    netIncome,
  };
}

function generateBalanceSheet(
  data: RevenueData,
  revenueAccountRange: { start: number; end: number }
) {
  let assets: BalanceSheetItem[] = [];
  let liabilities: BalanceSheetItem[] = [];
  let equity: BalanceSheetItem[] = [];

  const revenueAccounts = data.KONTO.filter((account) => {
    const accountNumber = parseInt(account.kontonr, 10);
    return (
      !isNaN(accountNumber) &&
      accountNumber >= revenueAccountRange.start &&
      accountNumber <= revenueAccountRange.end
    );
  }).map((account) => account.kontonr);

  console.log(revenueAccounts);

  // Organize accounts into assets, liabilities, and equity
  // accounts.forEach(account => {
  //   if (/* condition for assets */) {
  //     assets.push({ name: account.kontonamn, balance: account.balance });
  //   } else if (/* condition for liabilities */) {
  //     liabilities.push({ name: account.kontonamn, balance: account.balance });
  //   } else if (/* condition for equity */) {
  //     equity.push({ name: account.kontonamn, balance: account.balance });
  //   }
  // });

  return { assets, liabilities, equity };
}

function calculateNetSales(
  data: RevenueData,
  revenueAccountRange: { start: string; end: string },
  startDate: string,
  endDate: string
): number {
  let totalSales = 0;
  let returnsAndAllowances = 0;
  const start = new Date(startDate);
  const end = new Date(endDate);

  Object.values(data.VER).forEach((ver) => {
    ver.TRANS.forEach((trans) => {
      if (
        trans.kontonr >= revenueAccountRange.start &&
        trans.kontonr <= revenueAccountRange.end
      ) {
        totalSales += parseFloat(trans.belop);
      }
    });
  });

  // Adjust for returns and allowances
  let netSales = totalSales - returnsAndAllowances;
  return netSales;
}

let jsonData = sieObject as RevenueData;

try {
  let revenueAccountRange = { start: "3000", end: "3999" }; // Define your revenue account range
  // let expenseAccountRange = { start: 4000, end: 4999 }; // Define your expense account range
  // let incomeStatement = generateIncomeStatement(
  //   jsonData,
  //   revenueAccountRange,
  //   expenseAccountRange,
  //   2021
  // );
  // console.log("Income Statement for 2024:", incomeStatement);

  // let growth = calculateRevenueGrowth(
  //   jsonData,
  //   revenueAccountRange,
  //   2020,
  //   2021
  // );
  // console.log("Revenue Growth: " + growth.toFixed(2) + "%");

  const netSales = calculateNetSales(
    jsonData,
    revenueAccountRange,
    "2021-07-01",
    "2022-06-30"
  );
  console.log("Net Sales:", netSales);

  // let assetAccountRange = { start: 1000, end: 1999 }; // Define your asset account range
  // let liabilityAccountRange = { start: 2000, end: 2999 }; // Define your liability account range
  // let equityAccountRange = { start: 3000, end: 3999 }; // Define your equity account range
  // let balanceSheet = generateBalanceSheet(jsonData, assetAccountRange); // Set true for closing balance, false for initial balance
  // console.log("Balance Sheet:", balanceSheet);
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("An unknown error occurred");
  }
}
