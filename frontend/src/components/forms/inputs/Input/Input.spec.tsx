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
});
