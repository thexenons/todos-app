import type { FC, PropsWithChildren } from "react";
import { Suspense } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => (
	<main>
		<Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
	</main>
);

export default MainLayout;
