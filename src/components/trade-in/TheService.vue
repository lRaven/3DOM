<template>
	<section class="service">
		<div class="service__container center">
			<div class="service__header">
				<h2
					class="service__title animate__animated animate__fadeInUp wow"
				>
					Удобный сервис
				</h2>
				<h3
					class="service__subtitle animate__animated animate__fadeInUp wow"
				>
					Быстрое получение финансирования на покупку новой квартиры.
				</h3>
			</div>

			<img
				src="img/trade-in/service-img.svg"
				alt=""
				class="service__img animate__animated animate__fadeIn wow"
			/>

			<div class="service__description">
				<div
					class="service__list animate__animated animate__fadeInUp wow"
				>
					<h3 class="service__list-title">Безопасность сделки</h3>
					<p class="service__list-text">
						Сделка пройдёт с сопровождением экспертов, с
						использованием услуг электронной регистрации и проверки
						юридической чистоты 3DOM.
					</p>
				</div>
				<div
					class="service__list animate__animated animate__fadeInUp wow"
				>
					<h3 class="service__list-title">Сопровождение экспертов</h3>
					<p class="service__list-text">
						Экспертно оценим вашу квартиру. Предложим подходящую
						недвижимости из наших проектов.
					</p>
				</div>
				<div
					class="service__list animate__animated animate__fadeInUp wow"
				>
					<h3 class="service__list-title">Экономия времени</h3>
					<h4 class="service__list-text">
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
	.service {
		display: flex;
		align-items: center;
		padding: 2rem 1.5rem;
		&__container {
			color: var(--dark);
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-column-gap: 9rem;
			height: fit-content;
			padding: 6rem 6rem 7rem 6rem;
			background-color: var(--white);
			box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
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
			+ .service__list {
				margin-top: 5rem;
			}
			&-title {
				color: var(--blue);
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
