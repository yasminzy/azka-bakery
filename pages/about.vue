<template>
  <div class="mh-100">
    <AppBanner cursive="discover" title="about us" />
    <AboutHistory data-aos="fade-up" />

    <AboutQuote data-aos="fade-down" />

    <AppBanner :height="50" title="bakery" cursive empty />

    <AboutToday data-aos="fade-left" />
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
