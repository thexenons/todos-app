import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import InputTestComponent from "./InputTestComponent";

describe("InputTestComponent", () => {
	it("Render", () => {
		const { container } = render(<InputTestComponent />);

		expect(container).toMatchSnapshot();
	});

	it("submit", async () => {
		render(
			<InputTestComponent>
				<button type="submit">Submit</button>
			</InputTestComponent>
		);

		const button = screen.getByRole("button");
		expect(button).toBeInTheDocument();

		await userEvent.click(button);
	});
});
