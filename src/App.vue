<template>
  <page-header></page-header>
  <router-view></router-view>
</template>

<script>
import PageHeader from "./components/global/Header.vue";
// import PageFooter from "./components/global/Footer.vue";
export default {
  components: {
    PageHeader,
  },
};
</script>

