import { Page, PageKey } from "../../types";
import { PAGES } from ".";

const testPage = async (page: Page) => {
	if (page.loader) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const data = await page.loader({ params: { id: 1 } });
		expect(data).toBeDefined();
	}

	if (page.children) {
		for (const pageKey in page.children) {
			const childPage = page.children[pageKey as PageKey] as Page;
			await testPage(childPage);
		}
	}

	return true;
};

describe("PAGES", () => {
	beforeAll(() => {
		fetchMock.doMock(JSON.stringify({}));
	});

	afterAll(() => {
		fetchMock.mockClear();
	});

	it("loader", async () => {
		for (const pageKey in PAGES) {
			const page = PAGES[pageKey as PageKey] as Page;

			expect(await testPage(page)).toBe(true);
		}
	});
});
