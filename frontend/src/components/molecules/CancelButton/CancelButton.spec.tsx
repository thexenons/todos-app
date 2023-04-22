import { render } from "@testing-library/react";

import BaseTestComponent from "../../../tests/BaseTestComponent";
import CancelButton from ".";

describe("CancelButton", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<CancelButton />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});
