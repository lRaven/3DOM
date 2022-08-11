<template>
	<section class="banner" id="banner">
		<div class="banner__container center">
			<div class="banner__watch-wrapper">
				<div
					class="banner__watch animate__animated animate__fadeInLeft wow"
				>
					<h2>На всё готовенькое!</h2>
					<p>
						Уютные квартиры для молодых семей, со встроенной
						мебелью, санузлом и кухней.
					</p>

					<router-link
						:to="{
							name: 'Academ',
							params: { section: '#apartments' },
						}"
						style="display: inline-block"
					>
						<v-button
							:text="'Смотреть планировки'"
							:type="'button'"
							class="blue"
						></v-button>
					</router-link>
				</div>
			</div>
			<div class="banner__order-wrapper">
				<img
					src="/img/trade-in/banner-img.svg"
					alt=""
					class="banner__order-img animate__animated animate__fadeInRight wow"
				/>
				<div
					class="banner__order animate__animated animate__fadeInLeft wow"
				>
					<h2>«Зачётная квартира»</h2>
					<p>
						Вам предоставляется уникальная возможность приобрести
						квартиру по программе «Trade-In». Поменяем ваше жилье на
						квартиру в новостройке.
					</p>
					<router-link to="/trade-in" style="display: inline-block">
						<v-button
							text="Оформить заявку"
							:type="'button'"
							class="white"
						></v-button>
					</router-link>
				</div>
			</div>
		</div>
		<v-swiper
			:gallery="[
				{ image: '/img/general/banner-bg1.png' },
				{ image: '/img/general/banner-bg1.png' },
				{ image: '/img/general/banner-bg1.png' },
				{ image: '/img/general/banner-bg1.png' },
				{ image: '/img/general/banner-bg1.png' },
			]"
		></v-swiper>
	</section>
</template>

<script>
	import vButton from "@/components/UI/general/v-button.vue";
	import vSwiper from "./v-swiper.vue";

	export default {
		name: "TheBanner",
		components: {
			vButton,
			vSwiper,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.banner {
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		background-color: $light-gray;
		min-height: calc(100vh - 6rem);
		padding: 0;

		.swiper {
			grid-area: 1/1;
			width: 100%;
			height: 100%;
		}

		&__container {
			grid-area: 1/1;
			height: fit-content;
			padding: 6rem 1.5rem;
		}

		&__order,
		&__watch {
			position: relative;
			padding: 3rem 6rem 3rem 3rem;
			border-radius: 2rem;
			box-shadow: 0 0 2rem rgba(0, 0, 0, 0.25);
			margin-bottom: 4.2rem;
			max-width: 69rem;
			z-index: 2;
			h2 {
				font-size: 4.2rem;
				font-weight: 600;
				margin-bottom: 2.5rem;
			}
			p {
				font-size: 1.8rem;
				font-weight: 600;
				margin-bottom: 5.8rem;
				line-height: 2.2rem;
			}
		}
		&__watch {
			background-color: rgba(255, 255, 255, 0.2);
			color: $dark;
			backdrop-filter: blur(2rem);
			@-moz-document url-prefix() {
				background-color: rgba(255, 255, 255, 0.85);
			}
		}
		&__order {
			background-color: $blue;
			color: $white;
			&-img {
				display: none;
			}
		}
	}

	@media (max-width: 1023px) {
		.banner {
			grid-template-rows: 1fr min-content;
			&__container {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				grid-area: 2/1;
				padding: 0;
				height: 100%;
			}

			&__order {
				margin: 0;
				&-wrapper {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 2rem;
					width: 100%;
					background-color: #edf5fd;
					padding: 2rem 1.5rem;
				}
				&-img {
					display: block;
					max-height: 40rem;
					width: 100%;
				}
			}
			&__watch {
				background-color: $white;
				margin-bottom: 0;
				&-wrapper {
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: $blue;
					width: 100%;
					padding: 2rem 1.5rem;
				}
			}
		}
		.swiper {
			min-height: 30rem;
		}
	}
	@media (max-width: 540px) {
		.banner {
			&__order-wrapper {
				padding: 2rem 1rem;
			}
		}
	}
	@media (max-width: 424px) {
		.banner {
			&__container {
			}
			&__watch {
				display: flex;
				flex-direction: column;
				padding: 2rem 1.5rem;
				h2 {
					font-size: 3.6rem;
					margin-bottom: 2rem;
				}
				p {
					margin-bottom: 2rem;
				}
				.button {
					align-self: center;
					width: 100%;
				}
			}
			&__order {
				display: flex;
				flex-direction: column;
				padding: 2rem 1.5rem;
				h2 {
					font-size: 3.6rem;
					margin-bottom: 2rem;
				}
				p {
					margin-bottom: 2rem;
				}
				.button {
					align-self: center;
					width: 100%;
				}
			}
		}
	}
</style>
