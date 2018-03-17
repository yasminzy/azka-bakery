<template>
<div class="container-fluid py-5 d-flex justify-content-center">
  <div class="container row mx-auto">
    <div class="col-lg-6 p-0 pic" data-aos="fade-up-left">
      <div class="img-wrapper" v-for="(item, index) in menu" v-bind:key="index">
        <img class="hvr-grow img-fluid" v-lazy="'/img/' + urlize(item) + '.jpg'" v-bind:alt="item">
      </div>
    </div>

    <div class="col-lg-6 text-center" data-aos="fade-up-right">
      <app-title class="text-dark" cursive="delightful" title="products" color="dark"/>

      <app-index-content content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, consequatur reprehenderit rem beatae accusantium possimus sunt cupiditate officiis quas tenetur?" to="order" link="view all products"/>
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
      menu: ["Cake 1", "Cake 2", "Cake 3", "Cake 4"]
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
  grid-gap: 15px;
  margin-bottom: 3rem;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
}
</style>
