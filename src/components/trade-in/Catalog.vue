<template>
	<section class="catalog">
		<div class="catalog__container center">
			<div class="catalog__header">
				<h2 class="catalog__title">
					Вам остается выбрать квартиру в одном из наших проектов
				</h2>
				<div class="catalog__settings">
					<Dropdown
						:description="'Выберите один из наших проектов:'"
					></Dropdown>
					<RangeSlider
						title="Укажите примерную стоимость, млн руб"
						:min="2.2"
						:max="100"
						:value="22.2"
						:step="0.2"
						class="min-max"
						:minMax="true"
					></RangeSlider>
					<div class="catalog__checkboxes">
						<Checkbox />
					</div>
				</div>
			</div>
			<div class="catalog__body">
				<Card
					:src="'img/trade-in/academ.png'"
					:subtitle="'Жилой комплекс'"
					:title="'АКАДЕМИЧЕСКИЙ'"
					:min="'2,5 млн ₽'"
					:studios="'2,5 млн ₽'"
					:singleRoom="'2,5 млн ₽'"
					:twoRoom="'2,5 млн ₽'"
					:threeRoom="'2,5 млн ₽'"
					class="catalog__item"
				></Card>
				<Card
					:src="'img/trade-in/dolce-vita.png'"
					:subtitle="'Жилой комплекс'"
					:title="'DOLCE VITA'"
					:min="'2,5 млн ₽'"
					:studios="'2,5 млн ₽'"
					:singleRoom="'2,5 млн ₽'"
					:twoRoom="'2,5 млн ₽'"
					:threeRoom="'2,5 млн ₽'"
					class="catalog__item"
				></Card>
			</div>
		</div>
	</section>
</template>

<script>
	import Dropdown from "../general/Dropdown.vue";
	import RangeSlider from "../general/RangeSlider.vue";
	import Checkbox from "../general/Checkbox.vue";
	import Card from "../trade-in/Card.vue";

	export default {
		name: "Catalog",
		components: {
			Dropdown,
			RangeSlider,
			Checkbox,
			Card,
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
			grid-gap: 2rem 2.5rem;
		}
		&__item {
			&-wide {
				grid-area: auto/1/auto/3;
				margin-top: -5rem;
				margin-bottom: -5rem;
			}
		}
	}
</style>
