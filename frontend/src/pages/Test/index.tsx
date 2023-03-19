import { Children, FC } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

import { ENDPOINT } from "../../api/endpoints";
import { TodosList } from "../../api/entities";
import Link from "../../components/atoms/Link";
import Container from "../../components/layout/Container";
import useFetchGetList from "../../hooks/fetch/useFetchGetList";
import router from "../../router";
import { getPagePath } from "../../router/utils";
import pages, { PageKey } from "..";
import type { TestParams } from "./types";

const Test: FC = () => {
	const { title = "" } = useLoaderData() as TestParams;

	const { data: todos_lists } = useFetchGetList<TodosList>(
		ENDPOINT.TODOS_LISTS
	);

	const onTodosListClick = (todos_list: TodosList) => {
		router.navigate(`${getPagePath(PageKey.test)}/${todos_list.id}`);
	};

	return (
		<Container>
			<h1>{title}</h1>
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
				<div>
					{todos_lists && (
						<ul>
							{todos_lists.data.map((todos_list) => (
								<li
									key={todos_list.id}
									role="presentation"
									onClick={() => onTodosListClick(todos_list)}
								>
									{todos_list.name} ({todos_list.id})
								</li>
							))}
						</ul>
					)}
				</div>
				<div>
					<Outlet />
				</div>
			</div>
		</Container>
	);
};

export async function getInitialData(): Promise<TestParams> {
	return {
		title: "Test",
	};
}

export * from "./types";
export default Test;
