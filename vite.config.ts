import { fileURLToPath, URL } from "url";
import { env } from "process";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const { BasePublicPath = "/" } = env;

// https://vitejs.dev/config/
export default defineConfig({
  base: BasePublicPath,
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
