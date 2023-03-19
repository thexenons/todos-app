import type { FC } from "react";
import type { LoaderFunction } from "react-router-dom";

export enum PageKey {
	home = "home",
	todosListSingle = "todosListSingle",
	login = "login",
	register = "register",
	test = "test",
	test2 = "test2",
}
export interface Page {
	path: string;
	title: string;
	component: React.LazyExoticComponent<FC>;
	loader?: LoaderFunction;
	children?: Partial<Record<PageKey, Page>>;
	isProtected?: boolean;
}
export type Pages = Partial<Record<PageKey, Page>>;
