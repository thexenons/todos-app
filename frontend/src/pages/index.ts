import { lazy } from "react";

import type { Pages } from "./types";
import { PageKey } from "./types";

const pages: Pages = {
	[PageKey.home]: {
		path: "/",
		title: "Home",
		component: lazy(() => import("./Home")),
		isProtected: true,
	},
	[PageKey.login]: {
		path: "/login",
		title: "Login",
		component: lazy(() => import("./Login")),
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
			[PageKey.test2]: {
				path: "/:id",
				title: "Test 2",
				loader: async (args) => {
					return await (await import("./Test/Test2")).getInitialData(args);
				},
				component: lazy(() => import("./Test/Test2")),
			},
		},
	},
};

export * from "./types";
export default pages;
