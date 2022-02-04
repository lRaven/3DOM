<template>
	<div class="theme-container">
		<the-header />
		<main class="main">
			<section class="register-wrapper center">
				<form class="register" @submit="register">
					<div class="register__header">
						<h1>Регистрация</h1>
					</div>
					<div class="register__body">
						<cabinet-input
							:text="'Логин:'"
							:type="'text'"
							:placeholder="'username'"
							:name="'username'"
							v-model="username"
							required
						></cabinet-input>
						<cabinet-input
							:text="'E-mail:'"
							:type="'email'"
							:placeholder="'e-mail'"
							:name="'email'"
							v-model="email"
							required
						></cabinet-input>
						<cabinet-input
							:text="'Пароль:'"
							:type="'password'"
							:placeholder="'password'"
							:name="'password'"
							v-model="password"
							required
						></cabinet-input>
						<v-button
							:text="'Зарегистрироваться'"
							:type="'button'"
						></v-button>
						<p class="register__description">
							Нажимая кнопку «Зарегистрироваться», вы
							подтверждаете своё согласие на
							<a> обработку персональных данных </a>
						</p>
					</div>
				</form>
			</section>
		</main>
		<the-footer />
	</div>
</template>

<script>
	import store from "../store";
	import axios from "axios";
	import TheHeader from "../components/cabinet/TheHeader.vue";
	import CabinetInput from "../components/cabinet/CabinetInput.vue";
	import VButton from "../components/general/v-button.vue";
	import TheFooter from "../components/general/TheFooter.vue";

	export default {
		name: "Register",
		store,
		components: {
			TheHeader,
			CabinetInput,
			VButton,
			TheFooter,
		},

		data() {
			return {
				username: "",
				password: "",
				email: "",
			};
		},

		methods: {
			//*делает кнопку неактивной пока есть пустые поля ввода
			activateBtn() {
				const btn = document.querySelector(".button");
				const inputs = document.querySelectorAll("input");
				inputs.forEach((input) => {
					input.addEventListener("input", () => {
						if (
							this.username !== "" &&
							this.email !== "" &&
							this.password !== ""
						) {
							btn.setAttribute("type", "submit");
							btn.classList.add("blue");
						} else {
							btn.setAttribute("type", "button");
							btn.classList.remove("blue");
						}
					});
				});
			},

			//*регистрация нового юзера
			register(event) {
				event.preventDefault();

				axios
					.post("http://localhost:8001/auth/users/", {
						email: this.email,
						username: this.username,
						password: this.password,
					})
					.then((response) => {
						if (response.status == 201) {
							//* редирект на страницу авторизации
							this.$router.push("/login");
						}
					})
					.catch((err) => {
						console.log(err.response.error);
					});
			},
		},
		mounted() {
			this.activateBtn();
		},
	};
</script>

<style lang="scss" scoped>
	.main {
		background: linear-gradient(
			0deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(237, 245, 253, 1) 10%
		);
		padding-top: 8.5rem;
	}

	.register {
		border-radius: 3rem;
		background-color: var(--white);
		width: 61rem;
		min-height: 74rem;
		box-shadow: 0 0.2rem 1.5rem rgb(0 0 0 / 10%);

		&-wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			height: calc(100vh - 14rem);
			min-height: inherit;
		}

		&__header {
			padding: 4rem 0;

			h1 {
				text-align: center;
				color: var(--dark);
				font-size: var(--text-30);
				font-weight: 600;
			}

			border-bottom: 0.1rem solid #c4c4c4;
		}

		&__body {
			padding: 5.2rem 11.5rem 1.5rem 11.5rem;
			display: flex;
			flex-direction: column;
			gap: 4rem;
			.input {
				font-size: var(--text-18);
			}
			.button {
				width: 100%;
				border-radius: 1rem;
				padding-top: 2rem;
				padding-bottom: 2rem;
			}
		}

		&__description {
			margin-top: -3rem;
			font-size: var(--text-12);
			line-height: 1.5rem;
			font-weight: 500;

			a {
				cursor: pointer;
				color: var(--blue);
			}
		}
	}
</style>
