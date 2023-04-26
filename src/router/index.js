import { createRouter, createWebHistory } from "vue-router";

import Homepage from "../pages/Homepage.vue";
import Contacts from "../pages/Contacts.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage,
    },
    {
      path: "/contacts",
      name: "Contacts",
      component: Contacts,
    },
  ],
});

export { router };
