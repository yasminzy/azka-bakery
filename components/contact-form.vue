<template>
  <div>
    <h2>Leave us a message</h2>

    <form
      action="https://formspree.io/yzyusrina@ymail.com"
      method="POST">
      <div class="form-group">
        <input
          id="name"
          name="name"
          placeholder="Name"
          type="text"
          class="form-control"
          required>
      </div>

      <div class="form-group">
        <input
          id="email"
          aria-describedby="emailHelp"
          name="_replyto"
          placeholder="Email"
          type="email"
          class="form-control"
          required>
      </div>

      <div class="form-group">
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here"
          rows="3"
          class="form-control"
          required/>
      </div>

      <input
        type="hidden"
        name="_subject"
        value="Azka - Contact">

      <input
        type="hidden"
        name="_next"
        value="https://azka.netlify.com/sent">

      <button
        type="submit"
        class="btn btn-block btn-primary text-white">
        <i class="icon ion-md-paper-plane"/>
        SEND
      </button>
    </form>
  </div>
</template>
