<template>
	<section class="catalog center" id="catalog">
		<form action="#">
			<div class="catalog__header">
				<div class="catalog__address">
					<h3 class="catalog__title">Живу красиво!</h3>
					<Dropdown
						:description="'Выбери своё жилище'"
						:selected="'Районы, кварталы, жилые массивы...'"
					></Dropdown>
				</div>
				<img src="img/general/catalog-img.svg" alt="" />
				<div class="catalog__price">
					<div class="catalog__price-range">
						<range-slider
							title="Укажите примерную стоимость, млн руб"
							:min="2.2"
							:max="100"
							:value="22.2"
							:step="0.2"
							class="min-max"
							:minMax="true"
						></range-slider>
					</div>
					<div class="catalog__price-dates">
						<p>Укажите год заселения</p>
						<div>
							<checkbox></checkbox>
						</div>
					</div>
				</div>
			</div>
			<div class="catalog__list">
				<catalog-item></catalog-item>
			</div>
		</form>
	</section>
</template>

<script>
	import Dropdown from "./Dropdown.vue";
	import RangeSlider from "./RangeSlider.vue";
	import Checkbox from "./Checkbox.vue";
	import CatalogItem from "./CatalogItem.vue";

	export default {
		name: "Catalog",
		components: {
			Dropdown,
			RangeSlider,
			Checkbox,
			CatalogItem,
		},
		setup() {},
	};
</script>

<style lang="scss" scoped>
	.catalog {
		padding-top: 3rem;
		&__header {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 2.4rem;
			margin-bottom: 4rem;
			img {
				border-radius: 2.5rem;
				height: 100%;
				width: 100%;

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
		&__price {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			p {
				font-size: var(--text-15);
				font-weight: 600;
				color: var(--gray);
				margin-bottom: 1.4rem;
			}
			&-dates {
				div {
					display: flex;
					justify-content: space-between;
				}
			}
		}
		&__list {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 6rem 2.2rem;
		}
	}
</style>
