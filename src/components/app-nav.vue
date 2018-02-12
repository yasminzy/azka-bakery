<template>
<nav class="navbar navbar-expand-md navbar-dark w-100" data-aos="fade-down" data-aos-duration="800">
  <router-link class="navbar-brand" to="/">
    <img class="d-inline-block align-top" src="@/assets/logo.png" alt="Logo" width="30" height="30" />

    <span class="name text-light font-weight-bold">AZKA</span>
  </router-link>

  <button class="border-0 navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav text-right ml-auto w-auto">
      <li class="nav-item" v-for="(item, index) in menu" v-bind:key="index">
        <router-link exact class="nav-link mx-2 pb-1 px-0" v-bind:to="to(item)">
          {{ item.label || item }}
        </router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          to: "/",
          label: "Welcome"
        },
        "Order",
        "About",
        "Contact"
      ]
    };
  },
  methods: {
    to(input) {
      if (input.label) {
        return input.to;
      } else {
        return `/${input.toLowerCase()}`;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  z-index: 1;
}

.name {
  letter-spacing: 0.25rem;
}

@media (min-width: 992px) {
  .nav-link.router-link-active {
    border-bottom: 0.125rem solid rgba(255, 255, 255, 0.5);
  }
}
</style>
