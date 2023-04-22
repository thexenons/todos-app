import { act, render } from "@testing-library/react";
import { useAtom } from "jotai";

import { TEST_USER } from "../tests/constants";
import {
	accessTokenAtom,
	getAccessToken,
	logout,
	removeAccessToken,
	removeUser,
	userAtom,
} from "./user";

const TestComponentAccessToken = () => {
	const [accessToken, setAccessToken] = useAtom(accessTokenAtom);

	return (
		<div>
			<div data-testid="accessToken">{accessToken}</div>
			<button
				data-testid="setAccessToken"
				onClick={() => setAccessToken("test")}
			>
				setAccessToken
			</button>
		</div>
	);
};

beforeEach(() => {
	localStorage.removeItem("accessToken");
	localStorage.removeItem("user");
});

describe("accessTokenAtom", () => {
	it("should have empty default value", () => {
		const { getByTestId } = render(<TestComponentAccessToken />);

		const accessToken = getByTestId("accessToken");
		expect(accessToken.textContent).toBe("");
	});

	it("should set value", () => {
		const { getByTestId } = render(<TestComponentAccessToken />);

		const setAccessToken = getByTestId("setAccessToken");
		act(() => {
			setAccessToken.click();
		});

		const accessToken = getByTestId("accessToken");
		expect(accessToken.textContent).toBe("test");
	});
});

describe("getAccessToken", () => {
	it("should return empty accessToken", () => {
		const accessToken = getAccessToken();
		expect(accessToken).toBeNull();
	});

	it("should return accessToken", () => {
		localStorage.setItem("accessToken", JSON.stringify("test"));

		const accessToken = getAccessToken();
		expect(accessToken).toBe("test");
	});
});

describe("removeAccessToken", () => {
	it("should remove accessToken", () => {
		localStorage.setItem("accessToken", JSON.stringify("test"));

		const accessToken = getAccessToken();
		expect(accessToken).toBe("test");

		removeAccessToken();

		const removedAccessToken = getAccessToken();
		expect(removedAccessToken).toBeNull();
	});
});

const TestComponentUserAtom = () => {
	const [user, setUser] = useAtom(userAtom);

	return (
		<div>
			<div data-testid="user">{JSON.stringify(user)}</div>
			<button data-testid="setUser" onClick={() => setUser(TEST_USER)}>
				setUser
			</button>
		</div>
	);
};

describe("userAtom", () => {
	it("should have empty default value", () => {
		const { getByTestId } = render(<TestComponentUserAtom />);

		const user = getByTestId("user");
		expect(user.textContent).toBe("null");
	});

	it("should set value", () => {
		const { getByTestId } = render(<TestComponentUserAtom />);

		const setUser = getByTestId("setUser");
		act(() => {
			setUser.click();
		});

		const user = getByTestId("user");
		expect(user.textContent).toBe(JSON.stringify(TEST_USER));
	});
});

describe("removeUser", () => {
	it("should remove user", () => {
		localStorage.setItem("user", JSON.stringify(TEST_USER));

		const user = localStorage.getItem("user");
		expect(user).toBe(JSON.stringify(TEST_USER));

		removeUser();

		const removedUser = localStorage.getItem("user");
		expect(removedUser).toBeNull();
	});
});

describe("logout", () => {
	it('should call removeAccessToken, removeUser and window.location.assign("/login")', () => {
		logout();

		expect(localStorage.getItem("accessToken")).toBeNull();
		expect(localStorage.getItem("user")).toBeNull();
		expect(window.location.assign).toHaveBeenCalledWith("/login");
	});
});
