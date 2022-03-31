<template>
	<div class="feedback">
		<div class="feedback-form">
			<div class="feedback-form__header">
				<h1 class="feedback-form__title">Обратная связь</h1>
			</div>
			<div class="feedback-form__body">
				<form @submit="postSupportMessage">
					<div class="feedback-form__description">
						<p>ФИО:</p>
					</div>
					<v-input
						:type="'text'"
						pattern="^[А-Яа-яЁё\s]+$"
						v-model="name"
					></v-input>

					<div class="feedback-form__description">
						<p>Номер телефона:</p>
					</div>
					<v-input
						:type="'tel'"
						v-model="tel"
						pattern="[\+]*[7-8]{1}\s?[\(]*9[0-9]{2}[\)]*\s?\d{3}[-]*\d{2}[-]*\d{2}"
					></v-input>

					<div class="feedback-form__description">
						<p>Email:</p>
					</div>
					<v-input reqiured :type="'email'" v-model="email"></v-input>

					<div class="feedback-form__description">
						<p>Тема обращения:</p>
					</div>
					<cabinet-dropdown
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
					></cabinet-dropdown>

					<cabinet-textarea
						placeholder="Напишите сообщение..."
						maxlength="1000"
						v-model="message"
					></cabinet-textarea>

					<v-button :text="'Отправить'" :type="'button'"></v-button>

					<div class="feedback-form__bottom">
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
	import vInput from "./v-input.vue";
	import CabinetDropdown from "./CabinetDropdown.vue";
	import CabinetTextarea from "./CabinetTextarea.vue";
	import vButton from "../general/v-button.vue";
	import store from "../../store";
	import axios from "axios";

	export default {
		name: "Feedback",
		store,
		components: {
			vInput,
			CabinetDropdown,
			CabinetTextarea,
			vButton,
		},
		data() {
			return {
				name: "",
				tel: "",
				email: "",
				topic: "",
				message: "",
			};
		},
		computed: {
			user: () => {
				return store.getters.USER.id;
			},
		},
		methods: {
			//*запись в переменную значения инпута для передачи на сервер
			setValueInputToVariable() {
				const inputs = document.querySelectorAll(".input");
				inputs.forEach((input) => {
					if (input.getAttribute("type") == "text")
						this.name = input.value;
					if (input.getAttribute("type") == "tel")
						this.tel = input.value;
					if (input.getAttribute("type") == "email")
						this.mail = input.value;

					input.addEventListener("input", () => {
						if (input.getAttribute("type") == "text")
							this.name = input.value;
						if (input.getAttribute("type") == "tel")
							this.tel = input.value;
						if (input.getAttribute("type") == "email")
							this.mail = input.value;
					});
				});
			},

			//*запись в переменную значения textarea для передачи на сервер
			setValueTextareaToVariable() {
				const textarea = document.querySelector(".textarea");
				this.message = textarea.value;

				textarea.addEventListener("input", () => {
					this.message = textarea.value;
				});
			},

			//*запись в переменную значения dropdown'а для передачи на сервер
			setTopic() {
				const dropdown = document.querySelector(".dropdown");
				const dropdown__item =
					dropdown.querySelectorAll(".dropdown__item");
				dropdown__item.forEach((item) => {
					item.addEventListener("click", () => {
						if (
							item.textContent.toLowerCase() ===
							"вопрос по покупке"
						) {
							this.topic = 1;
						}
						if (
							item.textContent.toLowerCase() ===
							"вопрос по заселению"
						) {
							this.topic = 2;
						}
						if (
							item.textContent.toLowerCase() ===
							"вопрос по стройке"
						) {
							this.topic = 3;
						}
						if (
							item.textContent.toLowerCase() ===
							"вопрос по проживанию"
						) {
							this.topic = 4;
						}
						if (
							item.textContent.toLowerCase() ===
							"обращение в службу безопасности"
						) {
							this.topic = 5;
						}
						if (
							item.textContent.toLowerCase() ===
							"предложение о сотрудничестве"
						) {
							this.topic = 6;
						}
						if (
							item.textContent.toLowerCase() ===
							"сообщить об ошибке на сайте"
						) {
							this.topic = 7;
						}
						if (item.textContent.toLowerCase() === "другое") {
							this.topic = 8;
						}
					});
				});
			},

			//*отправка сообщения в поддержку (на сервер)
			postSupportMessage(event) {
				event.preventDefault();

				axios
					.post(`${store.getters.BASEURL}/academ/support/`, {
						name: this.name,
						phone_number: this.tel,
						email: this.mail,
						topic_type: this.topic,
						message: this.message,
						user: this.user,
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

			//*делает кнопку неактивной пока есть пустые поля ввода
			activateBtn() {
				const form = document.querySelector(".feedback-form");
				const btn = form.querySelector(".button");
				const dropdownItems = form.querySelectorAll(".dropdown__item");

				dropdownItems.forEach((dropdownItem) => {
					dropdownItem.addEventListener("click", () => {
						if (
							this.name.length > 0 &&
							this.tel.length > 0 &&
							this.email.length > 0 &&
							this.topic !== "" &&
							this.message !== ""
						) {
							btn.setAttribute("type", "submit");
							btn.classList.add("blue");
						} else {
							btn.setAttribute("type", "button");
							btn.classList.remove("blue");
						}
					});
				});

				document.addEventListener("keydown", () => {
					if (
						this.name.length > 0 &&
						this.tel.length > 0 &&
						this.email.length > 0 &&
						this.topic !== "" &&
						this.message !== ""
					) {
						btn.setAttribute("type", "submit");
						btn.classList.add("blue");
					} else {
						btn.setAttribute("type", "button");
						btn.classList.remove("blue");
					}
				});
			},
		},
		mounted() {
			this.activateBtn();

			this.setValueInputToVariable();
			this.setTopic();
			this.setValueTextareaToVariable();
		},
	};
</script>

<style lang="scss" scoped>
	.feedback-form {
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
		.input {
			grid-column: 2/4;
			&:invalid {
				border-color: var(--red);
			}
		}
		.dropdown {
			grid-column: 2/4;
			font-size: 1.8rem;
		}
		.textarea {
			grid-column: 2/4;
			font-size: 1.8rem;
			font-weight: 500;
			border: 0.1rem solid #c4c4c4;
			&:hover {
				border-color: var(--dark);
			}
			&:invalid {
				border-color: var(--red);
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
				color: var(--blue);
			}
		}
	}
	select {
		display: none;
	}
	.button {
		border-radius: 1rem;
		width: 100%;
		height: 5.5rem;
		grid-column: 2/4;
		&:disabled {
			color: var(--dark);
			background-color: var(--light-gray);
			border-color: var(--light-gray);
			&:hover {
				background-color: var(--light-gray);
				border-color: var(--light-gray);
				box-shadow: none;
			}
		}
	}
</style>
