<template>
<div>
  <home-header />
  <home-about />
  <app-banner cursive="tasteful" title="recipes" />
  <home-menu />
  <app-banner cursive="the perfect" title="blend" />
  <home-reservation />
</div>
</template>

<script>
import HomeAbout from "~/components/home-about";
import AppBanner from "~/components/app-banner";
import HomeHeader from "~/components/home-header";
import HomeMenu from "~/components/home-menu";
import HomeReservation from "~/components/home-reservation";

export default {
  components: {
    HomeAbout,
    AppBanner,
    HomeHeader,
    HomeMenu,
    HomeReservation
  }
};
</script>

<style scoped>

</style>
