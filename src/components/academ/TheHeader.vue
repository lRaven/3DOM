<template>
	<header class="header animate__animated animate__fadeInDown" id="header">
		<div class="header__container center">
			<div class="header__left">
				<div class="header__burger" @click="showHideMenu">
					<img src="img/icon/academ/burger.svg" alt="" />
				</div>
				<nav class="nav">
					<router-link to="/" class="link">
						Главная
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
							/></svg
					></router-link>
					<a class="link" @click="scroll('#apartments')">
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
					</a>
					<a class="link" @click="scroll('#office')">
						Офисы
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
					<a class="link" @click="scroll('#parking')">
						Парковки
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
					<a class="link" @click="openPopup">
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
					<router-link to="/trade-in" class="link">
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
					<a class="link">
						Ремонт
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
			<div class="header__right" v-if="authorized === false">
				<div class="header__auth">
					<img src="img/icon/academ/person.svg" alt="" />
					<router-link to="/login" class="link">
						Войти <span class="link__full">в 3D-клуб</span>
					</router-link>
					<span>/</span>
					<router-link to="/register" class="link">
						Регистрация
					</router-link>
				</div>
				<div class="header__call">
					<img src="img/icon/academ/call.svg" alt="" />
					<span>+7 (8442) 60-05-51</span>
				</div>
			</div>
			<div class="header__right" v-if="authorized === true">
				<router-link
					to="/cabinet"
					class="header__avatar"
					@click="moveToCabinet()"
				>
					<img :src="avatar" alt="avatar" />
				</router-link>
			</div>
		</div>
	</header>
	<div class="blur" @click="hideMenu"></div>
</template>

<script>
	import store from "../../store";
	import { scroll } from "../../js/scroll";

	export default {
		name: "Header",
		store,
		data() {
			return {
				authorized: false,
			};
		},
		computed: {
			avatar: () => {
				return store.getters.USER.avatar;
			},
		},
		methods: {
			//*переход к вкладке профиля
			moveToCabinet() {
				store.commit("SET_TAB", "profile");
			},

			//*скролл к элементу пл id
			scroll(id) {
				scroll(id);
			},

			//*проверка, авторизован ли юзер
			checkAuthorized() {
				if (store.getters.TOKEN !== null) {
					this.authorized = true;
				} else {
					this.authorized = false;
				}
			},

			//*показ меню в мобилке
			showHideMenu() {
				const header = document.querySelector(".header");
				const nav = header.querySelector(".nav");
				const auth = header.querySelector(".header__auth");
				const avatar = header.querySelector(".header__avatar");
				const blur = document.querySelector(".blur");

				if (nav.classList.contains("open")) {
					if (this.authorized === false) {
						auth.classList.remove("open");
					} else if (this.authorized === true) {
						avatar.classList.remove("open");
					}
					nav.classList.remove("open");
					document.body.classList.remove("locked");
					blur.classList.remove("open");
				} else {
					if (this.authorized === false) {
						auth.classList.add("open");
					} else if (this.authorized === true) {
						avatar.classList.add("open");
					}
					document.body.classList.add("locked");
					nav.classList.add("open");
					blur.classList.add("open");
				}
			},

			//*скрытие меню в мобилке
			hideMenu() {
				const header = document.querySelector(".header");
				const nav = header.querySelector(".nav");
				const auth = header.querySelector(".header__auth");
				const avatar = header.querySelector(".header__avatar");
				const blur = document.querySelector(".blur");

				if (this.authorized === false) {
					auth.classList.remove("open");
				} else if (this.authorized === true) {
					avatar.classList.remove("open");
				}
				nav.classList.remove("open");
				document.body.classList.remove("locked");
				blur.classList.remove("open");
			},

			openPopup() {
				const popup = document.querySelector(".popup-full");
				const body = document.querySelector("body");

				body.classList.add("locked");
				popup.classList.add("open");
			},
		},

		mounted() {
			this.checkAuthorized();

			const links = document.querySelectorAll(".link");
			links.forEach((link) => {
				link.addEventListener("click", () => {
					this.hideMenu();
				});
			});

			//*скрытие выпадающего списка при клике вне элемента
			window.addEventListener("click", (e) => {
				const target = e.target;
				if (!target.closest(".header__burger")) {
					const header = document.querySelector(".header");
					const nav = header.querySelector(".nav");
					const auth = header.querySelector(".header__auth");
					const avatar = header.querySelector(".header__avatar");
					const blur = document.querySelector(".blur");

					if (this.authorized === false) {
						auth.classList.remove("open");
					} else if (this.authorized === true) {
						avatar.classList.remove("open");
					}
					nav.classList.remove("open");
					blur.classList.remove("open");
				}
			});

			//*скролл к секции если через пропсы была передана переменная по router-link
			const propsSection = document
				.querySelector(".theme-container")
				.getAttribute("section");

			if (propsSection !== null) {
				setTimeout(() => {
					const section =
						document.querySelector(propsSection).offsetTop;
					const header =
						document.querySelector("#header").clientHeight;
					window.scrollTo(0, section - header, {
						behavior: "smooth",
					});
				}, 500);
			}
		},
	};
