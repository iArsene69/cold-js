#! /usr/bin/env node

import { Command } from "commander";
import figlet from "figlet";
import commandInput from "./commands/commandClasses";

const command = new commandInput();
const program = new Command();
console.log(figlet.textSync("Cold.js"));

program
  .name("cold")
  .version("1.0.0")
  .description("Cold CLI, make your node.js backend server in instant!");

program
  .command("init")
  .description("Initialize new project")
  .argument("<project name>", "specify your project name")
  .action((name) => {
    command.InitProject(name);
  });

program
  .command("controller")
  .description("Create new controller")
  .argument("<controller name>", "specify your controller name")
  .action((name) => {
    command.createController(name);
  });

program
  .command("router")
  .description("Create new router")
  .argument("<router name>", "specify your router name")
  .action((name) => {
    command.createRouter(name);
  });

program
  .command("validator")
  .description("Create new validator")
  .argument("<validator name>", "specify your validator name")
  .action((name) => {
    command.createValidator(name);
  });

program
  .command("middleware")
  .description("Create new middleware")
  .argument("<middleware name>", "specify your middleware name")
  .action((name) => {
    command.createMiddleware(name);
  });

program.parse();
