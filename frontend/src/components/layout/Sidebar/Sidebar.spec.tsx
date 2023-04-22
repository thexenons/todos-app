import { render } from "@testing-library/react";

import BaseTestComponent from "../../../tests/BaseTestComponent";
import Sidebar from ".";

describe("Sidebar", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<Sidebar />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});
