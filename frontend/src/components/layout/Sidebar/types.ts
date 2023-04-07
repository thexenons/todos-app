import { PropsWithChildren } from "react";

export interface SidebarProps extends PropsWithChildren {
	isSidebarOpen?: boolean;
	setSidebarOpen?: (isSidebarOpen: boolean) => void;
}
