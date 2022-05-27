"use strict";
const path = require("path");
const fs = require("fs");
const pathFile = path.join(__dirname, "../pools/output.json");

const poolNames = [
"servant",
"scholar",
"wizard",
"thieve",
"knight",
"hunter",
"juggler",
"scout",
"warrior",
"assasin",
"sorcerer",
"miner",
"black-smith",
"king",
"captain",
"druid",
"healer",
"soldier",
"archer",
"wanderer",
"traveler",
];

const outPutNames = poolNames.reduce((result, name) => {
  result.push({
    name: name,
  });
  return result;
}, []);

fs.writeFileSync(pathFile, JSON.stringify(outPutNames), { enconding: "utf-8" }, () => {
  console.log("The file was saved!");
});

// console.log(JSON.stringify(outPutNames));
