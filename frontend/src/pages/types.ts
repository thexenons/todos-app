import type { FC } from "react";
import type { LoaderFunction } from "react-router-dom";

export enum PageKey {
	home = "home",
}
export interface Page {
	path: string;
	title: string;
	component: React.LazyExoticComponent<FC<any>>;
	loader?: LoaderFunction;
	children?: Partial<Record<PageKey, Page>>;
}
export type Pages = Partial<Record<PageKey, Page>>;
