import "@mantine/core/styles.layer.css";
import "@mantine/dates/styles.layer.css";
import "@mantine/notifications/styles.layer.css";
import "@mantine/nprogress/styles.layer.css";

import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { NavigationProgress } from "@mantine/nprogress";

import theme from "../config/theme";

interface MantineWrapperProps {
  children?: React.ReactNode;
}

export default function MantineWrapper({ children }: MantineWrapperProps) {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <NavigationProgress />
      <ModalsProvider>
        <DatesProvider settings={{}}>{children}</DatesProvider>
      </ModalsProvider>
    </MantineProvider>
  );
}
