import padding from "./padding";

describe("padding", () => {
	it("should return padding: 1rem", () => {
		const result = padding({ all: "1rem" }).toString();
		expect(result).toContain("padding: ,1rem,;");
	});

	it("should return padding: 1rem 2rem", () => {
		const result = padding({ x: "1rem", y: "2rem" }).toString();
		expect(result).toContain("padding-right: ,1rem,;");
		expect(result).toContain("padding-left: ,1rem,;");
		expect(result).toContain("padding-top: ,2rem,;");
		expect(result).toContain("padding-bottom: ,2rem,;");
	});

	it("should return padding: 1rem 2rem 3rem 4rem", () => {
		const result = padding({
			top: "1rem",
			right: "2rem",
			bottom: "3rem",
			left: "4rem",
		}).toString();
		expect(result).toContain("padding-top: ,1rem,;");
		expect(result).toContain("padding-right: ,2rem,;");
		expect(result).toContain("padding-bottom: ,3rem,;");
		expect(result).toContain("padding-left: ,4rem,;");
	});

	it("should parse padding", () => {
		const result = padding({
			all: 1,
		}).toString();
		expect(result).toContain(",({ theme  })=>theme.spacing(padding),");
	});
});
