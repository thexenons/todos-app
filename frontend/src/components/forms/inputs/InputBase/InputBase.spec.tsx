import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import BaseTestComponent from "../../../../tests/BaseTestComponent";
import InputBase from ".";

const onChange = vi.fn();

const setup = () =>
	render(
		<BaseTestComponent>
			<InputBase
				label="test-label"
				placeholder="test-placeholder"
				value="test-value"
				type="text"
				id="test-id"
				name="test-name"
				onChange={onChange}
			/>
		</BaseTestComponent>
	);

describe("InputBase", () => {
	it("Render", () => {
		const { container } = setup();

		expect(container).toMatchSnapshot();
	});

	it("should render label", () => {
		setup();

		expect(screen.getByText("test-label")).toBeInTheDocument();
	});

	it("should call onChange", async () => {
		setup();

		expect(onChange).toBeCalledTimes(0);
		await userEvent.type(
			screen.getByPlaceholderText("test-placeholder"),
			"test"
		);
		expect(onChange).toBeCalledTimes(4);
	});
});
