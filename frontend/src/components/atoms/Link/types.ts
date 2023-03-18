import { PropsWithChildren } from "react";
import { PageKey } from "../../../pages";

export interface LinkProps extends PropsWithChildren {
	pageKey: PageKey;
}
