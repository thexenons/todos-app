import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import useProtectedRoute from "../../hooks/useProtectedRoute";
import ProtectedRoute from ".";

vi.mock("../../hooks/useProtectedRoute");

describe("ProtectedRoute", () => {
	afterEach(() => vi.restoreAllMocks());

	it("can render", () => {
		vi.mocked(useProtectedRoute).mockReturnValue(true);

		render(
			<ProtectedRoute>
				<div data-testid="ProtectedRouteChildren" />
			</ProtectedRoute>
		);

		expect(screen.getByTestId("ProtectedRouteChildren")).toBeInTheDocument();
	});

	it("can't render", () => {
		vi.mocked(useProtectedRoute).mockReturnValue(false);

		render(
			<ProtectedRoute>
				<div data-testid="ProtectedRouteChildren" />
			</ProtectedRoute>
		);

		expect(
			screen.queryByTestId("ProtectedRouteChildren")
		).not.toBeInTheDocument();
	});
});
