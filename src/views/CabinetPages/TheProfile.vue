<template>
	<div class="the-profile">
		<h1 class="the-profile__title">Мой профиль</h1>

		<div class="the-profile__header">
			<div class="the-profile__me">
				<img
					:src="userData.avatar"
					alt="avatar"
					class="the-profile__avatar"
				/>
				<p class="the-profile__full-name">
					{{ userData.last_name }} {{ userData.first_name }}
				</p>
			</div>
			<form class="the-profile__logout" @submit.prevent="logging_out">
				<v-button text="Выйти" type="submit" color="gray"></v-button>
			</form>
		</div>

		<div class="the-profile__main">
			<div class="the-profile__item">
				<div class="the-profile__item-header">
					<h2 class="the-profile__item-title">ФИО</h2>
				</div>
				<form class="the-profile__item-body">
					<div class="the-profile__item-row">
						<p class="the-profile__item-key">Фамилия:</p>

						<v-input
							type="text"
							:disabled="isNameFormDisabled"
							v-model="userData.last_name"
							:isTransparent="isNameFormDisabled"
						></v-input>
					</div>
					<div class="the-profile__item-row">
						<p class="the-profile__item-key">Имя:</p>

						<v-input
							type="text"
							:disabled="isNameFormDisabled"
							v-model="userData.first_name"
							:isTransparent="isNameFormDisabled"
						></v-input>
					</div>
					<div class="the-profile__item-row">
						<p class="the-profile__item-key">Отчество:</p>

						<v-input
							type="text"
							:disabled="isNameFormDisabled"
							v-model="userData.patronymic"
							:isTransparent="isNameFormDisabled"
						></v-input>

						<button
							type="button"
							class="the-profile__item-change"
							@click="
								isNameFormDisabled
									? (isNameFormDisabled = false)
									: send_new_personal_data()
							"
						>
							{{ isNameFormDisabled ? "Изменить" : "Применить" }}
						</button>
					</div>
				</form>
			</div>

			<div class="the-profile__item">
				<form class="the-profile__item-body">
					<div class="the-profile__item-row">
						<p class="the-profile__item-key">Номер телефона:</p>

						<v-input
							type="tel"
							:disabled="isPhoneFormDisabled"
							v-model="userData.phone_number"
							:isTransparent="isPhoneFormDisabled"
						></v-input>

						<button
							type="button"
							class="the-profile__item-change"
							@click="
								isPhoneFormDisabled
									? (isPhoneFormDisabled = false)
									: (isPhoneFormDisabled = true)
							"
						>
							{{ isPhoneFormDisabled ? "Изменить" : "Применить" }}
						</button>
					</div>
				</form>
			</div>

			<div class="the-profile__item">
				<form class="the-profile__item-body">
					<div class="the-profile__item-row">
						<p class="the-profile__item-key">Email:</p>

						<v-input
							type="email"
							:disabled="isEmailFormDisabled"
							v-model="userData.email"
							:isTransparent="isEmailFormDisabled"
						></v-input>

						<button
							type="button"
							class="the-profile__item-change"
							@click="
								isEmailFormDisabled
									? (isEmailFormDisabled = false)
									: (isEmailFormDisabled = true)
							"
						>
							{{ isEmailFormDisabled ? "Изменить" : "Применить" }}
						</button>
					</div>
				</form>
			</div>

			<div class="the-profile__item">
				<form
					class="the-profile__item-body"
					@submit.prevent="send_new_password"
				>
					<div class="the-profile__item-row">
						<p class="the-profile__item-key">Пароль:</p>
						<p
							class="the-profile__item-value the-profile__password"
							v-if="isPasswordFormDisabled"
						>
							********
						</p>
						<v-input
							type="password"
							:disabled="isPasswordFormDisabled"
							v-model="userData.password"
							:isTransparent="isPasswordFormDisabled"
							v-else
						></v-input>

						<button
							type="button"
							class="the-profile__item-change"
							@click="isPasswordFormDisabled = false"
							v-if="isPasswordFormDisabled"
						>
							Изменить
						</button>
					</div>

					<div
						class="the-profile__item-row"
						v-if="!isPasswordFormDisabled"
					>
						<p class="the-profile__item-key">Новый пароль:</p>
						<v-input
							type="password"
							:disabled="isPasswordFormDisabled"
							v-model="userData.password_new"
							:isTransparent="isPasswordFormDisabled"
						></v-input>
					</div>

					<div
						class="the-profile__item-row"
						v-if="!isPasswordFormDisabled"
					>
						<p class="the-profile__item-key">
							Подтверждение пароля:
						</p>
						<v-input
							type="password"
							:disabled="isPasswordFormDisabled"
							v-model="userData.password_repeat"
							:isTransparent="isPasswordFormDisabled"
						></v-input>

						<button
							v-if="isPasswordFormDisabled"
							type="button"
							class="the-profile__item-change"
							@click="isPasswordFormDisabled = false"
						>
							Изменить
						</button>

						<button
							v-else
							type="submit"
							:disabled="!isPasswordFormValid"
							class="the-profile__item-change"
						>
							Применить
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations, mapActions } from "vuex";
	import { logout, change_user_data, change_password } from "@/api/user";
	import { returnErrorMessages } from "@/js/returnErrorMessages";

	import vButton from "@/components/UI/general/v-button.vue";
	import vInput from "@/components/UI/cabinet/v-input.vue";

	import { useToast } from "vue-toastification";

	export default {
		name: "TheProfile",
		components: { vButton, vInput },
		watch: {
			user: {
				handler() {
					this.userData = {
						password: "",
						password_new: "",
						password_repeat: "",
						...this.user,
					};
				},
				deep: true,
			},
		},
		computed: {
			...mapState({
				baseURL: (state) => state.baseURL,
				user: (state) => state.cabinet.user,
			}),

			isPasswordsSame() {
				if (
					this.userData.password_new === this.userData.password_repeat
				)
					return true;
				else return false;
			},
			isPasswordsNotEmpty() {
				if (this.userData.password_new.length >= 8) return true;
				else return false;
			},
			isPasswordFormValid() {
				if (
					this.userData.password.length >= 8 &&
					this.isPasswordsSame &&
					this.isPasswordsNotEmpty
				)
					return true;
				else return false;
			},
		},
		data: () => ({
			isNameFormDisabled: true,
			isPhoneFormDisabled: true,
			isEmailFormDisabled: true,
			isPasswordFormDisabled: true,

			userData: {},
		}),
		methods: {
			...mapMutations([
				"SET_ID",
				"SET_USER",
				"SET_USER_AUTH",
				"SET_TAB",
				"SET_BOOKING",
				"SET_FAVORITES",
			]),
			...mapActions(["getUser"]),

			//* выход с аккаунта
			async logging_out() {
				try {
					const response = await logout();

					if (response.status === 204) {
						//* стереть из vuex,cookies данные юзера
						this.$cookies.remove("auth_token");

						this.SET_USER_AUTH(false);
						this.SET_ID(null);
						this.SET_USER({});
						this.SET_TAB(null);
						this.SET_BOOKING([]);
						this.SET_FAVORITES(null);
						console.log("Logout successfully");
					}
				} catch (err) {
					throw new Error(err);
				}
			},

			async send_new_personal_data() {
				try {
					const response = await change_user_data({
						first_name: this.userData.first_name,
						last_name: this.userData.last_name,
					});

					if (response.status === 200) {
						this.toast.success("Данные по ФИО изменены");
						console.log("personal data changed");

						this.isNameFormDisabled = true;

						this.getUser();
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

			async send_new_password() {
				try {
					const response = await change_password(
						this.userData.password_new,
						this.userData.password
					);

					if (response.status === 204) {
						this.toast.success("Пароль изменён");
						console.log("password changed");
						this.resetPasswordForm();
						this.isPasswordFormDisabled = true;
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

			resetPasswordForm() {
				this.userData.password = "";
				this.userData.password_new = "";
				this.userData.password_repeat = "";
			},
		},
		created() {
			this.SET_TAB("profile");
			this.userData = {
				password: "",
				password_new: "",
				password_repeat: "",
				...this.user,
			};
		},
		setup() {
			const toast = useToast();
			return { toast };
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-profile {
		color: $dark;

		&__title {
			margin-bottom: 1rem;
			padding-left: 2rem;
			font-size: 3rem;
			font-weight: 600;
		}

		&__header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 5rem 0 2rem;
			margin-bottom: 3rem;
		}

		&__me {
			display: flex;
			align-items: center;
			gap: 2.6rem;
		}

		&__avatar {
			width: 5.2rem;
			height: 5.2em;
			border-radius: 50%;
			overflow: hidden;
			object-fit: cover;
		}

		&__full-name {
			font-size: 2rem;
			font-weight: 600;
		}

		&__logout {
			.v-button {
				box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
				border-radius: 1rem;
			}
		}

		&__main {
			display: flex;
			flex-direction: column;
			gap: 2.3rem;
		}

		&__item {
			box-shadow: $shadow;
			border-radius: 3rem;

			&-header {
				padding: 3rem 7rem;
				border-bottom: 0.1rem solid #c4c4c4;
			}

			&-title {
				color: $blue;
				font-size: 2rem;
				font-weight: 600;
			}

			&-body {
				padding: 6rem 7rem;
				display: flex;
				justify-content: center;
				flex-direction: column;
				gap: 2rem;
			}

			&-row {
				display: grid;
				grid-template-columns: 1fr 2fr 1fr;
				align-items: center;
				font-size: 1.8rem;
				font-weight: 500;
				min-height: 2.2rem;
			}

			&-key {
				color: #979797;
			}

			&-value {
				font-size: 2.2rem;
			}

			&-change {
				cursor: pointer;
				position: relative;
				justify-self: flex-end;
				color: $blue;
				width: max-content;
				font-weight: 600;
				background-color: transparent;
				font-size: inherit;

				&::after {
					content: "";
					position: absolute;
					bottom: -0.2rem;
					left: 0;
					height: 0.2rem;
					width: 0;
					background-color: $blue;
					transition: all 0.2s ease;
				}

				&:hover {
					&::after {
						width: 100%;
						transition: all 0.3s ease;
					}
				}
			}
		}

		&__password {
			padding: 0 2rem;
		}
	}
</style>
