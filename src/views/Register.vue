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
						<v-input
							:text="'Логин:'"
							:type="'text'"
							:placeholder="'username'"
							:name="'username'"
							v-model="username"
						></v-input>
						<v-input
							:text="'E-mail:'"
							:type="'email'"
							:placeholder="'e-mail'"
							:name="'email'"
							v-model="email"
						></v-input>
						<v-input
							:text="'Пароль:'"
							:type="'password'"
							:placeholder="'password'"
							:name="'password'"
							v-model="password"
						></v-input>
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
	import vInput from "../components/cabinet/v-input.vue";
	import vButton from "../components/general/v-button.vue";
	import TheFooter from "../components/general/TheFooter.vue";

	export default {
		name: "Register",
		store,
		components: {
			TheHeader,
			vInput,
			vButton,
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
							btn.classList.remove("gray");
						} else {
							btn.setAttribute("type", "button");
							btn.classList.remove("blue");
							btn.classList.add("gray");
						}
					});
				});
			},

			//*регистрация нового юзера
			register(event) {
				event.preventDefault();

				axios
					.post(`${store.getters.BASEURL}/auth/users/`, {
						email: this.email,
						username: this.username,
						password: this.password,
					})
					.then((response) => {
						if (response.status === 201) {
							//* редирект на страницу авторизации
							this.$router.push("/login");
						}
					})
					.catch((err) => {
						console.error(err);
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
		flex-direction: row;
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
			padding: 3rem 1.5rem;
		}

		&__header {
			padding: 4rem 0;

			h1 {
				text-align: center;
				color: var(--dark);
				font-size: 3rem;
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
				font-size: 1.8rem;
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
			font-size: 1.2rem;
			line-height: 1.5rem;
			font-weight: 500;

			a {
				cursor: pointer;
				color: var(--blue);
			}
		}
	}
</style>
