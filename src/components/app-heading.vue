<template>
<div>
  <span class="cursive m-0 text-capitalize text-primary">{{ cursive }}</span>

  <h2 v-if="!home" v-bind:class="'font-weight-bold text-uppercase text-' + color">{{ heading }}</h2>

  <h1 v-else v-bind:class="'font-weight-bold text-uppercase text-' + color">{{ heading }}</h1>
</div>
</template>

<script>
export default {
  props: {
    cursive: {
      type: String,
      required: true
    },
    heading: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "white"
    },
    home: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
span {
  font-size: 3rem;

  @media (min-width: 576px) {
    font-size: 4.5rem;
  }
}

h1,
h2 {
  font-size: 3rem;
  letter-spacing: 0.25rem;
  margin-top: -2rem;

  @media (min-width: 576px) {
    font-size: 4.5rem;
    margin-top: -2.5rem;
  }
}
</style>
