import { render } from "@testing-library/react";

import BaseTestComponent from "../../../tests/BaseTestComponent";
import { PageKey } from "../../../types";
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
