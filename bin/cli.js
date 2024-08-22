#!/usr/bin/env node

import { ProgramBuilder } from "../src/build.js";
import {
	addTaskCommand,
	updateTaskCommand,
	deleteTaskCommand,
	markProgressTaskCommand,
	markDoneTaskCommand,
	lisTasksCommand,
} from "../src/command/index.js";

const program = new ProgramBuilder();

program
	.addCommand(addTaskCommand)
	.addCommand(updateTaskCommand)
	.addCommand(deleteTaskCommand)
	.addCommand(markDoneTaskCommand)
	.addCommand(markProgressTaskCommand)
	.addCommand(lisTasksCommand)

program.build().parse(process.argv)
