<template>
  <div class="mh-100">
    <app-banner
      cursive="easy"
      title="contact"/>
      
    <contact-content/>
  </div>
</template>

<script>
import AppBanner from "~/components/app-banner";
import ContactContent from "~/components/contact-content";

export default {
  components: {
    AppBanner,
    ContactContent
  }
};
</script>
