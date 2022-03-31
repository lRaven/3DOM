<template>
	<div class="appointment-form">
		<div class="appointment-form__header">
			<h1 class="appointment-form__title">Запись на встречу</h1>
		</div>
		<div class="appointment-form__body">
			<form @submit="sendForm">
				<div class="appointment-form__description">
					<p>ФИО:</p>
				</div>
				<v-input
					:type="'text'"
					v-model="full_name"
					pattern="^[А-Яа-яЁё\s]+$"
				></v-input>

				<div class="appointment-form__description">
					<p>Номер телефона:</p>
				</div>
				<v-input
					:type="'tel'"
					v-model="tel"
					pattern="[\+]*[7-8]{1}\s?[\(]*9[0-9]{2}[\)]*\s?\d{3}[-]*\d{2}[-]*\d{2}"
				></v-input>
				<div class="appointment-form__description">
					<p>Проект:</p>
				</div>
				<cabinet-dropdown
					:selected="'Выберите проект*'"
					:options="[{ value: 'АКАДЕМИЧЕСКИЙ', id: 1 }]"
					v-model="project"
				></cabinet-dropdown>

				<div class="appointment-form__description">
					<p>Квартира:</p>
				</div>
				<apartments-dropdown
					:selected="'Выберите квартиру'"
					v-model="apartment"
					:options="options"
				></apartments-dropdown>

				<div class="appointment-form__description">
					<p>Дата и время:</p>
				</div>
				<date-picker v-model="date"></date-picker>
				<time-picker
					:selected="'Выберите время*'"
					:options="[
						'9:00',
						'9:30',
						'10:00',
						'10:30',
						'11:00',
						'11:30',
						'12:00',
						'12:30',
						'13:00',
						'13:30',
						'14:00',
						'14:30',
						'15:00',
						'15:30',
						'16:00',
						'16:30',
						'17:00',
						'17:30',
					]"
					v-model="time"
				></time-picker>

				<v-button
					:text="'Отправить'"
					:type="'button'"
					class="blue"
				></v-button>

				<div class="appointment-form__bottom">
					<p>
						Нажимая кнопку «Отправить», вы подтверждаете своё
						согласие <br />
						на обработку <a>персональных данных</a>.
					</p>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import store from "../../store";

	import vInput from "./v-input.vue";
	import CabinetDropdown from "./CabinetDropdown.vue";
	import ApartmentsDropdown from "./ApartmentsDropdown.vue";
	import vButton from "../general/v-button.vue";
	import DatePicker from "./DatePicker.vue";
	import TimePicker from "./TimePicker.vue";
	import { postAppointment } from "../../api/appointment";

	export default {
		name: "AppointmentForm",
		store,
		components: {
			vInput,
			CabinetDropdown,
			ApartmentsDropdown,
			vButton,
			DatePicker,
			TimePicker,
		},
		computed: {
			options: () => {
				return store.getters.APARTMENTS;
			},
		},
		data() {
			return {
				tel: "",
				full_name: "",
				project: "",
				apartment: "",
				date: "",
				time: "",
			};
		},
		methods: {
			//* функция проверки заполнения всех полей
			validateForm() {
				const form = document.querySelector(".appointment-form");
				const btn = form.querySelector(".button");
				if (
					this.tel !== "" &&
					this.full_name !== "" &&
					this.project !== "" &&
					this.apartment !== "" &&
					this.date !== "" &&
					this.time !== ""
				) {
					btn.setAttribute("type", "submit");
					btn.removeAttribute("style");
				} else {
					btn.setAttribute("type", "button");
					btn.setAttribute(
						"style",
						"background-color: var(--light-gray); color: var(--dark); box-shadow: inherit"
					);
				}
			},

			sendForm(event) {
				event.preventDefault();

				postAppointment(
					this.full_name,
					this.tel,
					this.date,
					this.time,
					this.project,
					this.apartment
				);
			},
		},
		mounted() {
			//* проверки заполнения всех полей
			this.validateForm();

			//* проверки заполнения всех полей при инпуте
			const inputs = document.querySelectorAll(".input");
			inputs.forEach((input) => {
				input.addEventListener("input", () => {
					this.validateForm();
				});
			});

			//* проверки заполнения всех полей при клике в пределах формы
			document
				.querySelector(".appointments")
				.addEventListener("click", () => {
					this.validateForm();
				});
		},
	};
</script>

<style lang="scss" scoped>
	.appointment-form {
		border-radius: 3rem;
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
		&__header {
			padding: 5.5rem 7.4rem;
			border-bottom: 0.1rem solid #c4c4c4;
		}
		&__title {
			font-size: 3rem;
			font-weight: 600;
		}
		&__body {
			padding: 4rem 6.5rem 10.5rem 7.4rem;
			form {
				display: grid;
				grid-template-columns: 20rem 1fr 1fr;
				grid-gap: 2rem;
			}
		}
		&__description {
			display: flex;
			align-items: center;
			color: #979797;
			font-size: 1.8rem;
			font-weight: 500;
		}
		.input {
			grid-column: 2/4;
		}
		&__bottom {
			grid-column: 2/4;
			font-size: 1.8rem;
			font-weight: 500;
			line-height: 2.2rem;
			a {
				cursor: pointer;
				color: var(--blue);
			}
		}
	}
	.dropdown {
		&:nth-child(6) {
			grid-column: 2/4;
		}
		&:nth-child(8) {
			grid-column: 2/4;
		}
	}
	.date-picker {
		grid-column: 2/3;
	}
	.blue {
		grid-column: 2/4;
		border-radius: 1rem;
		width: 100%;
		height: 5.5rem;
	}
</style>
