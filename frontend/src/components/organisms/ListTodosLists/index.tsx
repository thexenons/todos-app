import { FC } from "react";

import Button from "../../atoms/Button";
import { ListTodosListsProps } from "./types";

const ListTodosLists: FC<ListTodosListsProps> = ({
	todosLists,
	onClickTodosList,
	onBack,
}) => (
	<div>
		<h2>Todos List {onBack && <Button onClick={onBack}>Back</Button>}</h2>
		<ul>
			{todosLists.map((todosList) => (
				<li
					key={todosList.id}
					role="presentation"
					onClick={() => onClickTodosList?.(todosList)}
				>
					<h3>{todosList.name}</h3>
				</li>
			))}
		</ul>
	</div>
);

export default ListTodosLists;
