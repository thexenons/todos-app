import { render } from "@testing-library/react";

import BaseTestComponent from "../../../../../tests/BaseTestComponent";
import UserInfo from ".";

describe("UserInfo", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<UserInfo />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});
