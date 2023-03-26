import { useAtom } from "jotai";
import type { FC } from "react";

import { sidebarIsOpenAtom } from "./state";
import * as S from "./styled";
import type { SidebarProps } from "./types";

const Sidebar: FC<SidebarProps> = ({ children }) => {
	const [sidebarIsOpen, setSidebarIsOpen] = useAtom(sidebarIsOpenAtom);

	return (
		<S.SidebarWrapper $isOpen={sidebarIsOpen}>
			<S.SidebarButton onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
				{sidebarIsOpen ? "<" : ">"}
			</S.SidebarButton>
			<S.SidebarContentWrapper>
				<S.SidebarContent>{children}</S.SidebarContent>
			</S.SidebarContentWrapper>
		</S.SidebarWrapper>
	);
};

export default Sidebar;
