import { createRouter, createWebHistory } from "vue-router";
import { useDisplayDataStore } from "../store-management/useDisplayDataStore";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pagetoview/LandingPage.vue"),
  },
  {
    path: "/project/:projectId*",
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

//Register the global beforeEach guard

router.beforeEach((to, from) => {
  const store = useDisplayDataStore();

  if (to.name === "contact") {
    store.$patch({
      isNavbar: true,
      isFooter: false,
    });
  } else if (to.name === "project") {
    store.$patch({
      isNavbar: false,
      isFooter: false,
    });
  } else if (to.name === "home" || from.name === "home") {
    console.log("HERE ---");
    store.$patch({
      isNavbar: true,
      isFooter: true,
    });
  }
});
