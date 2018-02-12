<template>
<div class="container">
  <h3 class="font-weight-bold h5 mb-4 text-center text-uppercase">{{ title }}</h3>

  <ul class="list-group mb-5 wrapper">
    <li class="bg-transparent border-0 list-group-item text-center" v-for="(item, index) in typeFilter(menu, type)" v-bind:key="index">
      <div>
        <p class="font-weight-bold mb-1">{{ item.name }}</p>

        <p class="small mb-1 text-muted">{{ item.description }}</p>

        <!-- <p class="mb-0">${{ item.price }}</p> -->
        <p>${{ item.price }}</p>

        <button
          class="btn btn-outline-primary snipcart-add-item"
          v-bind:data-item-id="item.id"
          v-bind:data-item-name="item.name"
          v-bind:data-item-price="item.price"
          data-item-url="https://bakery-azka.netlify.com"
          v-bind:data-item-description="item.description"
          v-bind:data-item-categories="item.type">
              Buy
        </button>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import { menu } from "@/data";

export default {
  props: {
    type: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      menu
    };
  },
  methods: {
    typeFilter(input, word) {
      return input.filter(item => item.type == word);
    }
  }
};
</script>

<style lang="scss" scoped>
h3 {
  letter-spacing: 0.25rem;
}

.wrapper {
  @media (min-width: 768px) {
    display: grid;
    grid-column-gap: 2.5rem;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-column-gap: 5rem;
  }
}
</style>
