<template>
	<section class="the-rates center">
		<h2 class="the-rates__title">Пакетные предложения</h2>
		<h3 class="the-rates__subtitle">
			В рамках каждого пакета возможны корректировки по добавлению или
			вычету опций!
		</h3>

		<div class="the-rates__list">
			<div class="the-rates__row">
				<div
					class="the-rates__rate-top"
					:class="{ selected: selectedRate === rate.id }"
					v-for="rate in rates"
					:key="rate.id"
					@mouseenter="this.selectedRate = rate.id"
					@mouseleave="this.selectedRate = null"
				>
					<h3 class="the-rates__rate-title">Пакет</h3>

					<p class="the-rates__rate-name">«{{ rate.name }}»</p>

					<p class="the-rates__rate-description">
						{{ rate.description }}
					</p>

					<template v-if="rate.price">
						<p class="the-rates__rate-price">
							Стоимость за кв.м. от<br />
							<span class="the-rates__rate-price-sum">
								{{ rate.price }} руб.
							</span>
						</p>
						<p class="the-rates__rate-period">Срок от 20 дней</p>
					</template>

					<p class="the-rates__rate-price-individual" v-else>
						Стоимость и сроки работ
						<strong>рассчитывается индивидуально</strong>
						и зависит от выбранных материалов и сложности работ
					</p>

					<v-swiper
						:gallery="rate.images"
						class="the-rates__rate-gallery"
						v-if="rate.images"
					></v-swiper>
				</div>
			</div>

			<div class="the-rates__row"></div>

			<div class="the-rates__row"></div>
		</div>
	</section>
</template>

<script>
	import vSwiper from "@/components/general/v-swiper.vue";

	import { mapState } from "vuex";

	export default {
		name: "TheRates",
		components: { vSwiper },
		computed: {
			...mapState({
				rates: (state) => state.repair.rates,
			}),
		},
		data: () => ({ selectedRate: null }),
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-rates {
		padding-top: 4rem;
		padding-bottom: 4rem;
		&__title {
			font-size: 4.2rem;
			font-weight: 600;
			margin-bottom: 2rem;
		}
		&__subtitle {
			margin-bottom: 7rem;
			font-size: 2.5rem;
			font-weight: 500;
			color: $gray;
		}

		&__list {
		}
		&__row {
			display: grid;
			grid-template-columns: 27rem repeat(4, 1fr);
			&:first-child {
				grid-template-areas: ". rate1 rate2 rate3 rate4";
			}
		}

		&__rate {
			&-top {
				display: grid;
				text-align: center;
				padding: 1.5rem 1rem 0 1rem;
				border-radius: 2rem 2rem 0 0;
				border: 0.2rem solid transparent;
				border-bottom: none;
				transition: all 0.2s ease;
				&.selected {
					border-color: $blue;
				}

				&:first-child {
					grid-area: rate1;
				}
				&:nth-child(2) {
					grid-area: rate2;
				}
				&:nth-child(3) {
					grid-area: rate3;
				}
				&:nth-child(4) {
					grid-area: rate4;
				}
			}

			&-title {
				font-size: 2.5rem;
				font-weight: 500;
				margin-bottom: 0.5rem;
			}
			&-name {
				font-weight: 500;
				font-size: 3.2rem;
				margin-bottom: 1.5rem;
			}
			&-description {
				font-size: 1.2rem;
				font-weight: 300;
				line-height: 1.3;
				height: 5rem;
				overflow: hidden;
				margin-bottom: 1rem;
			}

			&-price {
				font-size: 1.4rem;
				&-sum {
					font-size: 3rem;
					margin: 0.5rem 0 1rem 0;
					display: inline-block;
				}
				&-individual {
					font-size: 1.2rem;
					line-height: 1.3;
					margin-bottom: 1rem;
				}
			}

			&-period {
				font-size: 1.6rem;
				margin-bottom: 1rem;
			}

			&-gallery {
				width: 100%;
				height: 16rem;
				margin-top: auto;
			}
		}
	}
</style>
