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
      path: "/qr_code",
      component: () => import("@/views/generators/QrCode.vue"),
    },
  ],
});

export default router;
