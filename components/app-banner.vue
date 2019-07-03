<template>
  <div
    :id="urlize(title)"
    :class="
      'container-fluid d-flex justify-content-center align-items-center parallax py-5 mh-' +
        height
    "
    title="title"
    data-aos="fade "
  />
</template>

<script>
import { urlize } from "@/assets/js/functions";

export default {
  props: {
    cursive: {
      type: String,
      default: ""
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
  background-image: url("~assets/img/recipes.jpg");
}

#blend {
  background-image: url("~assets/img/blend.jpg");
}

#products {
  background-image: url("~assets/img/order.jpg");
}

#about-us {
  background-image: url("~assets/img/about-us.jpg");
}

#bakery {
  background-image: url("~assets/img/bakery.jpg");
}

#contact {
  background-image: url("~assets/img/contact.jpg");
}

.parallax {
  background: center center no-repeat;
  background-size: cover;

  @media (min-width: 576px) {
    background-attachment: fixed;
  }
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
