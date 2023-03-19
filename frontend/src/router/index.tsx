import { createBrowserRouter } from "react-router-dom";

import type { PageKey } from "../pages";
import pages from "../pages";
import { parsePageToRoute } from "./utils";

const router = createBrowserRouter(
	Object.entries(pages).map(([key, page]) =>
		parsePageToRoute(key as PageKey, page)
	)
);

export default router;
