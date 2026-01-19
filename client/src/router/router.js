import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/LandingPage.vue"),
  },
  {
    path: "/projects",
    name: "project",
    component: () => import("../components/ProjectPage.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../components/Contact.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
