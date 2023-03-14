import pages from "../pages";

export function getPagePath(pageKey: keyof typeof pages) {
	return pages[pageKey].path;
}
