<template>
	<header class="the-header animate__animated animate__fadeIn" id="header">
		<div class="the-header__container center">
			<div class="the-header__col the-header__left">
				<div class="the-header__burger" @click="showHideMenu()">
					<img src="img/icon/general/burger.svg" alt="" />
				</div>
				<router-link
					to="/"
					class="the-header__logo animate__animated animate__fadeIn"
				>
					<img src="img/icon/general/logo.svg" alt="logo" />
				</router-link>
			</div>
			<div class="the-header__col">
				<nav class="the-header__nav animate__animated animate__fadeIn">
					<router-link
						class="the-header__link"
						:to="{
							name: 'Academ',
							params: { section: '#apartments' },
						}"
					>
						Ремонты
						<svg
							width="7"
							height="12"
							viewBox="0 0 7 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.349534 10.9566C-0.0409904 10.5661 -0.0409904 9.93292 0.349534 9.54239L3.88507 6.00686L0.349534 2.47132C-0.0409904 2.0808 -0.0409904 1.44763 0.349534 1.05711C0.740058 0.666586 1.37322 0.666585 1.76375 1.05711L6.00639 5.29975C6.39691 5.69027 6.39691 6.32344 6.00639 6.71396L1.76375 10.9566C1.37322 11.3471 0.740058 11.3471 0.349534 10.9566Z"
								fill="#021921"
							/>
						</svg>
					</router-link>
					<router-link
						class="the-header__link"
						:to="{
							name: 'Academ',
							params: { section: '#apartments' },
						}"
					>
						Квартиры
						<svg
							width="7"
							height="12"
							viewBox="0 0 7 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.349534 10.9566C-0.0409904 10.5661 -0.0409904 9.93292 0.349534 9.54239L3.88507 6.00686L0.349534 2.47132C-0.0409904 2.0808 -0.0409904 1.44763 0.349534 1.05711C0.740058 0.666586 1.37322 0.666585 1.76375 1.05711L6.00639 5.29975C6.39691 5.69027 6.39691 6.32344 6.00639 6.71396L1.76375 10.9566C1.37322 11.3471 0.740058 11.3471 0.349534 10.9566Z"
								fill="#021921"
							/>
						</svg>
					</router-link>
					<a class="the-header__link" @click="openMortgageCalculator">
						Ипотека
						<svg
							width="7"
							height="12"
							viewBox="0 0 7 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.349534 10.9566C-0.0409904 10.5661 -0.0409904 9.93292 0.349534 9.54239L3.88507 6.00686L0.349534 2.47132C-0.0409904 2.0808 -0.0409904 1.44763 0.349534 1.05711C0.740058 0.666586 1.37322 0.666585 1.76375 1.05711L6.00639 5.29975C6.39691 5.69027 6.39691 6.32344 6.00639 6.71396L1.76375 10.9566C1.37322 11.3471 0.740058 11.3471 0.349534 10.9566Z"
								fill="#021921"
							/>
						</svg>
					</a>
					<router-link to="/trade-in" class="the-header__link">
						Trade-in
						<svg
							width="7"
							height="12"
							viewBox="0 0 7 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.349534 10.9566C-0.0409904 10.5661 -0.0409904 9.93292 0.349534 9.54239L3.88507 6.00686L0.349534 2.47132C-0.0409904 2.0808 -0.0409904 1.44763 0.349534 1.05711C0.740058 0.666586 1.37322 0.666585 1.76375 1.05711L6.00639 5.29975C6.39691 5.69027 6.39691 6.32344 6.00639 6.71396L1.76375 10.9566C1.37322 11.3471 0.740058 11.3471 0.349534 10.9566Z"
								fill="#021921"
							/>
						</svg>
					</router-link>
					<a class="the-header__link" @click="openPopup">
						Услуги
						<svg
							width="7"
							height="12"
							viewBox="0 0 7 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.349534 10.9566C-0.0409904 10.5661 -0.0409904 9.93292 0.349534 9.54239L3.88507 6.00686L0.349534 2.47132C-0.0409904 2.0808 -0.0409904 1.44763 0.349534 1.05711C0.740058 0.666586 1.37322 0.666585 1.76375 1.05711L6.00639 5.29975C6.39691 5.69027 6.39691 6.32344 6.00639 6.71396L1.76375 10.9566C1.37322 11.3471 0.740058 11.3471 0.349534 10.9566Z"
								fill="#021921"
							/>
						</svg>
					</a>
					<router-link
						class="the-header__link"
						:to="{
							name: 'Academ',
							params: { section: '#feedback' },
						}"
					>
						Офисы продаж
						<svg
							width="7"
							height="12"
							viewBox="0 0 7 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.349534 10.9566C-0.0409904 10.5661 -0.0409904 9.93292 0.349534 9.54239L3.88507 6.00686L0.349534 2.47132C-0.0409904 2.0808 -0.0409904 1.44763 0.349534 1.05711C0.740058 0.666586 1.37322 0.666585 1.76375 1.05711L6.00639 5.29975C6.39691 5.69027 6.39691 6.32344 6.00639 6.71396L1.76375 10.9566C1.37322 11.3471 0.740058 11.3471 0.349534 10.9566Z"
								fill="#021921"
							/>
						</svg>
					</router-link>
					<a
						class="the-header__link the-header__link-mobile"
						@click="openPopup"
					>
						Заказать консультацию
						<svg
							width="7"
							height="12"
							viewBox="0 0 7 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.349534 10.9566C-0.0409904 10.5661 -0.0409904 9.93292 0.349534 9.54239L3.88507 6.00686L0.349534 2.47132C-0.0409904 2.0808 -0.0409904 1.44763 0.349534 1.05711C0.740058 0.666586 1.37322 0.666585 1.76375 1.05711L6.00639 5.29975C6.39691 5.69027 6.39691 6.32344 6.00639 6.71396L1.76375 10.9566C1.37322 11.3471 0.740058 11.3471 0.349534 10.9566Z"
								fill="#021921"
							/>
						</svg>
					</a>
				</nav>
			</div>
			<div class="the-header__col">
				<div
					class="the-header__right animate__animated animate__fadeIn"
					v-if="authorized === false"
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
					<router-link to="/login" class="the-header__link">
						Войти <span class="link__full">в 3D-клуб</span>
					</router-link>
					<span>/</span>
					<router-link to="/register" class="the-header__link">
						Регистрация
					</router-link>
				</div>
				<div
					class="the-header__right-auth animate__animated animate__fadeIn"
					v-if="authorized === true"
				>
					<router-link
						to="/cabinet"
						class="the-header__favorites"
						@click="moveToFavorites()"
					>
						<img src="img/icon/general/favorites.svg" alt="" />
						<span class="the-header__favorites-sum">{{
							favorites
						}}</span>
					</router-link>
					<router-link
						to="/cabinet"
						class="the-header__avatar"
						@click="moveToCabinet()"
					>
						<img :src="avatar" alt="avatar" />
					</router-link>
				</div>
				<img
					src="img/icon/general/call.svg"
					alt=""
					class="the-header__call"
				/>
			</div>
		</div>
	</header>
	<div class="blur" @click="showHideMenu()"></div>
	<transition>
		<v-popup
			v-if="isPopupVisible"
			@closePopup="closePopup"
			title="3DOM консультация"
		>
			<p class="v-popup__description">
				Отправьте заявку<br />
				для получения консультации
			</p>
			<academ-input
				:placeholder="'Имя'"
				:type="'text'"
				:dark="'dark'"
				v-model="name"
				pattern="^[А-Яа-яЁё\s]+$"
			></academ-input>
			<academ-input
				:placeholder="'Телефон'"
				:type="'tel'"
				:dark="'dark'"
				v-model="tel"
				pattern="[\+]*[7-8]{1}\s?[\(]*9[0-9]{2}[\)]*\s?\d{3}[-]*\d{2}[-]*\d{2}"
			></academ-input>
			<v-checkbox
				v-model="privacyPolicy"
				text="Даю согласие на обработку персональных данных"
				:dark="'dark'"
			></v-checkbox>
			<v-button
				class="blue"
				:text="'Отправить заявку'"
				:type="'button'"
			></v-button>
		</v-popup>
	</transition>
