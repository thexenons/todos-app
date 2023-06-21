import { render } from "@testing-library/react";

import InputTestComponent from "../../../../tests/InputTestComponent";
import SelectInput from ".";

const choices = [
	{
		value: 1,
		label: "Opción 1",
	},
	{
		value: 2,
		label: "Opción 2",
	},
];

describe("SelectInput", () => {
	it("Render", () => {
		const { container } = render(
			<InputTestComponent>
				<SelectInput name="test" choices={choices} />
			</InputTestComponent>
		);
		expect(container).toMatchSnapshot();
	});

	it("should set ref", () => {
		let inputElement: HTMLInputElement | undefined;
		const handleRef = (ref: HTMLInputElement) => {
			inputElement = ref;
		};
		render(
			<InputTestComponent>
				<SelectInput name="test" ref={handleRef} choices={choices} />
			</InputTestComponent>
		);
		expect(inputElement).not.toBeNull();
	});
});
