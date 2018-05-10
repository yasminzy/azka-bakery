<template>
<div class="tel d-lg-flex justify-content-between align-items-center mb-5 mb-lg-0 ">
  <ul class="list-unstyled mb-3 mb-lg-0">
    <li v-for="(item, index) in contacts" v-bind:key="index">
      <a class="text-dark" v-bind:href="item.link">
        <p class="mb-1 mb-lg-0">
          <i v-bind:class="'icon ion-' + item.icon"></i>
          {{ item.text }}
        </p>
      </a>
    </li>
  </ul>

  <ul class="list-unstyled d-flex justify-content-center align-items-center mb-0">
    <li class="hvr-grow-rotate" v-for="(item, index) in accounts" v-bind:key="index">
      <a class="text-dark" v-bind:href="item.link">
        <i v-bind:class="'h3 icon ion-' + item.icon + ' px-3'"></i>
      </a>
    </li>
  </ul>
</div>
</template>

<script>
import { accounts } from "~/assets/js/data";

export default {
  data() {
    return {
      contacts: [
        {
          icon: "ios-telephone",
          link: "tel:4143576188",
          text: "(414) 357-6188"
        },
        {
          icon: "ios-telephone",
          link: "tel:5334624476",
          text: "(414) 462-4476"
        }
      ],
      accounts
    };
  }
};
</script>

<style lang="scss" scoped>
.tel {
  text-align: center;

  @media (min-width: 992px) {
    text-align: inherit;
  }
}

.hvr-grow-rotate {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}

.hvr-grow-rotate:hover,
.hvr-grow-rotate:focus,
.hvr-grow-rotate:active {
  -webkit-transform: scale(1.1) rotate(4deg);
  transform: scale(1.1) rotate(4deg);
}
</style>
