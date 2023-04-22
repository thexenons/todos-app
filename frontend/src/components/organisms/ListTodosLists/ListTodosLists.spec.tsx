import { render } from "@testing-library/react";

import BaseTestComponent from "../../../tests/BaseTestComponent";
import ListTodosLists from ".";

describe("ListTodosLists", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<ListTodosLists todosLists={[]} />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});
