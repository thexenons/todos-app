import type { FC } from "react";
import { RouterProvider } from "react-router-dom";
import router from ".";

const CustomRouterProvider: FC = () => <RouterProvider router={router} />;

export default CustomRouterProvider;
