<template>
<div class="container-fluid d-flex justify-content-center align-items-center py-5 mh-50" v-bind:id="urlize(heading)">
  <app-heading class="text-center" v-bind:cursive="cursive" v-bind:heading="heading" />
</div>
</template>

<script>
import { urlize } from "@/functions";
import AppHeading from "./app-heading";

export default {
  components: {
    AppHeading
  },
  props: {
    cursive: {
      type: String,
      required: true
    },
    heading: {
      type: String,
      required: true
    }
  },
  methods: {
    urlize
  }
};
</script>

<style lang="scss" scoped>
#recipes {
  background-image: url("/img/recipes.jpg");
}

#blend {
  background-image: url("/img/blend.jpg");
}

#menu {
  background-image: url("/img/menu.jpg");
}

#reservations {
  background-image: url("/img/reservations.jpg");
}

#about-us {
  background-image: url("/img/about-us.jpg");
}

#contact {
  background-image: url("/img/contact.jpg");
}

.container-fluid {
  background: fixed center center no-repeat;
  background-size: cover;
}

span {
  font-size: 3.5rem;

  @media (min-width: 576px) {
    font-size: 4.5rem;
  }
}

h2 {
  font-size: 3rem;
  letter-spacing: 0.25rem;
  margin-top: -2rem;

  @media (min-width: 576px) {
    font-size: 4.5rem;
    margin-top: -2.5rem;
  }
}

.mh-50 {
  min-height: 50vh;
}
</style>
