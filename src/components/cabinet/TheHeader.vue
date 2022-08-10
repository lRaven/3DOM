<template>
	<header class="header animate__animated animate__fadeInDown" id="header">
		<div class="header__container">
			<div class="header__left">
				<router-link
					to="/"
					class="header__logo animate__animated animate__fadeIn"
				>
					<img src="/img/icon/general/logo.svg" alt="logo" />
				</router-link>
			</div>
			<nav class="header__nav">
				<a class="header__link"> Ремонты </a>
				<a class="header__link" @click="scroll('#catalog')">
					Квартиры
				</a>
				<a class="header__link" @click="scroll('#mortgage')">
					Ипотека
				</a>
				<router-link to="/trade-in" class="header__link">
					Trade-in
				</router-link>
				<a class="header__link">Услуги</a>
				<a class="header__link">Офисы продаж</a>
			</nav>
			<div
				class="header__right animate__animated animate__fadeIn"
				v-if="auth === false"
			>
				<svg
					width="46"
					height="30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8.719 18.156c1.844-.75 3.61-1.125 5.297-1.125 1.687 0 3.437.375 5.25 1.125 1.843.719 2.765 1.672 2.765 2.86v2.015H6v-2.015c0-1.188.906-2.141 2.719-2.86zm8.11-4.312c-.782.781-1.72 1.172-2.813 1.172-1.094 0-2.032-.391-2.813-1.172-.781-.781-1.172-1.719-1.172-2.813S10.421 9 11.203 8.22C11.984 7.406 12.922 7 14.016 7c1.093 0 2.03.406 2.812 1.219C17.61 9 18 9.938 18 11.03c0 1.094-.39 2.031-1.172 2.813z"
						fill="#00212D"
					/>
					<path
						stroke="#00212D"
						stroke-width="2"
						stroke-linecap="round"
						d="M27 10h12M27 15h12M27 20h12"
					/>
					<rect
						x="1"
						y="1"
						width="44"
						height="28"
						rx="4"
						stroke="#00212D"
						stroke-width="2"
					/>
				</svg>
				<router-link to="/login" class="header__link">
					Войти в 3D-клуб
				</router-link>
				<span>/</span>
				<router-link to="/register" class="header__link">
					Регистрация
				</router-link>
			</div>
			<div
				class="header__right animate__animated animate__fadeIn"
				v-if="auth === true"
			>
				<a class="header__favorites" @click="moveToFavorites()">
					<img src="/img/icon/general/favorites.svg" alt="" />
					<span class="header__favorites-sum" v-if="favorites > 0">
						{{ favorites }}
					</span>
				</a>
				<a class="header__avatar" @click="moveToCabinet()">
					<img :src="avatar" alt="avatar" />
				</a>
			</div>
		</div>
	</header>
</template>

<script>
	import store from "../../store";

	export default {
		name: "TheHeader",
		store,
		data() {
			return {
				auth: false,
			};
		},
		computed: {
			avatar: () => {
				return store.getters.USER.avatar;
			},
			favorites: () => {
				return store.getters.FAVORITES.length;
			},
		},
		methods: {
			//*скролл до секции
			scroll(id) {
				setTimeout(() => {
					const section = document.querySelector(id).offsetTop;
					const header =
						document.querySelector("#header").clientHeight;

					window.scrollTo(0, section - header, {
						behavior: "smooth",
					});
				}, 0);
			},

			//*проверка, авторизован ли юзер
			checkAuthorized() {
				if (store.getters.TOKEN !== null) {
					this.auth = true;
				} else {
					this.auth = false;
				}
			},

			//*переход к вкладке избранного
			moveToFavorites() {
				store.commit("SET_TAB", "favorites");
			},

			//*переход к вкладке профиля
			moveToCabinet() {
				store.commit("SET_TAB", "profile");
			},
		},
		mounted() {
			this.checkAuthorized();
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.header {
		user-select: none;
		background-color: $white;
		z-index: 3;
		position: fixed;
		width: 100%;
		height: 8.5rem;
		box-shadow: 0 0 1.5rem 0 rgb(130, 130, 130);
		font-weight: 600;
		font-size: 1.6rem;
		border-radius: 0 0 3rem 3rem;
		overflow: hidden;

		* {
			color: $dark;
		}

		&__container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 100%;
			padding: 0 2.5rem;
			gap: 1.5rem;
			margin: 0 auto;
		}

		&__left {
			display: flex;
			align-items: center;
		}

		&__logo {
			display: block;
			height: 3.5rem;

			img {
				height: 100%;
			}
		}

		&__nav {
			display: flex;
			height: 100%;
			.header__link {
				padding: 0 2rem;
			}
		}

		&__link {
			cursor: pointer;
			display: flex;
			align-items: center;
			transition: all 0.2s ease;

			height: 100%;
			&:hover {
				color: $blue;
				transition: all 0.3s ease;
			}
		}

		&__right {
			display: flex;
			align-items: center;
			height: 5rem;
			gap: 3rem;

			svg {
				transform: translateX(2rem);

				path:nth-child(1) {
					fill: $dark;
				}

				path,
				rect {
					stroke: $dark;
				}
			}
		}

		&__favorites {
			cursor: pointer;
			position: relative;
			display: flex;
			align-items: flex-end;
			height: 5rem;

			img {
				height: 4rem;
			}

			&-sum {
				display: flex;
				justify-content: center;
				align-items: center;
				color: $white;
				background-color: $blue;
				font-size: 1.4rem;
				border-radius: 50%;
				position: absolute;
				top: 0.2rem;
				right: -0.6rem;
				width: 2rem;
				height: 2rem;
			}
		}

		&__avatar {
			cursor: pointer;
			height: 5.2rem;

			img {
				height: 5.2rem;
				width: 5.2rem;
				border-radius: 50%;
				overflow: hidden;
				object-fit: cover;
			}
		}
	}
</style>
