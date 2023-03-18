import { lazy } from "react";
import { PageKey, Pages } from "./types";

const pages: Pages = {
	[PageKey.home]: {
		path: "/",
		title: "Home",
		loader: async () => {
			return await (await import("./Home")).getInitialData();
		},
		component: lazy(() => import("./Home")),
	},
};

export * from "./types";
export default pages;
