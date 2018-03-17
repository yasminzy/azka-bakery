<template>
<gmap-map class="mx-auto" v-bind:center="center" v-bind:zoom="7" style="height: 225px; max-width: 786px; width: 100%;">
  <gmap-marker v-bind:key="index" v-for="(m, index) in markers" v-bind:position="m.position" v-bind:clickable="true"/>
</gmap-map>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 62, lng: 10 },
      markers: [
        {
          position: { lat: 62, lng: 10 }
        },
        {
          position: { lat: 61.75, lng: 11 }
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
