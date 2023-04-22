import { render } from "@testing-library/react";

import BaseTestComponent from "../../../tests/BaseTestComponent";
import Modal from ".";

describe("Modal", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<Modal isOpen onClose={() => null} />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});

describe("ModalCancelButton", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<Modal.CancelButton />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});

describe("ModalAcceptButton", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<Modal.AcceptButton />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});

describe("ModalCloseButton", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<Modal.CloseButton />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});
