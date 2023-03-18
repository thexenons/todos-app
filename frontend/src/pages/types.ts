import type { FC } from "react";
import type { LoaderFunction } from "react-router-dom";

export enum PageKey {
	home = "home",
	test = "test",
	test2 = "test2",
}
export interface Page {
	path: string;
	title: string;
	component: React.LazyExoticComponent<FC<any>>;
	loader?: LoaderFunction;
	children?: Partial<Record<PageKey, Page>>;
}
export type Pages = Partial<Record<PageKey, Page>>;
