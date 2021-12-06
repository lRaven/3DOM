<template>
  <section class="catalog center">
    <div class="catalog__top">
      <div class="catalog__address">
        <h3 class="catalog__title">Живу красиво!</h3>
        <p>Выбери своё жилище</p>
        <dropdown></dropdown>
      </div>
      <img src="img/catalog/catalog-img.png" alt="" />
      <div class="catalog__price"></div>
    </div>
  </section>
</template>

<script>
import dropdown from "./dropdown.vue";
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
  &__top {
    display: flex;
    gap: 2.4rem;
    img {
      border-radius: 2.5rem;
      overflow: hidden;
    }
  }
  &__address {
    h3 {
      margin: 5rem 0 0 2rem;
      font-size: var(--text-38);
      font-weight: 600;
      color: var(--dark);
      margin-bottom: 5.7rem;
    }
    p {
      margin-left: 2rem;
      font-weight: 600;
      font-size: var(--text-15);
      color: var(--gray);
      margin-bottom: 1.4rem;
    }
  }
}
</style>