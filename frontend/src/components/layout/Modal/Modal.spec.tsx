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

	it("Render with fullWidth", () => {
		const { container } = render(
			<BaseTestComponent>
				<Modal isOpen onClose={() => null} fullWidth />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});

describe("ModalHeader", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<Modal.Header />
			</BaseTestComponent>
		);
		expect(container).toMatchSnapshot();
	});
});

describe("ModalFooter", () => {
	it("Render", () => {
		const { container } = render(
			<BaseTestComponent>
				<Modal.Footer />
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
