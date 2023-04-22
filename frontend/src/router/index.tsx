import { Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import { PAGES } from "../constants";
import { Page, PageKey } from "../types";
import ProtectedRoute from "./ProtectedRoute";
import { getPagePath } from "./utils";

export function parsePageToRoute(
	key: PageKey,
	page: Page,
	enableLayout = true
) {
	const component = page.isProtected ? (
		<ProtectedRoute key={key}>
			<page.component />
		</ProtectedRoute>
	) : (
		<page.component key={key} />
	);

	const route: RouteObject = {
		path: getPagePath(key),
		element:
			enableLayout && !page.hideLayout ? (
				<MainLayout>
					<Suspense fallback={<div>Loading...</div>}>{component}</Suspense>
				</MainLayout>
			) : (
				component
			),
		loader: page.loader,
	};

	if (page.children) {
		route.children = Object.entries(page.children).map(
			([childKey, childPage]) =>
				parsePageToRoute(childKey as PageKey, childPage, false)
		);
	}

	return route;
}

const router = createBrowserRouter(
	Object.entries(PAGES).map(([key, page]) =>
		parsePageToRoute(key as PageKey, page)
	)
);

export default router;
