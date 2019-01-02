<template>
  <div>
    <IndexHeader />

    <IndexAbout />

    <AppBanner cursive="tasteful" title="recipes" />

    <IndexProducts />

    <AppBanner cursive="the perfect" title="blend" />

    <IndexOrder />
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
