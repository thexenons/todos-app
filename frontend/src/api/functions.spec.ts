import { parseFilters } from "./functions";

describe("parseFilters", () => {
	it("should return an empty string if no filters are passed", () => {
		expect(parseFilters({})).toBe("");
	});

	it("should return a string with the filters", () => {
		expect(parseFilters({ limit: 10, page: 1 })).toBe("limit=10&offset=0");
	});
});
