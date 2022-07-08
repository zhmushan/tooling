import { createApp } from "vue";
import { createPinia } from "pinia";

import Root from "./Root.vue";
import router from "./router";
import i18n from "./locales";

if (import.meta.vitest) {
  const el = document.createElement("div");
  el.id = "app";
  document.body.append(el);
}

const app = createApp(Root);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount("#app");

router.isReady().then(async () => {
  const { registerSW } = await import("virtual:pwa-register");
  registerSW({ immediate: true });
});

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("mount", () => {
    expect(app._container instanceof HTMLDivElement).toBeTruthy();
  });
}
