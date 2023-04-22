import { render } from "@testing-library/react";

import BaseTestComponent from "../../../tests/BaseTestComponent";
import UpdateButton from ".";

describe("UpdateButton", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<UpdateButton />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});
