import { FC } from "react";

import { ListTodosProps } from "./types";

const ListTodos: FC<ListTodosProps> = ({ todos, onClickTodo, onBack }) => (
	<div>
		<h4>Todos {onBack && <button onClick={onBack}>Back</button>}</h4>
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
