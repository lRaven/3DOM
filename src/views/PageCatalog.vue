<template>
	<div class="page-catalog">
		<the-header />

		<main class="page-catalog__main main">
			<section class="page-catalog__list">
				<div class="page-catalog__list-wrapper center">
					<catalog-filters />
					<v-card-min
						class="animate__animated animate__fadeInUp wow"
						v-for="apartment in apartments"
						:key="apartment.id"
						:data="apartment"
					></v-card-min>
				</div>
			</section>
		</main>
	</div>
</template>

<script>
	import TheHeader from "@/components/general/TheHeader.vue";

	import CatalogFilters from "@/components/general/catalog/CatalogFilters.vue";
	import vCardMin from "@/components/general/catalog/v-card-min.vue";

	import { mapState } from "vuex";

	export default {
		name: "PageCatalog",
		computed: {
			...mapState({
				apartments: (state) => state.catalog.apartments,
			}),
		},
		components: {
			TheHeader,

			CatalogFilters,
			vCardMin,
		},
	};
</script>

<style lang="scss" scoped>
	.page-catalog {
		.catalog-filters {
			margin-bottom: 4rem;
			grid-column: 1/5;
			@media (max-width: 1140px) {
				grid-column: 1/4;
			}
			@media (max-width: 1023px) {
				grid-column: 1/3;
			}
			@media (max-width: 570px) {
				grid-column: 1/2;
			}
		}
		&__list {
			&-wrapper {
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				min-height: 100vh;
				grid-gap: 2rem 2.5rem;
				@media (max-width: 1140px) {
					grid-template-columns: repeat(3, 1fr);
				}
				@media (max-width: 1023px) {
					grid-template-columns: repeat(2, 1fr);
				}
				@media (max-width: 570px) {
					grid-template-columns: 1fr;
				}
			}
		}
		&__main {
			padding-top: 12rem;
			@media (max-width: 767px) {
				padding-top: 7rem;
			}
		}
	}
</style>
