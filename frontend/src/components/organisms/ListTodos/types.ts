import { Todo } from "../../../api/entities";

export interface ListTodosProps {
	todos: Todo[];
	onClickTodo?: (todo: Todo) => void;
	onBack?: () => void;
}
