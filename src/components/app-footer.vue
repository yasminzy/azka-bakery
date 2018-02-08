<template>
<footer class="mt-auto">
  <div class="text-center" data-aos="flip-up">
    <a class="btn btn-light rounded-circle text-muted top" href="#top">
      <i class="icon ion-chevron-up"></i><br>
      TOP
    </a>
  </div>

  <div class="bg-black container-fluid pt-5 pb-4 text-white">
    <div class="container my-3 mx-auto row" data-aos="flip-down">
      <div class="col-sm-6">
        <h3 class="h6 mb-3 mb-sm-4">LOCATIONS</h3>

        <ul class="list-unstyled row">
          <li class="col-lg-6 mb-2" v-for="(item, index) in locations" v-bind:key="index">
            <p class="mb-0">{{ item.address }}<br>{{ item.city}}</p>
          </li>
        </ul>
      </div>

      <div class="col-sm-6">
        <h3 class="h6 mt-3 mt-sm-0 mb-3 mb-sm-4">HOURS</h3>

        <ul class="list-unstyled row">
          <li class="col-md-6 col-lg-4 mb-2" v-for="(item, index) in hours" v-bind:key="index">
            <p class="mb-0" v-if="item.days">{{ item.days }}<br>{{ item.hours }}</p>
            <p class="mb-0" v-else>{{ item }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="bg-dark container-fluid py-2 text-light">
    <div class="container">
      <small>&copy; Copyright 2018 Developed by
        <a class="text-warning">Yasmin ZY</a>
      </small>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  data() {
    return {
      locations: [
        {
          address: "952 Godpo Ridge",
          city: "Redmowkuz, BE - 19347"
        },
        {
          address: "881 Juwed Parkway",
          city: "Tidniji, BE - 37589"
        }
      ],
      hours: [
        {
          days: "Monday - Thursday",
          hours: "5:30pm - 10:00pm"
        },
        {
          days: "Friday & Saturday",
          hours: "5:30pm - 11:00pm"
        },
        "Available for private events on Sunday"
      ]
    };
  }
};
</script>

<style scoped>
.top {
  min-height: 3rem;
  min-width: 3rem;
  position: relative;
  top: 1.5rem;
}

.bg-black {
  background-color: #212529;
}
</style>
