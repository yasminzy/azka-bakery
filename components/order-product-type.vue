<template>
  <div class="container">
    <h3 class="font-weight-bold h5 mb-4 text-center text-uppercase">
      {{ title }}
    </h3>

    <ul class="list-group mb-5 wrapper">
      <li
        v-for="item in typeFilter(products, type)"
        :key="item.id"
        class="bg-transparent border-0 list-group-item text-center"
      >
        <div>
          <p class="font-weight-bold mb-1">{{ item.name }}</p>

          <p class="small mb-1 text-muted">{{ item.description }}</p>

          <p>${{ item.price }}</p>

          <button
            :data-item-id="item.id"
            :data-item-name="item.name"
            :data-item-price="item.price"
            :data-item-description="item.description"
            :data-item-categories="item.type"
            class="btn btn-outline-primary snipcart-add-item"
            data-item-url="https://azka.netlify.com/order"
          >
            Buy
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { products } from "~/assets/js/data";

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
      products
    };
  },
  methods: {
    typeFilter(input, word) {
      return input.filter(item => item.type === word);
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
    column-gap: 2.5rem;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    column-gap: 5rem;
  }
}
</style>
