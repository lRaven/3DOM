<template>
	<section class="the-catalog">
		<div class="the-catalog__container center">
			<h2 data-aos="fade-up" class="the-catalog__title" v-show="title">
				{{ title }}
			</h2>
			<div class="the-catalog__body">
				<v-card
					data-aos="fade-up"
					v-for="project in projects"
					:key="project.id"
					:data="project"
				>
				</v-card>

				<catalog-filters
					@action_btn="this.$router.push({ name: 'Catalog' })"
				></catalog-filters>

				<v-card-min
					data-aos="fade-up"
					v-for="apartment in secondary_housing"
					:key="apartment.id"
					:data="apartment"
				></v-card-min>
			</div>
		</div>
	</section>
</template>

<script>
	import vCard from "@/components/general/catalog/v-card.vue";
	import vCardMin from "@/components/general/catalog/v-card-min.vue";
	import CatalogFilters from "@/components/general/catalog/CatalogFilters.vue";

	export default {
		name: "TheCatalog",
		props: { title: String },
		components: {
			vCard,
			vCardMin,
			CatalogFilters,
		},
		data: () => ({
			projects: [
				{
					id: 1,
					image: "/img/general/academ.png",
					title: "Жилой комплекс",
					subtitle: "",
					min: "1.5 млн ₽",
					prices: {
						studios: "1,5 млн ₽",
						single_room: "2,5 млн ₽",
						two_room: "3,5 млн ₽",
						three_room: "4,5 млн ₽",
					},
					tags: [
						{ id: 1, text: "Волгоград" },
						{ id: 2, text: "Бизнес-класс" },
						{ id: 3, text: "Ворошиловский район" },
					],
					link: { name: "Academ" },
				},
				{
					id: 2,
					image: "/img/general/dolce-vita.png",
					title: "Жилой комплекс",
					subtitle: "",
					min: "1.5 млн ₽",
					prices: {
						studios: "1,5 млн ₽",
						single_room: "2,5 млн ₽",
						two_room: "3,5 млн ₽",
						three_room: "4,5 млн ₽",
					},
					tags: [
						{ id: 1, text: "Волгоград" },
						{ id: 2, text: "Бизнес-класс" },
						{ id: 3, text: "Ворошиловский район" },
					],
					link: "/",
				},
			],
			secondary_housing: [
				{
					id: 1,
					image: "/img/general/catalog/secondary_apartment-1.webp",
					rooms: 1,
					district: "Дзержинский",
					address: "ул. им. Хорошева, 16",
					area: 44.7,
					price: 4.7,
					link: "/",
				},
				{
					id: 2,
					image: "/img/general/catalog/secondary_apartment-2.webp",
					rooms: 2,
					district: "Дзержинский",
					address: "ул. им. Константина Симонова, 2",
					area: 47.9,
					price: 6.25,
					link: "/",
				},
				{
					id: 3,
					image: "/img/general/catalog/secondary_apartment-3.webp",
					rooms: 1,
					district: "Советский",
					address: "ул. Тимирязева, 46А",
					area: 39.3,
					price: 3.55,
					link: "/",
				},
				{
					id: 4,
					image: "/img/general/catalog/secondary_apartment-4.webp",
					rooms: 3,
					district: "Центральный",
					address: "ул. Советская, 20",
					area: 85,
					price: 8.2,
					link: "/",
				},
				{
					id: 5,
					image: "/img/general/catalog/secondary_apartment-5.webp",
					rooms: 2,
					district: "Дзержинский",
					address: "ул. 8-й Воздушной Армии, 39",
					area: 50.3,
					price: 4.2,
					link: "/",
				},
				{
					id: 6,
					image: "/img/general/catalog/secondary_apartment-6.webp",
					rooms: 2,
					district: "Советский",
					address: "ул. Тимирязева, 15",
					area: 55.2,
					price: 6,
					link: "/",
				},
				{
					id: 7,
					image: "/img/general/catalog/secondary_apartment-7.webp",
					rooms: 2,
					district: "Центральный",
					address: "пр-т им. В.И. Ленина, 16",
					area: 56,
					price: 8.6,
					link: "/",
				},
				{
					id: 8,
					image: "/img/general/catalog/secondary_apartment-8.webp",
					rooms: 1,
					district: "Центральный",
					address: "ул. Селенгинская, 11",
					area: 50,
					price: 7,
					link: "/",
				},
			],
		}),
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-catalog {
		display: flex;
		align-items: center;
		padding: 2rem 1.5rem;

		@media (max-width: 540px) {
			padding: 2rem 1rem;
		}

		&__title {
			font-size: 4rem;
			font-weight: 600;
			color: $dark;
			margin-bottom: 8rem;
		}

		.catalog-filters {
			grid-column: 1/5;
			margin: 4rem 0;

			@media (max-width: 1300px) {
				grid-column: 1/3;
			}
			@media (max-width: 630px) {
				grid-column: 1/2;
			}
		}

		&__body {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-gap: 2rem 2.5rem;
			@media (max-width: 1300px) {
				grid-template-columns: repeat(2, 1fr);
			}
			@media (max-width: 630px) {
				grid-template-columns: 1fr;
			}

			.v-card {
				&:first-child {
					grid-column: 1/3;
					@media (max-width: 1300px) {
						grid-column: 1/3;
					}
					@media (max-width: 630px) {
						grid-column: 1/2;
					}
				}
				&:nth-child(2) {
					grid-column: 3/5;
					@media (max-width: 1300px) {
						grid-column: 1/3;
					}
					@media (max-width: 630px) {
						grid-column: 1/2;
					}
				}
			}
		}
	}
</style>
