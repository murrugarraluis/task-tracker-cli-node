import TaskService from "../services/task.service.js";
const taskService = new TaskService();
export const addTaskCommand = (program) => {
	program
		.command('add <task>')
		.description('Add a new task')
		.action((task) => {
			taskService.add(task)
		});
};
export const updateTaskCommand = (program) => {
	program
		.command('update <id> <task>')
		.description('Update a task')
		.action((id, task) => {
			taskService.update(+id,task)
		});
};
export const deleteTaskCommand = (program) => {
	program
		.command('delete <id>')
		.description('Delete a task')
		.action((id) => {
			taskService.delete(+id)
		});
}
export const markProgressTaskCommand = (program) => {
	program
		.command('mark-in-progress <id>')
		.description('Mark as progress a task')
		.action((task) => {
			console.log(`Task marked as progress successfully (ID: ${task})`);
		});
};
export const markDoneTaskCommand = (program) => {
	program
		.command('mark-done <id>')
		.description('Mark as done a task')
		.action((task) => {
			console.log(`Task marked as done successfully (ID: ${task})`);
		});
};
export const lisTasksCommand = (program) => {
	program
		.command('list [status]')
		.description('List tasks')
		.action((status) => {
			console.log(`List tasks successfully (status: ${status})`);
		});
};