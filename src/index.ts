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
  .option("-v, --verbose", "Output all the things")
  .parse(process.argv);

interface Config {
  timestampFormat: string;
  envs: string[];
}
const run = () => {
  let config: Config = {
    timestampFormat: "YYYYMMDD-HHMM",
    envs: []
  };

  try {
    const customConfig = require("../config.json");
    if (program.verbose) console.debug(`Found config file: ${customConfig}`);

    if (customConfig.timestampFormat && typeof customConfig.timestampFormat === "string") {
      config.timestampFormat = customConfig.timestampFormat;
      if (program.verbose) console.debug(`Config file datetime format string to: ${config.timestampFormat}`);
    }
    if (customConfig.envs && typeof customConfig.envs === "object") {
      config.envs = customConfig.envs;
      if (program.verbose) console.debug(`Config file list of envs to ${config.envs}`);
    }
  } catch (e) {
    if (program.verbose) console.debug(`No config found: ${e}`);
  }

  let timestampFormat = "YYYYMMDD-HHMM";
  let developerEnvironment = "dev";

  if (program.environment) {
    if (typeof program.environment === "string") {
      developerEnvironment = program.environment;
      if (program.verbose) console.debug(`User command line tag for env: ${developerEnvironment}`);
    } else {
      console.error(chalk.red("You did not specify a valid environment flag"));
      return -1;
    }
  }

  if (config.envs.length && !config.envs.includes(developerEnvironment)) {
    console.error(chalk.red("You specified an environment that isn't on the list!"));
    return -1;
  }

  if (program.format) {
    timestampFormat = program.format;
    if (program.verbose) console.debug(`User command line timestamp format: ${timestampFormat}`);
  }

  const time = moment();

  if (program.verbose) console.debug(`Current time is: ${time.format()}`);

  const timestamp = time.format(timestampFormat);

  const tagString = `${developerEnvironment}/${timestamp}`;

  console.log("");
  console.log(chalk.green(tagString));
  console.log("");
};

run();