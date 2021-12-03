<template>
  <div class="theme-container">
    <page-header></page-header>
    <!-- <page-footer></page-footer> -->
    <call-button></call-button>
  </div>
</template>

<script>
import PageHeader from "./components/global/header.vue";
import CallButton from "./components/general/call.vue";
// import PageFooter from "./components/global/footer.vue";

export default {
  name: "App",
  components: {
    PageHeader,
    CallButton,
    // PageFooter,
  },
};
</script>

<style>
@import "./assets/css/variables.css";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap");
#app,
.theme-container {
  height: 100%;
}
</style>

<style lang="scss" scoped>
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
}
</style>
