<template>
<div class="w-100">
  <p class="text-muted">*</p>

  <p class="text-muted">{{ content }}</p>

  <router-link class="text-uppercase text-warning" v-bind:to="to">
    {{ link }}
  </router-link>
</div>
</template>

<script>
export default {
  props: {
    content: {
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
a {
  border-bottom: 0.25rem solid #ffc107;

  &:hover {
    border-bottom: 0.25rem solid #d39e00;
  }
}
</style>
