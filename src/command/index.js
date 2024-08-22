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
			taskService.update(+id, { description: task })
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
		.action((id) => {
			taskService.markInProgress(+id)
		});
};
export const markDoneTaskCommand = (program) => {
	program
		.command('mark-done <id>')
		.description('Mark as done a task')
		.action((id) => {
			taskService.markDone(+id)
		});
};
export const lisTasksCommand = (program) => {
	program
		.command('list [status]')
		.description('List tasks')
		.action((status) => {
			if (status) {
				const validStatuses = ['todo', 'in-progress', 'done'];
				if (!validStatuses.includes(status)) {
					console.error(`Invalid status: ${status}. Valid options are: ${validStatuses.join(', ')}.`);
					process.exit(1);
				}
			}
			const tasks = taskService.getAll(status)
			console.log(tasks);
		});
};