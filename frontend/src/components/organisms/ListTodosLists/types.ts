import { TodosList } from "../../../api/entities";

export interface ListTodosListsProps {
	todosLists: TodosList[];
	onClickTodosList?: (todosList: TodosList) => void;
	onBack?: () => void;
}
