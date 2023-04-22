import { render } from "@testing-library/react";

import BaseTestComponent from "../../../tests/BaseTestComponent";
import Panel from ".";

describe("Panel", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<Panel />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});
