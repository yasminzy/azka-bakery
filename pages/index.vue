<template>
<div>
  <index-header />
  <index-about />
  <app-banner cursive="tasteful" title="recipes" />
  <index-products />
  <app-banner cursive="the perfect" title="blend" />
  <index-order />
</div>
</template>

<script>
import IndexAbout from "~/components/index-about";
import AppBanner from "~/components/app-banner";
import IndexHeader from "~/components/index-header";
import IndexProducts from "~/components/index-products";
import IndexOrder from "~/components/index-order";

export default {
  components: {
    IndexAbout,
    AppBanner,
    IndexHeader,
    IndexProducts,
    IndexOrder
  }
};
</script>

<style scoped>

</style>