</template>

<script>
	import store from "../../store";
	import vPopup from "./v-popup.vue";

	import AcademInput from "../academ/academ-input.vue";
	import vCheckbox from "../academ/v-checkbox.vue";
	import vButton from "./v-button.vue";

	export default {
		name: "TheHeader",
		store,
		data() {
			return {
				authorized: false,
				isPopupVisible: false,

				name: "",
				tel: "",
				privacyPolicy: false,
			};
		},
		components: {
			vPopup,
			AcademInput,
			vCheckbox,
			vButton,
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
			//*проверка, авторизован ли юзер
			checkAuthorized() {
				if (store.getters.TOKEN !== null) {
					this.authorized = true;
				} else {
					this.authorized = false;
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

			//*скрытие или показ меню в мобилке
			showHideMenu() {
				const header = document.querySelector(".the-header");
				const nav = header.querySelector(".the-header__nav");
				const auth = header.querySelector(".the-header__right");
				const cabinet = header.querySelector(".the-header__right-auth");
				const blur = document.querySelector(".blur");

				if (nav.classList.contains("open")) {
					if (this.authorized === false) {
						auth.classList.remove("open");
					} else if (this.authorized === true) {
						cabinet.classList.remove("open");
					}
					nav.classList.remove("open");
					document.querySelector("body").classList.remove("locked");
					blur.classList.remove("open");
				} else {
					if (this.authorized === false) {
						auth.classList.add("open");
					} else if (this.authorized === true) {
						cabinet.classList.add("open");
					}
					document.querySelector("body").classList.add("locked");

					nav.classList.add("open");
					blur.classList.add("open");
				}
			},

			closePopup() {
				this.isPopupVisible = false;
				document.body.classList.remove("locked");
			},
			openPopup() {
				this.isPopupVisible = true;
				document.body.classList.add("locked");
			},

			openMortgageCalculator() {
				const popup = document.querySelector(".popup-full");
				const body = document.querySelector("body");

				body.classList.add("locked");
				popup.classList.add("open");
			},
		},
		mounted() {
			this.checkAuthorized();
		},
	};
</script>

<style lang="scss" scoped>
	.the-header {
		user-select: none;
		z-index: 4;
		position: fixed;
		width: 100%;
		height: 8.5rem;
		background-color: var(--white);
		font-weight: 600;
		font-size: 1.6rem;
		border-radius: 0 0 3rem 3rem;
		box-shadow: 0 0 1.5rem 0 rgb(130, 130, 130);
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
			border-radius: 0 0 3rem 3rem;
			overflow: hidden;
		}
		&__col {
		}

		&__left {
			display: flex;
			align-items: center;
			gap: 10rem;
			.the-header__link {
				padding: 0 2rem;
				display: flex;
				align-items: center;
			}
		}
		&__burger {
			display: none;
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
			align-items: center;
			height: 100%;
			gap: 4rem;
		}

		&__link {
			cursor: pointer;
			width: max-content;
			transition: all 0.2s ease;
			&-mobile {
				display: none;
			}
			svg {
				display: none;
			}
			&:hover {
				color: var(--blue);

				.link__full {
					color: var(--blue);
				}
			}
		}
		.link__full {
			transition: all 0.2s ease;
		}
		&__right {
			display: flex;
			align-items: center;
			height: 5rem;
			gap: 1rem;
			&-auth {
				display: flex;
				align-items: center;
				height: 5rem;
				gap: 3rem;
			}

			svg {
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
				font-size: 1.4rem;
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
				height: 4rem;
				width: 4rem;
				border-radius: 50%;
				overflow: hidden;
				object-fit: cover;
			}
		}

		&__call {
			display: none;
		}
	}

	.blur {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0);
		z-index: -1;
		transition: all 0.2s ease;
		&.open {
			z-index: 3;
			background-color: rgba(0, 0, 0, 0.5);
		}
	}

	@media (max-width: 1250px) {
		.the-header {
			&__container {
				gap: 1.5rem;
			}
			&__nav {
				gap: 1.5rem;
			}

			&__right {
				svg {
					display: none;
				}
			}
		}
	}

	@media (max-width: 1050px) {
		.the-header {
			&__container {
				background-color: var(--blue);
				border-radius: 0;
			}

			&__burger {
				cursor: pointer;
				display: block;
			}
			&__logo {
				display: none;
			}

			&__nav {
				display: block;
				position: absolute;
				left: -100%;
				top: 14.5rem;
				height: fit-content;
				width: 66rem;
				background-color: #fff;
				z-index: -1;
				transition: all 0.2s ease;
				&.open {
					left: 0;
				}

				.the-header__link {
					padding: 1.5rem;
					display: flex;
					justify-content: space-between;
					width: 100%;
					transition: all 0.2s ease;
					border-top: 0.1rem solid var(--blue);
					&:hover {
						background-color: var(--blue);
						color: var(--white);
						svg {
							path {
								fill: var(--white);
							}
						}
					}
				}
			}

			&__link {
				&-mobile {
					display: block;
				}

				svg {
					display: block;
					path {
						transition: all 0.2s ease;
					}
				}
			}

			&__right {
				position: absolute;
				left: -100%;
				top: 8.5rem;
				width: 66rem;
				padding: 1.5rem;
				height: 6rem;
				background-color: var(--white);
				z-index: -1;
				transition: all 0.2s ease;

				&.open {
					left: 0;
				}
				&-auth {
					position: absolute;
					left: -100%;
					top: 8.5rem;
					width: 66rem;
					padding: 1.5rem;
					height: 6rem;
					background-color: var(--white);
					z-index: -1;
					transition: all 0.2s ease;
					&.open {
						left: 0;
					}
				}

				svg {
					display: block;
					path:nth-child(1) {
						fill: var(--blue);
						stroke: var(--blue);
					}

					path {
						fill: var(--blue);
						stroke: var(--blue);
					}
					rect {
						stroke: var(--blue);
					}
				}
			}

			&__call {
				display: block;
			}
		}
		.link {
			&__full {
				display: none;
			}
		}
	}

	@media (max-width: 767px) {
		.the-header {
			height: 6rem;
			&__nav,
			&__right,
			&__right-auth {
				width: 95%;
			}
			&__nav {
				top: 12rem;
				font-size: 1.4rem;
			}
			&__right,
			&__right-auth {
				top: 6rem;
				font-size: 1.4rem;
			}
		}
	}
</style>
