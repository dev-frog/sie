// import { readFileSync } from "fs";
import axios from "axios";
import { TypeSIE } from "./typings/sie";

const mapUTF8 =
  "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ";

function string(buffer: Buffer): string {
  return Array.from(buffer)
    .map((b) => (b < 128 ? String.fromCharCode(b) : mapUTF8.substr(b - 128, 1)))
    .join("");
}

function sieLines(sie: string): string[] {
  return sie.split("\n");
}

function sieLineParser(str: string): string[] {
  const result = [];
  let current = "";
  let inQuotes = false;
  let inBrackets = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (str[i] === " " && !inQuotes && !inBrackets) {
      result.push(current);
      current = "";
    } else {
      current += str[i];
    }
  }
  result.push(current);
  return result;
}

function parse(sieLines: string[]): TypeSIE {
  const sie: TypeSIE = { VER: {} };
  let inBrackets = false;
  let currentBracketName = "";
  for (let i = 0; i < sieLines.length; i++) {
    const e = sieLines[i];
    const values = sieLineParser(e.trim());
    const indexProp = values[0].replace("#", "");
    if (e[0] === "{") {
      inBrackets = true;
      continue;
    }
    if (e[0] === "}") {
      inBrackets = false;
      continue;
    }
    if (indexProp === "VER") {
      const objectName = values[1] + values[2];
      currentBracketName = objectName;
      sie.VER[objectName] = {
        serie: values[1],
        vernr: values[2],
        verdatum: values[3],
        vertext: values[4],
        regdatum: values[5],
        sign: values[6],
        TRANS: [],
        RTRANS: [],
        BTRANS: [],
      };
      continue;
    }
    if (inBrackets && indexProp === "TRANS") {
      sie.VER[currentBracketName].TRANS.push({
        kontonr: values[1],
        object: values[2],
        belop: values[3],
        transdat: values[4],
        kvantitet: values[5],
        sign: values[6],
      });
      continue;
    }
    if (inBrackets && indexProp === "RTRANS") {
      sie.VER[currentBracketName].RTRANS.push({
        kontonr: values[1],
        object: values[2],
        belop: values[3],
        transdat: values[4],
        kvantitet: values[5],
        sign: values[6],
      });
      continue;
    }
    switch (indexProp) {
      case "ADRESS":
        sie.ADRESS = {
          kontakt: values[1],
          postadr: values[2],
          tel: values[3],
          utdelningsadr: values[4],
        };
        break;
      case "BKOD":
        sie.BKOD = values[1];
        break;
      case "DIM":
        if (!sie.DIM) sie.DIM = [];
        sie.DIM?.push({
          dimensionsnr: values[1],
          namn: values[2],
        });
        break;
      case "ENHET":
        sie.ENHET = {
          kontonr: values[1],
          enhet: values[2],
        };
        break;
      case "FLAGGA":
        sie.FLAGGA = values[1];
        break;
      case "FNAMN":
        sie.FNAM = values[1];
        break;
      case "FNR":
        sie.FNR = values[1];
        break;
      case "FORMAT":
        sie.FORMAT = values[1];
        break;
      case "FTYP":
        sie.FTYP = values[1];
        break;
      case "GEN":
        sie.GEN = {
          datum: values[1],
          sign: values[2],
        };
        break;
      case "IB":
        if (!sie.IB) sie.IB = [];
        sie.IB?.push({
          årsnr: values[1],
          konto: values[2],
          saldo: values[3],
          kvantitet: values[4],
        });
        break;
      case "KONTO":
        if (!sie.KONTO) sie.KONTO = [];
        sie.KONTO?.push({
          kontonr: values[1],
          kontonamn: values[2],
        });
        break;
      case "KPTYP":
        sie.KPTYP = values[1];
        break;
      case "KTYP":
        sie.KTYP = {
          kontonr: values[1],
          kontotyp: values[2],
        };
        break;
      case "OBJECT":
        sie.OBJECT?.push({
          dimensionsnr: values[1],
          objektnr: values[2],
          objektnamn: values[3],
        });
        break;
      case "OIB":
        {
          // TODO: Test this function with real SIE files
          const [dimensionsnr, objektnr] = values[3]
            .replace('"', " ")
            .trim()
            .split(" ");

          sie.OIB = {
            årsnr: values[1],
            konto: values[2],
            objectspecifikation: { dimensionsnr, objektnr },
            saldo: values[4],
            kvantitet: values[5],
          };
        }
        break;
      case "OMFATTN":
        sie.OMFATTN = values[1];
        break;
      case "ORGNR":
        sie.ORGNR = {
          orgnr: values[1],
          förvnr: values[2],
          verknr: values[3],
        };
        break;
      case "OUB":
        {
          // TODO: Test this function with real SIE files
          const [dimensionsnr, objektnr] = values[3]
            .replace('"', " ")
            .trim()
            .split(" ");

          sie.OUB = {
            årsnr: values[1],
            konto: values[2],
            objectspecifikation: { dimensionsnr, objektnr },
            saldo: values[4],
            kvantitet: values[5],
          };
        }
        break;
      case "PBUDGET":
        {
          // TODO: Test this function wsith real SIE files
          if (!sie.PBUDGET) sie.PBUDGET = [];
          const [dimensionsnr, objektnr] = values[4]
            .replace('"', " ")
            .trim()
            .split(" ");

          sie.PBUDGET.push({
            årsnr: values[1],
            period: values[2],
            konto: values[3],
            objectspecifikation: { dimensionsnr, objektnr },
            saldo: values[5],
            kvantitet: values[6],
          });
        }
        break;
      case "PROGRAM":
        sie.PROGRAM = {
          programnamn: values[1],
          verision: values[2],
        };
        break;
      case "PROSA":
        sie.PROSA = values[1];
        break;
      case "PSALDO":
        {
          if (!sie.PSALDO) sie.PSALDO = [];
          const [dimensionsnr, objektnr] = values[4]
            .replace('"', " ")
            .trim()
            .split(" ");

          sie.PSALDO.push({
            årsnr: values[1],
            period: values[2],
            konto: values[3],
            objectspecifikation: {
              dimensionsnr: dimensionsnr !== "{}" ? dimensionsnr : undefined,
              objektnr,
            },
            saldo: values[5],
            kvantitet: values[6],
          });
        }
        break;
      case "RAR":
        if (!sie.RAR) sie.RAR = [];
        sie.RAR?.push({
          årsnr: values[1],
          start: values[2],
          slut: values[3],
        });
        break;
      case "RES":
        if (!sie.RES) sie.RES = [];
        sie.RES?.push({
          års: values[1],
          konto: values[2],
          saldo: values[3],
          kvantitet: values[4],
        });
        break;
      case "SIETYP":
        sie.SIETYP = values[1];
        break;
      case "SRU":
        if (!sie.SRU) sie.SRU = [];
        sie.SRU?.push({
          konto: values[1],
          "SRU-kod": values[2],
        });
        break;
      case "TAXAR":
        sie.TAXAR = values[1];
        break;
      case "UB":
        if (!sie.UB) sie.UB = [];
        sie.UB.push({
          årsnr: values[1],
          konto: values[2],
          saldo: values[3],
          kvantitet: values[4],
        });
        break;
      case "UNDERDIM":
        if (!sie.UNDERDIM) sie.UNDERDIM = [];
        sie.UNDERDIM.push({
          dimensionsnr: values[1],
          namn: values[2],
          superdimension: values[3],
        });
        break;
      case "VALUTA":
        sie.VALUTA = values[1];
        break;
      default:
        break;
    }
  }
  return sie;
}

function getVerifications(sieObject: TypeSIE): string[] {
  const elements = sieObject.VER;
  return Object.keys(elements);
}

// function sieParser(path: string): TypeSIE {
//   const buffer = readFileSync(`${path}`);

//   const parsed = string(buffer);
//   const sie = sieLines(buffer.toString());
//   return parse(sie);
// }

async function sieParser(source: string): Promise<TypeSIE> {
  let buffer: Buffer;

  // Read from URL using Axios
  const response = await axios.get(source, { responseType: "arraybuffer" });
  buffer = Buffer.from(response.data, "binary");

  const parsed = string(buffer);
  const sie = sieLines(buffer.toString());
  return parse(sie);
}

export { getVerifications, sieParser };
