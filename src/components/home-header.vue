<template>
<div class="container-fluid mh-100">
  <div class="animated fadeIn container text-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
    <span class="cursive text-warning w-100">Welcome</span>
    <h1 class="font-weight-bold text-white">THE AZKA</h1>

    <hr class="text-warning">

    <small class="h6 text-white">PASTRIES &amp; DESSERTS</small>

    <!-- <gmap-map class="mx-auto" v-bind:center="center" v-bind:zoom="7" style="height: 225px; max-width: 400px; width: 100%;">
      <gmap-marker v-bind:key="index" v-for="(m, index) in markers" v-bind:position="m.position" v-bind:clickable="true" />
    </gmap-map> -->
  </div>
</div>
</template>

<script>
export default {
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

<style lang="scss" scoped>
$yellow: #ffe082;

.animated {
  animation-delay: 1s;
  animation-duration: 2s;
}

.container-fluid {
  background: url("/img/header.jpg") center center no-repeat;
  background-size: cover;
  padding-top: 7.5rem;

  @media (min-width: 576px) {
    padding-top: 5rem;
  }

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
  }
}

.container {
  width: auto;

  @media (min-width: 1200px) {
    position: absolute;
    left: 10rem;
    top: 10rem;
  }
}

span {
  font-size: 2.5rem;
  max-width: 360px;

  @media (min-width: 576px) {
    font-size: 4.5rem;
  }
}

h1 {
  letter-spacing: 0.25rem;
  margin-top: 0;

  @media (min-width: 576px) {
    margin-top: -1rem;
    font-size: 4.5rem;
  }
}

hr {
  border: none;
  border-top: 0.25rem solid white;
  color: white;
  max-width: 360px;
  overflow: visible;

  &:after {
    background: #17120c;
    content: "*";
    display: inline-block;
    font-size: 1.5rem;
    padding: 0 0.5rem;
    position: relative;
    top: -0.7em;
  }
}

.h6 {
  letter-spacing: 0.5rem;
}
</style>
