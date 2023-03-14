import { FC, lazy } from "react";

const Home = lazy(() => import("./Home"));
const Test = lazy(() => import("./Test"));

interface Page {
	path: string;
	title: string;
	component: React.LazyExoticComponent<FC<any>>;
	children?: Page[];
}
export enum PageKey {
	home = "home",
	test = "test",
}
type Pages = {
	[key in PageKey]: Page;
};
const pages: Pages = {
	[PageKey.home]: {
		path: "/",
		title: "Home",
		component: Home,
	},
	[PageKey.test]: {
		path: "/test",
		title: "Test",
		component: Test,
	},
};

export default pages;
