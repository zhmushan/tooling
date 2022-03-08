import { createSSRApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createSSRApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
