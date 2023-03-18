import type { FC } from "react";
import { lazy } from "react";
import MainLayout from "./components/layout/MainLayout";
import CustomRouterProvider from "./router/provider";
import GlobalStyles from "./theme/global";
import CustomThemeProvider from "./theme/provider";

const DevTools = lazy(() =>
	import("jotai-devtools").then((m) => ({
		default: m.DevTools,
	}))
);

const App: FC = () => (
	<>
		<CustomThemeProvider>
			<GlobalStyles />
			<MainLayout>
				<CustomRouterProvider />
			</MainLayout>
		</CustomThemeProvider>
		{import.meta.env.DEV && <DevTools />}
	</>
);

export default App;
