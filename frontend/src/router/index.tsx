import { createBrowserRouter } from "react-router-dom";
import pages from "../pages";

const router = createBrowserRouter(
	Object.entries(pages).map(([key, page]) => ({
		path: page.path,
		element: <page.component key={key} />,
	}))
);

export default router;
