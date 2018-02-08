<template>
<div class="col-lg-6 text-center w-100">
  <span class="cursive m-0 text-warning">{{ cursive }}</span>
  <h2 class="font-weight-bold">{{ title }}</h2>

  <p class="text-muted">*</p>

  <p class="text-muted">{{ text }}</p>

  <router-link class="text-warning" v-bind:to="to">
    {{ link }}
  </router-link>
</div>
</template>

<script>
export default {
  props: {
    cursive: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
span {
  font-size: 2.5rem;

  @media (min-width: 576px) {
    font-size: 4.5rem;
  }
}

h2 {
  letter-spacing: 0.25rem;
  margin-top: -1rem;

  @media (min-width: 576px) {
    font-size: 4.5rem;
  }
}

a {
  border-bottom: 0.25rem solid #ffe082;
}
</style>
