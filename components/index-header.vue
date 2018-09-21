<template>
  <div class="container-fluid mh-100">
    <div
      class="container text-center"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="400">
      <app-title
        v-bind:index="true"
        cursive="welcome"
        title="the azka"/>

      <hr class="text-primary">

      <small class="h6 text-white">BAKERY &amp; PASTRY</small>
    </div>
  </div>
</template>

<script>
import AppTitle from "./app-title";

export default {
  components: {
    AppTitle
  }
};
</script>

<style lang="scss" scoped>
.container-fluid {
  background: url("~/assets/img/header.jpg") center center no-repeat;
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
