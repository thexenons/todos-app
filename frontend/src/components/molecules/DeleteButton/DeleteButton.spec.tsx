import { render } from "@testing-library/react";

import BaseTestComponent from "../../../tests/BaseTestComponent";
import DeleteButton from ".";

describe("DeleteButton", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<DeleteButton />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});
