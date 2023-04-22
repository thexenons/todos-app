import { render } from "@testing-library/react";

import BaseTestComponent from "../../../tests/BaseTestComponent";
import AcceptButton from ".";

describe("AcceptButton", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<AcceptButton />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});
