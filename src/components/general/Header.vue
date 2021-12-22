<template>
	<header class="header" id="header">
		<div class="header__container center">
			<div class="header__left">
				<router-link to="/" class="header__logo">
					<img src="img/icon/general/logo.svg" alt="logo" />
				</router-link>

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
			</div>
			<div class="header__right" v-if="authorized == false">
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
			<div class="header__right" v-if="authorized == true">
				<div class="header__favorites">
					<img src="img/icon/general/favorites.svg" alt="" />
					<span class="header__favorites-sum">3</span>
				</div>
				<div class="header__avatar">
					<img src="img/icon/general/avatar.svg" alt="" />
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	import store from "../../store";
	export default {
		name: "Header",
		store,
		data() {
			return {
				authorized: false,
			};
		},
		methods: {
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
			checkAuthorized() {
				if (localStorage.getItem("token") === null) {
					this.authorized = false;
				} else this.authorized = true;
				console.log(localStorage.getItem("token"));
			},
			setCounter() {
				if (this.authorized === true) {
					const counter = document.querySelector(
						".header__favorites-sum"
					);
					if (counter.textContent)
						counter.setAttribute(
							"style",
							"width: 2rem; height: 2rem;"
						);
					else counter.removeAttribute("style");
				}
			},
		},
		mounted() {
			this.scroll("#header");
			this.checkAuthorized();
		},
		created() {},
	};
</script>

<style lang="scss" scoped>
	.header {
		user-select: none;
		background-color: var(--white);
		z-index: 3;
		position: fixed;
		width: 100%;
		height: 6rem;
		box-shadow: 0 0 1.5rem 0 rgb(130, 130, 130);
		font-weight: 600;
		font-size: var(--text-16);
		* {
			color: var(--dark);
		}

		&__container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 100%;
			padding: 0 1.5rem;
			margin: 0 auto;
		}
		&__left {
			display: flex;
			align-items: center;
			gap: 10rem;
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
			gap: 3rem;
		}
		&__link {
			cursor: pointer;
			transition: all 0.2s ease;
			&:hover {
				color: var(--blue);
				transition: all 0.3s ease;
			}
		}

		&__right {
			display: flex;
			align-items: center;
			gap: 3rem;
			svg {
				margin-right: -2rem;
				path:nth-child(1) {
					fill: var(--dark);
				}
				path,
				rect {
					stroke: var(--dark);
				}
			}
		}
		&__favorites {
			cursor: pointer;
			position: relative;
			display: flex;
			align-items: flex-end;
			height: 4rem;

			img {
				height: 80%;
			}
			&-sum {
				display: flex;
				justify-content: center;
				align-items: center;
				color: var(--white);
				background-color: var(--blue);
				font-size: var(--text-14);
				border-radius: 50%;
				position: absolute;
				top: 0;
				right: -0.8rem;
				width: 2rem;
				height: 2rem;
			}
		}
		&__avatar {
			cursor: pointer;
			height: 4rem;
			img {
				height: 100%;
			}
		}
	}
</style>
