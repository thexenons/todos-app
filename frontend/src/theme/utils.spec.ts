import { pxToRem } from "./utils";

describe("pxToRem", () => {
	it("string", () => {
		expect(pxToRem("16px")).toBe("1rem");
	});

	it("number", () => {
		expect(pxToRem(16)).toBe("1rem");
	});
});
