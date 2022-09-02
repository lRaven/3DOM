<template>
	<section class="the-banner" id="banner">
		<div class="the-banner__container center">
			<h1 class="the-banner__title">
				Готовый ремонт «под ключ»<br />
				с гаратией
			</h1>

			<div class="the-banner__card-wrapper">
				<div data-aos="fade-right" class="the-banner__card">
					<h2 class="the-banner__card-title">
						Заказать ремонт в компании 3Dom
					</h2>
					<p class="the-banner__card-description">
						Значит получить готовое решение всех вопросов, связанных
						с уютом и комфортом.<br />
						От базового ремонта до полного обустройства, включая
						меблировку, текстиль, декор и т.п.<br />
						За 5 лет нами отработаны схемы полного дистанционного
						благоустройства недвижимости.
					</p>
					<v-button
						text="Оформить заявку"
						type="button"
						color="white"
						@click="this.$router.push({ name: 'TradeIn' })"
					></v-button>
				</div>
			</div>
		</div>

		<v-swiper
			:isAutoplay="true"
			:isHasNavigation="false"
			size="fullscreen"
			:gallery="[
				{ image: '/img/repair/banner-bg1.jpg' },
				{ image: '/img/repair/banner-bg1.jpg' },
				{ image: '/img/repair/banner-bg1.jpg' },
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
		padding: 0 !important;
		color: $white;
		@media (max-width: 1023px) {
			grid-template-rows: 1fr min-content;
		}
		&__title {
			z-index: 2;
			position: relative;
			font-size: 8rem;
			font-weight: 700;
			text-shadow: 0 0 1rem rgba(0, 0, 0, 0.4);
			line-height: 1.2;
			margin-bottom: 9rem;
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
			padding: 4rem 4rem 3rem 4rem;
			border-radius: 2rem;
			box-shadow: $shadow;
			margin-bottom: 4.2rem;
			max-width: 96rem;
			z-index: 2;
			background: linear-gradient(
				243.53deg,
				#003b78 53.51%,
				rgba(0, 123, 252, 0) 126.9%
			);

			animation-delay: 0.5s;
			--animate-duration: 0.6s;
			@media (max-width: 1023px) {
				margin: 0;
			}
			@media (max-width: 424px) {
				display: flex;
				flex-direction: column;
				padding: 2rem 1.5rem;
			}

			&-wrapper {
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
			&-img {
				display: none;

				@media (max-width: 1023px) {
					display: block;
					max-height: 40rem;
					width: 100%;
				}
			}
			&-title {
				font-size: 3.2rem;
				font-weight: 600;
				margin-bottom: 2rem;
				@media (max-width: 424px) {
					font-size: 2.6rem;
				}
			}
			&-description {
				font-size: 1.6rem;
				font-weight: 600;
				margin-bottom: 4rem;
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
