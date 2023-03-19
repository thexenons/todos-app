import { atomWithStorage } from "jotai/utils";

export const accessTokenAtom = atomWithStorage<string | null>(
	"accessToken",
	localStorage.getItem("accessToken")
);

export const getAccessToken = () =>
	JSON.parse(localStorage.getItem("accessToken") || "null");

export const removeAccessToken = () => localStorage.removeItem("accessToken");

export const userAtom = atomWithStorage("user", localStorage.getItem("user"));
