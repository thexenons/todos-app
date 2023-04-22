import typography from "./typography";

describe("typography", () => {
	it("should return theme function", () => {
		const result = typography("h1").toString();
		expect(result).toContain(
			",({ theme  })=>theme.typography.getTypographyStyle(theme.typography[variant]),"
		);
	});
});
