import type { FC } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";

import dataProvider from "../../api/dataProvider";
import type { TodosList } from "../../api/entities";
import Container from "../../components/layout/Container";
import ListTodosLists from "../../components/organisms/ListTodosLists";
import { getPagePath } from "../../router/utils";
import { PageKey } from "..";
import type { HomeParams } from "./types";

const Home: FC = () => {
	const navigate = useNavigate();
	const { todosLists } = useLoaderData() as HomeParams;

	const onTodosListClick = (todos_list: TodosList) => {
		navigate(`${getPagePath(PageKey.home)}${todos_list.id}`);
	};

	return (
		<Container>
			<h1>Home</h1>
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

export async function getInitialData(): Promise<HomeParams> {
	const todos_list = await dataProvider.endpoints.todos_lists
		.getList<TodosList>?.();

	return {
		todosLists: todos_list?.data,
	};
}

export * from "./types";
export default Home;
