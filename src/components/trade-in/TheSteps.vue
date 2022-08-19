<template>
	<section class="steps">
		<div class="steps__container center">
			<div class="steps__top">
				<div class="steps__list">
					<h2
						class="steps__title animate__animated animate__fadeInUp wow"
					>
						Trade-in — это просто
					</h2>
					<div
						class="steps__list-item animate__animated animate__fadeInUp wow"
					>
						<span class="steps__step">1</span>
						<p class="steps__description">
							Независимая оценка вашей квартиры.
						</p>
					</div>
					<div
						class="steps__list-item animate__animated animate__fadeInUp wow"
					>
						<span class="steps__step">2</span>
						<p class="steps__description">
							Продаем ваше вторичное жильё.
						</p>
					</div>
					<div
						class="steps__list-item animate__animated animate__fadeInUp wow"
					>
						<span class="steps__step">3</span>
						<p class="steps__description">
							Собираем документы и проводим сделку.
						</p>
					</div>
					<div
						class="steps__list-item animate__animated animate__fadeInUp wow"
					>
						<span class="steps__step">4</span>
						<p class="steps__description">
							Деньги с продажи старой квартиры в счёт опаты новой.
						</p>
					</div>
					<div
						class="steps__list-item animate__animated animate__fadeInUp wow"
					>
						<span class="steps__step">5</span>
						<p class="steps__description">
							Забрать ключи и въехать в новую квартиру.
						</p>
					</div>
				</div>
				<div
					class="steps__img animate__animated animate__fadeInRight wow"
				>
					<img src="/img/trade-in/steps-img.svg" alt="" />
					<router-link to="/trade-in">
						<v-button
							text="Оформить заявку"
							type="button"
						></v-button
					></router-link>
				</div>
			</div>
			<div class="steps__stages">
				<div
					class="steps__benefit animate__animated animate__fadeInUp wow"
				>
					<img
						src="/img/icon/trade-in/tick.svg"
						class="steps__benefit-icon animate__animated animate__fadeInUp wow"
						alt=""
					/>
					<h3
						class="steps__benefit-title animate__animated animate__fadeInUp wow"
					>
						Кураторство
					</h3>
					<p
						class="steps__benefit-text animate__animated animate__fadeInUp wow"
					>
						Поможем решить все вопросы со сделкой<br />
						и документами
					</p>
				</div>
				<div
					class="steps__benefit animate__animated animate__fadeInUp wow"
				>
					<img
						src="/img/icon/trade-in/tick.svg"
						class="steps__benefit-icon animate__animated animate__fadeInUp wow"
						alt=""
					/>
					<h3
						class="steps__benefit-title animate__animated animate__fadeInUp wow"
					>
						Быстрые сроки
					</h3>
					<p
						class="steps__benefit-text animate__animated animate__fadeInUp wow"
					>
						Проведём сделку<br />
						в быстрые сроки и учтём все детали
					</p>
				</div>
				<div
					class="steps__benefit animate__animated animate__fadeInUp wow"
				>
					<img
						src="/img/icon/trade-in/tick.svg"
						class="steps__benefit-icon animate__animated animate__fadeInUp wow"
						alt=""
					/>
					<h3
						class="steps__benefit-title animate__animated animate__fadeInUp wow"
					>
						Выберем квартиру
					</h3>
					<p
						class="steps__benefit-text animate__animated animate__fadeInUp wow"
					>
						Предложим квартиры <br />
						из числа наших проектов
					</p>
				</div>
				<div
					class="steps__benefit animate__animated animate__fadeInUp wow"
				>
					<img
						src="/img/icon/trade-in/tick.svg"
						class="steps__benefit-icon animate__animated animate__fadeInUp wow"
						alt=""
					/>
					<h3
						class="steps__benefit-title animate__animated animate__fadeInUp wow"
					>
						Ипотека
					</h3>
					<p
						class="steps__benefit-text animate__animated animate__fadeInUp wow"
					>
						Если требуется поможем с оформлением ипотеки
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default { name: "TheSteps" };
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.steps {
		display: flex;
		align-items: center;
		padding: 1.5rem;
		&__container {
			color: $dark;
		}
		&__top {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			align-items: center;
			margin-bottom: 6rem;
			background-color: $white;
			box-shadow: $shadow;
			border-radius: 3rem;
			padding: 6rem;
		}
		&__list {
			&-item {
				display: flex;
				align-items: center;
				gap: 4rem;
				+ .steps__list-item {
					margin-top: 2rem;
				}
			}
		}
		&__img {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			gap: 3rem;
			height: 100%;
			img {
				width: 100%;
			}
			.button {
				padding: 1.4rem 5rem;
			}
		}
		&__title {
			font-size: 4rem;
			font-weight: 600;
			margin-bottom: 5rem;
		}
		&__step {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 3.5rem;
			font-weight: 500;
			color: $blue;
			width: 5.5rem;
			min-width: 5.5rem;
			height: 5.5rem;
			border-radius: 50%;
			background-color: $light-gray;
		}
		&__description {
			font-size: 1.8rem;
		}
		&__stages {
			display: flex;
			justify-content: space-between;
			gap: 2.4rem;
			grid-area: 2/1/2/3;
		}
		&__benefit {
			box-shadow: $shadow;
			background-color: $white;
			border-radius: 3rem;
			padding: 3.4rem 3.6rem 4rem 3.6rem;
			min-height: 27rem;
			width: 100%;
			&-icon {
				margin-bottom: 2.3rem;
			}
			&-title {
				color: $blue;
				font-size: 2.5rem;
				font-weight: 600;
				margin-bottom: 1.6rem;
			}
			&-text {
				color: $dark;
				font-size: 1.8rem;
				line-height: 2.2rem;
			}
		}
	}

	@media (max-width: 1023px) {
		.steps {
			&__top {
				margin-bottom: 0;
				padding: 3rem;
				display: flex;
				flex-direction: column-reverse;
				align-items: flex-start;
				gap: 2.5rem;
			}
			&__title {
				// text-align: center;
			}
			&__stages {
				display: none;
			}
			&__img {
				.button {
					display: none;
				}
			}
		}
	}

	@media (max-width: 767px) {
		.steps {
			&__top {
				align-items: center;
			}
			&__title {
				text-align: center;
			}
		}
	}

	@media (max-width: 540px) {
		.steps {
			padding: 1rem;
			&__top {
				padding: 0.5rem 2rem 1.7rem 1.7rem;
			}
			&__title {
				font-size: 2.4rem;
				margin-bottom: 2rem;
			}
			&__step {
				font-size: 3rem;
				width: 4.8rem;
				height: 4.8rem;
				min-width: 4.8rem;
			}
			&__description {
				font-size: 1.4rem;
				line-height: 1.7rem;
			}
		}
	}
</style>
