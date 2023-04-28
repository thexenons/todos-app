import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

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

	it("onClick", async () => {
		const onClose = vi.fn();
		const onCancel = vi.fn();

		render(
			<BaseTestComponent>
				<Modal isOpen onClose={onClose} onCancel={onCancel}>
					<Modal.CancelButton />
				</Modal>
			</BaseTestComponent>
		);

		const button = screen.getByRole("button", { name: /Cancel/i });
		await userEvent.click(button);

		expect(onClose).toBeCalledTimes(1);
		expect(onCancel).toBeCalledTimes(1);
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

	it("onClick", async () => {
		const onClose = vi.fn();
		const onAccept = vi.fn();

		render(
			<BaseTestComponent>
				<Modal isOpen onClose={onClose} onAccept={onAccept}>
					<Modal.AcceptButton />
				</Modal>
			</BaseTestComponent>
		);

		const button = screen.getByRole("button", { name: /Accept/i });
		await userEvent.click(button);

		expect(onClose).toBeCalledTimes(1);
		expect(onAccept).toBeCalledTimes(1);
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
