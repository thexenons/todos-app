import type { Page, PageKey, Pages } from "../pages";
import pages from "../pages";

export function getPagePath(
	targetPageKey: PageKey,
	initialPages: Pages = pages,
	initialPath = ""
): string {
	for (const pageKey in initialPages) {
		const page = initialPages[pageKey as PageKey] as Page;
		let finalPath = `${initialPath}${page.path}`;

		if (pageKey === targetPageKey) return finalPath;

		if (page.children) {
			finalPath = getPagePath(targetPageKey, page.children, finalPath);

			if (finalPath) return finalPath;
		}
	}

	return "";
}
