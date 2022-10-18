<template>
	<section class="the-steps">
		<div class="the-steps__container center">
			<steps-card
				title="Trade-in — это просто"
				:checklist="checklist"
				buttonText="Оформить заявку"
			></steps-card>

			<div class="the-steps__stages" v-once>
				<div data-aos="fade-up" class="the-steps__benefit">
					<img
						src="/img/icons/trade-in/tick.svg"
						class="the-steps__benefit-icon"
						alt=""
					/>
					<h3 class="the-steps__benefit-title">Кураторство</h3>
					<p class="the-steps__benefit-text">
						Поможем решить все вопросы со сделкой<br />
						и документами
					</p>
				</div>
				<div data-aos="fade-up" class="the-steps__benefit">
					<img
						src="/img/icons/trade-in/tick.svg"
						class="the-steps__benefit-icon"
						alt=""
					/>
					<h3 class="the-steps__benefit-title">Быстрые сроки</h3>
					<p class="the-steps__benefit-text">
						Проведём сделку<br />
						в быстрые сроки и учтём все детали
					</p>
				</div>
				<div data-aos="fade-up" class="the-steps__benefit">
					<img
						src="/img/icons/trade-in/tick.svg"
						class="the-steps__benefit-icon"
						alt=""
					/>
					<h3 class="the-steps__benefit-title">Выберем квартиру</h3>
					<p class="the-steps__benefit-text">
						Предложим квартиры <br />
						из числа наших проектов
					</p>
				</div>
				<div data-aos="fade-up" class="the-steps__benefit">
					<img
						src="/img/icons/trade-in/tick.svg"
						class="the-steps__benefit-icon"
						alt=""
					/>
					<h3 class="the-steps__benefit-title">Ипотека</h3>
					<p class="the-steps__benefit-text">
						Если требуется поможем с оформлением ипотеки
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import StepsCard from '@/components/trade-in/StepsCard.vue';

	export default {
		name: 'TheSteps',
		components: {
			StepsCard,
		},
		data: () => ({
			checklist: [
				{ id: 1, description: 'Независимая оценка вашей квартиры.' },
				{ id: 2, description: 'Продаем ваше вторичное жильё.' },
				{ id: 3, description: 'Собираем документы и проводим сделку.' },
				{
					id: 4,
					description: 'Деньги с продажи старой квартиры в счёт опаты новой.',
				},
				{
					id: 5,
					description: 'Забрать ключи и въехать в новую квартиру.',
				},
			],
		}),
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.the-steps {
		display: flex;
		align-items: center;
		@media (max-width: 540px) {
			padding: 1rem;
		}
		&__container {
			color: $dark;
		}

		&__stages {
			display: flex;
			justify-content: space-between;
			gap: 2.4rem;
			grid-area: 2/1/2/3;
			@media (max-width: 1023px) {
				display: none;
			}
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
</style>
