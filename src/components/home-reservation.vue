<template>
<div class="container-fluid py-5 d-flex justify-content-center">
  <div class="container row mx-auto">
    <app-home-text cursive="Culinary" title="DELIGHT" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, consequatur reprehenderit rem beatae accusantium possimus sunt cupiditate officiis quas tenetur?" to="reservation" link="MAKE A RESERVATION" data-aos="fade-down-right" />

    <div class="col-lg-6 pic" data-aos="fade-down-left">
        <img class="img-fluid" src="/img/menu-5.jpg" alt="">
        <img class="img-fluid" src="/img/menu-6.jpg" alt="">
    </div>
  </div>
</div>
</template>

<script>
import { filter, urlize } from "@/functions";
import { menu } from "@/data";
import AppHomeText from "./app-home-text";

export default {
  components: {
    AppHomeText
  },
  data() {
    return {
      menu
    };
  },
  methods: {
    filter,
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
