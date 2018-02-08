import Vue from "vue";
import Router from "vue-router";

import Features from "./views/features.vue";
import About from "./views/about.vue";
import Contact from "./views/contact.vue";
import Home from "./views/home.vue";
import Menu from "./views/menu.vue";
import News from "./views/news.vue";
import Reservations from "./views/reservations.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/menu", component: Menu },
    { path: "/news", component: News },
    { path: "/reservations", component: Reservations },
    { path: "/features", component: Features }
  ]
});
