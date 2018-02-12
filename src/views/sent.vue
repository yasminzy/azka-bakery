<template>
<div class="container-fluid d-flex justify-content-center align-items-center mh-100">
  <app-title cursive="message" title="sent" />
</div>
</template>

<script>
import AppTitle from "@/components/app-title";

export default {
  components: {
    AppTitle
  }
};
</script>

<style scoped>
.container-fluid {
  background: url("../assets/sent.jpg");
}
</style>
