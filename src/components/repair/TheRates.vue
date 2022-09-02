<template>
	<section class="the-rates center">
		<h2 data-aos="fade-up" class="the-rates__title">
			Пакетные предложения
		</h2>
		<h3 data-aos="fade-up" class="the-rates__subtitle">
			В рамках каждого пакета возможны корректировки по добавлению или
			вычету опций!
		</h3>

		<div class="the-rates__list">
			<div data-aos="fade-up" class="the-rates__row">
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

					<a href="#" target="_blank" class="the-rates__rate-link">
						<img
							src="/img/icon/repair/vk.svg"
							alt="vk"
							class="the-rates__rate-link-icon"
						/>
						Больше работ в ВК
					</a>
				</div>
			</div>

			<div
				data-aos="fade-up"
				class="the-rates__row the-rates__rate-checklist"
			>
				<div
					class="the-rates__rate-checklist-item"
					v-for="checklist in rates[0].checklist"
					:key="checklist.id"
				>
					<p class="the-rates__rate-checklist-item-description">
						{{ checklist.description }}
					</p>

					<div
						class="the-rates__rate-checklist-item-tick-wrapper"
						:class="{ selected: rate.id === selectedRate }"
						v-for="rate in rates"
						:key="rate.id"
						@mouseenter="this.selectedRate = rate.id"
						@mouseleave="this.selectedRate = null"
					>
						<img
							:src="
								rate.checklist[checklist.id - 1].value
									? `/img/icon/repair/tick.svg`
									: '/img/icon/repair/tick-not.svg'
							"
							alt="tick"
							class="the-rates__rate-checklist-item-tick"
						/>
					</div>
				</div>
			</div>

			<div data-aos="fade-up" class="the-rates__row">
				<div
					class="the-rates__rate-buttons"
					:class="{ selected: rate.id === this.selectedRate }"
					v-for="rate in rates"
					:key="rate.id"
					@mouseenter="this.selectedRate = rate.id"
					@mouseleave="this.selectedRate = null"
				>
					<v-button text="Заказать ремонт"></v-button>
					<v-button
						text="Расчёт ремонта онлайн"
						color="white"
						class="transparent"
					></v-button>
				</div>
			</div>
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
			gap: 1rem;
			&:first-child,
			&:nth-child(3) {
				grid-template-areas: ". rate1 rate2 rate3 rate4";
				.the-rates__rate-buttons {
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
			}
		}

		&__rate {
			&-top {
				display: grid;
				text-align: center;
				padding: 1.5rem 1rem 0 1rem;
				border-radius: 2rem 2rem 0 0;
				background-color: $light-blue;
				transition: all 0.2s ease;
				&.selected {
					background-color: #cfe6ff;
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
				font-size: 1.8rem;
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
				font-size: 1.2rem;
				font-weight: 500;
				color: rgba(#000, $alpha: 0.5);
				&-sum {
					color: #000;
					font-size: 3rem;
					font-weight: 700;
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
				font-size: 1.2rem;
				margin-bottom: 1rem;
			}

			&-gallery {
				width: 100%;
				height: 16rem;
				margin-top: auto;
				margin-bottom: 1rem;
			}

			&-link {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 1rem;
				margin-bottom: 1rem;
				font-size: 1.2rem;
				font-weight: 500;
				color: $blue;
				&-icon {
					width: 2.5rem;
					height: 2.5rem;
				}
			}

			&-checklist {
				display: block;
				&-item {
					display: grid;
					grid-template-columns: 27rem repeat(4, 1fr);
					gap: 1rem;
					align-items: center;

					&-description {
						font-size: 1.4rem;
						font-weight: 600;
						padding: 0.5rem 1rem;
					}
					&-tick {
						&-wrapper {
							position: relative;
							display: flex;
							justify-content: center;
							padding: 0.5rem 1rem;
							transition: all 0.2s ease;
							background-color: $light-blue;
							transition: all 0.2s ease;
							&.selected {
								background-color: #cfe6ff;
							}
							&::before {
								content: "";
								position: absolute;
								top: 0;
								left: 1rem;
								right: 1rem;
								height: 0.1rem;
								background-color: #fff;
							}
						}
					}
				}
			}

			&-buttons {
				padding: 4rem 1rem 2rem 1rem;
				display: flex;
				flex-direction: column;
				gap: 1.5rem;
				border-radius: 0 0 2rem 2rem;
				transform: translateY(-0.1rem);
				background-color: $light-blue;
				transition: all 0.2s ease;
				&.selected {
					background-color: #cfe6ff;
				}
				.v-button {
					width: 100%;
				}
				.transparent {
					background-color: transparent;
					box-shadow: none;
					padding: 0;
				}
			}
		}
	}
</style>
