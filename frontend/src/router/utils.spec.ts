import { PageKey } from "../constants";
import { getPageKey, getPagePath } from "../router/utils";

describe("getPagePath", () => {
	it("should return the correct path", () => {
		expect(getPagePath(PageKey.login)).toBe("/login");
	});

	it("should return empty string if pageKey is not found", () => {
		expect(getPagePath("not_found_page_key" as PageKey)).toBe("");
	});
});

describe("getPageKey", () => {
	it("should return the correct pageKey", () => {
		expect(getPageKey("/login")).toBe(PageKey.login);
	});

	it("should return undefined if path is not found", () => {
		expect(getPageKey("/not_found_path")).toBeUndefined();
	});
});
