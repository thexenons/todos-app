import type { FC, PropsWithChildren } from "react";

const ComponentsLayout: FC<PropsWithChildren> = ({ children }) => {
	return <main>{children}</main>;
};

export default ComponentsLayout;
