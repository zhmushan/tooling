import { fileURLToPath, URL } from "url";
import { env } from "process";
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

const { BasePublicPath = "/" } = env;

// https://vitejs.dev/config/
export default defineConfig({
  base: BasePublicPath,
  plugins: [
    vue(),
    vueI18n({
      include: resolve(__dirname, "./src/locales/**"),
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    environment: "jsdom",
    includeSource: ["src/**/*.{js,ts}"],
  },
  define: {
    "import.meta.vitest": "undefined",
  },
});
