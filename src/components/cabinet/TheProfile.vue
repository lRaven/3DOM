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
				<form action="#" @submit="logout">
					<v-button
						:text="'Выйти'"
						:type="'submit'"
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
							{{ password }}
						</p>
						<span class="profile__item-change">Изменить</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import store from "../../store";
	import axios from "axios";
	import vButton from "../general/v-button.vue";

	export default {
		name: "Profile",
		store,
		components: {
			vButton,
		},
		data() {
			return {
				password: localStorage.getItem("pw"),
			};
		},
		computed: {
			avatar: () => {
				return store.getters.USER.avatar;
			},
			last_name: () => {
				return store.getters.USER.last_name;
			},
			first_name: () => {
				return store.getters.USER.first_name;
			},
			patronymic: () => {
				return store.getters.USER.patronymic;
			},
			phone_number: () => {
				return store.getters.USER.phone_number;
			},
			email: () => {
				return store.getters.USER.email;
			},
		},
		methods: {
			//*выход с аккаунта
			logout(event) {
				event.preventDefault();

				axios
					.post(
						`${store.getters.BASEURL}/auth/token/logout/`,
						{},
						{
							headers: {
								Authorization: `token ${store.getters.TOKEN}`,
							},
						}
					)
					.then((response) => {
						if (response.status === 204) {
							//*стереть из vuex, localstorage данные юзера и редирект на страницу авторизации
							localStorage.clear();

							store.commit("SET_TOKEN", null);
							store.commit("SET_ID", null);
							store.commit("SET_USER", {});
							store.commit("SET_TAB", null);
							store.commit("SET_BOOKING", []);
							store.commit("SET_FAVORITES", null);

							this.$router.push("/login");
						}
					})
					.catch((err) => {
						console.error(err);
					});
			},

			//*изменение имени и фамилии
			setNames(event) {
				event.preventDefault();
				axios
					.put(
						`${store.getters.BASEURL}/auth/users/me/`,
						{
							first_name: this.first_name,
							last_name: this.last_name,
						},
						{
							headers: {
								Authorization: `token ${store.getters.TOKEN}`,
							},
						}
					)
					.then((response) => {
						if (response.status == 200) {
							console.log("norm");
						}
					})
					.catch((err) => {
						console.error(err.response.status);
					});
			},
		},
		mounted() {},
	};
</script>

<style lang="scss" scoped>
	.profile {
		color: var(--dark);

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
				box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
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
			box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
			border-radius: 3rem;

			&-header {
				padding: 3rem 7rem;
				border-bottom: 0.1rem solid #c4c4c4;
			}

			&-title {
				color: var(--blue);
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
				color: var(--blue);
				width: max-content;
				font-weight: 600;

				&::after {
					content: "";
					position: absolute;
					bottom: -0.2rem;
					left: 0;
					height: 0.2rem;
					width: 0;
					background-color: var(--blue);
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
