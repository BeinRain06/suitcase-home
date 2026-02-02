import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pagetoview/LandingPage.vue"),
  },
  {
    path: "/project",
    name: "project",
    component: () => import("../pagetoview/ProjectPage.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../pagetoview/Contact.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
