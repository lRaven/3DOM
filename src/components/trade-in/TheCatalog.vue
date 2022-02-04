<template>
	<section class="catalog">
		<div class="catalog__container center">
			<div class="catalog__header">
				<h2
					class="catalog__title animate__animated animate__fadeInUp wow"
				>
					Вам остается выбрать квартиру в одном из наших проектов
				</h2>
				<div class="catalog__settings">
					<v-dropdown
						:description="'Выберите один из наших проектов:'"
						:selected="'Выберите из списка'"
						:options="[
							'АКАДЕМИЧЕСКИЙ',
							'DOLCE VITA',
							'АНДРЕЕВСКИЙ',
						]"
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
						<v-checkbox />
					</div>
				</div>
			</div>
			<div class="catalog__body">
				<div
					class="catalog__el animate__animated animate__fadeInUp wow"
				>
					<div class="catalog__tags">
						<trade-in-card-tag
							:text="'Волгоград'"
						></trade-in-card-tag>
						<trade-in-card-tag
							:text="'Бизнес-класс'"
						></trade-in-card-tag>
						<trade-in-card-tag
							:text="'Ворошиловский район'"
						></trade-in-card-tag>
					</div>
					<trade-in-card
						:src="'img/trade-in/academ.png'"
						:subtitle="'Клубный дом'"
						:title="'АКАДЕМИЧЕСКИЙ'"
						:min="'2,5 млн ₽'"
						:studios="'2,5 млн ₽'"
						:singleRoom="'2,5 млн ₽'"
						:twoRoom="'2,5 млн ₽'"
						:threeRoom="'2,5 млн ₽'"
						class="catalog__item"
					>
					</trade-in-card>
				</div>
				<div
					class="catalog__el animate__animated animate__fadeInUp wow"
				>
					<div class="catalog__tags">
						<trade-in-card-tag
							:text="'Волгоград'"
						></trade-in-card-tag>
						<trade-in-card-tag
							:text="'Комфорт-класс'"
						></trade-in-card-tag>
						<trade-in-card-tag
							:text="'Ворошиловский район'"
						></trade-in-card-tag>
					</div>
					<trade-in-card
						:src="'img/trade-in/dolce-vita.png'"
						:subtitle="'Жилой комплекс'"
						:title="'DOLCE VITA'"
						:min="'2,5 млн ₽'"
						:studios="'2,5 млн ₽'"
						:singleRoom="'2,5 млн ₽'"
						:twoRoom="'2,5 млн ₽'"
						:threeRoom="'2,5 млн ₽'"
						class="catalog__item"
					></trade-in-card>
				</div>
				<div
					class="catalog__el catalog__el-wide animate__animated animate__fadeInUp wow"
				>
					<div class="catalog__tags">
						<trade-in-card-tag
							:text="'Ахтубинск'"
						></trade-in-card-tag>
						<trade-in-card-tag
							:text="'Комфорт-класс'"
						></trade-in-card-tag>
						<trade-in-card-tag
							:text="'Уникальное фасадное решение'"
						></trade-in-card-tag>
						<trade-in-card-tag
							:text="'Огороженная территория'"
						></trade-in-card-tag>
					</div>
					<trade-in-card-wide
						:src="'img/trade-in/andreevsky.png'"
						:subtitle="'Жилой комплекс'"
						:title="'АНДРЕЕВСКИЙ'"
						:min="'2,5 млн ₽'"
						:studios="'2,5 млн ₽'"
						:singleRoom="'2,5 млн ₽'"
						:twoRoom="'2,5 млн ₽'"
						:threeRoom="'2,5 млн ₽'"
						class="catalog__item"
					>
					</trade-in-card-wide>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import VDropdown from "../general/v-dropdown.vue";
	import VSlider from "../general/v-slider.vue";
	import VCheckbox from "../general/v-checkbox.vue";
	import TradeInCard from "./trade-in-card.vue";
	import TradeInCardWide from "./trade-in-card-wide.vue";
	import TradeInCardTag from "./trade-in-card-tag.vue";

	export default {
		name: "Catalog",
		components: {
			VDropdown,
			VSlider,
			VCheckbox,
			TradeInCard,
			TradeInCardWide,
			TradeInCardTag,
		},
	};
</script>

<style lang="scss" scoped>
	.catalog {
		display: flex;
		align-items: center;
		padding: 2rem 0;
		&__container {
		}
		&__header {
			margin-bottom: 10rem;
		}
		&__title {
			font-size: var(--text-40);
			font-weight: 600;
			color: var(--dark);
			margin-bottom: 8rem;
		}
		&__settings {
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			gap: 2.3rem;
			div {
				width: 100%;
			}
		}
		&__checkboxes {
			display: flex;
			justify-content: space-between;
			gap: 1.8rem;
		}
		&__body {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: 96rem 1fr;
			grid-gap: 2rem 2.5rem;
		}
		&__el {
			position: relative;
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
				grid-area: auto/1/auto/3;
			}
		}
	}
</style>
