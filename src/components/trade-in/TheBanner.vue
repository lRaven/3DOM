<template>
	<section class="the-banner">
		<div class="the-banner__container center">
			<div data-aos="fade-right" class="the-banner__description">
				<h1 class="the-banner__title">Trade-in</h1>
				<h3 class="the-banner__subtitle">
					Trade-in — это программа, которая поможет обменять вашу
					старую квартиру на новую
				</h3>
				<v-button
					text="Оформить заявку"
					type="button"
					@click="this.$emit('openPopup')"
				></v-button>
			</div>
			<div data-aos="fade-left" class="the-banner__img">
				<img src="/img/trade-in/banner-img.svg" alt="" />
			</div>
			<div data-aos="fade-up" class="the-banner__footer">
				<div class="the-banner__info">
					<h4 data-aos="fade-up" class="the-banner__info-title">
						Услуга страхования
					</h4>
					<h5 data-aos="fade-up" class="the-banner__info-subtitle">
						Финансовая защита всех<br />
						участников сделки
					</h5>
				</div>
				<div class="the-banner__info">
					<h4 data-aos="fade-up" class="the-banner__info-title">
						Независимая оценка жилья
					</h4>
					<h5 data-aos="fade-up" class="the-banner__info-subtitle">
						Финансовая защита всех<br />
						участников сделки
					</h5>
				</div>
				<div class="the-banner__info">
					<h4 data-aos="fade-up" class="the-banner__info-title">
						Собираем документы
					</h4>
					<h5 data-aos="fade-up" class="the-banner__info-subtitle">
						Финансовая защита всех<br />
						участников сделки
					</h5>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "TheBanner",
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-banner {
		background: linear-gradient(
			0deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(237, 245, 253, 1) 10%
		);
		min-height: calc(100vh - 6rem);
		display: flex;
		align-items: center;
		padding-top: 5rem !important;
		padding-bottom: 5rem !important;
		&__container {
			display: grid;
			grid-column-gap: 15rem;
			grid-row-gap: 2rem;
			grid-template-columns: repeat(2, 1fr);
			height: fit-content;
		}
		&__description {
			display: flex;
			flex-direction: column;
			.button {
				min-width: 24rem;
			}
		}
		&__title {
			font-size: 8rem;
			font-weight: 600;
			color: $blue;
			margin: 5rem 0 5rem 0;
		}
		&__subtitle {
			font-size: 2.8rem;
			line-height: 3.5rem;
			color: #6f6f6f;
			max-width: 58rem;
			margin-bottom: 10rem;
		}
		&__img {
			min-height: 42rem;
		}
		&__footer {
			display: flex;
			justify-content: space-between;
			gap: 2rem;
			grid-area: 2/1/2/3;
			background-color: $white;
			border-radius: 3rem;
			padding: 4.4rem 9rem 5rem 9rem;
			box-shadow: $shadow;
		}
		&__info {
			text-align: center;
			&-title {
				color: $blue;
				font-weight: 600;
				font-size: 2.5rem;
				margin-bottom: 1.5rem;
			}
			&-subtitle {
				color: $dark;
				font-size: 1.8rem;
				line-height: 2.2rem;
			}
		}
	}
</style>
