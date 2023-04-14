import { FC, PropsWithChildren, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import Link from "../../../components/atoms/Link";
import Sidebar from "../../../components/layout/Sidebar";
import { getPageKey } from "../../../router/utils";
import pages, { PageKey } from "../..";
import * as S from "./styled";

const componentsPages = Object.entries(
	pages[PageKey.components]?.children || {}
).map(([pageKey, page]) => ({
	pageKey,
	title: page.title,
}));

const ComponentsLayout: FC<PropsWithChildren> = ({ children }) => {
	const [isSidebarOpen, setSidebarOpen] = useState(true);
	const location = useLocation();

	const links = useMemo(
		() => (
			<S.MenuList>
				{componentsPages.map((page) => (
					<S.MenuItem
						key={page.pageKey}
						$isActive={getPageKey(location.pathname) === page.pageKey}
					>
						<Link pageKey={page.pageKey as PageKey}>{page.title}</Link>
					</S.MenuItem>
				))}
			</S.MenuList>
		),
		[location.pathname]
	);

	const sidebar = useMemo(
		() => (
			<Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen}>
				{links}
			</Sidebar>
		),
		[isSidebarOpen, links]
	);

	return (
		<>
			{sidebar}
			<S.Main>{children}</S.Main>
		</>
	);
};

export default ComponentsLayout;
