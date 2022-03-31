<template>
	<div class="theme-container">
		<the-header />
		<main class="main">
			<section class="login-wrapper center">
				<form class="login" @submit="login">
					<div class="login__header">
						<h1>Вход в личный кабинет</h1>
					</div>
					<div class="login__body">
						<v-input
							:text="'Логин:'"
							:type="'text'"
							:placeholder="'Логин'"
							:name="'username'"
							v-model="username"
						></v-input>
						<v-input
							:text="'Пароль:'"
							:type="'password'"
							:placeholder="'Пароль'"
							:name="'password'"
							v-model="password"
						></v-input>
						<v-button :text="'Войти'" :type="'button'"> </v-button>
						<p class="login__description">
							Нажимая кнопку «Войти», вы подтверждаете своё
							согласие на
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
		name: "login",
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
			};
		},

		methods: {
			//*логин
			login(event) {
				event.preventDefault();

				axios
					.post(`${store.getters.BASEURL}/auth/token/login/`, {
						username: this.username,
						password: this.password,
					})
					.then((response) => {
						if (response.status === 200) {
							this.saveUserData(response.data.auth_token);
							this.$router.push("/cabinet");
						}
					})
					.catch((err) => {
						console.error(err);
					});
			},

			//*запись данных в vuex
			saveUserData(token) {
				localStorage.setItem("at", token);

				store.commit("SET_TAB", "profile");
				store.commit("SET_TOKEN", localStorage.getItem("at"));
				store.dispatch("getUser");

				this.encryptPassword(this.password);
			},

			//*сохранить пароль звёздами '*'
			encryptPassword(pass) {
				pass = this.password.split("");

				pass.forEach((index, array, item) => {
					item[array] = "*";
				});

				pass = pass.join("");
				localStorage.setItem("pw", pass);
			},

			//*делает кнопку неактивной пока есть пусте поля ввода
			activateBtn() {
				const btn = document.querySelector(".button");
				const inputs = document.querySelectorAll("input");

				inputs.forEach((input) => {
					input.addEventListener("input", () => {
						if (this.username !== "" && this.password !== "") {
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
		flex-direction: row;
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
		}

		&__header {
			padding: 5.2rem 0;

			h1 {
				text-align: center;
				color: var(--dark);
				font-size: 3rem;
				font-weight: 600;
			}

			border-bottom: 0.1rem solid #c4c4c4;
		}

		&__body {
			padding: 5.2rem 11.5rem 14rem 11.5rem;
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
