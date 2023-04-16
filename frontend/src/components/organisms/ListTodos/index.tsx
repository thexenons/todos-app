import { FC } from "react";

import Button from "../../atoms/Button";
import { ListTodosProps } from "./types";

const ListTodos: FC<ListTodosProps> = ({ todos, onClickTodo, onBack }) => (
	<div>
		<h4>Todos {onBack && <Button onClick={onBack}>Back</Button>}</h4>
		<ul>
			{todos.map((todo) => (
				<li
					key={todo.id}
					role="presentation"
					onClick={() => onClickTodo?.(todo)}
				>
					<h5>{todo.name}</h5>
				</li>
			))}
		</ul>
	</div>
);

export default ListTodos;
