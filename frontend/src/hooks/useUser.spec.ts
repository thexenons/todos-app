import { renderHook } from "@testing-library/react";

import { TEST_USER } from "../tests/constants";
import useUser from "./useUser";

describe("useUser", () => {
	beforeEach(() => {
		fetchMock.mockOnce(JSON.stringify(TEST_USER));
	});

	afterEach(() => {
		fetchMock.mockClear();
	});

	it("without accessToken and user, should return null", () => {
		const { result } = renderHook(useUser);

		expect(result.current).toBeNull();
	});

	it("without accessToken and with user, should return user", () => {
		localStorage.setItem("user", JSON.stringify(TEST_USER));

		const { result } = renderHook(useUser);

		expect(result.current).toStrictEqual(TEST_USER);
		localStorage.removeItem("user");
	});

	it("with accessToken and without user, should return null", () => {
		localStorage.setItem("accessToken", JSON.stringify("test_access_token"));

		const { result } = renderHook(useUser);

		expect(result.current).toBeNull();
		localStorage.removeItem("accessToken");
	});

	it("with accessToken and with user, should return null", () => {
		localStorage.setItem("accessToken", JSON.stringify("test_access_token"));
		localStorage.setItem("user", JSON.stringify(TEST_USER));

		const { result } = renderHook(useUser);

		expect(result.current).toStrictEqual(TEST_USER);
		localStorage.removeItem("accessToken");
		localStorage.removeItem("user");
	});
});
