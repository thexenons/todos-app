import type { FC, PropsWithChildren } from "react";
import { Suspense } from "react";

import Sidebar from "../Sidebar";
import UserInfo from "./components/UserInfo";

const MainLayout: FC<PropsWithChildren> = ({ children }) => (
	<>
		<Sidebar>
			<UserInfo />
		</Sidebar>
		<main>
			<Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
		</main>
	</>
);

export default MainLayout;
