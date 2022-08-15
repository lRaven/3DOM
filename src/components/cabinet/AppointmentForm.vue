<template>
	<div class="appointment-form">
		<div class="appointment-form__header">
			<h1 class="appointment-form__title">Запись на встречу</h1>
		</div>
		<div class="appointment-form__body">
			<form @submit.prevent="sendForm">
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
				<v-dropdown
					:selected="'Выберите проект*'"
					:options="[{ id: 1, value: 'АКАДЕМИЧЕСКИЙ' }]"
					v-model="project"
				></v-dropdown>

				<div class="appointment-form__description">
					<p>Квартира:</p>
				</div>
				<v-dropdown
					:selected="'Выберите квартиру'"
					v-model="apartment"
					:options="apartments"
				></v-dropdown>

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
	import { mapState } from "vuex";

	import vInput from "./v-input";
	import vDropdown from "@/components/cabinet/v-dropdown";
	import vButton from "@/components/UI/general/v-button";
	import DatePicker from "@/components/cabinet/DatePicker";
	import TimePicker from "@/components/cabinet/TimePicker";
	import { postAppointment } from "@/api/appointment";

	export default {
		name: "AppointmentForm",
		components: {
			vInput,
			vDropdown,
			vButton,
			DatePicker,
			TimePicker,
		},
		computed: {
			...mapState({
				apartments: (state) => state.academ.apartments,
			}),
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
				const btn = form.querySelector(".v-button");
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
						"background-color: #eee; color: #4b4b4b; box-shadow: inherit"
					);
				}
			},

			sendForm() {
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
				.querySelector(".the-appointments")
				.addEventListener("click", () => {
					this.validateForm();
				});
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.appointment-form {
		border-radius: 3rem;
		box-shadow: $shadow;
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
		.v-input {
			grid-column: 2/4;
		}
		&__bottom {
			grid-column: 2/4;
			font-size: 1.8rem;
			font-weight: 500;
			line-height: 2.2rem;
			a {
				cursor: pointer;
				color: $blue;
			}
		}
	}
	.v-dropdown {
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
