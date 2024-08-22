import { generateId, getTasksJSON, writeInTasksJSON } from "../utils/index.js";

class TaskService {
	constructor() {
		this.tasks = getTasksJSON();
	}

	getAll(status = null) {
		return status ? this.tasks.filter(task => task.status === status) : this.tasks;
	}

	getOne(id) {
		const task = this.#findTaskById(id);
		if (!task) {
			console.log(`Task not found (ID: ${id})`);
		}
		return task;
	}

	add(description) {
		const newTask = this.#createTask(description);
		this.tasks.push(newTask);
		this.#saveTasks();
		console.log(`Task added successfully (ID: ${newTask.id})`);
	}

	update(id, updates) {
		const index = this.#findTaskIndexById(id);
		if (index !== -1) {
			this.tasks[index] = {
				...this.tasks[index],
				...updates,
				updatedAt: new Date()
			};
			this.#saveTasks();
			console.log(`Task updated successfully (ID: ${id})`);
		} else {
			console.log(`Task not found (ID: ${id})`);
		}
	}

	delete(id) {
		const index = this.#findTaskIndexById(id);
		if (index !== -1) {
			this.tasks.splice(index, 1);
			this.#saveTasks();
			console.log(`Task deleted successfully (ID: ${id})`);
		} else {
			console.log(`Task not found (ID: ${id})`);
		}
	}

	markInProgress(id) {
		this.update(id, { status: 'in-progress' });
	}

	markDone(id) {
		this.update(id, { status: 'done' });
	}

	#findTaskById(id) {
		return this.tasks.find(task => task.id === id);
	}

	#findTaskIndexById(id) {
		return this.tasks.findIndex(task => task.id === id);
	}

	#createTask(description) {
		return {
			id: generateId(this.tasks),
			description,
			status: 'todo',
			createdAt: new Date(),
			updatedAt: new Date(),
		};
	}

	#saveTasks() {
		writeInTasksJSON(this.tasks);
	}
}
export default TaskService;