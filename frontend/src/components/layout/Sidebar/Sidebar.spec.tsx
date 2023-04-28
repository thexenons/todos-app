import { render, screen } from "@testing-library/react";
import { useElementSize } from "usehooks-ts";
import { vi } from "vitest";

import BaseTestComponent from "../../../tests/BaseTestComponent";
import Sidebar from ".";

vi.mock("usehooks-ts");
vi.mocked(useElementSize, {
	partial: true,
}).mockReturnValue([vi.fn(), { width: 100, height: 100 }]);

describe("Sidebar", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<Sidebar />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});

	it("Force isOpen true", () => {
		const { container } = render(
			<BaseTestComponent>
				<Sidebar isSidebarOpen={true} />
			</BaseTestComponent>
		);

		expect(container).toMatchSnapshot();
	});

	it("Force isOpen false", () => {
		const { container } = render(
			<BaseTestComponent>
				<Sidebar isSidebarOpen={false} />
			</BaseTestComponent>
		);

		expect(container).toMatchSnapshot();
	});

	it("must render children", async () => {
		render(
			<BaseTestComponent>
				<Sidebar>
					<div data-testid="SidebarChildren" />
				</Sidebar>
			</BaseTestComponent>
		);

		expect(screen.getByTestId("SidebarChildren")).toBeInTheDocument();
	});
});
