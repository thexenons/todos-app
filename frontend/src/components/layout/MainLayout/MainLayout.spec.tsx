import { render } from "@testing-library/react";

import BaseTestComponent from "../../../tests/BaseTestComponent";
import MainLayout from ".";

describe("MainLayout", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<MainLayout />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});
