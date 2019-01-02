<template>
  <div>
    <h2>Leave us a message</h2>

    <form action="https://formspree.io/yzyusrina@ymail.com" method="POST">
      <div class="form-group">
        <input
          id="name"
          class="form-control"
          name="name"
          placeholder="Name"
          type="text"
          required
        />
      </div>

      <div class="form-group">
        <input
          id="email"
          class="form-control"
          name="_replyto"
          placeholder="Email"
          type="email"
          aria-describedby="emailHelp"
          required
        />
      </div>

      <div class="form-group">
        <textarea
          id="message"
          class="form-control"
          name="message"
          placeholder="Write your message here"
          required
          rows="3"
        />
      </div>

      <input name="_subject" type="hidden" value="Azka - Contact" />>

      <input name="_next" type="hidden" value="https://azka.netlify.com/sent" />

      <button class="btn btn-block btn-primary text-white" type="submit">
        <ion-icon name="paper-plane" />
        SEND
      </button>
    </form>
  </div>
</template>
