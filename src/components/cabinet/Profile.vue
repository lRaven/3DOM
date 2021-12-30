<template>
	<div class="profile" v-if="tab === 'profile'">
		<h1 class="profile__title">Мой профиль</h1>
		<div class="profile__header">
			<div class="profile__me">
				<img src="img/icon/general/avatar.svg" alt="avatar" />
				<p class="profile__full-name">
					{{ last_name }} {{ first_name }}
				</p>
			</div>
			<div class="profile__logout">
				<form action="#" @submit="logout">
					<button type="submit">Выйти</button>
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
						<p class="profile__item-value profile__patronymic"></p>
						<span class="profile__item-change">Изменить</span>
					</div>
				</div>
			</div>
			<div class="profile__item"></div>
			<div class="profile__item"></div>
			<div class="profile__item"></div>
		</div>
	</div>
</template>

<script>
	import store from "../../store";
	import axios from "axios";

	export default {
		name: "Profile",
		store,
		components: {},
		data() {
			return {
				tab: store.getters.TAB,
				first_name: store.getters.USER.first_name,
				last_name: store.getters.USER.last_name,
			};
		},
		methods: {
			//*получение аватарки
			getAvatar() {
				console.log(store.getters.USER);
			},
			setFullName() {
				const fullName = document.querySelector(".profile__full-name");
				fullName.textContent = `${store.getters.USER.last_name} ${store.getters.USER.first_name}`;
			},
			//*выход с аккаунта
			logout(event) {
				event.preventDefault();

				axios
					.post(
						"http://localhost:8001/auth/token/logout/",
						{},
						{
							headers: {
								Authorization: `token ${store.getters.TOKEN}`,
							},
						}
					)
					.then((response) => {
						if (response.status === 204) {
							localStorage.removeItem("token");
							store.commit("SET_TOKEN", null);
							location.reload();
						}
					})
					.catch((err) => {
						console.error(err.response.status);
					});
			},

			//*изменение имени и фамилии
			setNames(event) {
				event.preventDefault();
				axios
					.put(
						"http://localhost:8001/auth/users/me/",
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
		mounted() {
			document.addEventListener("click", () => {
				this.tab = store.getters.TAB;
			});
			this.getAvatar();
			this.setFullName();
		},
	};
</script>

<style lang="scss" scoped>
	.profile {
		color: var(--dark);
		&__title {
			font-size: var(--text-30);
			font-weight: 600;
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
		&__full-name {
			font-size: var(--text-20);
			font-weight: 600;
		}
		&__logout {
			button {
				background-color: var(--light-gray);
				color: var(--blue);
				font-weight: 600;
				font-size: var(--text-15);
				padding: 1.4rem 3.5rem;
				border-radius: 1rem;
				box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
				transition: all 0.2s ease;
				&:active {
					transform: scale(0.95);
					transition: all 0.3s ease;
				}
			}
		}
		&__main {
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
				font-size: var(--text-20);
				font-weight: 600;
			}
			&-body {
				padding: 4rem 7rem 6rem 7rem;
				display: flex;
				flex-direction: column;
				gap: 2rem;
			}
			&-row {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				font-size: var(--text-18);
				font-weight: 500;
			}
			&-key {
				color: #979797;
			}
			&-value {
				font-size: var(--text-22);
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
	}
</style>
