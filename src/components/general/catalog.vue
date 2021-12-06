<template>
  <section class="catalog">
    <div class="catalog__top">
      <div class="catalog__address">
        <dropdown></dropdown>
      </div>
      <img src="img/catalog/catalog-img.png" alt="" />
      <div class="catalog__price"></div>
    </div>
  </section>
</template>

<script>
import dropdown from "../global/dropdown.vue";
export default {
  name: "Catalog",
  components: {
    dropdown,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.catalog {
  padding-top: 3rem;
}
</style>