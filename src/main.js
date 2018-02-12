import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import AOS from "aos";
import "aos/dist/aos.css";

// import "jquery/dist/jquery.slim.min";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min";
// import "bootstrap/dist/css/bootstrap.css";

import "./custom-bootstrap.css";

import "hover.css/css/hover-min.css";

import "./snipcart/custom-snipcart.css";

Vue.config.productionTip = false;

new Vue({
  router,
  created() {
    AOS.init();
  },
  render: h => h(App)
}).$mount("#app");
