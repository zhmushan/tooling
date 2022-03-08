import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/all_tools",
    },
    {
      path: "/all_tools",
      component: () => import("@/views/AllTools.vue"),
    },
    {
      path: "/generators_qr_code",
      component: () => import("@/views/generators/QrCode.vue"),
    },
    {
      path: "/parsers_url",
      component: () => import("@/views/parsers/Url.vue"),
    },
  ],
});

export default router;
