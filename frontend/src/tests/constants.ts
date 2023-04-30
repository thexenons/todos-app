import { TodosList, User } from "../types";

export const TEST_USER: User = {
	id: 1,
	email: "test email",
	password: "test password",
	todosLists: [],
	username: "test username",
};

export const TEST_TODOS_LIST: TodosList = {
	id: 1,
	archived: false,
	name: "test todos list",
	todos: [],
	user: TEST_USER,
};
