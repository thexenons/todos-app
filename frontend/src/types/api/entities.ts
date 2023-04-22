export interface User {
	id: number;
	username: string;
	email: string;
	password: string;
	todosLists: TodosList[];
}

export interface Todo {
	id: number;
	name: string;
	completed: boolean;
	todosList: TodosList;
}

export interface TodosList {
	id: number;
	name: string;
	archived: boolean;
	user: User;
	todos: Todo[];
}
