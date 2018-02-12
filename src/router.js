import Vue from "vue";
import Router from "vue-router";

import About from "./views/about.vue";
import Contact from "./views/contact.vue";
import Home from "./views/home.vue";
import Order from "./views/order.vue";
import Sent from "./views/sent.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/order", component: Order },
    { path: "/sent", component: Sent }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
