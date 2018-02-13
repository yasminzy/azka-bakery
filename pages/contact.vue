<template>
<div class="mh-100">
  <app-banner cursive="easy" title="contact" />

  <div class="container py-5 text-center">
    <form class="mx-auto" name="contact-azka" action="https://formspree.io/yzyusrina@ymail.com" method="POST" data-aos="slide-up">
      <div class="form-group mb-5">
        <label for="name">Name</label>
        <input class="border-left-0 border-right-0 border-top-0 form-control" id="name" type="text" name="name" required>
      </div>

      <div class="form-group mb-5">
        <label for="email">Email</label>
        <input class="border-left-0 border-right-0 border-top-0 form-control" id="email" type="email" name="_replyto" aria-describedby="emailHelp" required>
      </div>

       <div class="form-group mb-5">
        <label for="message">Message</label>
        <textarea class="border-left-0 border-right-0 border-top-0 form-control" id="message" rows="3" name="message" required></textarea>
      </div>

      <input type="hidden" name="_next" value="https://bakery-azka.netlify.com/sent" />

      <button type="submit" class="btn-block btn btn-primary">
        <i class="icon ion-paper-airplane"></i>
        SEND
      </button>
    </form>
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
form {
  max-width: 80ch;
}
</style>
