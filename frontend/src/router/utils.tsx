import { PAGES } from "../constants";
import { Page, PageKey, Pages } from "../types";

export function getPagePath(
	targetPageKey: PageKey,
	initialPages: Pages = PAGES,
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

export function getPageKey(
	targetPath: string,
	initialPages: Pages = PAGES
): PageKey | undefined {
	for (const pageKey in initialPages) {
		const page = PAGES[pageKey as PageKey] as Page;
		const path = getPagePath(pageKey as PageKey);

		if (path === targetPath) return pageKey as PageKey;

		if (page?.children) {
			const childPageKey = getPageKey(targetPath, page.children);

			if (childPageKey) return childPageKey;
		}
	}
}