</script>

<style lang="scss" scoped>
	.header {
		position: fixed;
		height: 6rem;
		width: 100%;
		background-color: var(--gold);
		user-select: none;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		z-index: 4;

		&__container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 100%;
		}

		&__left {
			display: flex;
			align-items: center;
			gap: 3rem;
		}
		&__burger {
			display: none;
		}

		&__right {
			display: flex;
			align-items: center;
			gap: 7.8rem;

			span {
				font-size: 1.6rem;
				font-weight: 600;
			}
		}

		&__auth {
			display: flex;
			align-items: center;
			gap: 0.7rem;
		}
		&__call {
			cursor: pointer;
			display: flex;
			align-items: center;
			gap: 1rem;
		}

		&__avatar {
			height: 4rem;
			width: 4rem;
			border-radius: 50%;
			overflow: hidden;

			img {
				height: 100%;
				width: 100%;
				object-fit: cover;
			}
		}
	}

	.nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	.link {
		cursor: pointer;
		position: relative;
		user-select: none;
		font-size: 1.6rem;
		color: var(--dark-green);
		font-weight: 600;
		svg {
			display: none;
		}

		&::after {
			content: "";
			position: absolute;
			left: 0;
			bottom: -0.3rem;
			width: 0;
			height: 0.2rem;
			background-color: var(--dark-green);
			transition: all 0.3s ease;
		}

		&:hover {
			&::after {
				width: 100%;
				transition: all 0.3s ease;
			}
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

	@media (max-width: 1260px) {
		.header {
			&__right {
				gap: 2rem;
			}
			&__call {
				span {
					display: none;
				}
			}
		}
	}
	@media (max-width: 1023px) {
		.header {
			&__left {
			}
			&__burger {
				cursor: pointer;
				display: block;
				padding: 1rem;
			}
			&__auth {
				position: absolute;
				background-color: var(--gold);
				padding-left: 2.5rem;
				left: -100%;
				top: 6rem;
				height: 6rem;
				width: 66rem;
				transition: all 0.2s ease;

				&.open {
					left: 0;
					transition: all 0.2s ease;
				}
			}
			&__avatar {
				position: absolute;
				left: -100%;
				top: 6rem;
				display: flex;
				align-items: center;
				background-color: var(--gold);
				padding-left: 2.5rem;
				width: 66rem;
				height: 6rem;
				border-radius: 0;
				transition: all 0.2s ease;

				&.open {
					left: 0;
					transition: all 0.2s ease;
				}
				img {
					width: 4rem;
					height: 4rem;
					border-radius: 50%;
					overflow: hidden;
				}
			}
		}

		.nav {
			position: absolute;
			display: block;
			top: 12rem;
			left: -100%;
			width: 66rem;
			transition: all 0.2s ease;

			&.open {
				left: 0;
				transition: all 0.2s ease;
			}
			.link {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				background-color: var(--gold);
				border-top: 0.1rem solid var(--dark);
				padding: 1.5rem 2.4rem;
				transition: all 0.1s ease;
				svg {
					display: block;
				}
				&:hover {
					background-color: var(--dark-green);
					color: var(--gold);
					transition: all 0.2s ease;
					svg {
						path {
							fill: var(--gold);
							transition: all 0.2s ease;
						}
					}
					&::after {
						width: 0;
					}
				}
			}
		}
		.link__full {
			display: none;
		}
	}

	@media (max-width: 767px) {
		.header {
			&__auth,
			&__avatar,
			.nav {
				width: 95%;
			}
		}
	}
</style>
