import { FC, PropsWithChildren, Suspense, useMemo } from "react";

import Sidebar from "../Sidebar";
import UserInfo from "./components/UserInfo";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	const sidebar = useMemo(
		() => (
			<Sidebar>
				<UserInfo />
			</Sidebar>
		),
		[]
	);

	return (
		<>
			{sidebar}
			<main>
				<Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
			</main>
		</>
	);
};

export default MainLayout;
