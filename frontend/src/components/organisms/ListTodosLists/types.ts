import { TodosList } from "../../../types";

export interface ListTodosListsProps {
	todosLists: TodosList[];
	onClickTodosList?: (todosList: TodosList) => void;
	onBack?: () => void;
}
