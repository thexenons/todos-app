import { Children, FC } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";

import dataProvider from "../../api/dataProvider";
import { TodosList } from "../../api/entities";
import Link from "../../components/atoms/Link";
import Container from "../../components/layout/Container";
import ListTodosLists from "../../components/organisms/ListTodosLists";
import { getPagePath } from "../../router/utils";
import pages, { PageKey } from "..";
import type { TestParams } from "./types";

const Test: FC = () => {
	const navigate = useNavigate();
	const { todosLists } = useLoaderData() as TestParams;

	const onTodosListClick = (todos_list: TodosList) => {
		navigate(`${getPagePath(PageKey.test)}/${todos_list.id}`);
	};

	return (
		<Container>
			<h1>Todos Lists</h1>
			<ul>
				{Children.toArray(
					Object.keys(pages).map((pageKey) => (
						<>
							<li>
								<Link pageKey={pageKey as PageKey}>{pageKey}</Link>
							</li>
							{Children.toArray(
								Object.keys(pages[pageKey as PageKey]?.children || {}).map(
									(childPageKey) => (
										<li style={{ marginLeft: 16 }}>
											<Link pageKey={childPageKey as PageKey}>
												{childPageKey}
											</Link>
										</li>
									)
								)
							)}
						</>
					))
				)}
			</ul>
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
