import { render } from "@testing-library/react";

import BaseTestComponent from "../../../../../tests/BaseTestComponent";
import { TEST_USER } from "../../../../../tests/constants";
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

	it("Render with user", () => {
		localStorage.setItem("user", JSON.stringify(TEST_USER));

		const { container } = render(
			<BaseTestComponent>
				<UserInfo />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});
