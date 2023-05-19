import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

import Container from "../../components/layout/Container";
import ComponentsLayout from "./Layout";

const Components: FC = () => (
	<ComponentsLayout>
		<Container fullHeight>
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
		</Container>
	</ComponentsLayout>
);

export default Components;
