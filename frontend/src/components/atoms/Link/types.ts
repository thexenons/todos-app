import type { PropsWithChildren } from "react";

import { PageKey } from "../../../constants";

export interface LinkProps extends PropsWithChildren {
	pageKey: PageKey;
}
