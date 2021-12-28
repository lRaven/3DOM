<template>
	<div class="profile" v-if="tab === 'profile'">
		<h1 class="profile__title">Мой профиль</h1>
		<div class="profile__header">
			<div class="profile__me">
				<img src="img/icon/general/avatar.svg" alt="avatar" />
				<p class="profile__full-name">Иванов Иван Иванович</p>
			</div>
			<div class="profile__logout">
				<form action="#" @submit="setNames">
					<label>
						Имя:
						<input type="text" v-model="first_name" />
					</label>
					<label>
						Фамилия:
						<input type="text" v-model="last_name" />
					</label>
					<button type="submit">Выйти</button>
				</form>
			</div>
		</div>
		<div class="profile__main">
			<div class="profile__item">
				<div class="profile__item-header">
					<h2 class="profile__item-title">ФИО</h2>
				</div>
				<div class="profile__item-row">
					<p class="profile__item-key">Фамилия:</p>
					<p class="profile__item-value profile__last-name"></p>
				</div>
				<div class="profile__item-row">
					<p class="profile__item-key">Имя:</p>
					<p class="profile__item-value profile__name"></p>
				</div>
				<div class="profile__item-row">
					<p class="profile__item-key">Отчество:</p>
					<p class="profile__item-value profile__patronymic"></p>
					<span class="profile__item-change">Изменить</span>
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
				first_name: "",
				last_name: "",
			};
		},
		methods: {
			logout() {},
			setNames(event) {
				event.preventDefault();

				axios
					.put("http://localhost:8001/auth/users/me/", {
						first_name: this.first_name,
						last_name: this.last_name,
						headers: {
							Authorization: `token ${store.getters.TOKEN}`,
						},
					})
					.then((response) => {
						if (response.status == 200) {
							console.log("norm");
							console.log(store.getters.TOKEN);
						}
					})
					.catch((err) => {
						console.error(err.response.status);
						console.log(store.getters.TOKEN);
					});
			},
		},
		mounted() {
			document.addEventListener("click", () => {
				this.tab = store.getters.TAB;
			});
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
			}
		}
		&__main {
		}
		&__item {
			&-header {
			}
			&-title {
			}
			&-row {
			}
			&-key {
			}
			&-value {
			}
			&-change {
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
