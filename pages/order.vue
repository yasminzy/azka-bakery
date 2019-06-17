<template>
  <div class="mh-100">
    <AppBanner cursive="delightful" title="products" class="mb-5" />

    <OrderProductType
      type="cake"
      title="cakes &amp; cupcakes"
      data-aos="flip-left"
    />
    <OrderProductType
      type="pie"
      title="pies &amp; tarts"
      data-aos="flip-right"
    />
    <OrderProductType type="cookie" title="cookies" data-aos="flip-left" />
    <OrderProductType type="bread" title="breads" data-aos="flip-right" />
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
