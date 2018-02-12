<template>
<div v-bind:class="'container-fluid d-flex justify-content-center align-items-center py-5 mh-' + height" v-bind:id="urlize(title)">
  <app-title class="text-center" v-show="!empty" v-bind:cursive="cursive" v-bind:title="title" data-aos="fade" />
</div>
</template>

<script>
import { urlize } from "@/functions";
import AppTitle from "./app-title";

export default {
  components: {
    AppTitle
  },
  props: {
    cursive: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      default: 50
    },
    empty: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    urlize
  }
};
</script>

<style lang="scss" scoped>
#recipes {
  background-image: url("../assets/recipes.jpg");
}

#blend {
  background-image: url("../assets/blend.jpg");
}

#products {
  background-image: url("../assets/order.jpg");
}

#about-us {
  background-image: url("../assets/about-us.jpg");
}

#bakery {
  background-image: url("../assets/bakery.jpg");
}

#contact {
  background-image: url("../assets/contact.jpg");
}

#sent {
  background-image: url("../assets/sent.jpg");
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
