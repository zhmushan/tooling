import { createApp } from "vue";
import { createPinia } from "pinia";

import Root from "./Root.vue";
import router from "./router";
import i18n from "./locales";
const app = createApp(Root);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount("#app");
