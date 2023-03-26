import { lazy } from "react";

import type { Pages } from "./types";
import { PageKey } from "./types";

const pages: Pages = {
	[PageKey.home]: {
		path: "/",
		title: "Home",
		component: lazy(() => import("./Home")),
	},
	[PageKey.login]: {
		path: "/login",
		component: lazy(() => import("./Login")),
	},
	[PageKey.register]: {
		path: "/register",
		component: lazy(() => import("./Register")),
	},

	[PageKey.test]: {
		path: "/test",
		title: "Test",
		loader: async () => {
			return await (await import("./Test")).getInitialData();
		},
		component: lazy(() => import("./Test")),
		isProtected: true,
		children: {
			[PageKey.todosListSingle]: {
				path: "/:id",
				title: "Todos List Single",
				loader: async (args) => {
					return await (
						await import("./Test/TodosListSingle")
					).getInitialData(args);
				},
				component: lazy(() => import("./Test/TodosListSingle")),
			},
		},
	},
	[PageKey.components]: {
		path: "/components",
		title: "Components",
		component: lazy(() => import("./Components")),
	},
};

export * from "./types";
export default pages;
