import { Todo } from "../../../types";

export interface ListTodosProps {
	todos: Todo[];
	onClickTodo?: (todo: Todo) => void;
	onBack?: () => void;
}
