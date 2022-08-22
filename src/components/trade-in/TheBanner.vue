<template>
	<section class="the-banner">
		<div class="the-banner__container center">
			<div
				class="the-banner__description animate__animated animate__fadeInLeft wow"
			>
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
			<div
				class="the-banner__img animate__animated animate__fadeInRight wow"
			>
				<img src="/img/trade-in/banner-img.svg" alt="" />
			</div>
			<div
				class="the-banner__footer animate__animated animate__fadeInUp wow"
			>
				<div class="the-banner__info">
					<h4
						class="the-banner__info-title animate__animated animate__fadeInUp wow"
					>
						Услуга страхования
					</h4>
					<h5
						class="the-banner__info-subtitle animate__animated animate__fadeInUp wow"
					>
						Финансовая защита всех<br />
						участников сделки
					</h5>
				</div>
				<div class="the-banner__info">
					<h4
						class="the-banner__info-title animate__animated animate__fadeInUp wow"
					>
						Независимая оценка жилья
					</h4>
					<h5
						class="the-banner__info-subtitle animate__animated animate__fadeInUp wow"
					>
						Финансовая защита всех<br />
						участников сделки
					</h5>
				</div>
				<div class="the-banner__info">
					<h4
						class="the-banner__info-title animate__animated animate__fadeInUp wow"
					>
						Собираем документы
					</h4>
					<h5
						class="the-banner__info-subtitle animate__animated animate__fadeInUp wow"
					>
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
		padding: 5rem 0;
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
