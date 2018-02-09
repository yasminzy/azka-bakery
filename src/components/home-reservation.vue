<template>
<div class="container-fluid py-5 d-flex justify-content-center">
  <div class="container row mx-auto">
    <div class="col-lg-6 text-center" data-aos="fade-down-right">
      <app-heading class="text-dark" cursive="culinary" heading="delight" color="dark" />

      <app-home-content content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, consequatur reprehenderit rem beatae accusantium possimus sunt cupiditate officiis quas tenetur?" to="reservations" link="make a reservation" />
    </div>

    <div class="col-lg-6 pic" data-aos="fade-down-left">
      <div class="img-wrapper" v-for="(item, index) in menu" v-bind:key="index">
        <img class="hvr-grow img-fluid" v-bind:src="'img/' + urlize(item) + '.jpg'" v-bind:alt="item">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { urlize } from "@/functions";
import AppHeading from "./app-heading";
import AppHomeContent from "./app-home-content";

export default {
  components: {
    AppHeading,
    AppHomeContent
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
  grid-gap: 15px;
  margin-top: 3rem;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    margin-top: 0;
  }
}
</style>
