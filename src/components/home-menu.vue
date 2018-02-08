<template>
<div class="container-fluid py-5 d-flex justify-content-center">
  <div class="container row mx-auto">
    <div class="col-lg-6 p-0 pic" data-aos="fade-up-left">
      <div class="d-flex align-items-center" v-for="(item, index) in filter(menu, 4)" v-bind:key="index">
        <img class="img-fluid mx-auto" v-bind:src="'img/' + urlize(item.name) + '.jpg'" v-bind:alt="item.name">
      </div>
    </div>

    <app-home-text cursive="Discover" title="MENU" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, consequatur reprehenderit rem beatae accusantium possimus sunt cupiditate officiis quas tenetur?" to="menu" link="VIEW THE FULL MENU" data-aos="fade-up-right" />
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
  margin-bottom: 3rem;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
}

img {
  // max-height: 200px;
}
</style>
