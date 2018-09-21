<template>
  <nav
    class="navbar navbar-expand-md navbar-dark w-100"
    data-aos="fade-down"
    data-aos-duration="800">
    <router-link
      class="navbar-brand"
      to="/">
      <img
        src="~/assets/img/logo.png"
        alt="Logo"
        height="30"
        width="30"
        class="d-inline-block align-top mr-2">

      <span class="name text-light font-weight-bold">AZKA</span>
    </router-link>

    <button
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      data-target="#navbarSupportedContent"
      data-toggle="collapse"
      type="button"
      class="border-0 navbar-toggler">

      <span class="navbar-toggler-icon"/>
    </button>

    <div
      id="navbarSupportedContent"
      class="collapse navbar-collapse">
      <ul class="navbar-nav text-right ml-auto w-auto">
        <li
          v-for="(item, index) in menu"
          v-bind:key="index"
          class="nav-item">
          <router-link
            v-bind:to="to(item)"
            class="nav-link mx-2 pb-1 px-0">
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
</style>
