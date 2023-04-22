import { render } from "@testing-library/react";

import InputTestComponent from "../../../../tests/InputTestComponent";
import Input from ".";

describe("Input", () => {
	it("Render", () => {
		const { container } = render(
			<InputTestComponent>
				<Input name="test" />
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
				<Input name="test" ref={handleRef} />
			</InputTestComponent>
		);
		expect(inputElement).not.toBeNull();
	});
});
