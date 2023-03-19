import type { RouteObject } from "react-router-dom";

import type { Page, PageKey, Pages } from "../pages";
import pages from "../pages";
import ProtectedRoute from "./ProtectedRoute";

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

export function parsePageToRoute(key: PageKey, page: Page) {
	const route: RouteObject = {
		path: getPagePath(key),
		element: page.isProtected ? (
			<ProtectedRoute key={key}>
				<page.component />
			</ProtectedRoute>
		) : (
			<page.component key={key} />
		),
		loader: page.loader,
	};

	if (page.children) {
		route.children = Object.entries(page.children).map(
			([childKey, childPage]) =>
				parsePageToRoute(childKey as PageKey, childPage)
		);
	}

	return route;
}
