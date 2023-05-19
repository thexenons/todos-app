import type { Placement } from "@popperjs/core";
import { PropsWithChildren, ReactNode } from "react";

export interface FloatingPanelProps extends PropsWithChildren {
	content?: ReactNode;
	placement?: Placement;
	strategy?: "fixed" | "hover" | "click";
}
