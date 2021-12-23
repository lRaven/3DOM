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
				<div class="catalog__el">
					<div class="catalog__tags">
						<Tag :text="'Волгоград'"></Tag>
						<Tag :text="'Бизнес-класс'"></Tag>
						<Tag :text="'Ворошиловский район'"></Tag>
					</div>
					<Card
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
					</Card>
				</div>
				<div class="catalog__el">
					<div class="catalog__tags">
						<Tag :text="'Волгоград'"></Tag>
						<Tag :text="'Комфорт-класс'"></Tag>
						<Tag :text="'Ворошиловский район'"></Tag>
					</div>
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
				<div class="catalog__el catalog__el-wide">
					<div class="catalog__tags">
						<Tag :text="'Ахтубинск'"></Tag>
						<Tag :text="'Комфорт-класс'"></Tag>
						<Tag :text="'Уникальное фасадное решение'"></Tag>
						<Tag :text="'Огороженная территория'"></Tag>
					</div>
					<card-wide
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
					</card-wide>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import Dropdown from "../general/Dropdown.vue";
	import RangeSlider from "../general/RangeSlider.vue";
	import Checkbox from "../general/Checkbox.vue";
	import Card from "../trade-in/Card.vue";
	import CardWide from "../trade-in/CardWide.vue";
	import Tag from "../trade-in/Tag.vue";

	export default {
		name: "Catalog",
		components: {
			Dropdown,
			RangeSlider,
			Checkbox,
			Card,
			CardWide,
			Tag,
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
