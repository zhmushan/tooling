import { fileURLToPath, URL } from "url";
import { env } from "process";
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import { VitePWA } from "vite-plugin-pwa";

const { BasePublicPath = "/" } = env;

// https://vitejs.dev/config/
export default defineConfig({
  base: BasePublicPath,
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Tooling",
        short_name: "Tooling",
        theme_color: "",
        background_color: "",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
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
    deps: {
      inline: ["date-fns"],
    },
  },
  define: {
    "import.meta.vitest": "undefined",
  },
});
