// read a file sie.json

import fs from "fs";

const data = fs.readFileSync("./test/sie.json", "utf-8");

const sieObject = JSON.parse(data);

const net_turnover = [
  3000, 3001, 3002, 3003, 3004, 3010, 3010, 3010, 3011, 3012, 3013, 3014, 3071,
  3089, 3099, 3105, 3106, 3010, 3107, 3108, 3200, 3211, 3212, 3223, 3231, 3305,
  3308, 3389, 3401, 3402, 3403, 3404, 3500, 3510, 3511, 3518, 3520, 3521, 3522,
  3530, 3540, 3541, 3542, 3550, 3560, 3561, 3562, 3563, 3570, 3590,
];

const rental_income = [3900, 3910, 3911, 3912, 3913, 3914];
const capitalized_work_on_own_account = [3800, 3840, 3850, 3870];

const other_operating_income = [
  3600, 3610, 3611, 3612, 3613, 3619, 3620, 3630, 3670, 3671, 3672, 3679, 3680,
  3690, 3700, 3710, 3730, 3731, 3732, 3740, 3750, 3751, 3752, 3790, 3920, 3921,
  3922, 3925, 3929, 3930, 3940, 3950, 3960, 3970, 3971, 3972, 3973, 3980, 3981,
  3985, 3987, 3988, 3989, 3990, 3991, 3992, 3993, 3994, 3995, 3996, 3997, 3998,
  3999, 8230, 8231, 8236, 8491, 8710,
];

const operating_income = [
  ...net_turnover,
  ...rental_income,
  ...capitalized_work_on_own_account,
  ...other_operating_income,
];

const openBalance = sieObject["IB"];
// Opening balance of a balance sheet account.

// Closing balance of a balance sheet account.
const closingBalance = sieObject["UB"];

// Balance item for a profit and loss account.
const lossAccount = sieObject["RES"];

// SRU
// RSV code for standardized accounts extracts
const standardizedAccounts = sieObject["SRU"];

// KONTO
// Account information
const accountInformation = sieObject["KONTO"];

accountInformation.forEach((account: any) => {
  //   if (parseInt(account["kontonr"]) === 3001) {
  //     console.log(account);
  //   }

  const data = net_turnover.includes(parseInt(account["kontonr"]));
  if (data) {
    console.log(account);
  }
});

// console.log(accountInformation);

// Balance Sheet = Accounts 1000 - 2999
// Income Statement = 3000-8999
// Balance Sheet has opening balances, Income statement does not have opening balances
