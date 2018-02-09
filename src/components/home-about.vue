<template>
<div class="container-fluid py-5 d-flex justify-content-center">
  <div class="container mx-auto row">
    <div class="col-lg-6 text-center" data-aos="fade-left">
      <app-heading class="text-dark" cursive="Discover" heading="OUR STORY" color="dark" />

      <app-home-content content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, consequatur reprehenderit rem beatae accusantium possimus sunt cupiditate officiis quas tenetur?" to="about" link="about us" />
    </div>

    <div class="col-lg-6 pic" data-aos="fade-right">
      <div class="img-wrapper">
        <img class="hvr-grow img-fluid" src="img/about.jpg" alt="Food">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import AppHeading from "./app-heading";
import AppHomeContent from "./app-home-content";

export default {
  components: {
    AppHeading,
    AppHomeContent
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
