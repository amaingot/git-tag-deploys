#!/usr/bin/env node
import chalk from "chalk";
import figlet from "figlet";
import program from "commander";
import moment from "moment";

import description from "./description";

// clear();
console.log(chalk.blue(figlet.textSync("Your Tag Is:", { horizontalLayout: "full" })));

program
  .version(require("../package.json").version)
  .name(require("../package.json").name)
  .description(description)
  .option("-e, --environment <env>", "Specify the environment [prod|staging|dev]")
  .option("-f, --format <format>", "Format the tag string, use Moment's docs for this")
  .parse(process.argv);

let timestampFormat = "YYYYMMDD-HHMM";
let developerEnvironment = "dev";

if (program.environment) {
  if (typeof program.environment === "string") {
    developerEnvironment = program.environment;
  } else {
    console.log(chalk.red("You did not specify a valid environment flag"));
    throw 1;
  }
}

if (program.format) {
  timestampFormat = program.format;

}

const timestamp = moment().format(timestampFormat);

const tagString = `${developerEnvironment}/${timestamp}`;

console.log("");
console.log(chalk.green(tagString));
console.log("");
