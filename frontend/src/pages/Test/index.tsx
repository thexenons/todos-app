import type { FC } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";

import dataProvider from "../../api/dataProvider";
import Container from "../../components/layout/Container";
import ListTodosLists from "../../components/organisms/ListTodosLists";
import { PageKey } from "../../constants";
import { getPagePath } from "../../router/utils";
import { TodosList } from "../../types";
import type { TestParams } from "./types";

const Test: FC = () => {
	const navigate = useNavigate();
	const { todosLists } = useLoaderData() as TestParams;

	const onTodosListClick = (todos_list: TodosList) => {
		navigate(`${getPagePath(PageKey.test)}/${todos_list.id}`);
	};

	return (
		<Container>
			<h1>Test</h1>
			<div>
				{todosLists && (
					<ListTodosLists
						todosLists={todosLists}
						onClickTodosList={onTodosListClick}
					/>
				)}
				<Outlet />
			</div>
		</Container>
	);
};

export async function getInitialData(): Promise<TestParams> {
	const todos_list = await dataProvider.endpoints.todos_lists
		.getList<TodosList>?.();

	return {
		todosLists: todos_list?.data,
	};
}

export * from "./types";
export default Test;
