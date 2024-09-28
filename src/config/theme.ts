import { createTheme, DEFAULT_THEME, mergeMantineTheme } from "@mantine/core";

const theme = createTheme({});

export default mergeMantineTheme(DEFAULT_THEME, theme);
