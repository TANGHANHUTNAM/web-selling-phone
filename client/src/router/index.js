import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/404Page.vue";
import admin from "./admin.js"
import client from "./client.js"
const routes = [
  ...admin,
  ...client,
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
