import { Command } from "commander"

class ProgramBuilder {
	constructor() {
		this.program = new Command()
		this.program
			.version("1.0.0")
			.description("My Task CLI")
	}
	addCommand(command) {
		command(this.program)
		return this
	}
	build() {
		return this.program
	}
}
export { ProgramBuilder };