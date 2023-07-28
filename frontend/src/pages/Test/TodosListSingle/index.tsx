import type { FC } from "react";
import type { LoaderFunctionArgs } from "react-router-dom";
import { useLoaderData, useNavigate } from "react-router-dom";

import dataProvider from "../../../api/dataProvider";
import ListTodos from "../../../components/organisms/ListTodos";
import { PageKey } from "../../../constants";
import { getPagePath } from "../../../router/utils";
import { TodosList } from "../../../types";

const TodosListSingle: FC = () => {
	const navigate = useNavigate();
	const { todos_list } = useLoaderData() as { todos_list?: TodosList };

	const onBack = () => {
		navigate(getPagePath(PageKey.test));
	};

	if (!todos_list) return null;

	return (
		<ListTodos
			todos={todos_list.todos}
			onClickTodo={console.log}
			onBack={onBack}
		/>
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

export default TodosListSingle;
