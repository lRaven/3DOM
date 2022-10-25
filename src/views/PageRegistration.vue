<template>
	<div class="page-registration theme-container">
		<the-header />
		<main class="main">
			<section class="registration-wrapper center">
				<form class="registration" @submit.prevent="createUser">
					<div class="registration__header" v-once>
						<h1 class="registration__header-title">Регистрация</h1>
					</div>
					<div class="registration__body">
						<v-input
							text="Логин:"
							type="text"
							placeholder="Логин"
							name="username"
							v-model="userData.username"
						></v-input>
						<v-input
							text="E-mail:"
							type="email"
							placeholder="E-mail"
							name="email"
							v-model="userData.email"
						></v-input>
						<v-input
							text="Пароль:"
							type="password"
							placeholder="Пароль"
							name="password"
							v-model="userData.password"
						></v-input>
						<v-button
							text="Зарегистрироваться"
							type="submit"
							:disabled="v$.$invalid"
						></v-button>
						<p class="registration__description" v-once>
							Нажимая кнопку «Зарегистрироваться», вы подтверждаете своё
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
	import { mapState } from 'vuex';
	import { registration } from '@/api/user';
	import { returnErrorMessages } from '@/js/returnErrorMessages';

	import TheHeader from '@/components/general/TheHeader';
	import TheFooter from '@/components/general/TheFooter';

	import { useToast } from 'vue-toastification';
	import { useVuelidate } from '@vuelidate/core';
	import { minLength, required, email } from '@vuelidate/validators';

	export default {
		name: 'PageRegistration',
		components: {
			TheHeader,
			TheFooter,
		},
		computed: {
			...mapState(['baseURL']),
		},
		data: () => ({
			userData: {
				username: '',
				password: '',
				email: '',
			},
		}),
		validations: () => ({
			userData: {
				username: {
					required,
					minLength: minLength(1),
				},
				email: {
					required,
					email,
				},
				password: {
					required,
					minLength: minLength(8),
				},
			},
		}),

		methods: {
			async createUser() {
				try {
					const response = await registration(this.userData);

					if (response.status === 201) {
						this.toast.success('Вы успешно зарегистрировали свой аккаунт');
						this.$router.push({ name: 'Login' });
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
			return { toast, v$: useVuelidate() };
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

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
