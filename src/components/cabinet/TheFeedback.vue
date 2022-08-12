<template>
	<div class="the-feedback">
		<div class="the-feedback-form">
			<div class="the-feedback-form__header">
				<h1 class="the-feedback-form__title">Обратная связь</h1>
			</div>
			<div class="the-feedback-form__body">
				<form @submit.prevent="postSupportMessage">
					<div class="the-feedback-form__description">
						<p>ФИО:</p>
					</div>
					<v-input
						:type="'text'"
						pattern="^[А-Яа-яЁё\s]+$"
						v-model="name"
					></v-input>

					<div class="the-feedback-form__description">
						<p>Номер телефона:</p>
					</div>
					<v-input
						:type="'tel'"
						v-model="tel"
						pattern="[\+]*[7-8]{1}\s?[\(]*9[0-9]{2}[\)]*\s?\d{3}[-]*\d{2}[-]*\d{2}"
					></v-input>

					<div class="the-feedback-form__description">
						<p>Email:</p>
					</div>
					<v-input reqiured :type="'email'" v-model="email"></v-input>

					<div class="the-feedback-form__description">
						<p>Тема обращения:</p>
					</div>
					<v-dropdown
						:selected="'Выберите тему*'"
						:options="[
							{ id: 1, value: 'Вопрос по покупке' },
							{ id: 2, value: 'Вопрос по заселению' },
							{ id: 3, value: 'Вопрос по стройке' },
							{ id: 4, value: 'Вопрос по проживанию' },
							{ id: 5, value: 'Обращение в службу безопасности' },
							{ id: 6, value: 'Предложение о сотрудничестве' },
							{ id: 7, value: 'Сообщить об ошибке на сайте' },
							{ id: 8, value: 'Другое' },
						]"
						v-model="topic"
					></v-dropdown>

					<v-textarea
						placeholder="Напишите сообщение..."
						maxlength="1000"
						v-model="message"
					></v-textarea>

					<v-button
						:text="'Отправить'"
						:class="buttonColor"
						type="button"
						ref="submit"
					></v-button>

					<div class="the-feedback-form__bottom">
						<p>
							Нажимая кнопку «Отправить», вы подтверждаете своё
							согласие <br />
							на обработку <a>персональных данных</a>.
						</p>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	import { mapState } from "vuex";

	import vInput from "./v-input";
	import vDropdown from "./v-dropdown";
	import vTextarea from "./v-textarea";
	import vButton from "@/components/UI/general/v-button";

	export default {
		name: "TheFeedback",
		components: {
			vInput,
			vDropdown,
			vTextarea,
			vButton,
		},
		watch: {
			// name() {
			// 	if (this.name.length > 0) {
			// 		this.buttonColor = "blue";
			// 	} else this.buttonColor = "gray";
			// },
		},
		data: () => ({
			name: "",
			tel: "",
			email: "",
			topic: "",
			message: "",

			buttonColor: "gray",
		}),
		computed: {
			...mapState({
				user_id: (state) => state.cabinet.user.id,
				baseURL: (state) => state.baseURL,
			}),
		},
		methods: {
			//*отправка сообщения в поддержку (на сервер)
			postSupportMessage() {
				axios
					.post(`${this.baseURL}/academ/support/`, {
						name: this.name,
						phone_number: this.tel,
						email: this.mail,
						topic_type: this.topic,
						message: this.message,
						user: this.user_id,
					})
					.then((response) => {
						if (response.status === 201) {
							console.log(response);
						}
					})
					.catch((err) => {
						console.error(err);
					});
			},
			// *TODO: Сделать валидацию формы
			//*делает кнопку неактивной пока есть пустые поля ввода
			validateForm() {},
		},
		mounted() {
			this.validateForm();
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-feedback-form {
		border-radius: 3rem;
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
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
			&:invalid {
				border-color: $red;
			}
		}
		.v-dropdown {
			grid-column: 2/4;
			font-size: 1.8rem;
		}
		.v-textarea {
			grid-column: 2/4;
			font-size: 1.8rem;
			font-weight: 500;
			border: 0.1rem solid #c4c4c4;
			&:hover {
				border-color: $dark;
			}
			&:invalid {
				border-color: $red;
			}
		}
		&__bottom {
			grid-column: 2/4;
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
		grid-column: 2/4;
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
