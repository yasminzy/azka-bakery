<template>
  <GmapMap
    :center="center"
    :zoom="7"
    style="height: 225px; max-width: 786px; width: 100%;"
    class="mx-auto"
  >
    <GmapMarker
      v-for="(m, index) in markers"
      :key="index"
      :position="m.position"
      :clickable="true"
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
