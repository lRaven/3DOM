<template>
	<div class="page-profile">
		<h1 class="page-profile__title">Мой профиль</h1>

		<div class="page-profile__header">
			<div class="page-profile__me">
				<div class="page-profile__avatar-wrapper">
					<img
						:src="userData.avatar"
						alt="avatar"
						class="page-profile__avatar"
					/>
					<label class="page-profile__image-pick">
						<input
							type="file"
							name=""
							class="page-profile__image-pick-input"
							accept="image/*"
							@change="change_avatar($event.target)"
						/>
						<div class="page-profile__image-pick-btn">
							Изменить фото
						</div>
					</label>
				</div>

				<p class="page-profile__full-name">
					{{ userData.last_name }} {{ userData.first_name }}
				</p>
			</div>
			<form class="page-profile__logout" @submit.prevent="logging_out">
				<v-button text="Выйти" type="submit" color="gray"></v-button>
			</form>
		</div>

		<div class="page-profile__main">
			<div class="page-profile__item">
				<div class="page-profile__item-header">
					<h2 class="page-profile__item-title">ФИО</h2>
				</div>
				<form class="page-profile__item-body">
					<div class="page-profile__item-row">
						<p class="page-profile__item-key">Фамилия:</p>

						<v-input
							type="text"
							:disabled="isNameFormDisabled"
							v-model="userData.last_name"
							:isTransparent="isNameFormDisabled"
						></v-input>
					</div>
					<div class="page-profile__item-row">
						<p class="page-profile__item-key">Имя:</p>

						<v-input
							type="text"
							:disabled="isNameFormDisabled"
							v-model="userData.first_name"
							:isTransparent="isNameFormDisabled"
						></v-input>

						<button
							type="button"
							class="page-profile__item-change"
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

			<div class="page-profile__item">
				<form class="page-profile__item-body">
					<div class="page-profile__item-row">
						<p class="page-profile__item-key">Номер телефона:</p>

						<v-input
							type="tel"
							:disabled="isPhoneFormDisabled"
							v-model="userData.phone_number"
							:isTransparent="isPhoneFormDisabled"
						></v-input>

						<button
							type="button"
							class="page-profile__item-change"
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

			<div class="page-profile__item">
				<form class="page-profile__item-body">
					<div class="page-profile__item-row">
						<p class="page-profile__item-key">Email:</p>

						<v-input
							type="email"
							:disabled="isEmailFormDisabled"
							v-model="userData.email"
							:isTransparent="isEmailFormDisabled"
						></v-input>

						<button
							type="button"
							class="page-profile__item-change"
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

			<div class="page-profile__item">
				<form
					class="page-profile__item-body"
					@submit.prevent="send_new_password"
				>
					<div class="page-profile__item-row">
						<p class="page-profile__item-key">Пароль:</p>
						<p
							class="page-profile__item-value page-profile__password"
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
							class="page-profile__item-change"
							@click="isPasswordFormDisabled = false"
							v-if="isPasswordFormDisabled"
						>
							Изменить
						</button>
					</div>

					<div
						class="page-profile__item-row"
						v-if="!isPasswordFormDisabled"
					>
						<p class="page-profile__item-key">Новый пароль:</p>
						<v-input
							type="password"
							:disabled="isPasswordFormDisabled"
							v-model="userData.password_new"
							:isTransparent="isPasswordFormDisabled"
						></v-input>
					</div>

					<div
						class="page-profile__item-row"
						v-if="!isPasswordFormDisabled"
					>
						<p class="page-profile__item-key">
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
							class="page-profile__item-change"
							@click="isPasswordFormDisabled = false"
						>
							Изменить
						</button>

						<button
							v-else
							type="submit"
							:disabled="!isPasswordFormValid"
							class="page-profile__item-change"
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
	import {
		logout,
		change_user_data,
		change_password,
		upload_avatar,
	} from "@/api/user";
	import { returnErrorMessages } from "@/js/returnErrorMessages";

	import vInput from "@/components/UI/cabinet/v-input.vue";

	import { useToast } from "vue-toastification";

	export default {
		name: "PageProfile",
		components: { vInput },
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
			new_avatar() {
				if (this.new_avatar) {
					this.send_avatar();
				}
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
			new_avatar: "",
		}),
		methods: {
			...mapMutations(["SET_TAB"]),
			...mapActions([
				"getUser",
				"clearCabinetState",
				"clearAcademState",
				"clearCRMState",
			]),

			//* выход с аккаунта
			async logging_out() {
				try {
					const response = await logout();

					if (response.status === 204) {
						//* стереть из vuex,cookies данные юзера
						this.$cookies.remove("auth_token");

						this.clearCabinetState();
						this.clearAcademState();
						this.clearCRMState();
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
						this.toast.success("ФИО обновлена");
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

			async send_avatar() {
				try {
					const response = await upload_avatar(
						this.userData.id,
						this.new_avatar
					);

					if (response.status === 200) {
						console.log("Avatar changed");
						this.toast.success("Изображение профиля изменено");

						try {
							const response = await this.getUser();
							if (response.status === 200) {
								this.new_avatar = "";
							}
						} catch (err) {
							throw new Error(err);
						}
					}
					if (response.status === 400) {
						const error_list = returnErrorMessages(response.data);
						error_list.forEach((el) => {
							this.toast.error(el);
						});
					}
				} catch (err) {
					this.toast.error(
						"Данное изображение не доступно, пожалуйста загрузите '.jpg', '.png', '.svg'.\nМаксимальный размер: 4096px"
					);
					throw new Error(err);
				}
			},

			change_avatar(target) {
				//* запись в переменную для отправки на сервер
				this.new_avatar = target.files[0];

				//* функционал предпросмотра загруженной аватарки
				const fileReader = new FileReader();
				fileReader.addEventListener("load", () => {
					this.userData.avatar = fileReader.result;
				});

				fileReader.readAsDataURL(target.files[0]);
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

	.page-profile {
		color: $dark;

		&__title {
			margin-bottom: 1rem;
			padding-left: 2rem;
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
			width: 100%;
			height: 100%;
			border-radius: 50%;
			overflow: hidden;
			object-fit: cover;
			grid-area: 1/1;
			pointer-events: all;

			&-wrapper {
				width: 7rem;
				height: 7rem;
				display: grid;
				&:hover {
					.page-profile__image-pick {
						opacity: 1;
					}
				}
			}
		}

		&__image-pick {
			cursor: pointer;
			grid-area: 1/1;
			background-color: rgba(255, 255, 255, 0.7);
			backdrop-filter: blur(0.2rem);
			border-radius: 50%;
			border: 2px dashed $gray;
			display: flex;
			align-items: center;
			justify-content: center;
			box-shadow: $shadow;
			opacity: 0;
			transition: all 0.3s ease;
			&-input {
				display: none;
			}
			&-btn {
				font-weight: 700;
				text-align: center;
			}
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
