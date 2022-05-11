<template>
	<div class="page-fix-client theme-container">
		<the-header />
		<main class="main">
			<form class="fix" @submit="sendFixForm">
				<h1 class="fix__title">Зафиксировать клиента</h1>

				<fieldset class="fix__row">
					<legend class="fix__row-title">Данные клиента</legend>
					<v-input
						text="Фамилия *"
						pattern="^[А-Яа-яЁё\s]+$"
						type="text"
						v-model="last_name"
					></v-input>
					<v-input
						text="Имя *"
						pattern="^[А-Яа-яЁё\s]+$"
						type="text"
						v-model="first_name"
					></v-input>
					<v-input
						text="Отчество *"
						pattern="^[А-Яа-яЁё\s]+$"
						type="text"
						v-model="patronymic"
					></v-input>
					<v-input
						text="Номер телефона *"
						pattern="[\+]*[7-8]{1}\s?[\(]*9[0-9]{2}[\)]*\s?\d{3}[-]*\d{2}[-]*\d{2}"
						type="tel"
						v-model="tel"
					></v-input>
				</fieldset>

				<fieldset class="fix__row">
					<legend class="fix__row-title">Застройщики</legend>
					<div class="fix__row-colored">
						<div class="fix__building">
							<p>ЖК Академический</p>
						</div>
						<div class="fix__apartment">
							Квартира №{{ apartmentNumber }}
						</div>
						<a class="fix__link">Условия фиксации</a>
					</div>
				</fieldset>

				<fieldset class="fix__row">
					<legend class="fix__row-title">
						Дополнительные сведения
					</legend>
					<v-textarea
						description="Ваш комментарий к заявке"
						v-model="info"
					></v-textarea>
				</fieldset>
				<span class="fix__hint"> * Поле обязательно к заполнению </span>
				<button class="fix__button" type="button">Зафиксировать</button>
			</form>
		</main>
		<the-footer />
		<transition>
			<v-notification
				color="green"
				image="img/icon/academ/check.svg"
				message="Клиент успешно зафиксирован"
				v-if="isNotificationVisible && status === 'success'"
				@closeNotification="closeNotification"
			></v-notification>
		</transition>
		<transition>
			<v-notification
				color="red"
				image="img/icon/academ/error.svg"
				message="Клиент с таким номером телефона уже зафиксирован"
				v-if="isNotificationVisible && status === 'failed'"
				@closeNotification="closeNotification"
			></v-notification>
		</transition>
	</div>
</template>

<script>
	import TheHeader from "@/components/academ/TheHeader";

	import vInput from "@/components/crm/v-input";
	import vTextarea from "@/components/crm/v-textarea";
	import vNotification from "@/components/academ/v-notification";

	import TheFooter from "@/components/academ/TheFooter";

	import { fixClient } from "@/api/fix-client";

	import store from "@/store";

	export default {
		name: "PageFixClient",
		store,
		components: {
			TheHeader,

			vInput,
			vTextarea,
			vNotification,

			TheFooter,
		},
		props: {
			building: String,
			apartmentNumber: String,
			apartmentId: String,
			apartmentFloor: String,
			apartmentArea: String,
		},
		computed: {
			status: () => {
				return store.getters.FIX_STATUS;
			},
		},
		data() {
			return {
				last_name: "",
				first_name: "",
				patronymic: "",
				tel: "",
				info: "",

				isNotificationVisible: false,
			};
		},
		methods: {
			checkRequiredInputs() {
				const fixForm = document.querySelector(".fix");
				const button = fixForm.querySelector(".fix__button");
				const inputs = fixForm.querySelectorAll(".input");

				if (
					this.last_name.length > 0 &&
					this.first_name.length > 0 &&
					this.patronymic.length > 0 &&
					this.tel.length > 0
				) {
					button.setAttribute("type", "submit");
				} else button.setAttribute("type", "button");

				inputs.forEach((input) => {
					input.addEventListener("input", () => {
						if (
							this.last_name.length > 0 &&
							this.first_name.length > 0 &&
							this.patronymic.length > 0 &&
							this.tel.length > 0
						) {
							button.setAttribute("type", "submit");
						} else button.setAttribute("type", "button");
					});
				});
			},

			sendFixForm(e) {
				e.preventDefault();

				fixClient(
					this.first_name,
					this.last_name,
					this.patronymic,
					this.tel,
					this.info,
					this.apartmentId
				);
				this.isNotificationVisible = true;
				setTimeout(() => {
					this.isNotificationVisible = false;
				}, 3000);
			},

			showNotification() {
				this.isNotificationVisible = true;
			},
			closeNotification() {
				this.isNotificationVisible = false;
			},
		},
		mounted() {
			if (this.apartmentNumber === undefined) {
				this.$router.push("/crm");
			}
			this.checkRequiredInputs();
		},
	};
</script>

<style lang="scss" scoped>
	.fix {
		max-width: 90rem;
		width: 100%;
		margin: auto;
		margin-top: 5rem;
		margin-bottom: 5rem;
		padding: 5rem 14rem 3.5rem 9rem;
		background-color: var(--white);
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
		color: var(--dark);
		&__title {
			font-size: 2.4rem;
			font-weight: 700;
			margin-bottom: 4rem;
		}
		&__row {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 2.5rem 6rem;
			&:nth-child(3) {
				display: block;
			}
			&-colored {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				grid-gap: 2.5rem 6rem;
				background-color: var(--light-gray);
				padding: 1.5rem;
			}
			+ .fix__row {
				margin-top: 4rem;
			}
			&-title {
				font-size: 1.8rem;
				font-weight: 600;
				margin-bottom: 1rem;
			}
		}
		&__building,
		&__apartment {
			display: flex;
			align-items: center;
			font-size: 1.3rem;
			font-weight: 500;
			background-color: var(--white);
			height: 5rem;
			padding: 1.5rem;
		}
		&__link {
			cursor: pointer;
			color: var(--blue);
			font-size: 1.3rem;
			font-weight: 600;
		}
		&__hint {
			display: block;
			color: var(--warm-red);
			font-size: 1.3rem;
			font-weight: 500;
			margin-top: 2.7rem;
		}
		&__button {
			padding: 1.5rem;
			background-color: var(--white);
			border: 0.1rem solid var(--middle-gray);
			color: var(--dark);
			margin-top: 2rem;
			transition: all 0.2s ease;
			font-size: 1.8rem;
			font-weight: 600;
			&:hover {
				transform: translateY(-0.3rem);
				background-color: var(--middle-gray);
				color: var(--white);
			}
			&:active {
				transform: translateY(-0.1rem);
			}
			&:disabled {
				background-color: var(--middle-gray);
				color: var(--gray);
			}
		}
		.textarea-wrapper {
			grid-column: 1/3;
		}
	}
</style>
