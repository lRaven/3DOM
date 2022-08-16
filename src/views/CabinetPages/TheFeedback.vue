<template>
	<div class="the-feedback">
		<div class="the-feedback-form">
			<div class="the-feedback-form__header">
				<h1 class="the-feedback-form__title">Обратная связь</h1>
			</div>
			<div class="the-feedback-form__body">
				<form @submit.prevent="send_message">
					<p class="the-feedback-form__description">ФИО:</p>
					<v-input type="text" v-model="form_data.name"></v-input>

					<p class="the-feedback-form__description">
						Номер телефона:
					</p>

					<v-input
						type="tel"
						v-model="form_data.phone_number"
					></v-input>

					<p class="the-feedback-form__description">Email:</p>
					<v-input type="email" v-model="form_data.email"></v-input>

					<p class="the-feedback-form__description">
						Тема обращения:
					</p>
					<v-dropdown
						selected="Выберите тему*"
						:options="topic_list"
						v-model="form_data.topic_type"
					></v-dropdown>

					<v-textarea
						placeholder="Напишите сообщение..."
						maxlength="1000"
						v-model="form_data.message"
					></v-textarea>

					<v-button
						text="Отправить"
						type="submit"
						ref="submit"
						:disabled="!isFormValid"
					></v-button>

					<p class="the-feedback-form__bottom">
						Нажимая кнопку «Отправить», вы подтверждаете своё
						согласие <br />
						на обработку <a>персональных данных</a>.
					</p>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations } from "vuex";
	import { send_support_message } from "@/api/support";
	import { returnErrorMessages } from "@/js/returnErrorMessages";

	import vInput from "@/components/UI/cabinet/v-input";
	import vDropdown from "@/components/UI/cabinet/v-dropdown";
	import vTextarea from "@/components/UI/cabinet/v-textarea";
	import vButton from "@/components/UI/general/v-button";

	import { useToast } from "vue-toastification";

	export default {
		name: "TheFeedback",
		components: {
			vInput,
			vDropdown,
			vTextarea,
			vButton,
		},
		data: () => ({
			form_data: {
				name: "",
				phone_number: "",
				email: "",
				topic_type: "",
				message: "",
			},
			topic_list: [
				{ id: 1, value: "Вопрос по покупке" },
				{ id: 2, value: "Вопрос по заселению" },
				{ id: 3, value: "Вопрос по стройке" },
				{ id: 4, value: "Вопрос по проживанию" },
				{ id: 5, value: "Обращение в службу безопасности" },
				{ id: 6, value: "Предложение о сотрудничестве" },
				{ id: 7, value: "Сообщить об ошибке на сайте" },
				{ id: 8, value: "Другое" },
			],
		}),
		computed: {
			...mapState({
				user_id: (state) => state.cabinet.user.id,
				baseURL: (state) => state.baseURL,
			}),

			isFormValid() {
				if (
					this.form_data.name.length > 0 &&
					this.form_data.phone_number.length > 0 &&
					this.form_data.email.length > 0 &&
					this.form_data.topic_type !== "" &&
					this.form_data.message.length > 0
				) {
					return true;
				} else {
					return false;
				}
			},
		},
		methods: {
			...mapMutations(["SET_TAB"]),

			//* отправка сообщения в поддержку
			async send_message() {
				try {
					const response = await send_support_message({
						...this.form_data,
						user: this.user_id,
					});
					if (response.status === 201) {
						this.toast.success(
							"Спасибо за обращение, с вами скоро свяжутся"
						);
						console.log("support message send");
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
		},
		created() {
			this.SET_TAB("feedback");
		},
		setup() {
			const toast = useToast();
			return { toast };
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-feedback-form {
		border-radius: 3rem;
		box-shadow: $shadow;
		&__header {
			padding: 5.5rem 7.4rem;
			border-bottom: 1px solid #c4c4c4;
		}
		&__title {
			font-size: 3rem;
			font-weight: 600;
		}
		&__body {
			padding: 4rem 6.5rem 10.5rem 7.4rem;
			form {
				display: grid;
				grid-template-columns: 20rem 1fr;
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
			grid-column: 2/3;
			&:invalid {
				border-color: $red;
			}
		}
		.v-dropdown {
			grid-column: 2/3;
			font-size: 1.8rem;
		}
		.v-textarea {
			grid-column: 2/3;
			font-size: 1.8rem;
			font-weight: 500;
			border: 0.1rem solid #c4c4c4;
			resize: none;
			&:hover {
				border-color: $dark;
			}
			&:invalid {
				border-color: $red;
			}
		}
		&__bottom {
			grid-column: 2/3;
			font-size: 1.8rem;
			font-weight: 500;
			line-height: 2.2rem;
			color: #979797;
			a {
				cursor: pointer;
				color: $blue;
			}
		}
	}
	select {
		display: none;
	}
	.v-button {
		border-radius: 1rem;
		width: 100%;
		height: 5.5rem;
		grid-column: 2/3;
		&:disabled {
			color: $dark;
			background-color: $light-gray;
			border-color: $light-gray;
			&:hover {
				background-color: $light-gray;
				border-color: $light-gray;
				box-shadow: none;
			}
		}
	}
</style>
