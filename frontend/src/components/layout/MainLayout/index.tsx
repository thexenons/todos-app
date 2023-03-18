import type { FC, PropsWithChildren } from "react";
import { Suspense } from "react";
import Footer from "../Footer";
import Header from "../Header";

const MainLayout: FC<PropsWithChildren<{}>> = ({ children }) => (
	<>
		<Header />
		<main>
			<Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
		</main>
		<Footer />
	</>
);

export default MainLayout;
