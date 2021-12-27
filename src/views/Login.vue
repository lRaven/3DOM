<template>
	<div class="theme-container">
		<Header />
		<main class="main">
			<section class="login-wrapper center">
				<form class="login" @submit="login">
					<div class="login__header">
						<h1>Вход в личный кабинет</h1>
					</div>
					<div class="login__body">
						<Input
							:text="'Логин:'"
							:type="'text'"
							:placeholder="'username'"
							:name="'username'"
							required
						></Input>
						<Input
							:text="'Пароль:'"
							:type="'password'"
							:placeholder="'password'"
							:name="'password'"
							required
						></Input>
						<Btn :text="'Войти'"></Btn>
						<p class="login__description">
							Нажимая кнопку «Войти», вы подтверждаете своё
							согласие на
							<a @click="activateBtn()">
								обработку персональных данных
							</a>
						</p>
					</div>
				</form>
			</section>
		</main>
		<Footer />
	</div>
</template>

<script>
	import store from "../store";
	import axios from "axios";
	import Header from "../components/general/Header.vue";
	import Input from "../components/login/Input.vue";
	import Btn from "../components/login/Btn.vue";
	import Footer from "../components/general/Footer.vue";

	export default {
		name: "login",
		store,
		components: {
			Header,
			Input,
			Btn,
			Footer,
		},
		props: {
			authorizedio: String,
		},

		data() {
			return {
				username: "",
				password: "",
			};
		},

		methods: {
			//логин
			login(event) {
				event.preventDefault();

				axios
					.post("http://localhost:8001/auth/token/login/", {
						username: this.username,
						password: this.password,
					})
					.then((response) => {
						if (response.status == 200) {
							this.setToken(response.data.auth_token);
						}
					})
					.catch((err) => {
						console.error(err.response.status);
					});
			},
			//*запись токена в vuex
			setToken(token) {
				store.commit("SET_TOKEN", token);
				localStorage.setItem("token", token);
				this.getUserMe(token);
			},
			//*получение себя
			getUserMe(token) {
				axios
					.get("http://localhost:8001/auth/users/me", {
						headers: { Authorization: `token ${token}` },
					})
					.then((response) => {
						this.setUser(response.data);
						this.$router.push("/cabinet");
					})
					.catch((err) => {
						console.error(err);
					});
			},
			//*запись данных о себе во vuex
			setUser(user) {
				store.commit("SET_USER", user);
				console.log(store.getters.USER);
			},
			//*делает кнопку неактивной пока есть пусте поля ввода
			activateBtn() {
				const btn = document.querySelector(".button");
				const inputs = document.querySelectorAll("input");
				inputs.forEach((input) => {
					input.addEventListener("input", () => {
						if (inputs[0].value && inputs[1].value) {
							btn.removeAttribute("disabled", "");
						} else btn.setAttribute("disabled", "");
					});
				});
			},
			//*запись в переменную значения инпута для передачи на сервер
			setValueInputToVariable() {
				const inputs = document.querySelectorAll("input");
				inputs.forEach((input) => {
					input.addEventListener("input", () => {
						if (input.getAttribute("type") == "text")
							this.username = input.value;
						if (input.getAttribute("type") == "password")
							this.password = input.value;
					});
				});
			},
		},
		mounted() {
			this.activateBtn();
			this.setValueInputToVariable();

			//* проверка авторизован ли пользователь
			this.getUserMe(localStorage.getItem("token"));
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
	}
	.login {
		border-radius: 3rem;
		background-color: var(--white);
		width: 61rem;
		min-height: 65rem;
		box-shadow: 0 0.2rem 1.5rem rgb(0 0 0 / 10%);
		&-wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			height: calc(100vh - 14rem);
			min-height: inherit;
		}
		&__header {
			padding: 5.2rem 0;
			h1 {
				text-align: center;
				color: var(--dark);
				font-size: var(--text-30);
				font-weight: 600;
			}
			border-bottom: 0.1rem solid #c4c4c4;
		}
		&__body {
			padding: 5.2rem 11.5rem 14rem 11.5rem;
			display: flex;
			flex-direction: column;
			gap: 4rem;
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
