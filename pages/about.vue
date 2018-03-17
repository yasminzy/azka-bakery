<template>
<div class="mh-100">
  <app-banner cursive="discover" title="about us" />
  <about-history data-aos="fade-up" />
  <about-quote data-aos="fade-down" />
  <app-banner cursive="" title="bakery" v-bind:height="50" empty />
  <about-today data-aos="fade-left" />
</div>
</template>

<script>
import AboutHistory from "~/components/about-history";
import AboutQuote from "~/components/about-quote";
import AboutToday from "~/components/about-today";
import AppBanner from "~/components/app-banner";

export default {
  components: {
    AboutHistory,
    AboutQuote,
    AboutToday,
    AppBanner
  }
};
</script>

<style scoped>
</style>
