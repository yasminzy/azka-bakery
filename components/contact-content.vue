<template>
  <div class="container mx-auto py-5 wrapper">
    <div
      class="d-lg-flex flex-column justify-content-between h-100"
      data-aos="fade-up-right">
      <contact-tel-acc/>
      <contact-map/>
    </div>

    <contact-form data-aos="fade-up-left"/>
  </div>
</template>

<script>
import ContactForm from "~/components/contact-form";
import ContactMap from "~/components/contact-map";
import ContactTelAcc from "~/components/contact-tel-acc";

export default {
  components: {
    ContactForm,
    ContactMap,
    ContactTelAcc
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-gap: 3rem;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
