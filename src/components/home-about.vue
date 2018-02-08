<template>
<div class="container-fluid py-5 d-flex justify-content-center">
  <div class="container row mx-auto">
    <app-home-text cursive="Discover" title="OUR STORY" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, consequatur reprehenderit rem beatae accusantium possimus sunt cupiditate officiis quas tenetur?" to="about" link="ABOUT US" data-aos="fade-left" />

    <div class="col-lg-6 pic d-flex align-items-center">
      <img class="img-fluid mx-auto" src="img/about.jpg" alt="Food" data-aos="fade-right">
    </div>
  </div>
</div>
</template>

<script>
import AppHomeText from "./app-home-text";

export default {
  components: {
    AppHomeText
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

// .h-100 {
//   display: block;
//   position: static;
//   background: url("/img/about.jpg") no-repeat center center;
//   background-size: cover;
// }
</style>
