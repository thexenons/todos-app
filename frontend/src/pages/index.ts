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
		hideLayout: true,
		children: {
			[PageKey.componentsButton]: {
				path: "/button",
				title: "Button",
				component: lazy(() => import("./Components/Button")),
			},
			[PageKey.componentsAcceptButton]: {
				path: "/accept-button",
				title: "AcceptButton",
				component: lazy(() => import("./Components/AcceptButton")),
			},
			[PageKey.componentsUpdateButton]: {
				path: "/update-button",
				title: "UpdateButton",
				component: lazy(() => import("./Components/UpdateButton")),
			},
			[PageKey.componentsCreateButton]: {
				path: "/create-button",
				title: "CreateButton",
				component: lazy(() => import("./Components/CreateButton")),
			},
			[PageKey.componentsDeleteButton]: {
				path: "/delete-button",
				title: "DeleteButton",
				component: lazy(() => import("./Components/DeleteButton")),
			},
			[PageKey.componentsCancelButton]: {
				path: "/cancel-button",
				title: "CancelButton",
				component: lazy(() => import("./Components/CancelButton")),
			},
			[PageKey.componentsPanel]: {
				path: "/panel",
				title: "Panel",
				component: lazy(() => import("./Components/Panel")),
			},
			[PageKey.componentsModal]: {
				path: "/modal",
				title: "Modal",
				component: lazy(() => import("./Components/Modal")),
			},
		},
	},
};

export * from "./types";
export default pages;
