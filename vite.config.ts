import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import autoprefixerPlugin from "autoprefixer";

export default defineConfig(() => ({
  base: "",
  build: {
    outDir: "../../.ntli/site/static/ui",
  },
  root: "./src/ui",
  plugins: [react()],
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [autoprefixerPlugin,],
    },
  },
}));