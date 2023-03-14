import { FC, PropsWithChildren, Suspense } from "react";
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
