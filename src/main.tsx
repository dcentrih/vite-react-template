import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import MantineWrapper from "./lib/mantine-wrapper";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineWrapper>{/* Your app here */}</MantineWrapper>
  </StrictMode>,
);
