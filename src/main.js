import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";

import "hover.css/css/hover-min.css";
// import "./animate.css";

// import "aos/dist/aos.css";
// import "aos/dist/aos.js";

import AOS from "aos";
import "aos/dist/aos.css";

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBuLE0a2oN-c7WJZfINQxtLOGJTwNfaBxQ",
    libraries: "places"
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  created() {
    AOS.init();
  },
  render: h => h(App)
}).$mount("#app");
