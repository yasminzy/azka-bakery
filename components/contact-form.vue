<template>
<div>
  <h2>Leave us a message</h2>

  <form action="https://formspree.io/yzyusrina@ymail.com" method="POST">
    <div class="form-group">
      <input class="form-control" id="name" type="text" name="name" placeholder="Name" required>
    </div>

    <div class="form-group">
      <input class="form-control" id="email" type="email" name="_replyto" aria-describedby="emailHelp" placeholder="Email" required>
    </div>

      <div class="form-group">
      <textarea class="form-control" id="message" rows="3" name="message" placeholder="Write your message here" required></textarea>
    </div>

    <input type="hidden" name="_next" value="https://azka.netlify.com/sent"/>

    <button type="submit" class="btn btn-block btn-primary text-white">
      <i class="icon ion-paper-airplane"></i>
      SEND
    </button>
  </form>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
