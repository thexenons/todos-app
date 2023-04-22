import { render } from "@testing-library/react";

import BaseTestComponent from "../../../tests/BaseTestComponent";
import Button from ".";

describe("Button", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<Button />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});
