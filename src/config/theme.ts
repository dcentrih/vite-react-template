import { createTheme, DEFAULT_THEME, mergeMantineTheme } from "@mantine/core";

const theme = createTheme({});

const merged = mergeMantineTheme(DEFAULT_THEME, theme);

export default merged;
