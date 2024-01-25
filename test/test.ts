import fs from "fs";
import sieParser from "../src/main";

const sie = new sieParser(__dirname + "/5593912719_2023.se");

// * DONE working fine
const sieObject = sie.sieObject;

// * DONE working fine
const verifications = sie.getVerifications();

const account = sie.getAccount();

// const SerieDateRange = sie.getSeries();

// console.log(sieObject);
// write to file
fs.writeFileSync("./sie_2023.json", JSON.stringify(sieObject, null, 2));
