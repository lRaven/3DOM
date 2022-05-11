<template>
	<section class="the-mortgage" id="mortgage">
		<div class="the-mortgage__container center">
			<div class="the-mortgage__header">
				<h2 class="animate__animated animate__fadeInUp wow">
					Встречайте: Ипотека — 4,2%
				</h2>
				<p class="animate__animated animate__fadeInUp wow">
					Как вы полагаете, оформить ипотеку просто или очень просто?
				</p>
				<p class="animate__animated animate__fadeInUp wow">
					Так вот, оформить — легко, а выплачивать — комфортно.
				</p>
			</div>

			<div class="the-mortgage__main">
				<form action="#">
					<div
						class="the-mortgage__calculation animate__animated animate__fadeInUp wow"
					>
						<v-toggle :description="'Семья с детьми'"></v-toggle>
						<v-slider
							title="Стоимость квартиры, руб"
							text="руб"
							:min="2000000"
							:max="20000000"
							:value="5000000"
							:step="100000"
							class="value"
							:minMax="false"
						></v-slider>
						<v-slider
							title="Первоначальный взнос, руб"
							text="руб"
							:min="100000"
							:max="10000000"
							:value="1500000"
							:step="100000"
							class="value"
							:minMax="false"
						></v-slider>
						<v-slider
							title="Срок погашения кредита"
							text="лет"
							:min="1"
							:max="30"
							:value="25"
							:step="1"
							class="value"
							:minMax="false"
						></v-slider>
						<v-button
							text="Отправить"
							class="blue"
							:type="'button'"
							@click="openPopup"
						></v-button>
					</div>
					<div
						class="the-mortgage__middle animate__animated animate__fadeInUp wow"
					>
						<h3>Стандартное ипотечное предложение</h3>
						<div class="the-mortgage__item">
							<p>Процентная ставка</p>
							<span>8,75%</span>
						</div>
						<div class="the-mortgage__item">
							<p>Ежемесячный платёж</p>
							<span>32 880</span>
							<span>руб.</span>
						</div>
						<div class="the-mortgage__item">
							<p>Переплата</p>
							<span>3 274 000</span>
							<span>руб.</span>
						</div>
						<div class="the-mortgage__item-result">
							<span>0</span>
							<span>руб.</span>
							<div class="blue">Без экономии</div>
						</div>
					</div>
					<div
						class="the-mortgage__last animate__animated animate__fadeInUp wow"
					>
						<h3>
							Ипотечное предложение <br />
							от компании 3DOM
						</h3>
						<div class="the-mortgage__item">
							<p>Процентная ставка</p>
							<span>4,25%</span>
						</div>
						<div class="the-mortgage__item">
							<p>Ежемесячный платёж</p>
							<span>22 330</span>
							<span>руб.</span>
							<div class="the-mortgage__item-description">
								<div class="the-mortgage__item-circle"></div>
								<p>Меньше на 8 777 руб.</p>
							</div>
						</div>
						<div class="the-mortgage__item">
							<p>Переплата</p>
							<span>1 220 550</span>
							<span>руб.</span>
							<div class="the-mortgage__item-description">
								<div class="the-mortgage__item-circle"></div>
								<p>Меньше на 2 555 руб.</p>
							</div>
						</div>
						<div class="the-mortgage__item-result">
							<span>2 127 412</span>
							<span>руб.</span>
							<div class="white">Экономия</div>
						</div>
					</div>
				</form>
			</div>
		</div>
		<transition>
			<v-popup
				title="3DOM консультация"
				v-if="isPopupVisible"
				@closePopup="closePopup"
			>
				<p class="v-popup__description">
					Отправьте заявку<br />
					для получения консультации
				</p>
				<academ-input
					:placeholder="'Имя'"
					:type="'text'"
					:dark="'dark'"
					v-model="name"
					pattern="^[А-Яа-яЁё\s]+$"
				></academ-input>
				<academ-input
					:placeholder="'Телефон'"
					:type="'tel'"
					:dark="'dark'"
					v-model="tel"
					pattern="[\+]*[7-8]{1}\s?[\(]*9[0-9]{2}[\)]*\s?\d{3}[-]*\d{2}[-]*\d{2}"
				></academ-input>
				<v-checkbox
					v-model="privacyPolicy"
					text="Даю согласие на обработку персональных данных"
					:dark="'dark'"
				></v-checkbox>
				<v-button
					class="blue"
					:text="'Отправить заявку'"
					:type="'button'"
				></v-button>
			</v-popup>
		</transition>
	</section>
</template>

<script>
	import vToggle from "./v-toggle.vue";
	import vSlider from "./v-slider.vue";
	import vButton from "./v-button.vue";
	import vPopup from "./v-popup.vue";

	import AcademInput from "../academ/academ-input.vue";
	import vCheckbox from "../academ/v-checkbox.vue";

	export default {
		name: "TheMortgage",
		components: {
			vToggle,
			vSlider,
			vButton,
			vPopup,

			AcademInput,
			vCheckbox,
		},
		data() {
			return {
				isPopupVisible: false,

				name: "",
				tel: "",
				privacyPolicy: false,
			};
		},
		methods: {
			closePopup() {
				this.isPopupVisible = false;
				document.body.classList.remove("locked");
			},
			openPopup() {
				this.isPopupVisible = true;
				document.body.classList.add("locked");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.the-mortgage {
		padding: 1.5rem 1.5rem 3rem 1.5rem;
		&__header {
			margin-bottom: 5rem;
			h2 {
				margin-top: 10rem;
				font-size: 4.2rem;
				color: var(--dark);
				font-weight: 600;
				margin-bottom: 1.5rem;
			}
			p {
				font-size: 2.5rem;
				font-weight: 600;
				color: var(--gray);
			}
		}
		&__title {
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
			width: 45rem;
			div {
				width: 100%;
			}
			.blue {
				position: relative;
				top: 2.5rem;
				align-self: flex-start;
				padding-left: 4rem;
				padding-right: 4rem;
			}
		}

		&__item {
			&:nth-child(n + 3) {
				height: 9.2rem;
				p:nth-child(2) {
					margin-bottom: 0;
				}
			}
			+ .the-mortgage__item {
				margin-top: 2.4rem;
			}
			p {
				font-size: 1.3rem;
				margin-bottom: 1rem;
			}
			span {
				font-size: 2.4rem;
				+ span {
					margin-left: 0.6rem;
				}
				+ .the-mortgage__item-description {
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
					font-size: 3.2rem;
					font-weight: 600;
					width: max-content;
					+ div {
						margin-left: 1rem;
					}
				}
				div {
					font-size: 1.3rem;
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
			width: 45rem;
			box-shadow: 0 0 2rem rgb(0 0 0 / 20%);
			* {
				font-weight: 600;
			}
			h3 {
				font-size: 3rem;
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

	@media (max-width: 1427px) {
		.the-mortgage {
			&__header {
				width: max-content;
				margin: auto;
				margin-bottom: 2rem;
			}
		}
	}
	@media (max-width: 1440px) {
		.the-mortgage {
			&__main {
				form {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
				}
			}
		}
	}

	@media (max-width: 1023px) {
		.the-mortgage {
			display: none;
		}
	}
</style>
