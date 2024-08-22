import { generateUuid, getTasksJSON, writeInTasksJSON } from "../utils/index.js";

class TaskService {
	add(name) {
		const tasks = getTasksJSON()
		const newTask = {
			id: generateUuid(),
			description: name,
			status: 'todo',
			createdAt: new Date(),
			updatedAt: new Date(),
		}
		writeInTasksJSON([...tasks, newTask])
		console.log(`Task added successfully (ID: ${newTask.id})`);
	}
}
export default TaskService;