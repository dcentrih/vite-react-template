import { Outlet } from "react-router-dom";

import { HandleNavigationProgress } from "~/lib/mantine-wrapper";

export default function RootRoute() {
  return (
    <>
      <HandleNavigationProgress />
      <Outlet />
    </>
  );
}
