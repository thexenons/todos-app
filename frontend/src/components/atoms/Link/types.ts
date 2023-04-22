import type { PropsWithChildren } from "react";

import { PageKey } from "../../../types";

export interface LinkProps extends PropsWithChildren {
	pageKey: PageKey;
}
