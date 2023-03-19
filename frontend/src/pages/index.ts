import { lazy } from "react";

import type { Pages } from "./types";
import { PageKey } from "./types";

const pages: Pages = {
	[PageKey.home]: {
		path: "/",
		title: "Home",
		loader: async () => {
			return await (await import("./Home")).getInitialData();
		},
		component: lazy(() => import("./Home")),
		isProtected: true,
		children: {
			[PageKey.todosListSingle]: {
				path: "/:id",
				title: "Todos List Single",
				loader: async (args) => {
					return await (
						await import("./Home/TodosListSingle")
					).getInitialData(args);
				},
				component: lazy(() => import("./Home/TodosListSingle")),
			},
		},
	},
	[PageKey.login]: {
		path: "/login",
		title: "Login",
		component: lazy(() => import("./Login")),
	},
	[PageKey.register]: {
		path: "/register",
		title: "Register",
		component: lazy(() => import("./Register")),
	},
};

export * from "./types";
export default pages;
