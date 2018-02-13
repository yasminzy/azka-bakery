<template>
<div class="mh-100">
  <app-banner cursive="discover" title="about us" />

  <div class="container py-5" data-aos="fade-up">
    <h3 class="font-weight-bold h5 mb-4 text-center text-uppercase">History</h3>

    <p class="mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. A harum sequi eos, neque tenetur perferendis nobis illo culpa non, sunt magni aperiam voluptatibus? Aliquam dicta quam asperiores magnam placeat praesentium.</p>

    <p class="mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repellendus odit, qui neque minima commodi minus nam asperiores illum necessitatibus quos illo voluptatem, atque, ipsum error. Recusandae asperiores vel architecto!</p>

    <p class="mb-0 mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod quam enim quisquam illum laudantium voluptate deleniti dolorem! Quis eveniet atque officia modi est laudantium ullam tempore. Ea tempore deleniti cum.</p>
  </div>

  <div class="container d-flex flex-column align-items-center pb-5" data-aos="fade-down">

    <div class="img-wrapper mx-auto rounded-circle mb-3">
      <img class="hvr-grow img-fluid" src="~/assets/img/owner.jpg" alt="Owner">
    </div>

    <blockquote class="blockquote text-center">
      <p class="mb-0 font-italic">Here we want to share with you our passion for quality baked goods.</p>
      <footer class="blockquote-footer">Azka</footer>
    </blockquote>

  </div>

  <app-banner cursive="" title="bakery" v-bind:height="50" empty />

  <div class="container py-5" data-aos="fade-left">
    <h3 class="font-weight-bold h5 mb-4 text-center text-uppercase">Today</h3>

    <p class="mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam itaque culpa cupiditate, iure quibusdam doloribus maiores earum labore exercitationem quae repellendus. Sint dicta quam autem sed rem, corrupti ex optio.</p>

    <p class="mb-0 mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo provident sapiente iure. Esse aliquam laborum veritatis quia maxime odit quisquam, dolore quos itaque ut voluptate consequuntur. Dicta vitae ipsam vero!</p>
  </div>
</div>
</template>

<script>
import AppBanner from "~/components/app-banner";

export default {
  components: {
    AppBanner
  }
};
</script>

<style scoped>
img {
  max-width: 240px;
}
</style>
