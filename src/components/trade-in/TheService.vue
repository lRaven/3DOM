<template>
	<section class="the-service">
		<div class="the-service__container center">
			<div class="the-service__header">
				<h2 data-aos="fade-up" class="the-service__title">
					Удобный сервис
				</h2>
				<h3 data-aos="fade-up" class="the-service__subtitle">
					Быстрое получение финансирования на покупку новой квартиры.
				</h3>
			</div>

			<img
				src="/img/trade-in/service-img.svg"
				alt=""
				data-aos="fade-up"
				class="the-service__img"
			/>

			<div class="the-service__description">
				<div data-aos="fade-up" class="the-service__list">
					<h3 class="the-service__list-title">Безопасность сделки</h3>
					<p class="the-service__list-text">
						Сделка пройдёт с сопровождением экспертов, с
						использованием услуг электронной регистрации и проверки
						юридической чистоты 3DOM.
					</p>
				</div>
				<div data-aos="fade-up" class="the-service__list">
					<h3 class="the-service__list-title">
						Сопровождение экспертов
					</h3>
					<p class="the-service__list-text">
						Экспертно оценим вашу квартиру. Предложим подходящую
						недвижимости из наших проектов.
					</p>
				</div>
				<div data-aos="fade-up" class="the-service__list">
					<h3 class="the-service__list-title">Экономия времени</h3>
					<h4 class="the-service__list-text">
						Подготовим документы и проведём сделки. Возможна ипотека
						со сниженной ставкой, если понадобятся дополнительные
						деньги.
					</h4>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "TheService",
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-service {
		display: flex;
		align-items: center;
		&__container {
			color: $dark;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-column-gap: 9rem;
			height: fit-content;
			padding: 6rem 6rem 7rem 6rem;
			background-color: $white;
			box-shadow: $shadow;
			border-radius: 3rem;
		}
		&__header {
			grid-area: 1/1/1/3;
			margin-bottom: 2.5rem;
		}
		&__title {
			font-size: 4rem;
			font-weight: 600;
			margin-bottom: 1.6rem;
		}
		&__subtitle {
			font-size: 2.5rem;
			font-weight: 500;
		}
		&__img {
			margin-left: 3.6rem;
			min-height: 42rem;
		}
		&__description {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
		}
		&__list {
			+ .the-service__list {
				margin-top: 5rem;
			}
			&-title {
				color: $blue;
				font-size: 2.5rem;
				font-weight: 600;
				margin-bottom: 2rem;
			}
			&-text {
				font-size: 1.8rem;
				line-height: 2.2rem;
			}
		}
	}
</style>
