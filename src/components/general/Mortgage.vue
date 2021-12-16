<template>
	<section class="mortgage center" id="mortgage">
		<div class="mortgage__header">
			<div class="mortgage__title">
				<h2>Встречайте: Ипотека — 4,2%</h2>
				<p>
					Как вы полагаете, оформить ипотеку просто или очень просто?
					Так вот, оформить — легко, а выплачивать — комфортно.
				</p>
				<h4>Предложение наше — выгода ваша</h4>
			</div>
			<img src="img/general/mortgage-top.svg" alt="" />
		</div>
		<div class="mortgage__main">
			<form action="#">
				<div class="mortgage__calculation">
					<toggle-switch
						:description="'Семья с детьми'"
					></toggle-switch>
					<range-slider
						title="Стоимость квартиры, руб"
						text="руб"
						:min="2000000"
						:max="20000000"
						:value="5000000"
						:step="100000"
						class="value"
						:minMax="false"
					></range-slider>
					<range-slider
						title="Первоначальный взнос, руб"
						text="руб"
						:min="100000"
						:max="10000000"
						:value="1500000"
						:step="100000"
						class="value"
						:minMax="false"
					></range-slider>
					<range-slider
						title="Срок погашения кредита"
						text="лет"
						:min="1"
						:max="30"
						:value="25"
						:step="1"
						class="value"
						:minMax="false"
					></range-slider>
					<btn text="Получить одобрение онлайн" class="blue"></btn>
				</div>
				<div class="mortgage__middle">
					<h3>Стандартное ипотечное предложение</h3>
					<div class="mortgage__item">
						<p>Процентная ставка</p>
						<span>8,75%</span>
					</div>
					<div class="mortgage__item">
						<p>Ежемесячный платёж</p>
						<span>32 880</span>
						<span>руб.</span>
					</div>
					<div class="mortgage__item">
						<p>Переплата</p>
						<span>3 274 000</span>
						<span>руб.</span>
					</div>
					<div class="mortgage__item-result">
						<span>0</span>
						<span>руб.</span>
						<div class="blue">Без экономии</div>
					</div>
				</div>
				<div class="mortgage__last">
					<h3>
						Ипотечное предложение <br />
						от компании 3DOM
					</h3>
					<div class="mortgage__item">
						<p>Процентная ставка</p>
						<span>4,25%</span>
					</div>
					<div class="mortgage__item">
						<p>Ежемесячный платёж</p>
						<span>22 330</span>
						<span>руб.</span>
						<div class="mortgage__item-description">
							<div class="mortgage__item-circle"></div>
							<p>Меньше на 8 777 руб.</p>
						</div>
					</div>
					<div class="mortgage__item">
						<p>Переплата</p>
						<span>1 220 550</span>
						<span>руб.</span>
						<div class="mortgage__item-description">
							<div class="mortgage__item-circle"></div>
							<p>Меньше на 2 555 руб.</p>
						</div>
					</div>
					<div class="mortgage__item-result">
						<span>2 127 412</span>
						<span>руб.</span>
						<div class="white">Экономия</div>
					</div>
				</div>
			</form>
		</div>
	</section>
</template>

<script>
	import ToggleSwitch from "./ToggleSwitch.vue";
	import RangeSlider from "./RangeSlider.vue";
	import Btn from "./Btn.vue";

	export default {
		name: "Mortgage",
		components: {
			ToggleSwitch,
			RangeSlider,
			Btn,
		},
	};
</script>

<style lang="scss" scoped>
	.mortgage {
		margin-bottom: 1.5rem;
		&__header {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 6rem;
			margin-bottom: 2.4rem;
		}
		&__title {
			h2 {
				margin-top: 10rem;
				font-size: var(--text-42);
				color: var(--dark);
				font-weight: 600;
				margin-bottom: 6rem;
			}
			p {
				font-size: var(--text-16);
				font-weight: 600;
				color: var(--gray);
				margin-bottom: 7.7rem;
				line-height: 1.95rem;
			}
			h4 {
				margin-left: 1.5rem;
				font-size: var(--text-24);
				color: var(--dark);
				font-weight: 600;
			}
		}
		&__main {
			form {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				min-height: 53rem;
				grid-gap: 2.4rem;
			}
		}

		&__calculation {
			display: flex;
			flex-direction: column;
			gap: 3rem;
			align-items: center;
			div {
				width: 100%;
			}
			.blue {
				position: relative;
				top: 2.5rem;
				padding: 2rem;
			}
		}

		&__item {
			&:nth-child(n + 3) {
				height: 9.2rem;
				p:nth-child(2) {
					margin-bottom: 0;
				}
			}
			+ .mortgage__item {
				margin-top: 2.4rem;
			}
			p {
				font-size: var(--text-13);
				margin-bottom: 1rem;
			}
			span {
				font-size: var(--text-24);
				+ span {
					margin-left: 0.6rem;
				}
				+ .mortgage__item-description {
					margin-top: 1rem;
				}
			}
			&-description {
				display: flex;
				align-items: center;
				gap: 1rem;
			}
			&-circle {
				width: 2.4rem;
				height: 2.4rem;
				background-color: var(--white);
				border-radius: 50%;
			}
			&-result {
				position: absolute;
				bottom: 3rem;
				left: 50%;
				transform: translateX(-50%);
				display: flex;
				align-items: center;
				span {
					font-size: var(--text-32);
					font-weight: 600;
					width: max-content;
					+ div {
						margin-left: 1rem;
					}
				}
				div {
					font-size: var(--text-13);
					font-weight: 600;
					width: 13.8rem;
					border-radius: 2.5rem;
					padding: 1rem 1.5rem;
					text-align: center;
					&.white {
						background-color: var(--white);
						color: var(--blue);
					}
					&.blue {
						background-color: var(--blue);
						color: var(--white);
					}
				}
			}
		}

		&__middle,
		&__last {
			position: relative;
			border-radius: 2rem;
			padding: 3rem 5rem 8.5rem 3.5rem;
			* {
				font-weight: 600;
			}
			h3 {
				font-size: var(--text-30);
				line-height: 3.657rem;
				margin-bottom: 1.2rem;
			}
		}
		&__middle {
			background-color: var(--light-gray);
			color: var(--gray);
			h3 {
				color: var(--dark);
			}
		}
		&__last {
			background-color: var(--blue);
			color: var(--white);
		}
	}
</style>
