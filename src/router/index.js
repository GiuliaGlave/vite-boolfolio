import { createRouter, createWebHistory } from "vue-router";

import Homepage from "../pages/Homepage.vue";
import Contacts from "../pages/Contacts.vue";
import ProjectDetail from "../pages/ProjectDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "",

  routes: [
    {
      path: "/",
      name: "homepage",
      component: Homepage,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
    {
      path: "/projects/:slug",
      name: "project-detail",
      component: ProjectDetail,
    },
  ],
});

export { router };
