import typography from "./typography";

describe("typography", () => {
	it("should return theme function", () => {
		const result = typography("h1").toString();
		expect(result).toContain(
			"({\n" +
				"  theme\n" +
				"}) => theme.typography.getTypographyStyle(theme.typography[variant])"
		);
	});
});
