import { FC } from "react";
import MainLayout from "./components/layout/MainLayout";
import CustomRouterProvider from "./router/provider";
import GlobalStyles from "./theme/global";
import CustomThemeProvider from "./theme/provider";

const App: FC = () => (
	<CustomThemeProvider>
		<GlobalStyles />
		<MainLayout>
			<CustomRouterProvider />
		</MainLayout>
	</CustomThemeProvider>
);

export default App;
