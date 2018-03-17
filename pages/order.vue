<template>
<div class="mh-100">
  <app-banner class="mb-5" cursive="delightful" title="products"/>

  <order-product-type type="cake" title="cakes &amp; cupcakes" data-aos="flip-left"/>
  <order-product-type type="pie" title="pies &amp; tarts" data-aos="flip-right"/>
  <order-product-type type="cookie" title="cookies" data-aos="flip-left"/>
  <order-product-type type="bread" title="breads" data-aos="flip-right"/>
</div>
</template>

<script>
import AppBanner from "~/components/app-banner";
import OrderProductType from "~/components/order-product-type";

export default {
  components: {
    AppBanner,
    OrderProductType
  }
};
</script>

<style scoped>
</style>
