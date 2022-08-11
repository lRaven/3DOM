<template>
	<section class="the-catalog">
		<div class="the-catalog__container center">
			<div class="the-catalog__header">
				<h2
					class="the-catalog__title animate__animated animate__fadeInUp wow"
				>
					{{ title }}
				</h2>
				<div class="the-catalog__settings">
					<v-dropdown
						description="Выберите один из наших проектов:"
						selected="Выберите из списка"
						:options="['АКАДЕМИЧЕСКИЙ']"
						class="animate__animated animate__fadeInUp wow"
					></v-dropdown>
					<v-slider
						title="Укажите примерную стоимость, млн руб"
						:min="2.2"
						:max="100"
						:value="22.2"
						:step="0.2"
						class="min-max animate__animated animate__fadeInUp wow"
						:minMax="true"
					></v-slider>
					<div
						class="the-catalog__checkboxes animate__animated animate__fadeInUp wow"
					>
						<v-checkbox
							:items="[
								{ id: 1, text: 'Заселён' },
								{ id: 2, text: '2022' },
								{ id: 3, text: '2023' },
								{ id: 4, text: '2024' },
							]"
							name="dates"
						></v-checkbox>
					</div>
				</div>
				<div class="the-catalog__submit">
					<span
						class="animate__animated animate__fadeInLeft wow"
					></span>
					<router-link
						class="animate__animated animate__fadeInUp wow"
						:to="{
							name: 'Academ',
							params: { section: '#apartments' },
						}"
					>
						<v-button text="Посмотреть" class="blue"></v-button>
					</router-link>
					<span
						class="animate__animated animate__fadeInRight wow"
					></span>
				</div>
			</div>
			<div class="the-catalog__body">
				<v-card
					v-for="project in projects"
					:key="project.id"
					:data="project"
					class="animate__animated animate__fadeInUp wow"
				>
				</v-card>

				<v-card-min
					class="animate__animated animate__fadeInUp wow"
					v-for="apartment in secondary_housing"
					:key="apartment.id"
					:data="apartment"
				></v-card-min>

				<v-button
					text="Посмотреть ещё"
					@click="this.$router.push('/')"
					class="animate__animated animate__fadeInUp wow"
				></v-button>
			</div>
		</div>
	</section>
</template>

<script>
	import vDropdown from "@/components/UI/general/v-dropdown.vue";
	import vSlider from "@/components/UI/general/v-slider.vue";
	import vCheckbox from "@/components/UI/general/v-checkbox.vue";
	import vCard from "@/components/general/catalog/v-card.vue";
	import vCardMin from "@/components/general/catalog/v-card-min.vue";
	import vButton from "@/components/UI/general/v-button.vue";

	export default {
		name: "TheCatalog",
		props: {
			title: String,
		},
		components: {
			vDropdown,
			vSlider,
			vCheckbox,
			vCard,
			vCardMin,
			vButton,
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

		&__header {
			margin-bottom: 4rem;
			@media (max-width: 1240px) {
			}
		}
		&__title {
			font-size: 4rem;
			font-weight: 600;
			color: $dark;
			margin-bottom: 8rem;
		}
		&__settings {
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			gap: 2.3rem;
			margin-bottom: 5rem;
			div {
				width: 100%;
			}
		}
		&__checkboxes {
			display: flex;
			justify-content: space-between;
			gap: 1.8rem;
		}
		&__submit {
			display: flex;
			align-items: center;
			gap: 5rem;
			@media (max-width: 1240px) {
			}
			span {
				display: block;
				height: 0.2rem;
				width: 100%;
				background-color: $blue;
			}
			.v-button {
				padding: 1.2rem 7rem;
			}
		}

		&__body {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-gap: 2rem 2.5rem;
			@media (max-width: 1240px) {
				grid-template-columns: repeat(2, 1fr);
			}
			@media (max-width: 640px) {
				grid-template-columns: 1fr;
			}

			.v-card {
				@media (max-width: 1320px) {
					grid-column: 1/5 !important;
				}
				@media (max-width: 1240px) {
					grid-column: 1/3 !important;
				}
				@media (max-width: 640px) {
					grid-column: 1/1 !important;
				}
				&:first-child {
					grid-column: 1/3;
				}
				&:nth-child(2) {
					grid-column: 3/5;
				}
			}
			.v-button {
				grid-column: 1/5;
				margin: auto;
				@media (max-width: 1240px) {
					grid-column: 1/3;
				}
				@media (max-width: 640px) {
					grid-column: 1/1;
				}
			}
		}
	}

	// @media (max-width: 1260px) {
	// 	.the-catalog {
	// 		&__header,
	// 		&__submit {
	// 			display: none;
	// 		}
	// 		&__body {
	// 			display: block;
	// 		}
	// 	}
	// }

	@media (max-width: 540px) {
		.the-catalog {
			padding: 2rem 1rem;
		}
	}
</style>
