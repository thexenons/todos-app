import { render } from "@testing-library/react";

import BaseTestComponent from "../../../tests/BaseTestComponent";
import Container from ".";

describe("Container", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<Container />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});
