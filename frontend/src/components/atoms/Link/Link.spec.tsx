import { render } from "@testing-library/react";

import { PageKey } from "../../../constants";
import BaseTestComponent from "../../../tests/BaseTestComponent";
import Link from ".";

describe("Link", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<Link pageKey={PageKey.home} />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});
