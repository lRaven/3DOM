<template>
  <div class="theme-container">
    <main class="main">
      <banner></banner>
      <catalog></catalog>
      <router-link to="/about">yo</router-link>
      <router-view></router-view>
    </main>
    <call-button></call-button>
    <!-- <page-footer></page-footer> -->
  </div>
</template>

<script>
import Banner from "../components/general/Banner.vue";
import Catalog from "../components/general/Catalog.vue";
import CallButton from "../components/general/Call.vue";

export default {
  name: "App",
  components: {
    Banner,
    Catalog,
    CallButton,
    // PageFooter,
  },

  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
@import "../assets/css/variables.css";
@import "../assets/scss/center.scss";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap");
#app,
.theme-container {
  height: auto;
}
body {
  font-family: "Montserrat", sans-serif;
}
* {
  scroll-behavior: smooth;
}
section {
  min-height: calc(100vh - 6rem);
}
</style>

<style lang="scss" scoped>
main {
  padding-top: 6rem;
}

@media (min-width: 768px) {
}
@media (min-width: 1024px) {
}
</style>
