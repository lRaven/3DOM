<template>
	<section class="the-insurance" id="insurance">
		<div class="the-insurance__container center">
			<div class="the-insurance__header">
				<h2
					class="the-insurance__title animate__animated animate__fadeInUp wow"
				>
					Страхование недвижимости
				</h2>
				<h3
					class="the-insurance__subtitle animate__animated animate__fadeInUp wow"
				>
					При оформлении ипотеки страхование недвижимости является
					требованием закона.
				</h3>
			</div>
			<div class="the-insurance__body">
				<form
					class="the-insurance__form animate__animated animate__fadeInLeft wow"
				>
					<h4 class="the-insurance__form-title">
						Оформить страхование
					</h4>
					<p class="the-insurance__form-text">
						Приведенные расчеты актуальны<br />
						при полученом праве собственности.
					</p>
					<v-dropdown
						:description="'Тип страхования'"
						:selected="'Выберите из списка'"
						:options="['1', '2', '3', '4']"
					></v-dropdown>
					<v-dropdown
						:description="'Банк кредитора'"
						:selected="'Выберите из списка'"
						:options="['1', '2', '3', '4']"
					></v-dropdown>
					<v-dropdown
						:description="'Выберите пол'"
						:selected="'Женский'"
						:options="['Мужской', 'Женский']"
					></v-dropdown>
					<v-input
						:type="'number'"
						:maxlength="3"
						:max="100"
						:min="18"
						:text="'Укажите возраст'"
					></v-input>
					<v-button
						text="Оформить"
						type="button"
						@click="openPopup"
					></v-button>
				</form>
				<p
					class="the-insurance__subtitle-mobile animate__animated animate__fadeInUp wow"
				>
					При оформлении ипотеки страхование недвижимости является
					требованием закона.
				</p>
				<img
					src="/img/general/insurance-img.png"
					alt=""
					class="the-insurance__img animate__animated animate__fadeInRight wow"
				/>
			</div>
		</div>
		<transition>
			<v-popup
				v-if="isPopupVisible"
				title="3DOM консультация"
				@closePopup="closePopup"
			>
				<p class="v-popup__description">
					Отправьте заявку<br />
					для получения консультации
				</p>
				<academ-input
					placeholder="Имя"
					type="text"
					dark="dark"
					v-model="name"
				></academ-input>
				<academ-input
					placeholder="Телефон"
					type="tel"
					dark="dark"
					v-model="tel"
				></academ-input>
				<v-checkbox
					v-model="privacyPolicy"
					text="Даю согласие на обработку персональных данных"
					:dark="'dark'"
				></v-checkbox>
				<v-button text="Отправить заявку" type="button"></v-button>
			</v-popup>
		</transition>
	</section>
</template>

<script>
	import vInput from "@/components/UI/general/v-input.vue";

	import AcademInput from "../academ/academ-input.vue";
	import vCheckbox from "../academ/v-checkbox.vue";

	export default {
		name: "TheInsurance",
		components: {
			vInput,

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
	@import "@/assets/scss/variables";

	.the-insurance {
		color: $dark;
		padding: 5rem 1.5rem;
		&__container {
		}
		&__header {
			margin-bottom: 5rem;
		}
		&__title {
			font-size: 5rem;
			font-weight: 600;
			margin-bottom: 1.5rem;
		}
		&__subtitle {
			font-size: 2.5rem;
			font-weight: 500;
			max-width: 78rem;
			line-height: 1.2;
			&-mobile {
				display: none;
			}
		}
		&__body {
			display: grid;
			grid-template-columns: 45rem 1fr;
			gap: 2.5rem;
		}
		&__form {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-column-gap: 1.7rem;
			grid-row-gap: 1rem;
			box-shadow: $shadow;
			border-radius: 3rem;
			padding: 5rem 4rem 4rem 4rem;
			min-width: 45rem;
			&-title {
				grid-column: 1/3;
				font-size: 2.5rem;
				font-weight: 600;
				color: #52555a;
				margin-bottom: 2rem;
			}
			&-text {
				grid-column: 1/3;
				color: #52555a;
				font-size: 1.6rem;
				line-height: 1.4;
				margin-bottom: 2rem;
			}
			.v-dropdown {
				grid-column: 1/3;
				&:nth-child(5) {
					grid-column: 1/2;
				}
			}

			.blue {
				width: 16rem;
			}
		}
		&__img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 3rem;
			box-shadow: $shadow;
		}

		.v-popup {
			&__description {
				font-size: 1.8rem;
				margin-bottom: 2rem;
			}
			.v-checkbox {
				margin: 2rem 0;
			}
			.v-button {
				width: 100%;
			}
		}
	}

	@media (max-width: 1023px) {
		.the-insurance {
			&__container {
			}
			&__header {
				margin-bottom: 0.7rem;
			}
			&__title {
			}
			&__subtitle {
				display: none;
				&-mobile {
					display: block;
					font-size: 1.8rem;
					line-height: 2.2rem;
					color: $gray;
				}
			}
			&__body {
				display: flex;
				flex-direction: column-reverse;
			}
		}
	}

	@media (max-width: 540px) {
		.the-insurance {
			padding: 1rem;
			&__title {
				font-size: 3rem;
			}
			&__form {
				padding: 1.8rem 1.5rem 3rem 1.5rem;
				grid-template-columns: 1fr;
				&-title {
					text-align: center;
				}
			}
			.v-button {
				justify-self: center;
				grid-column: 1/3;
			}
		}
	}

	@media (max-width: 490px) {
		.the-insurance {
			&__form {
				min-width: inherit;
			}
			.v-dropdown {
				&:nth-child(n) {
					grid-column: 1/3;
				}
				&:nth-child(5) {
					width: 18rem;
				}
			}
			.input-wrapper {
				width: 18rem;
			}
			.v-button {
				font-size: 1.6rem;
			}
		}
	}
</style>
