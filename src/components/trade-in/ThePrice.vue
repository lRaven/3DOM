<template>
	<section class="price">
		<div class="price__container center">
			<div class="price__calculate">
				<h2 class="price__title">Узнайте цену квартиры</h2>
				<h3 class="price__subtitle">
					Укажите данные квартиры<br />
					и узнайте цену
				</h3>
				<div class="price__rooms">
					<p>Количество комнат</p>
					<v-radio
						:items="[
							{ id: 1, text: '1' },
							{ id: 2, text: '2' },
							{ id: 3, text: '3' },
							{ id: 4, text: '4' },
							{ id: 5, text: '5+' },
						]"
						:name="'rooms'"
					></v-radio>
				</div>
				<v-input
					:text="'Площадь'"
					:type="'number'"
					:min="30"
					:placeholder="'м²'"
				></v-input>
				<v-dropdown
					:description="'Выберите один из наших проектов:'"
					:selected="'Выберите из списка'"
					:options="['АКАДЕМИЧЕСКИЙ']"
					:customClass="'dropdown-pale'"
				></v-dropdown>
				<v-slider
					title="Укажите примерную стоимость, млн руб"
					:min="2.2"
					:max="100"
					:value="22.2"
					:step="0.2"
					class="min-max animate__animated animate__fadeInUp wow"
					:customClass="'pale'"
					:minMax="true"
				></v-slider>
				<v-button
					:text="'Узнать цену'"
					class="blue"
					@click="openPopup"
				></v-button>
			</div>
			<img src="img/trade-in/price-img.svg" alt="" />
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
					dark="dark"
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
	import vRadio from "../general/v-radio.vue";
	import vInput from "../general/v-input.vue";
	import vDropdown from "../general/v-dropdown.vue";
	import vSlider from "../general/v-slider.vue";
	import vButton from "../general/v-button.vue";
	import vPopup from "../general/v-popup.vue";

	import AcademInput from "../academ/academ-input.vue";
	import vCheckbox from "../academ/v-checkbox.vue";

	export default {
		name: "ThePrice",
		components: {
			vRadio,
			vInput,
			vDropdown,
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
	.price {
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 1) 0%,
			rgba(237, 245, 253, 1) 8%,
			rgba(237, 245, 253, 1) 92%,
			rgba(255, 255, 255, 1) 100%
		);
		padding: 5rem 1.5rem;
		&__container {
			display: flex;
			gap: 2rem;
			align-items: center;
			justify-content: space-between;
		}
		&__rooms {
			font-size: 1.8rem;
			display: grid;
			grid-template-columns: repeat(5, max-content);
			justify-content: space-between;
			p {
				grid-column: 1/6;
				margin-bottom: 1rem;
			}
		}
		&__calculate {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(5, max-content) max-content;
			grid-column-gap: 2.7rem;
			background-color: var(--white);
			border-radius: 3rem;
			padding: 8rem 6rem 10rem 6rem;
			width: max-content;
			color: #979797;
			.v-dropdown,
			.min-max {
				grid-column: 1/3;
				margin-top: 5rem;
			}
			.v-button {
				margin-top: 5rem;
				padding: 2rem 8rem;
				border-radius: 3rem;
				font-size: 1.8rem;
			}
		}
		&__title {
			grid-column: 1/3;
			color: #52555a;
			font-size: 4rem;
			font-weight: 600;
			margin-bottom: 2rem;
		}
		&__subtitle {
			grid-column: 1/3;
			font-size: 2.5rem;
			font-weight: 500;
			margin-bottom: 5rem;
		}
	}
</style>
