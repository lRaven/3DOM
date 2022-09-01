<template>
	<section class="the-banner" id="banner">
		<div class="the-banner__container center">
			<div class="the-banner__card-wrapper">
				<div
					class="the-banner__card glass animate__animated animate__fadeInLeft wow"
				>
					<h2 class="the-banner__card-title">На всё готовенькое!</h2>
					<p class="the-banner__card-description">
						Уютные квартиры для молодых семей, со встроенной
						мебелью, санузлом и кухней.
					</p>

					<v-button
						text="Смотреть планировки"
						type="button"
						@click="
							this.$router.push({
								name: 'Academ',
								query: { section: '#apartments' },
							})
						"
					></v-button>
				</div>
			</div>
			<div class="the-banner__card-wrapper">
				<img
					src="/img/trade-in/banner-img.svg"
					alt=""
					class="the-banner__card-img animate__animated animate__fadeInRight wow"
				/>
				<div
					class="the-banner__card blue animate__animated animate__fadeInLeft wow"
				>
					<h2 class="the-banner__card-title">«Зачётная квартира»</h2>
					<p class="the-banner__card-description">
						Вам предоставляется уникальная возможность приобрести
						квартиру по программе «Trade-In». Поменяем ваше жилье на
						квартиру в новостройке.
					</p>
					<v-button
						text="Оформить заявку"
						type="button"
						color="white"
						@click="
							this.$router.push({
								name: 'TradeIn',
							})
						"
					></v-button>
				</div>
			</div>
		</div>
		<v-swiper
			:gallery="[
				{ image: '/img/general/banner-bg1.jpg' },
				{ image: '/img/general/banner-bg1.jpg' },
				{ image: '/img/general/banner-bg1.jpg' },
				{ image: '/img/general/banner-bg1.jpg' },
				{ image: '/img/general/banner-bg1.jpg' },
			]"
		></v-swiper>
	</section>
</template>

<script>
	import vSwiper from "@/components/general/v-swiper.vue";

	export default {
		name: "TheBanner",
		components: { vSwiper },
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-banner {
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		background-color: $light-gray;
		min-height: calc(100vh - 6rem);
		padding: 0;
		@media (max-width: 1023px) {
			grid-template-rows: 1fr min-content;
		}

		.swiper {
			grid-area: 1/1;
			width: 100%;
			height: 100%;

			@media (max-width: 1023px) {
				min-height: 30rem;
			}
		}

		&__container {
			grid-area: 1/1;
			height: fit-content;
			padding: 6rem 1.5rem;

			@media (max-width: 1023px) {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				grid-area: 2/1;
				padding: 0;
				height: 100%;
			}
		}

		&__card {
			position: relative;
			padding: 3rem 6rem 3rem 3rem;
			border-radius: 2rem;
			box-shadow: $shadow;
			margin-bottom: 4.2rem;
			max-width: 69rem;
			z-index: 2;
			--animate-duration: 0.6s;
			&.glass {
				background-color: rgba(255, 255, 255, 0.2);
				color: $dark;
				backdrop-filter: blur(2rem);
				@-moz-document url-prefix() {
					background-color: rgba(255, 255, 255, 0.85);
				}

				@media (max-width: 1023px) {
					background-color: $white;
					margin-bottom: 0;
				}
				@media (max-width: 424px) {
					display: flex;
					flex-direction: column;
					padding: 2rem 1.5rem;
				}
			}
			&.blue {
				background-color: $blue;
				color: $white;
				animation-delay: 0.5s;

				@media (max-width: 1023px) {
					margin: 0;
				}

				@media (max-width: 424px) {
					padding: 2rem 1.5rem;
				}
			}

			&-wrapper {
				&:first-child {
					@media (max-width: 1023px) {
						display: flex;
						justify-content: center;
						align-items: center;
						background-color: $blue;
						width: 100%;
						padding: 2rem 1.5rem;
					}
				}
				&:nth-child(2) {
					@media (max-width: 1023px) {
						display: flex;
						flex-direction: column;
						align-items: center;
						gap: 2rem;
						width: 100%;
						background-color: #edf5fd;
						padding: 2rem 1.5rem;
					}
					@media (max-width: 540px) {
						padding: 2rem 1rem;
					}
				}
			}
			&-img {
				display: none;
				@media (max-width: 1023px) {
					display: block;
					max-height: 40rem;
					width: 100%;
				}
			}
			&-title {
				font-size: 4.2rem;
				font-weight: 600;
				margin-bottom: 2.5rem;

				@media (max-width: 424px) {
					font-size: 3.6rem;
					margin-bottom: 2rem;
				}
			}
			&-description {
				font-size: 1.8rem;
				font-weight: 600;
				margin-bottom: 5.8rem;
				line-height: 2.2rem;

				@media (max-width: 424px) {
					margin-bottom: 2rem;
				}
			}
			.v-button {
				@media (max-width: 424px) {
					align-self: center;
					width: 100%;
				}
			}
		}
	}
</style>
