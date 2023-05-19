import type { FC } from "react";
import type { LoaderFunction } from "react-router-dom";

export enum PageKey {
	home = "home",
	todosListSingle = "todosListSingle",
	login = "login",
	register = "register",

	test = "test",
	components = "components",
	componentsButton = "componentsButton",
	componentsAcceptButton = "componentsAcceptButton",
	componentsUpdateButton = "componentsUpdateButton",
	componentsCreateButton = "componentsCreateButton",
	componentsDeleteButton = "componentsDeleteButton",
	componentsCancelButton = "componentsCancelButton",
	componentsPanel = "componentsPanel",
	componentsModal = "componentsModal",
	componentsFloatingPanel = "componentsFloatingPanel",
}
export interface Page {
	path: string;
	title?: string;
	component: React.LazyExoticComponent<FC>;
	loader?: LoaderFunction;
	children?: Partial<Record<PageKey, Page>>;
	isProtected?: boolean;
	hideLayout?: boolean;
}
export type Pages = Partial<Record<PageKey, Page>>;
