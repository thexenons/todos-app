import { FC, lazy } from "react";

const Home = lazy(() => import("./Home"));

export enum PageKey {
	home = "home",
}
export interface Page {
	path: string;
	title: string;
	component: React.LazyExoticComponent<FC<any>>;
	children?: Partial<Record<PageKey, Page>>;
}
export type Pages = Partial<Record<PageKey, Page>>;
const pages: Pages = {
	[PageKey.home]: {
		path: "/",
		title: "Home",
		component: Home,
	},
};

export default pages;
