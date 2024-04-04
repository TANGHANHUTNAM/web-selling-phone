import { createRouter, createWebHistory } from "vue-router";
import Home from "../router/index";
import NotFound from "../router/index"
import About from "../views/AboutPage.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
        layout: "default",
    },
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    meta: {
        layout: "auth",
    },
    component: About,
  },
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
