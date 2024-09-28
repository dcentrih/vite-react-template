import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import MantineWrapper from "./lib/mantine-wrapper";
import { router } from "./lib/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineWrapper>
      <RouterProvider router={router} />
    </MantineWrapper>
  </StrictMode>,
);
