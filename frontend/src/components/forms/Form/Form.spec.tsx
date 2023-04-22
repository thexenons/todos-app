import { render } from "@testing-library/react";

import BaseTestComponent from "../../../tests/BaseTestComponent";
import Form from ".";

describe("Form", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<Form onSubmit={() => null} />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});
