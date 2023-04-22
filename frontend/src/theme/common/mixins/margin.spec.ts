import margin from "./margin";

describe("margin", () => {
	it("should return margin: 1rem", () => {
		const result = margin({ all: "1rem" }).toString();
		expect(result).toContain("margin: ,1rem,;");
	});

	it("should return margin: 1rem 2rem", () => {
		const result = margin({ x: "1rem", y: "2rem" }).toString();
		expect(result).toContain("margin-right: ,1rem,;");
		expect(result).toContain("margin-left: ,1rem,;");
		expect(result).toContain("margin-top: ,2rem,;");
		expect(result).toContain("margin-bottom: ,2rem,;");
	});

	it("should return margin: 1rem 2rem 3rem 4rem", () => {
		const result = margin({
			top: "1rem",
			right: "2rem",
			bottom: "3rem",
			left: "4rem",
		}).toString();
		expect(result).toContain("margin-top: ,1rem,;");
		expect(result).toContain("margin-right: ,2rem,;");
		expect(result).toContain("margin-bottom: ,3rem,;");
		expect(result).toContain("margin-left: ,4rem,;");
	});

	it("should parse margin", () => {
		const result = margin({
			all: 1,
		}).toString();
		expect(result).toContain(",({ theme  })=>theme.spacing(margin),");
	});
});
