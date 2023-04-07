import { useAtom } from "jotai";
import { FC, useCallback } from "react";
import { useElementSize } from "usehooks-ts";

import { sidebarIsOpenAtom } from "../../../state/ui";
import { ButtonVariants } from "../../atoms/Button/types";
import * as S from "./styled";
import type { SidebarProps } from "./types";

const Sidebar: FC<SidebarProps> = ({
	children,
	isSidebarOpen: isSidebarOpenProps,
	setSidebarOpen: setSidebarOpenProps,
}) => {
	const [isSidebarOpen, setSidebarOpen] = useAtom(sidebarIsOpenAtom);
	const finalIsSidebarOpen = isSidebarOpenProps ?? isSidebarOpen;
	const finalSetSidebarOpen = setSidebarOpenProps ?? setSidebarOpen;
	const [setNode, sizes] = useElementSize();

	const toggleSidebar = useCallback(
		() => finalSetSidebarOpen?.(!finalIsSidebarOpen),
		[finalIsSidebarOpen, finalSetSidebarOpen]
	);

	return (
		<S.SidebarWrapper $isOpen={!!finalIsSidebarOpen} $height={sizes.height}>
			<S.SidebarButton
				isRounded
				variant={ButtonVariants.outlined}
				onClick={toggleSidebar}
			>
				<S.SidebarButtonContent>{">"}</S.SidebarButtonContent>
			</S.SidebarButton>
			<S.SidebarContentWrapper>
				<S.SidebarContent ref={setNode}>{children}</S.SidebarContent>
			</S.SidebarContentWrapper>
		</S.SidebarWrapper>
	);
};

export default Sidebar;
