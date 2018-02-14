<template>
<div class="container-fluid py-5 d-flex justify-content-center">
  <div class="container mx-auto row">
    <div class="col-lg-6 text-center" data-aos="fade-left">
      <app-title class="text-dark" cursive="Discover" title="OUR STORY" color="dark" />

      <app-index-content content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, consequatur reprehenderit rem beatae accusantium possimus sunt cupiditate officiis quas tenetur?" to="about" link="about us" />
    </div>

    <div class="col-lg-6 pic" data-aos="fade-right">
      <div class="img-wrapper">
        <img class="hvr-grow img-fluid" src="~/assets/img/about.jpg" alt="Food">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import AppTitle from "./app-title";
import AppIndexContent from "./app-index-content";

export default {
  components: {
    AppTitle,
    AppIndexContent
  }
};
</script>

<style lang="scss" scoped>
.pic {
  margin-top: 3rem;

  @media (min-width: 992px) {
    margin-top: 0;
  }
}
</style>
