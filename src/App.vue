<template>
  <div class="theme-container">
    <page-header></page-header>
    <!-- <page-footer></page-footer> -->
    <main class="main">
      <banner></banner>
    </main>
    <call-button></call-button>
  </div>
</template>

<script>
import PageHeader from "./components/global/header.vue";
import Banner from "./components/general/banner.vue";
import CallButton from "./components/general/call.vue";
// import PageFooter from "./components/global/footer.vue";

export default {
  name: "App",
  components: {
    PageHeader,
    Banner,
    CallButton,
    // PageFooter,
  },
};
</script>

<style>
@import "./assets/css/variables.css";
@import "./assets/scss/center.scss";
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
.main {
  padding-top: 6rem;
}

@media (min-width: 768px) {
}
@media (min-width: 1024px) {
}
</style>
