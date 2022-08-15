<template>
	<section class="banner">
		<div class="banner__container center">
			<div
				class="banner__description animate__animated animate__fadeInLeft wow"
			>
				<h1 class="banner__title">Trade-in</h1>
				<h3 class="banner__subtitle">
					Trade-in — это программа, которая поможет обменять вашу
					старую квартиру на новую
				</h3>
				<v-button
					:text="'Оформить заявку'"
					:type="'button'"
					class="blue"
					@click="openPopup"
				></v-button>
			</div>
			<div class="banner__img animate__animated animate__fadeInRight wow">
				<img src="/img/trade-in/banner-img.svg" alt="" />
			</div>
			<div class="banner__footer animate__animated animate__fadeInUp wow">
				<div class="banner__info">
					<h4
						class="banner__info-title animate__animated animate__fadeInUp wow"
					>
						Услуга страхования
					</h4>
					<h5
						class="banner__info-subtitle animate__animated animate__fadeInUp wow"
					>
						Финансовая защита всех<br />
						участников сделки
					</h5>
				</div>
				<div class="banner__info">
					<h4
						class="banner__info-title animate__animated animate__fadeInUp wow"
					>
						Независимая оценка жилья
					</h4>
					<h5
						class="banner__info-subtitle animate__animated animate__fadeInUp wow"
					>
						Финансовая защита всех<br />
						участников сделки
					</h5>
				</div>
				<div class="banner__info">
					<h4
						class="banner__info-title animate__animated animate__fadeInUp wow"
					>
						Собираем документы
					</h4>
					<h5
						class="banner__info-subtitle animate__animated animate__fadeInUp wow"
					>
						Финансовая защита всех<br />
						участников сделки
					</h5>
				</div>
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
	import vButton from "@/components/UI/general/v-button.vue";
	import vPopup from "@/components/UI/general/v-popup.vue";

	import AcademInput from "../academ/academ-input.vue";
	import vCheckbox from "../academ/v-checkbox.vue";

	export default {
		name: "TheBanner",
		components: {
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
	@import "@/assets/scss/variables";

	.banner {
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
			box-shadow:$shadow;
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
