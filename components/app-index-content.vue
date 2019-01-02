<template>
  <div class="w-100">
    <p class="text-muted">*</p>

    <p class="text-muted">{{ content }}</p>

    <router-link v-bind:to="to" class="text-uppercase text-primary">
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
  border-bottom: 0.125rem solid #ff9800;

  &:hover {
    border-bottom: 0.125rem solid #cc7a00;
  }
}
</style>
