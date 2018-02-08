<template>
<div class="bg-light d-flex flex-column mh-100" id="top">
  <app-nav />
  <router-view />
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
[v-cloak] {
  display: none;
}

::selection {
  background-color: #6c757d;
  color: white;
}

body {
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
}

a:hover {
  text-decoration: none;
}

p {
  max-width: 80ch;
}

.cursive {
  font-family: "Dancing Script", cursive;
}

.fadeIn {
  animation-delay: 0.25s;
  animation-duration: 0.5s;
}

.mh-100 {
  min-height: 100vh;
}

.text-warning {
  /* color: #ffe082 !important; */
  color: #e0bd7a !important;
}
</style>