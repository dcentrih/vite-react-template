import "@mantine/core/styles.layer.css";
import "@mantine/dates/styles.layer.css";
import "@mantine/notifications/styles.layer.css";
import "@mantine/nprogress/styles.layer.css";

import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { NavigationProgress, nprogress } from "@mantine/nprogress";
import { useEffect } from "react";
import { useNavigation } from "react-router-dom";

import theme from "~/config/theme";

interface MantineWrapperProps {
  children?: React.ReactNode;
}

export default function MantineWrapper({ children }: MantineWrapperProps) {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <NavigationProgress />
      <ModalsProvider modals={{}}>
        <DatesProvider settings={{}}>{children}</DatesProvider>
      </ModalsProvider>
    </MantineProvider>
  );
}

// Used in the root route
export function HandleNavigationProgress() {
  const { state } = useNavigation();

  useEffect(() => {
    // When the navigation state changes, we want to start the progress bar
    nprogress.start();
    if (state === "idle") {
      // When the navigation state is idle, we want to complete the progress bar
      nprogress.complete();
    }
  }, [state]);

  return null;
}
