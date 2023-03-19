import { FC } from "react";
import type { LoaderFunctionArgs } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

import dataProvider from "../../../api/dataProvider";
import { TodosList } from "../../../api/entities";

const Test2: FC = () => {
	const { todos_list } = useLoaderData() as { todos_list?: TodosList };

	if (!todos_list) return null;

	return (
		<ul>
			{todos_list.todos.map((todo) => (
				<li key={todo.id}>{todo.name}</li>
			))}
		</ul>
	);
};

export async function getInitialData({ params }: LoaderFunctionArgs): Promise<{
	todos_list?: TodosList;
}> {
	const { id } = params;

	if (!id) return {};

	const todos_list = await dataProvider.endpoints.todos_lists.get<TodosList>?.(
		parseInt(id)
	);

	return {
		todos_list,
	};
}

export default Test2;
