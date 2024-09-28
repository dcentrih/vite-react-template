import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Uncomment the chunks/packages you want to use
        manualChunks: {
          // tiptap: [
          //   "@tiptap/react",
          //   "@tiptap/starter-kit",
          //   "@tiptap/extension-link",
          // ],
          "mantine-addons": [
            "@mantine/notifications",
            "@mantine/nprogress",
            "@mantine/dates",
            "@mantine/modals",
            // "@mantine/tiptap",
          ],
        },
      },
    },
  },
});
