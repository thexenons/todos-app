import { atomWithStorage } from "jotai/utils";

import { PageKey } from "../constants";
import { getPagePath } from "../router/utils";
import { User } from "../types";

export const accessTokenAtom = atomWithStorage<string | null>(
	"accessToken",
	localStorage.getItem("accessToken")
);

export const getAccessToken = (): string | null =>
	JSON.parse(localStorage.getItem("accessToken") || "null");

export const removeAccessToken = () => localStorage.removeItem("accessToken");

export const userAtom = atomWithStorage<User>(
	"user",
	JSON.parse(localStorage.getItem("user") || "null")
);

export const removeUser = () => localStorage.removeItem("user");

export const logout = () => {
	removeAccessToken();
	removeUser();
	window.location.assign(getPagePath(PageKey.login));
};
