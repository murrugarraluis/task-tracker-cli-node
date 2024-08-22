#!/usr/bin/env node

import { Command } from "commander"
const program = new Command();

program
  .version("1.0.0")
  .description("My Node CLI")
  .option("-n, --name <type>", "Add your name")
  .action((options) => {
    console.log(`Hey, ${options.name}!`);
  });

program.parse(process.argv);
