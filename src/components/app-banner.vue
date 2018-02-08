<template>
<div class="container-fluid d-flex justify-content-center align-items-center py-5 mh-50" v-bind:id="title">
  <div class="container text-center" data-aos="fade">
    <span class="cursive m-0 text-capitalize text-warning">{{ cursive }}</span>
    <h2 class="font-weight-bold text-uppercase text-white">{{ title }}</h2>
  </div>
</div>
</template>

<script>
export default {
  props: {
    cursive: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
#recipes {
  background: url("/img/recipes.jpg") no-repeat center center;
}

#blend {
  background: url("/img/blend.jpg") no-repeat center center;
}

#menu {
  background: url("/img/menu.jpg") no-repeat center center;
}

#reservations {
  background: url("/img/menu.jpg") no-repeat center center;
  // background: url("/img/reservations.jpg") no-repeat center center;
}

#news {
  background: url("/img/menu.jpg") no-repeat center center;
  // background: url("/img/news.jpg") no-repeat center center;
}

#features {
  background: url("/img/menu.jpg") no-repeat center center;
  // background: url("/img/features.jpg") no-repeat center center;
}

#contact {
  background: url("/img/menu.jpg") no-repeat center center;
  // background: url("/img/contact.jpg") no-repeat center center;
}

.container-fluid {
  background-size: cover;
}

span {
  font-size: 2.5rem;

  @media (min-width: 576px) {
    font-size: 4.5rem;
  }
}

h2 {
  letter-spacing: 0.25rem;
  margin-top: -1rem;
  font-size: 3rem;

  @media (min-width: 576px) {
    font-size: 4.5rem;
  }
}

.mh-50 {
  min-height: 50vh;
}
</style>
