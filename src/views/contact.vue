<template>
<div class="mh-100">
  <app-banner cursive="easy" heading="contact" />

  <!-- <gmap-map class="mx-auto" v-bind:center="center" v-bind:zoom="7" style="height: 225px; max-width: 400px; width: 100%;">
    <gmap-marker v-bind:key="index" v-for="(m, index) in markers" v-bind:position="m.position" v-bind:clickable="true" />
  </gmap-map> -->
</div>
</template>

<script>
import AppBanner from "@/components/app-banner";

export default {
  components: {
    AppBanner
  },
  data() {
    return {
      center: { lat: -0.494823, lng: 117.143615 },
      markers: [
        {
          position: { lat: -0.494823, lng: 117.143615 }
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>
