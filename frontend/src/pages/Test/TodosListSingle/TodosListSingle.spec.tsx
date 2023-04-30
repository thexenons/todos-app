import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useLoaderData } from "react-router-dom";
import { vi } from "vitest";

import BaseTestComponent from "../../../tests/BaseTestComponent";
import { TEST_TODOS_LIST } from "../../../tests/constants";
import TodosListSingle, { getInitialData } from ".";

vi.mock("react-router-dom");

describe("TodosListSingle", () => {
	afterEach(vi.restoreAllMocks);

	it("Render", () => {
		vi.mocked(useLoaderData).mockReturnValue({ todos_list: TEST_TODOS_LIST });

		const { container } = render(
			<BaseTestComponent>
				<TodosListSingle />
			</BaseTestComponent>
		);

		expect(container).toMatchSnapshot();
	});

	it("Render without todos_lists", () => {
		vi.mocked(useLoaderData).mockReturnValue({});

		const { container } = render(
			<BaseTestComponent>
				<TodosListSingle />
			</BaseTestComponent>
		);

		expect(container).toMatchSnapshot();
	});

	it("onBack", async () => {
		vi.mocked(useLoaderData).mockReturnValue({ todos_list: TEST_TODOS_LIST });
		render(
			<BaseTestComponent>
				<TodosListSingle />
			</BaseTestComponent>
		);

		const clickableBack = screen.getByRole("button");
		expect(clickableBack).toBeInTheDocument();

		await userEvent.click(clickableBack);
	});
});

describe("getInitialData", () => {
	afterEach(fetchMock.mockClear);

	it("with id", async () => {
		fetchMock.mockOnce(JSON.stringify(TEST_TODOS_LIST));

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const data = await getInitialData({ params: { id: "1" } });

		expect(data).toEqual({
			todos_list: TEST_TODOS_LIST,
		});
	});

	it("without id", async () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const data = await getInitialData({ params: {} });

		expect(data).toEqual({});
	});
});
