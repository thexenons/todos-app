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

export function getPageKey(
	targetPath: string,
	initialPages: Pages = pages
): PageKey | undefined {
	for (const pageKey in initialPages) {
		const page = pages[pageKey as PageKey] as Page;
		const path = getPagePath(pageKey as PageKey);

		if (path === targetPath) return pageKey as PageKey;

		if (page?.children) {
			const childPageKey = getPageKey(targetPath, page.children);

			if (childPageKey) return childPageKey;
		}
	}
}

console.log({ button: getPageKey("/components/button") });
