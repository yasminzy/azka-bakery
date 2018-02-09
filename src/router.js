import Vue from "vue";
import Router from "vue-router";

import About from "./views/about.vue";
import Contact from "./views/contact.vue";
import Home from "./views/home.vue";
import Menu from "./views/menu.vue";
import Reservations from "./views/reservations.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/menu", component: Menu },
    { path: "/reservations", component: Reservations }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
