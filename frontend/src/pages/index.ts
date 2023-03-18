import { lazy } from "react";
import type { Pages } from "./types";
import { PageKey } from "./types";

const pages: Pages = {
  [PageKey.home]: {
    path: "/",
    title: "Home",
    component: lazy(() => import("./Home")),
    isProtected: true,
  },
  [PageKey.login]: {
    path: "/login",
    title: "Login",
    component: lazy(() => import("./Login")),
  },
  [PageKey.test]: {
    path: "/test",
    title: "Test",
    loader: async () => {
      return await (await import("./Test")).getInitialData();
    },
    component: lazy(() => import("./Test")),
    children: {
      [PageKey.test2]: {
        path: "/test2",
        title: "Test",
        loader: async () => {
          return await (await import("./Test")).getInitialData();
        },
        component: lazy(() => import("./Test")),
      },
    },
  },
};

export * from "./types";
export default pages;
