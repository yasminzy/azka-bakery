<template>
<div class="mh-100">
  <app-banner class="mb-5" cursive="delightful" title="products" />

  <menu-type type="cake" title="cakes &amp; cupcakes" data-aos="flip-left" />
  <menu-type type="pie" title="pies &amp; tarts" data-aos="flip-right" />
  <menu-type type="cookie" title="cookies" data-aos="flip-left" />
  <menu-type type="bread" title="breads" data-aos="flip-right" />
</div>
</template>

<script>
import AppBanner from "@/components/app-banner";
import MenuType from "@/components/menu-type";

export default {
  components: {
    AppBanner,
    MenuType
  }
};
</script>

<style scoped>

</style>
