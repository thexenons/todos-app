import flex from "./flex";

describe("flex", () => {
	it("should return display: flex", () => {
		const result = flex({}).toString();
		expect(result).toContain("display:,flex,;");
	});

	it("should return display: inline-flex", () => {
		const result = flex({ inline: true }).toString();
		expect(result).toContain("display:,inline-flex,;");
	});

	it("should return flex-direction: column", () => {
		const result = flex({ direction: "column" }).toString();
		expect(result).toContain("flex-direction: column;");
	});

	it("should return flex-wrap: wrap", () => {
		const result = flex({ wrap: true }).toString();
		expect(result).toContain("flex-wrap: wrap;");
	});

	it("should return flex-wrap: nowrap", () => {
		const result = flex({ wrap: false }).toString();
		expect(result).toContain("flex-wrap: nowrap;");
	});

	it("should return justify-content: center", () => {
		const result = flex({ justify: "center" }).toString();
		expect(result).toContain("justify-content: center;");
	});

	it("should return align-items: center", () => {
		const result = flex({ align: "center" }).toString();
		expect(result).toContain("align-items: center;");
	});

	it("should return gap: 1rem", () => {
		const result = flex({ gap: "1rem" }).toString();
		expect(result).toContain("gap: 1rem;");
	});
});
