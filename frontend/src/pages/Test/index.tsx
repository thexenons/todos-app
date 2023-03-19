import { Children, FC } from "react";
import { useLoaderData } from "react-router-dom";

import { ENDPOINT } from "../../api/endpoints";
import Link from "../../components/atoms/Link";
import Container from "../../components/layout/Container";
import useFetchGetList from "../../hooks/fetch/useFetchGetList";
import type { PageKey } from "..";
import pages from "..";
import type { TestParams } from "./types";

const Test: FC = () => {
	const { title = "" } = useLoaderData() as TestParams;
	const { data: todos_lists } = useFetchGetList<{
		id: number;
		name: string;
		archived: boolean;
		user: unknown;
		todos: unknown;
	}>(ENDPOINT.TODOS_LISTS);
	const { data: todos } = useFetchGetList<{
		id: number;
		name: string;
		completed: boolean;
		todosList: unknown;
	}>(ENDPOINT.TODOS);

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
			{todos_lists && (
				<ul>
					{todos_lists.data.map((todos_list) => (
						<li key={todos_list.id}>
							{todos_list.name} ({todos_list.id})
						</li>
					))}
				</ul>
			)}
			{todos && (
				<ul>
					{todos.data.map((todo) => (
						<li key={todo.id}>
							{todo.name} ({todo.id})
						</li>
					))}
				</ul>
			)}
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
