<template>
	<div class="the-profile">
		<h1 class="the-profile__title">Мой профиль</h1>

		<div class="the-profile__header">
			<div class="the-profile__me">
				<img :src="userData.avatar" alt="avatar" />
				<p class="the-profile__full-name">
					{{ userData.last_name }} {{ userData.first_name }}
				</p>
			</div>
			<div class="the-profile__logout">
				<form @submit.prevent="logging_out">
					<v-button
						text="Выйти"
						type="submit"
						class="gray"
					></v-button>
				</form>
			</div>
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
									: (isNameFormDisabled = true)
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
							type="text"
							:disabled="isNameFormDisabled"
							v-model="userData.phone_number"
							:isTransparent="isNameFormDisabled"
						></v-input>
						<span class="the-profile__item-change">Изменить</span>
					</div>
				</form>
			</div>

			<div class="the-profile__item">
				<form class="the-profile__item-body">
					<div class="the-profile__item-row">
						<p class="the-profile__item-key">Email:</p>
						<p class="the-profile__item-value the-profile__email">
							{{ user.email }}
						</p>
						<span class="the-profile__item-change">Изменить</span>
					</div>
				</form>
			</div>

			<div class="the-profile__item">
				<form class="the-profile__item-body">
					<div class="the-profile__item-row">
						<p class="the-profile__item-key">Пароль:</p>
						<p
							class="the-profile__item-value the-profile__password"
						>
							********
						</p>
						<span class="the-profile__item-change">Изменить</span>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations } from "vuex";
	import { logout } from "@/api/user";

	import vButton from "@/components/UI/general/v-button";
	import vInput from "@/components/UI/cabinet/v-input.vue";

	export default {
		name: "TheProfile",
		components: { vButton, vInput },
		watch: {
			user: {
				handler() {
					this.userData = { ...this.user };
				},
				deep: true,
			},
		},
		computed: {
			...mapState({
				baseURL: (state) => state.baseURL,
				user: (state) => state.cabinet.user,
			}),
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
		},
		created() {
			this.SET_TAB("profile");
			this.userData = { ...this.user };
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

			img {
				width: 5.2rem;
				height: 5.2em;
				border-radius: 50%;
				overflow: hidden;
				object-fit: cover;
			}
		}

		&__full-name {
			font-size: 2rem;
			font-weight: 600;
		}

		&__logout {
			.button {
				box-shadow: $shadow;
				border-radius: 1rem;
				width: 12.2rem;
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
				grid-template-columns: repeat(3, 1fr);
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

		&__input {
			background-color: transparent;
			border: 0.1rem solid $middle-gray;
			border-radius: 0.6rem;
			padding: 1rem 2rem;
			font-size: inherit;
			&:disabled {
				// border: none;
			}
		}
	}
</style>
