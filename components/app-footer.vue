<template>
<footer class="mt-auto">
  <div class="text-center d-flex justify-content-center" data-aos="flip-up">
    <a class="bg-white btn rounded-circle text-muted top" href="#top">
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
    <div class="container d-flex align-items-center">
      <p class="mb-0 mr-4">&copy; 2018 The Azka. All rights reserved.
      </p>

      <ul class="list-unstyled d-flex justify-content-center align-items-center mb-0">
          <li v-for="(item, index) in accounts" v-bind:key="index">
            <a class="text-light" v-bind:href="item.link">
              <i v-bind:class="'icon ion-' + item.icon + ' px-2'"></i>
            </a>
          </li>
        </ul>
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
          days: "Monday - Friday",
          hours: "10:00am - 8:00pm"
        },
        {
          days: "Saturday & Sunday",
          hours: "10:00am - 9:00pm"
        },
        "National holidays closed"
      ],
      accounts: [
        {
          icon: "social-facebook",
          link: "https://www.facebook.com"
        },
        {
          icon: "social-instagram",
          link: "https://www.instagram.com"
        },
        {
          icon: "social-pinterest",
          link: "https://www.pinterest.com"
        },
        {
          icon: "social-twitter",
          link: "https://twitter.com"
        }
      ]
    };
  }
};
</script>

<style scoped>
footer {
  position: relative;
}
.top {
  min-height: 3rem;
  min-width: 3rem;
  position: absolute;
  top: -31px;
}

.bg-black {
  background-color: #212121;
}
</style>
