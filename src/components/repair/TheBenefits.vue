<template>
	<section class="the-benefits center" v-once>
		<div class="the-benefits__list">
			<div data-aos="fade-up" class="the-benefits__benefit">
				<h3 class="the-benefits__benefit-description">
					<span class="the-benefits__benefit-description_blue">
						Гарантия 3 года
					</span>
					<br />
					на выполненные работы
				</h3>
			</div>
			<div data-aos="fade-up" class="the-benefits__benefit">
				<h3 class="the-benefits__benefit-description">
					Фиксированная
					<span class="the-benefits__benefit-description_blue">
						стоимость и сроки
					</span>
				</h3>
			</div>
			<div data-aos="fade-up" class="the-benefits__benefit">
				<h3 class="the-benefits__benefit-description">
					Широкий
					<span class="the-benefits__benefit-description_blue">
						выбор материалов
					</span>
				</h3>
			</div>
			<div data-aos="fade-up" class="the-benefits__benefit">
				<h3 class="the-benefits__benefit-description">
					<span class="the-benefits__benefit-description_blue"> Ремонт </span>
					<br />
					в ипотеку
				</h3>
			</div>
			<div data-aos="fade-up" class="the-benefits__benefit">
				<h3 class="the-benefits__benefit-description">
					Мебель, свет,<br />
					<span class="the-benefits__benefit-description_blue"> декор </span>
				</h3>
			</div>
		</div>

		<div class="the-benefits__cards">
			<div data-aos="fade-right" class="the-benefits__card materials">
				<h2 class="the-benefits__card-title">
					Заказать<br />
					черновые материалы
				</h2>

				<p class="the-benefits__card-description">Удобный интернет-магазин</p>

				<v-button text="Заказать" color="white" direction="reverse">
					<template v-slot:icon>
						<svg
							width="57"
							height="18"
							viewBox="0 0 57 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1 8.5H56M56 8.5L47.4062 17M56 8.5L47.4062 1"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</template>
				</v-button>
			</div>

			<div data-aos="fade-left" class="the-benefits__card design">
				<h2 class="the-benefits__card-title">
					Заказать дизайн<br />
					проект и узаконить<br />
					перепланировку
				</h2>

				<v-button text="Узнать подробнее" color="white" direction="reverse">
					<template v-slot:icon>
						<svg
							width="57"
							height="18"
							viewBox="0 0 57 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1 8.5H56M56 8.5L47.4062 17M56 8.5L47.4062 1"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</template>
				</v-button>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'TheBenefits',
		setup() {
			const benefits = [
				{ id: 1, title: 'Гарантия 3 года\nна выполненные работы' },
				{ id: 2, title: 'Фиксированная стоимость и сроки' },
				{ id: 3, title: 'Широкий выбор материалов' },
				{ id: 4, title: 'Ремонт\nв ипотеку' },
				{ id: 5, title: 'Мебель, свет,\nдекор' },
			];
			return { benefits };
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.the-benefits {
		padding-top: 8rem;
		overflow: visible;
		&__list {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			gap: 2.4rem;
			margin-bottom: 9rem;
		}
		&__benefit {
			background-color: $white;
			border-radius: 1rem;
			padding: 2.4rem 2rem 4.4rem 2rem;
			background: $light-blue url(/public/img/icons/repair/tick-big.svg) bottom
				right / auto 60% no-repeat;
			&-description {
				font-size: 2rem;
				font-weight: 800;
				line-height: 1.2;
				&_blue {
					color: $blue;
				}
			}
		}

		&__cards {
			display: flex;
			gap: 2.4rem;
		}
		&__card {
			color: $white;
			display: flex;
			flex-direction: column;
			background-color: $light-gray;
			border-radius: 2rem;
			padding: 6rem 5rem 3rem 5rem;
			width: 100%;
			&.materials {
				background: $soft-blue url(/public/img/repair/order-bg-1.png) 126%
					center / auto 90% no-repeat;
			}
			&.design {
				background: $gray-blue url(/public/img/repair/order-bg-2.png) 110%
					center / auto 90% no-repeat;
			}
			&-title {
				font-size: 3.2rem;
				font-weight: 700;
				margin-bottom: 2rem;
			}
			&-description {
				font-size: 1.8rem;
				margin-bottom: 6.7rem;
				line-height: 1.3;
			}
			.v-button {
				font-size: 1.8rem;
				margin-top: auto;
				padding: 2rem 3rem;
				border-radius: 5rem;
				font-weight: 700;
			}
		}
	}
</style>
