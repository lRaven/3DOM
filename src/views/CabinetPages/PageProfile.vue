<template>
	<section class="page-profile">
		<h1 class="page-profile__title" v-once>Мой профиль</h1>

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
							@change="changeAvatar($event.target)"
						/>
						<div class="page-profile__image-pick-btn">Изменить фото</div>
					</label>
				</div>

				<p class="page-profile__full-name">
					{{ user.last_name }} {{ user.first_name }}
				</p>
			</div>
			<form class="page-profile__logout" @submit.prevent="loggingOut">
				<v-button text="Выйти" type="submit" color="gray"></v-button>
			</form>
		</div>

		<div class="page-profile__main">
			<div class="page-profile__item">
				<div class="page-profile__item-header" v-once>
					<h2 class="page-profile__item-title">ФИО</h2>
				</div>
				<form class="page-profile__item-body">
					<div class="page-profile__item-row">
						<p class="page-profile__item-key" v-once>Фамилия:</p>

						<v-input
							type="text"
							:placeholder="
								!userData.last_name && formTriggers.isNameFormDisabled
									? 'Не указано'
									: ''
							"
							:disabled="formTriggers.isNameFormDisabled"
							v-model="userData.last_name"
							:isTransparent="formTriggers.isNameFormDisabled"
						></v-input>
					</div>
					<div class="page-profile__item-row">
						<p class="page-profile__item-key" v-once>Имя:</p>

						<v-input
							type="text"
							:placeholder="
								!userData.first_name && formTriggers.isNameFormDisabled
									? 'Не указано'
									: ''
							"
							:disabled="formTriggers.isNameFormDisabled"
							v-model="userData.first_name"
							:is-transparent="formTriggers.isNameFormDisabled"
						></v-input>

						<button
							type="button"
							class="page-profile__item-change"
							@click="
								formTriggers.isNameFormDisabled
									? (formTriggers.isNameFormDisabled = false)
									: sendNewPersonalData()
							"
						>
							{{ formTriggers.isNameFormDisabled ? 'Изменить' : 'Применить' }}
						</button>
					</div>
				</form>
			</div>

			<div class="page-profile__item">
				<form class="page-profile__item-body">
					<div class="page-profile__item-row">
						<p class="page-profile__item-key" v-once>Номер телефона:</p>

						<v-input
							type="tel"
							:placeholder="
								!userData.phone_number && formTriggers.isPhoneFormDisabled
									? 'Не указано'
									: ''
							"
							:disabled="formTriggers.isPhoneFormDisabled"
							v-model="userData.phone_number"
							:isTransparent="formTriggers.isPhoneFormDisabled"
						></v-input>

						<button
							type="button"
							class="page-profile__item-change"
							@click="
								formTriggers.isPhoneFormDisabled
									? (formTriggers.isPhoneFormDisabled = false)
									: (formTriggers.isPhoneFormDisabled = true)
							"
						>
							{{ formTriggers.isPhoneFormDisabled ? 'Изменить' : 'Применить' }}
						</button>
					</div>
				</form>
			</div>

			<div class="page-profile__item">
				<form class="page-profile__item-body">
					<div class="page-profile__item-row">
						<p class="page-profile__item-key" v-once>Email:</p>

						<v-input
							type="email"
							:placeholder="
								!userData.email && formTriggers.isEmailFormDisabled
									? 'Не указано'
									: ''
							"
							:disabled="formTriggers.isEmailFormDisabled"
							v-model="userData.email"
							:isTransparent="formTriggers.isEmailFormDisabled"
						></v-input>

						<button
							type="button"
							class="page-profile__item-change"
							@click="
								formTriggers.isEmailFormDisabled
									? (formTriggers.isEmailFormDisabled = false)
									: sendNewEmail()
							"
						>
							{{ formTriggers.isEmailFormDisabled ? 'Изменить' : 'Применить' }}
						</button>
					</div>
				</form>
			</div>

			<div class="page-profile__item">
				<form class="page-profile__item-body" @submit.prevent="sendNewPassword">
					<div class="page-profile__item-row">
						<p class="page-profile__item-key" v-once>Пароль:</p>
						<p
							class="page-profile__item-value page-profile__password"
							v-if="formTriggers.isPasswordFormDisabled"
						>
							********
						</p>
						<v-input
							type="password"
							placeholder=""
							:disabled="formTriggers.isPasswordFormDisabled"
							v-model="userData.password"
							:is-transparent="formTriggers.isPasswordFormDisabled"
							v-else
						></v-input>

						<button
							type="button"
							class="page-profile__item-change"
							@click="formTriggers.isPasswordFormDisabled = false"
							v-if="formTriggers.isPasswordFormDisabled"
						>
							Изменить
						</button>
					</div>

					<div
						class="page-profile__item-row"
						v-if="!formTriggers.isPasswordFormDisabled"
					>
						<p class="page-profile__item-key" v-once>Новый пароль:</p>
						<v-input
							type="password"
							placeholder=""
							:disabled="formTriggers.isPasswordFormDisabled"
							v-model="userData.password_new"
							:is-transparent="formTriggers.isPasswordFormDisabled"
						></v-input>
					</div>

					<div
						class="page-profile__item-row"
						v-if="!formTriggers.isPasswordFormDisabled"
					>
						<p class="page-profile__item-key" v-once>Подтверждение пароля:</p>
						<v-input
							type="password"
							placeholder=""
							:disabled="formTriggers.isPasswordFormDisabled"
							v-model="userData.password_repeat"
							:is-transparent="formTriggers.isPasswordFormDisabled"
						></v-input>

						<button
							v-if="formTriggers.isPasswordFormDisabled"
							type="button"
							class="page-profile__item-change"
							@click="formTriggers.isPasswordFormDisabled = false"
						>
							Изменить
						</button>

						<button
							v-else
							type="submit"
							:disabled="v$.$invalid"
							class="page-profile__item-change"
						>
							Применить
						</button>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
	import { ref, computed, watch } from 'vue';
	import { useStore } from 'vuex';
	import {
		logout,
		change_user_data,
		change_password,
		upload_avatar,
	} from '@/api/user';
	import { returnErrorMessages } from '@/js/returnErrorMessages';
	import cookies from 'vue-cookies';
	import vInput from '@/components/UI/cabinet/v-input.vue';

	import { useToast } from 'vue-toastification';
	import { useVuelidate } from '@vuelidate/core';
	import {
		minLength,
		maxLength,
		sameAs,
		required,
	} from '@vuelidate/validators';

	export default {
		name: 'PageProfile',
		components: { vInput },
		setup() {
			const store = useStore();
			store.commit('setTab', 'profile');

			const newAvatar = ref('');
			const changeAvatar = (target) => {
				//* запись в переменную для отправки на сервер
				newAvatar.value = target.files[0];

				//* функционал предпросмотра загруженной аватарки
				const fileReader = new FileReader();
				fileReader.addEventListener('load', () => {
					userData.value.avatar = fileReader.result;
				});

				fileReader.readAsDataURL(target.files[0]);
			};
			const sendAvatar = async () => {
				try {
					const response = await upload_avatar(
						userData.value.id,
						newAvatar.value
					);

					if (response.status === 200) {
						console.log('Avatar changed');
						toast.success('Изображение профиля изменено');

						try {
							const response = await store.dispatch('getUser');
							if (response.status === 200) {
								newAvatar.value = '';
							}
						} catch (err) {
							throw new Error(err);
						}
					}
					if (response.status === 400) {
						const error_list = returnErrorMessages(response.data);
						error_list.forEach((el) => {
							toast.error(el);
						});
					}
				} catch (err) {
					toast.error(
						"Данное изображение не доступно, пожалуйста загрузите '.jpg', '.png', '.svg'.\nМаксимальный размер: 4096px"
					);
					throw new Error(err);
				}
			};
			watch(newAvatar, () => {
				if (newAvatar.value) {
					sendAvatar();
				}
			});

			const user = computed(() => store.state.cabinet.user);
			const userData = ref({
				password: '',
				password_new: '',
				password_repeat: '',
				...user.value,
			});
			const sendNewPersonalData = async () => {
				try {
					const response = await change_user_data({
						first_name: userData.value.first_name,
						last_name: userData.value.last_name,
					});

					if (response.status === 200) {
						toast.success('ФИО обновлены');
						console.log('personal data changed');

						formTriggers.value.isNameFormDisabled = true;

						store.dispatch('getUser');
					}
					if (response.status === 400) {
						const error_list = returnErrorMessages(response.data);
						error_list.forEach((el) => {
							toast.error(el);
						});
					}
				} catch (err) {
					throw new Error(err);
				}
			};
			const sendNewEmail = async () => {
				try {
					const response = await change_user_data({
						email: userData.value.email,
					});

					if (response.status === 200) {
						toast.success('Email изменён');
						console.log('email changed');

						formTriggers.value.isEmailFormDisabled = true;

						store.dispatch('getUser');
					}
					if (response.status === 400) {
						const error_list = returnErrorMessages(response.data);
						error_list.forEach((el) => {
							toast.error(el);
						});
					}
				} catch (err) {
					throw new Error(err);
				}
			};
			const sendNewPassword = async () => {
				try {
					const isFormValid = await v$.value.$validate();
					if (isFormValid) {
						const response = await change_password(
							userData.value.password_new,
							userData.value.password
						);

						if (response.status === 204) {
							toast.success('Пароль изменён');
							console.log('password changed');
							resetPasswordForm();
							formTriggers.value.isPasswordFormDisabled = true;
						}
						if (response.status === 400) {
							const error_list = returnErrorMessages(response.data);
							error_list.forEach((el) => {
								toast.error(el);
							});
						}
					}
				} catch (err) {
					throw new Error(err);
				}
			};
			const resetPasswordForm = () => {
				userData.value.password = '';
				userData.value.password_new = '';
				userData.value.password_repeat = '';
			};

			const formTriggers = ref({
				isNameFormDisabled: true,
				isPhoneFormDisabled: true,
				isEmailFormDisabled: true,
				isPasswordFormDisabled: true,
			});

			const rules = computed(() => ({
				first_name: {
					maxLength: maxLength(150),
				},
				last_name: {
					maxLength: maxLength(150),
				},
				password: {
					minLength: minLength(8),
					required,
				},
				password_new: {
					minLength: minLength(8),
					required,
				},
				password_repeat: {
					minLength: minLength(8),
					sameAs: sameAs(userData.value.password_new),
					required,
				},
			}));

			//* выход с аккаунта
			const loggingOut = async () => {
				try {
					const response = await logout();

					if (response.status === 204) {
						//* стереть из vuex, cookies данные юзера
						cookies.remove('auth_token');

						store.dispatch('clearCabinetState');
						store.dispatch('clearAcademState');
						store.dispatch('clearCRMState');
						console.log('Logout successfully');
					}
				} catch (err) {
					throw new Error(err);
				}
			};

			const toast = useToast();

			const v$ = useVuelidate(rules, userData);

			return {
				newAvatar,
				changeAvatar,
				sendAvatar,

				user,
				userData,
				sendNewPersonalData,
				sendNewEmail,
				sendNewPassword,

				formTriggers,
				loggingOut,

				toast,
				v$,
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.page-profile {
		color: $dark;

		&__title {
			margin-bottom: 1rem;
			padding-left: 2rem;
			@media (max-width: 767px) {
				padding-left: 0;
			}
		}

		&__header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 5rem 0 2rem;
			margin-bottom: 3rem;
			@media (max-width: 767px) {
				padding: 0;
			}
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
			word-break: break-all;
		}

		&__logout {
			.v-button {
				box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
				border-radius: 1rem;
				@media (max-width: 540px) {
					padding: 1rem;
				}
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
				@media (max-width: 767px) {
					padding: 2rem 1.5rem;
				}
			}

			&-title {
				color: $blue;
				font-size: 2rem;
				font-weight: 600;
				@media (max-width: 540px) {
					font-size: 1.8rem;
				}
			}

			&-body {
				padding: 6rem 7rem;
				display: flex;
				justify-content: center;
				flex-direction: column;
				gap: 2rem;
				@media (max-width: 767px) {
					padding: 3rem 1.5rem;
				}
			}

			&-row {
				display: grid;
				grid-template-columns: 1fr 2fr 1fr;
				align-items: center;
				grid-gap: 2rem;
				font-size: 1.8rem;
				font-weight: 500;
				min-height: 2.2rem;
				@media (max-width: 540px) {
					grid-template-columns: 1fr;
				}
			}

			&-key {
				color: #979797;
				@media (max-width: 540px) {
					font-size: 1.4rem;
				}
			}

			&-value {
				font-size: 2.2rem;
				@media (max-width: 540px) {
					font-size: 1.4rem;
				}
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
				@media (max-width: 540px) {
					font-size: 1.4rem;
					justify-self: flex-start;
				}

				&::after {
					content: '';
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
	}
</style>

<style lang="scss">
	.page-profile {
		&__item {
			&-row {
				.v-input {
					&__input.transparent {
						padding-left: 0;
						padding-right: 0;
					}
				}
			}
		}
	}
</style>
