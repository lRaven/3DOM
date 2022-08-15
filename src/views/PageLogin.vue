<template>
	<div class="page-login theme-container">
		<the-header />
		<main class="main">
			<section class="login-wrapper center">
				<form class="login" @submit.prevent="auth">
					<div class="login__header">
						<h1>Вход в личный кабинет</h1>
					</div>
					<div class="login__body">
						<v-input
							text="Логин:"
							type="text"
							placeholder="Логин"
							name="username"
							v-model="user_data.username"
						></v-input>
						<v-input
							text="Пароль:"
							type="password"
							placeholder="Пароль"
							name="password"
							v-model="user_data.password"
						></v-input>
						<v-button
							text="Войти"
							color="blue"
							:disabled="!isFormValid"
							type="submit"
						></v-button>
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
	import TheHeader from "@/components/general/TheHeader";
	import vInput from "@/components/cabinet/v-input";
	import vButton from "@/components/UI/general/v-button";
	import TheFooter from "@/components/general/TheFooter";

	import { login } from "@/api/user";
	import { mapMutations, mapActions } from "vuex";

	export default {
		name: "PageLogin",
		components: {
			TheHeader,
			vInput,
			vButton,
			TheFooter,
		},
		computed: {
			isFormValid() {
				if (
					this.user_data.username.length > 0 &&
					this.user_data.password.length >= 8
				) {
					return true;
				} else {
					return false;
				}
			},
		},
		data: () => ({
			user_data: {
				username: "",
				password: "",
			},
		}),

		methods: {
			...mapMutations(["SET_TAB", "SET_TOKEN"]),
			...mapActions(["getUser"]),
			//*логин
			async auth() {
				try {
					const response = await login(
						this.user_data.username,
						this.user_data.password
					);
					if (response.status === 200) {
						this.saveUserData(response.data.auth_token);
					}
				} catch (err) {
					throw new Error(err);
				}
			},

			//* запись данных в vuex
			saveUserData(token) {
				this.$cookies.set("auth_token", token);
				this.SET_TOKEN(this.$cookies.get("auth_token"));

				this.SET_TAB("profile");
				this.getUser();
				this.$router.push("/cabinet");
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

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
		background-color: $white;
		width: 61rem;
		min-height: 65rem;
		box-shadow: $shadow;

		&-wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		&__header {
			padding: 5.2rem 0;

			h1 {
				text-align: center;
				color: $dark;
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
			.v-input {
				font-size: 1.8rem;
			}
			.v-button {
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
				color: $blue;
			}
		}
	}
</style>
