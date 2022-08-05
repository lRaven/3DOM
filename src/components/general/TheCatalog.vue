<template>
	<section class="catalog">
		<div class="catalog__container center">
			<div class="catalog__header">
				<h2
					class="catalog__title animate__animated animate__fadeInUp wow"
				>
					{{ title }}
				</h2>
				<div class="catalog__settings">
					<v-dropdown
						:description="'Выберите один из наших проектов:'"
						:selected="'Выберите из списка'"
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
						class="catalog__checkboxes animate__animated animate__fadeInUp wow"
					>
						<v-checkbox
							:items="[
								{ id: 1, text: 'Заселён' },
								{ id: 2, text: '2022' },
								{ id: 3, text: '2023' },
								{ id: 4, text: '2024' },
							]"
							:name="'dates'"
						></v-checkbox>
					</div>
				</div>
				<div class="catalog__submit">
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
						<v-button :text="'Посмотреть'" class="blue"></v-button>
					</router-link>
					<span
						class="animate__animated animate__fadeInRight wow"
					></span>
				</div>
			</div>
			<div class="catalog__body">
				<div
					class="catalog__el animate__animated animate__fadeInUp wow"
				>
					<div class="catalog__tags">
						<v-card-tag :text="'Волгоград'"></v-card-tag>
						<v-card-tag :text="'Бизнес-класс'"></v-card-tag>
						<v-card-tag :text="'Ворошиловский район'"></v-card-tag>
					</div>
					<v-card
						:src="'img/general/academ.png'"
						:subtitle="'Жилой комплекс'"
						:title="'АКАДЕМИЧЕСКИЙ'"
						:min="'1,5 млн ₽'"
						:studios="'1,5 млн ₽'"
						:singleRoom="'2,5 млн ₽'"
						:twoRoom="'3,5 млн ₽'"
						:threeRoom="'4,5 млн ₽'"
						:link="'/academ'"
						class="catalog__item"
					>
					</v-card>
				</div>
				<div
					class="catalog__el animate__animated animate__fadeInUp wow"
				>
					<div class="catalog__tags">
						<v-card-tag :text="'Волгоград'"></v-card-tag>
						<v-card-tag :text="'Комфорт-класс'"></v-card-tag>
						<v-card-tag :text="'Ворошиловский район'"></v-card-tag>
					</div>
					<v-card
						:src="'img/general/dolce-vita.png'"
						:subtitle="'Жилой комплекс'"
						:title="''"
						:min="'2,5 млн ₽'"
						:studios="'2,5 млн ₽'"
						:singleRoom="'2,5 млн ₽'"
						:twoRoom="'2,5 млн ₽'"
						:threeRoom="'2,5 млн ₽'"
						:link="'/'"
						class="catalog__item"
					></v-card>
				</div>
				<div
					class="catalog__el catalog__el-wide animate__animated animate__fadeInUp wow"
				>
					<div class="catalog__tags">
						<v-card-tag :text="'Ахтубинск'"></v-card-tag>
						<v-card-tag :text="'Комфорт-класс'"></v-card-tag>
						<v-card-tag
							:text="'Уникальное фасадное решение'"
						></v-card-tag>
						<v-card-tag
							:text="'Огороженная территория'"
						></v-card-tag>
					</div>
					<v-card-wide
						:src="'img/general/andreevsky.png'"
						:subtitle="'Жилой комплекс'"
						:title="''"
						:min="'2,5 млн ₽'"
						:studios="'2,5 млн ₽'"
						:singleRoom="'2,5 млн ₽'"
						:twoRoom="'2,5 млн ₽'"
						:threeRoom="'2,5 млн ₽'"
						:link="'/'"
						class="catalog__item"
					>
					</v-card-wide>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import vDropdown from "./v-dropdown.vue";
	import vSlider from "./v-slider.vue";
	import vCheckbox from "./v-checkbox.vue";
	import vCard from "./v-card.vue";
	import vCardWide from "./v-card-wide.vue";
	import vCardTag from "./v-card-tag.vue";
	import vButton from "./v-button.vue";

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
			vCardWide,
			vCardTag,
			vButton,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.catalog {
		display: flex;
		align-items: center;
		padding: 2rem 1.5rem;
		margin-bottom: -5rem;

		&__container {
		}
		&__header {
			margin-bottom: 4rem;
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
			span {
				display: block;
				height: 0.2rem;
				width: 100%;
				background-color: $blue;
			}
			.button {
				padding: 1.2rem 7rem;
			}
		}

		&__body {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: 96rem 1fr;
			grid-gap: 2rem 2.5rem;
			height: fit-content;
		}
		&__el {
			position: relative;
			&:last-child {
				height: calc(100% - 5rem);
			}
		}
		&__tags {
			position: absolute;
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-end;
			gap: 0.7rem;
			max-width: 30rem;
			top: 2.8rem;
			right: 2.8rem;
			min-height: 2.7rem;
		}
		&__el {
			&-wide {
				grid-column: 1/3;
			}
		}
	}

	@media (max-width: 1260px) {
		.catalog {
			&__header,
			&__submit {
				display: none;
			}
			&__body {
				display: block;
			}
			&__el {
				&:nth-child(n + 2) {
					display: none;
				}
			}
		}
	}

	@media (max-width: 540px) {
		.catalog {
			padding: 2rem 1rem;
			&__tags {
				right: 1.5rem;
				top: 1.5rem;
			}
		}
	}
</style>
