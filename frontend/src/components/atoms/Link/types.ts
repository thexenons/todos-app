import type { PropsWithChildren } from "react";
import type { PageKey } from "../../../pages";

export interface LinkProps extends PropsWithChildren {
	pageKey: PageKey;
}
