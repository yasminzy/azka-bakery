<template>
  <div class="container-fluid py-5 d-flex justify-content-center">
    <div class="container row mx-auto">
      <div class="col-lg-6 text-center" data-aos="fade-down-right">
        <AppTitle
          class="text-dark"
          color="dark"
          cursive="culinary"
          title="delight"
        />

        <AppIndexContent
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, consequatur reprehenderit rem beatae accusantium possimus sunt cupiditate officiis quas tenetur?"
          link="order now"
          to="order"
        />
      </div>

      <div class="col-lg-6 pic" data-aos="fade-down-left">
        <div
          v-for="(item, index) in menu"
          v-bind:key="index"
          class="img-wrapper"
        >
          <img
            v-lazy="'/img/' + urlize(item) + '.jpg'"
            v-bind:alt="item"
            class="hvr-grow img-fluid"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { urlize } from "~/assets/js/functions";
import AppTitle from "./app-title";
import AppIndexContent from "./app-index-content";

export default {
  components: {
    AppTitle,
    AppIndexContent
  },
  data() {
    return {
      menu: ["Cake 5", "Cake 6"]
    };
  },
  methods: {
    urlize
  }
};
</script>

<style lang="scss" scoped>
.pic {
  display: grid;
  gap: 15px;
  margin-top: 3rem;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    margin-top: 0;
  }
}
</style>
