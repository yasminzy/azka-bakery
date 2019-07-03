<template>
  <footer class="mt-auto">
    <div class="text-center d-flex justify-content-center" data-aos="flip-up">
      <a href="#top" class="bg-white btn rounded-circle text-muted top">
        <ion-icon name="arrow-dropup" /><br />
        TOP
      </a>
    </div>

    <div class="bg-black container-fluid pt-5 pb-4 text-white">
      <div class="container my-3 mx-auto row" data-aos="flip-down">
        <div class="col-sm-6">
          <h3 class="h6 mb-3 mb-sm-4">LOCATIONS</h3>

          <ul class="list-unstyled row">
            <li
              v-for="(item, index) in locations"
              :key="index"
              class="col-lg-6 mb-2"
            >
              <p class="mb-0">
                {{ item.address }}<br />
                {{ item.city }}
              </p>
            </li>
          </ul>
        </div>

        <div class="col-sm-6">
          <h3 class="h6 mt-3 mt-sm-0 mb-3 mb-sm-4">HOURS</h3>

          <ul class="list-unstyled row">
            <li
              v-for="(item, index) in hours"
              :key="index"
              class="col-md-6 col-lg-4 mb-2"
            >
              <p v-if="item.days" class="mb-0">
                {{ item.days }}<br />
                {{ item.hours }}
              </p>

              <p v-else class="mb-0">{{ item }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-dark container-fluid py-2 text-light">
      <div class="container d-flex align-items-center">
        <p class="mb-0 mr-4">&copy; 2018-2019 The Azka. All rights reserved.</p>

        <ul class="list-unstyled d-flex align-items-center mb-0">
          <li v-for="(item, index) in accounts" :key="index">
            <a :href="item.link" class="text-light">
              <ion-icon :name="item.icon" class="icon px-3" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import { accounts } from "@/assets/js/data";

export default {
  data() {
    return {
      locations: [
        {
          address: "952 Godpo Ridge",
          city: "1432 Bidom Avenue, NO - 19347"
        },
        {
          address: "881 Juwed Parkway",
          city: "1943 Nain Lane, NO - 37589"
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
      accounts
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
