import { render } from "@testing-library/react";

import BaseTestComponent from "../../../tests/BaseTestComponent";
import ListTodos from ".";

describe("ListTodos", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<ListTodos todos={[]} />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});
