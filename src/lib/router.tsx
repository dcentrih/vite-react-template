import { createBrowserRouter, RouteObject } from "react-router-dom";

import RootRoute from "~/routes/_root";

const routes: RouteObject[] = [
  {
    id: "root",
    path: "/",
    Component: RootRoute,
    // Use lazy loading for children routes: export all props instead of having a default export
    children: [],
  },
];

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
});
