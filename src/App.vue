<template>
<div class="bg-light d-flex flex-column mh-100" id="top">
  <app-nav />
  <router-view data-aos="fade" />
  <app-footer />
</div>
</template>

<script>
import AppFooter from "./components/app-footer";
import AppNav from "./components/app-nav";

export default {
  components: {
    AppFooter,
    AppNav
  }
};
</script>

<style>
:root {
  scroll-behavior: smooth;
}

[v-cloak] {
  display: none;
}

::selection {
  background-color: #ff9800;
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
</style>
