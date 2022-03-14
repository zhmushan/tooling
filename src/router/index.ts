import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { MenuGroups, MenuRoot } from "@/menu";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/all",
  },
  {
    path: MenuRoot.path,
    component: MenuRoot.component,
  },
];

for (const [_, path, children] of MenuGroups) {
  for (const ch of children) {
    routes.push({ path: `${path}${ch.path}`, component: ch.component });
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
