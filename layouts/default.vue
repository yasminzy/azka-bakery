<template>
  <div
    id="top"
    class="d-flex flex-column mh-100">
    <app-nav/>

    <nuxt data-aos="fade"/>

    <app-footer/>
  </div>
</template>

<script>
import AppFooter from "~/components/app-footer";
import AppNav from "~/components/app-nav";

export default {
  components: {
    AppFooter,
    AppNav
  }
};
</script>

<style lang="scss">
@import "../assets/scss/custom-bootstrap";

:root {
  scroll-behavior: smooth;
}

[v-cloak] {
  display: none;
}

::selection {
  background-color: $primary;
  color: white;
}

body {
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
}

p {
  max-width: 80ch;
}

.cursive {
  font-family: "Dancing Script", cursive;
}

.img-wrapper {
  display: inline-block;
  overflow: hidden;
}

.mh-100 {
  min-height: 100vh;
}

.hvr-grow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
