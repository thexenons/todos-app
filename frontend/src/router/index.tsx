import { Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import type { Page, PageKey } from "../pages";
import pages from "../pages";
import ProtectedRoute from "./ProtectedRoute";
import { getPagePath } from "./utils";

export function parsePageToRoute(key: PageKey, page: Page) {
	const route: RouteObject = {
		path: getPagePath(key),
		element: (
			<Suspense fallback={<div>Loading...</div>}>
				{page.isProtected ? (
					<ProtectedRoute key={key}>
						<page.component />
					</ProtectedRoute>
				) : (
					<page.component key={key} />
				)}
			</Suspense>
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

const router = createBrowserRouter(
	Object.entries(pages).map(([key, page]) =>
		parsePageToRoute(key as PageKey, page)
	)
);

export default router;
