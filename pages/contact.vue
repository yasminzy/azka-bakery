<template>
  <div class="mh-100">
    <AppBanner cursive="easy" title="contact" />

    <ContactContent />
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
