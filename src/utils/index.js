import { randomUUID } from 'crypto';
import fs from 'fs';
import path from 'path';

const filePath = path.resolve('data', 'tasks.json');

export const generateUuid = () => {
	return randomUUID();
};

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