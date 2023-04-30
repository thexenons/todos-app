import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import BaseTestComponent from "../../tests/BaseTestComponent";
import { TEST_TODOS_LIST } from "../../tests/constants";
import Test from ".";

vi.mock("react-router-dom", async () => {
	const reactRouterDom = await vi.importActual<Record<string, unknown>>(
		"react-router-dom"
	);

	return {
		...reactRouterDom,
		useLoaderData: () => ({
			todosLists: [TEST_TODOS_LIST],
		}),
	};
});

describe("Test", () => {
	afterAll(() => {
		vi.restoreAllMocks();
		fetchMock.mockClear();
	});

	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<Test />
			</BaseTestComponent>
		);

		expect(container).toMatchSnapshot();
	});

	it("onTodosListClick", async () => {
		render(
			<BaseTestComponent>
				<Test />
			</BaseTestComponent>
		);

		const clickableLists = screen.getAllByRole("presentation");

		expect(clickableLists).toHaveLength(1);

		for (const clickableList of clickableLists) {
			await userEvent.click(clickableList);
		}
	});
});
