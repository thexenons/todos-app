import type { FC } from "react";
import type { LoaderFunction } from "react-router-dom";

import { PageKey } from "../../constants";

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
