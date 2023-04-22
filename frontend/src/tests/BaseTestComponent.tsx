import { FC, PropsWithChildren } from "react";
import { MemoryRouter } from "react-router-dom";

import CustomThemeProvider from "../theme/provider";

const BaseTestComponent: FC<PropsWithChildren> = ({ children }) => (
	<MemoryRouter>
		<CustomThemeProvider>{children}</CustomThemeProvider>
	</MemoryRouter>
);

export default BaseTestComponent;
