<template>
  <div class="container-fluid d-flex justify-content-center align-items-center">
    <AppTitle cursive="message" title="sent" />
  </div>
</template>

<script>
import AppTitle from "~/components/app-title";

export default {
  components: {
    AppTitle
  }
};
</script>

<style scoped>
.container-fluid {
  background-image: url("~assets/img/sent.jpg");
  min-height: calc(100vh + 31px);
}
</style>
