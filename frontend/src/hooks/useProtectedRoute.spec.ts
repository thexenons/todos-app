import { renderHook } from "@testing-library/react";
import { vi } from "vitest";

import useProtectedRoute from "./useProtectedRoute";

const useNavigateMock = vi.fn();
vi.mock("react-router-dom", () => ({
	useNavigate: () => useNavigateMock,
}));

describe("useProtectedRoute", () => {
	it("should redirect to login page if user is not logged in", () => {
		renderHook(() => useProtectedRoute());

		expect(useNavigateMock).toBeCalledTimes(1);
	});

	it("should not redirect to login page if user is logged in", () => {
		localStorage.setItem("accessToken", JSON.stringify("test"));

		const { result } = renderHook(() => useProtectedRoute());

		expect(result.current).toBe(true);

		localStorage.removeItem("accessToken");
	});
});
