import fs from 'fs';
import path from 'path';

const filePath = path.resolve('data', 'tasks.json');

export const generateId = (tasks) => {
	return tasks.length > 0 ? ((tasks.at(-1))['id'] + 1) : 1
}
export const getTasksJSON = () => {
	const defaultData = [];

	if (fs.existsSync(filePath)) {
		const jsonData = fs.readFileSync(filePath, 'utf-8');
		return JSON.parse(jsonData);
	}

	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2), 'utf-8');
	return defaultData;
};
export const writeInTasksJSON = (data) => {
	fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}