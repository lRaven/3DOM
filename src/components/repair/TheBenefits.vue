<template>
	<section class="the-benefits center">
		<div class="the-benefits__list">
			<div
				class="the-benefits__benefit"
				v-for="benefit in benefits"
				:key="benefit.id"
			>
				<img
					src="/img/icon/trade-in/tick.svg"
					alt=""
					class="the-benefits__benefit-icon"
				/>

				<h3 class="the-benefits__benefit-description">
					{{ benefit.title }}
				</h3>
			</div>
		</div>

		<div class="the-benefits__cards">
			<div class="the-benefits__card">
				<h2 class="the-benefits__card-title">
					Заказать черновые материалы
				</h2>

				<p class="the-benefits__card-description">
					Удобный интернет-магазин<br />
					от застройщика
				</p>

				<v-button
					text="Перейти в каталог"
					color="white"
					direction="reverse"
				>
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

			<div class="the-benefits__card">
				<h2 class="the-benefits__card-title">Заказать дизайн проект</h2>

				<p class="the-benefits__card-description">Галерея проектов</p>

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
		</div>
	</section>
</template>

<script>
	export default {
		name: "TheBenefits",
		data: () => ({
			benefits: [
				{ id: 1, title: "Гарантия 3 года" },
				{ id: 2, title: "Фиксированная стоимость и сроки" },
				{ id: 3, title: "Ремонт в ипотеку" },
				{ id: 4, title: "Подключение к ТВ и интернету" },
				{ id: 5, title: "Страхование" },
			],
		}),
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-benefits {
		padding-top: 8rem;
		padding-bottom: 4rem;
		&__list {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			gap: 2.4rem;
			margin-bottom: 9rem;
		}
		&__benefit {
			box-shadow: $shadow;
			background-color: $white;
			border-radius: 3rem;
			padding: 3rem 2rem;
			&-icon {
				width: 6rem;
				height: 6rem;
				margin-bottom: 2.5rem;
			}
			&-description {
				color: $blue;
				font-size: 2.5rem;
				font-weight: 600;
				line-height: 1.2;
			}
		}

		&__cards {
			display: flex;
			gap: 2.4rem;
		}
		&__card {
			color: #000888;
			display: flex;
			flex-direction: column;
			background-color: $light-gray;
			border-radius: 2rem;
			padding: 5rem 4rem 4rem 5rem;
			width: 100%;
			&-title {
				font-size: 3.6rem;
				font-weight: 500;
				margin-bottom: 2rem;
			}
			&-description {
				font-size: 2rem;
				margin-bottom: 10rem;
				line-height: 1.3;
			}
			.v-button {
				font-size: 1.8rem;
				color: #000888;
				margin-top: auto;
				padding: 2rem 3rem;
				border-radius: 5rem;
			}
		}
	}
</style>
