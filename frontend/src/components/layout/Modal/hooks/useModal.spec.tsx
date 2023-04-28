import { renderHook, screen, waitFor } from "@testing-library/react";

import useModal from "./useModal";

describe("useModal", () => {
	describe("isOpen", () => {
		it("true", () => {
			const { result } = renderHook(useModal, {
				initialProps: { isOpen: true },
			});

			expect(result.current.wrapperElement).toBeDefined();
		});

		it("false", () => {
			const { result } = renderHook(useModal, {
				initialProps: { isOpen: false },
			});

			expect(result.current.wrapperElement).toBeDefined();
		});
	});

	describe("wrapperId", () => {
		it("default", async () => {
			renderHook(useModal, { initialProps: { isOpen: true } });

			await waitFor(() =>
				expect(screen.getByTestId("react-portal-wrapper")).toBeInTheDocument()
			);
		});

		it("custom", async () => {
			renderHook(useModal, {
				initialProps: { isOpen: true, wrapperId: "test-wrapper-id" },
			});

			await waitFor(() =>
				expect(screen.getByTestId("test-wrapper-id")).toBeInTheDocument()
			);
		});
	});

	it.only("open and close", async () => {
		const { rerender } = renderHook(useModal, {
			initialProps: { isOpen: false },
		});

		rerender({ isOpen: true });

		await waitFor(() => expect(document.body).toHaveStyle("overflow: hidden"));

		rerender({ isOpen: false });

		await waitFor(() =>
			expect(document.body).not.toHaveStyle("overflow: hidden")
		);
	});
});
