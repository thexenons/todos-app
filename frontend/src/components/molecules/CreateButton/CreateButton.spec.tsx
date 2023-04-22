import { render } from "@testing-library/react";

import BaseTestComponent from "../../../tests/BaseTestComponent";
import CreateButton from ".";

describe("CreateButton", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<CreateButton />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});
