import { FC, PropsWithChildren } from "react";

import useProtectedRoute from "../hooks/useProtectedRoute";

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
	const canRender = useProtectedRoute();

	if (!canRender) return null;

	return <>{children}</>;
};

export default ProtectedRoute;
