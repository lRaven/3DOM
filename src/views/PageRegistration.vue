<template>
	<div class="page-registration theme-container">
		<the-header />
		<main class="main">
			<section class="registration-wrapper center">
				<form class="registration" @submit.prevent="create_user">
					<div class="registration__header">
						<h1>Регистрация</h1>
					</div>
					<div class="registration__body">
						<v-input
							text="Логин:"
							type="text"
							placeholder="username"
							name="username"
							v-model="user_data.username"
						></v-input>
						<v-input
							text="E-mail:"
							type="email"
							placeholder="e-mail"
							name="email"
							v-model="user_data.email"
						></v-input>
						<v-input
							text="Пароль:"
							type="password"
							placeholder="'password"
							name="password"
							v-model="user_data.password"
						></v-input>
						<v-button
							text="Зарегистрироваться"
							type="submit"
							:disabled="!isFormValid"
						></v-button>
						<p class="registration__description">
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
	import { mapState } from "vuex";
	import { registration } from "@/api/user";
	import { returnErrorMessages } from "@/js/returnErrorMessages";

	import TheHeader from "@/components/general/TheHeader";
	import vInput from "@/components/UI/cabinet/v-input";
	import TheFooter from "@/components/general/TheFooter";

	import { useToast } from "vue-toastification";

	export default {
		name: "PageRegistration",
		components: {
			TheHeader,
			vInput,
			TheFooter,
		},
		computed: {
			...mapState({
				baseURL: (state) => state.baseURL,
			}),

			isFormValid() {
				if (
					this.user_data.username.length > 0 &&
					this.user_data.email.length > 0 &&
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
				email: "",
			},
		}),

		methods: {
			async create_user() {
				try {
					const response = await registration(this.user_data);
					if (response.status === 201) {
						this.$router.push({ name: "Login" });
						this.toast.success(
							"Вы успешно зарегистрировали свой аккаунт"
						);
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
		setup() {
			const toast = useToast();
			return { toast };
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
		flex-direction: row;
		padding-top: 8.5rem;
	}

	.registration {
		border-radius: 3rem;
		background-color: $white;
		width: 61rem;
		min-height: 74rem;
		box-shadow: $shadow;

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
				color: $dark;
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
