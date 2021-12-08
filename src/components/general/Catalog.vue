<template>
	<section class="catalog center">
		<div class="catalog__top">
			<div class="catalog__address">
				<h3 class="catalog__title">Живу красиво!</h3>
				<p>Выбери своё жилище</p>
				<form action="#">
					<dropdown></dropdown>
				</form>
			</div>
			<img src="img/catalog/catalog-img.png" alt="" />
			<div class="catalog__price">
				<form action="#">
					<div class="catalog__price-range">
						<p>Укажите примерную стоимость, млн руб</p>
						<range-slider
							min="2.2"
							max="100"
							value="22.2"
							step="0.2"
						></range-slider>
					</div>
					<div class="catalog__price-dates">
						<p>Укажите год заселения</p>
						<div>
							<checkbox></checkbox>
						</div>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
	import Dropdown from "./Dropdown.vue";
	import RangeSlider from "./RangeSlider.vue";
	import Checkbox from "./Checkbox.vue";

	export default {
		name: "Catalog",
		components: {
			Dropdown,
			RangeSlider,
			Checkbox,
		},
		setup() {},
	};
</script>

<style lang="scss" scoped>
	.catalog {
		padding-top: 3rem;
		&__top {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 2.4rem;
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
			form {
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
			}
			&-range {
				p {
					text-align: center;
				}
			}
			&-dates {
				div {
					display: flex;
					justify-content: space-between;
				}
			}
		}
	}
</style>
