<template>
  <GmapMap
    v-bind:center="center"
    v-bind:zoom="7"
    style="height: 225px; max-width: 786px; width: 100%;"
    class="mx-auto"
  >
    <GmapMarker
      v-for="(m, index) in markers"
      v-bind:key="index"
      v-bind:position="m.position"
      v-bind:clickable="true"
    />
  </GmapMap>
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
