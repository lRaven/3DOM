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
				<v-input type="text" v-model="appointmentForm.client"></v-input>

				<div class="appointment-form__description">
					<p>Номер телефона:</p>
				</div>
				<v-input
					type="tel"
					v-model="appointmentForm.phone_number"
				></v-input>
				<div class="appointment-form__description">
					<p>Проект:</p>
				</div>
				<v-dropdown
					placeholder="Выберите проект*"
					showedValue="value"
					:getValue="appointmentForm.building"
					:options="buildings"
					v-model="appointmentForm.building"
				></v-dropdown>

				<div class="appointment-form__description">
					<p>Квартира:</p>
				</div>
				<v-dropdown
					placeholder="Выберите квартиру"
					showedValue="number"
					showedValuePrefix="Квартира №"
					:getValue="appointmentForm.apartment"
					v-model="appointmentForm.apartment"
					:options="apartments"
				></v-dropdown>

				<div class="appointment-form__description">
					<p>Дата и время:</p>
				</div>
				<date-picker
					v-model="appointmentForm.date"
					:getDate="appointmentForm.date"
				></date-picker>
				<time-picker
					placeholder="Выберите время*"
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
					:getValue="appointmentForm.time"
					v-model="appointmentForm.time"
				></time-picker>

				<v-button
					:disabled="!isFormValid"
					text="Отправить"
					type="submit"
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

	import vInput from "@/components/UI/cabinet/v-input";
	import vDropdown from "@/components/UI/cabinet/v-dropdown";
	import DatePicker from "@/components/UI/cabinet/DatePicker";
	import TimePicker from "@/components/cabinet/TimePicker";

	import { postAppointment } from "@/api/appointment";
	import { returnErrorMessages } from "@/js/returnErrorMessages";

	import { useToast } from "vue-toastification";

	export default {
		name: "AppointmentForm",
		components: {
			vInput,
			vDropdown,
			DatePicker,
			TimePicker,
		},
		computed: {
			...mapState({ apartments: (state) => state.academ.apartments }),

			isFormValid() {
				if (
					this.appointmentForm.client.length > 0 &&
					this.appointmentForm.phone_number.length > 0 &&
					this.appointmentForm.building !== "" &&
					this.appointmentForm.apartment !== "" &&
					this.appointmentForm.date !== "" &&
					this.appointmentForm.time !== ""
				) {
					return true;
				} else {
					return false;
				}
			},
		},
		data: () => ({
			appointmentForm: {
				client: "",
				phone_number: "",
				date: "",
				time: "",
				manager: 1,
				building: "",
				apartment: "",
			},
			buildings: [{ id: 1, value: "АКАДЕМИЧЕСКИЙ" }],
		}),
		methods: {
			async sendForm(event) {
				try {
					const response = await postAppointment({
						client: this.appointmentForm.client,
						phone_number: this.appointmentForm.phone_number,
						date: this.appointmentForm.date,
						time: this.appointmentForm.time,
						manager: this.appointmentForm.manager,
						building: this.appointmentForm.building.id,
						apartment: this.appointmentForm.apartment.id,
					});
					if (response.status === 201) {
						this.toast.success(
							"Спасибо! Вы записаны на просмотр квартиры.\nОжидайте звонка Вашего менеджера."
						);
						console.log("Appeal created");
						event.target.reset();
						this.resetForm();
					}
					if (response.status === 400) {
						const error_list = returnErrorMessages(response.data);
						error_list.forEach((el) => {
							this.toast.error(el);
						});
					}
				} catch (err) {
					throw new Error(err);
				}
			},

			resetForm() {
				for (const key in this.appointmentForm) {
					if (Object.hasOwnProperty.call(this.appointmentForm, key)) {
						key === "manager"
							? (this.appointmentForm[key] = 1)
							: (this.appointmentForm[key] = "");
					}
				}
			},
		},
		setup() {
			const toast = useToast();
			return { toast };
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
	.v-button {
		grid-column: 2/4;
		border-radius: 1rem;
		width: 100%;
		height: 5.5rem;
		display: flex;
		align-items: center;
	}
</style>
