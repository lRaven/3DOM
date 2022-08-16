<template>
	<div class="profile">
		<h1 class="profile__title">Мой профиль</h1>

		<div class="profile__header">
			<div class="profile__me">
				<img :src="avatar" alt="avatar" />
				<p class="profile__full-name">
					{{ last_name }} {{ first_name }}
				</p>
			</div>
			<div class="profile__logout">
				<form @submit.prevent="logging_out">
					<v-button
						text="Выйти"
						type="submit"
						class="gray"
					></v-button>
				</form>
			</div>
		</div>

		<div class="profile__main">
			<div class="profile__item">
				<div class="profile__item-header">
					<h2 class="profile__item-title">ФИО</h2>
				</div>
				<div class="profile__item-body">
					<div class="profile__item-row">
						<p class="profile__item-key">Фамилия:</p>
						<p class="profile__item-value profile__last-name">
							{{ last_name }}
						</p>
					</div>
					<div class="profile__item-row">
						<p class="profile__item-key">Имя:</p>
						<p class="profile__item-value profile__name">
							{{ first_name }}
						</p>
					</div>
					<div class="profile__item-row">
						<p class="profile__item-key">Отчество:</p>
						<p class="profile__item-value profile__patronymic">
							{{ patronymic }}
						</p>
						<span class="profile__item-change">Изменить</span>
					</div>
				</div>
			</div>

			<div class="profile__item">
				<div class="profile__item-body">
					<div class="profile__item-row">
						<p class="profile__item-key">Номер телефона:</p>
						<p class="profile__item-value profile__tel">
							{{ phone_number }}
						</p>
						<span class="profile__item-change">Изменить</span>
					</div>
				</div>
			</div>

			<div class="profile__item">
				<div class="profile__item-body">
					<div class="profile__item-row">
						<p class="profile__item-key">Email:</p>
						<p class="profile__item-value profile__email">
							{{ email }}
						</p>
						<span class="profile__item-change">Изменить</span>
					</div>
				</div>
			</div>

			<div class="profile__item">
				<div class="profile__item-body">
					<div class="profile__item-row">
						<p class="profile__item-key">Пароль:</p>
						<p class="profile__item-value profile__password">
							********
						</p>
						<span class="profile__item-change">Изменить</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations } from "vuex";
	import { logout } from "@/api/user";

	import vButton from "@/components/UI/general/v-button";

	export default {
		name: "TheProfile",
		components: { vButton },
		computed: {
			...mapState({
				baseURL: (state) => state.baseURL,
				avatar: (state) => state.cabinet.user.avatar,
				last_name: (state) => state.cabinet.user.last_name,
				first_name: (state) => state.cabinet.user.first_name,
				patronymic: (state) => state.cabinet.user.patronymic,
				phone_number: (state) => state.cabinet.user.phone_number,
				email: (state) => state.cabinet.user.email,
			}),
		},
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
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.profile {
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
				grid-template-columns: 1fr 1fr 1fr;
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

		&__name {
		}

		&__patronymic {
		}

		&__last-name {
		}

		&__tel {
		}
	}
</style>
