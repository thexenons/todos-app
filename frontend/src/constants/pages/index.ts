import { lazy } from "react";

import { PageKey, Pages } from "../../types";

export const PAGES: Pages = {
	[PageKey.home]: {
		path: "/",
		title: "Home",
		component: lazy(() => import("../../pages/Home")),
	},
	[PageKey.login]: {
		path: "/login",
		component: lazy(() => import("../../pages/Login")),
	},
	[PageKey.register]: {
		path: "/register",
		component: lazy(() => import("../../pages/Register")),
	},

	[PageKey.test]: {
		path: "/test",
		title: "Test",
		loader: async () => {
			return await (await import("../../pages/Test")).getInitialData();
		},
		component: lazy(() => import("../../pages/Test")),
		isProtected: true,
		children: {
			[PageKey.todosListSingle]: {
				path: "/:id",
				title: "Todos List Single",
				loader: async (args) => {
					return await (
						await import("../../pages/Test/TodosListSingle")
					).getInitialData(args);
				},
				component: lazy(() => import("../../pages/Test/TodosListSingle")),
			},
		},
	},
	[PageKey.components]: {
		path: "/components",
		title: "Components",
		component: lazy(() => import("../../pages/Components")),
		hideLayout: true,
		children: {
			[PageKey.componentsButton]: {
				path: "/button",
				title: "Button",
				component: lazy(() => import("../../pages/Components/Button")),
			},
			[PageKey.componentsAcceptButton]: {
				path: "/accept-button",
				title: "AcceptButton",
				component: lazy(() => import("../../pages/Components/AcceptButton")),
			},
			[PageKey.componentsUpdateButton]: {
				path: "/update-button",
				title: "UpdateButton",
				component: lazy(() => import("../../pages/Components/UpdateButton")),
			},
			[PageKey.componentsCreateButton]: {
				path: "/create-button",
				title: "CreateButton",
				component: lazy(() => import("../../pages/Components/CreateButton")),
			},
			[PageKey.componentsDeleteButton]: {
				path: "/delete-button",
				title: "DeleteButton",
				component: lazy(() => import("../../pages/Components/DeleteButton")),
			},
			[PageKey.componentsCancelButton]: {
				path: "/cancel-button",
				title: "CancelButton",
				component: lazy(() => import("../../pages/Components/CancelButton")),
			},
			[PageKey.componentsPanel]: {
				path: "/panel",
				title: "Panel",
				component: lazy(() => import("../../pages/Components/Panel")),
			},
			[PageKey.componentsModal]: {
				path: "/modal",
				title: "Modal",
				component: lazy(() => import("../../pages/Components/Modal")),
			},
			[PageKey.componentsFloatingPanel]: {
				path: "/floating-panel",
				title: "FloatingPanel",
				component: lazy(() => import("../../pages/Components/FloatingPanel")),
			},
			[PageKey.componentsInputBase]: {
				path: "/input-base",
				title: "InputBase",
				component: lazy(() => import("../../pages/Components/InputBase")),
			},
		},
	},
};
