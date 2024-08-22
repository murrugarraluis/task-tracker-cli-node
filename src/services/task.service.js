import { generateId, getTasksJSON, writeInTasksJSON } from "../utils/index.js";

class TaskService {
	getOne(id) {
		const tasks = getTasksJSON()
		const task = tasks.find((task) => task.id === id)
		if (!task) {
			console.log(`Task not found (ID: ${id})`);
		}
		return task
	}
	add(description) {
		const tasks = getTasksJSON()
		const newTask = {
			id: generateId(tasks),
			description,
			status: 'todo',
			createdAt: new Date(),
			updatedAt: new Date(),
		}
		writeInTasksJSON([...tasks, newTask])
		console.log(`Task added successfully (ID: ${newTask.id})`);
	}
	update(id, description) {
		const tasks = getTasksJSON()
		const task = this.getOne(id)
		if (task) {
			const taskUpdate = { ...task, description, updatedAt: new Date() }
			const index = tasks.findIndex((task) => task.id === id)
			tasks[index] = taskUpdate
			writeInTasksJSON(tasks)
			console.log(`Task updated successfully (ID: ${id})`);
		}
	}
	delete(id) {
		const tasks = getTasksJSON()
		const task = this.getOne(id)
		if (task) {
			const index = tasks.findIndex((task) => task.id === id)
			tasks.splice(index, 1)
			writeInTasksJSON(tasks)
			console.log(`Task deleted successfully (ID: ${id})`);
		}
	}
}
export default TaskService;