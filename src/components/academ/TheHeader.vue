<template>
	<header data-aos="fade-down" class="the-header" id="header">
		<div class="the-header__container center">
			<div class="the-header__left">
				<button
					class="the-header__burger"
					@click="
						isMobileMenuOpen
							? (isMobileMenuOpen = false)
							: (isMobileMenuOpen = true)
					"
				>
					<img src="/img/icons/academ/burger.svg" alt="" />
				</button>
				<nav class="nav" :class="{ open: isMobileMenuOpen }">
					<router-link :to="{ name: 'Home' }" class="link">
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
					<a
						class="link"
						@click="
							isMobileMenuOpen = false;
							scroll('#apartments');
						"
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
					</a>
					<a
						class="link"
						@click="
							isMobileMenuOpen = false;
							scroll('#office');
						"
					>
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
					<a
						class="link"
						@click="
							isMobileMenuOpen = false;
							scroll('#parking');
						"
					>
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
					<a
						class="link"
						@click="
							isMobileMenuOpen = false;
							this.$emit('openMortgageCalculator');
						"
					>
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
					<router-link :to="{ name: 'TradeIn' }" class="link">
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
					<a class="link" @click="isMobileMenuOpen = false">
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
			<div class="the-header__right" v-if="isAuth === false">
				<div class="the-header__auth" :class="{ open: isMobileMenuOpen }">
					<img src="/img/icons/academ/person.svg" alt="" />
					<router-link :to="{ name: 'Login' }" class="link">
						Войти <span class="link__full">в 3D-клуб</span>
					</router-link>
					<span>/</span>
					<router-link :to="{ name: 'Registration' }" class="link">
						Регистрация
					</router-link>
				</div>
				<div class="the-header__call">
					<img src="/img/icons/academ/call.svg" alt="" />
					<span>+7 (8442) 60-05-51</span>
				</div>
			</div>
			<div class="the-header__right" v-else-if="isAuth === true">
				<router-link
					:to="{ name: 'Cabinet' }"
					class="the-header__avatar"
					:class="{ open: isMobileMenuOpen }"
				>
					<img :src="avatar" alt="avatar" />
				</router-link>
			</div>
		</div>
	</header>

	<transition mode="out-in">
		<div class="blur" v-show="isMobileMenuOpen"></div>
	</transition>
</template>

<script>
	import { mapState } from 'vuex';
	import { scroll } from '@/js/scroll';

	export default {
		name: 'TheHeader',
		emits: ['openMortgageCalculator'],
		props: { section: String },
		computed: {
			...mapState({
				avatar: (state) => state.cabinet.user.avatar,
				isAuth: (state) => state.cabinet.userAuth,
			}),
		},
		watch: {
			isMobileMenuOpen() {
				this.isMobileMenuOpen
					? document.body.classList.add('locked')
					: document.body.classList.remove('locked');
			},
		},
		data: () => ({ isMobileMenuOpen: false }),
		methods: {
			scroll,

			closeMobileMenu() {
				this.isMobileMenuOpen = false;
			},
		},
		mounted() {
			if (this.section) {
				scroll(this.section);
			}
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.the-header {
		position: fixed;
		height: 6rem;
		width: 100%;
		background-color: $gold;
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
		color: $dark-green;
		font-weight: 600;
		svg {
			display: none;
		}

		&::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: -0.3rem;
			width: 0;
			height: 0.2rem;
			background-color: $dark-green;
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
		z-index: 3;
		background-color: rgba(0, 0, 0, 0.5);
		transition: all 0.2s ease;
		&.open {
		}
	}

	@media (max-width: 1260px) {
		.the-header {
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
		.the-header {
			&__left {
			}
			&__burger {
				background-color: transparent;
				cursor: pointer;
				display: block;
				padding: 1rem;
			}
			&__auth {
				position: absolute;
				background-color: $gold;
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
				background-color: $gold;
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
				background-color: $gold;
				border-top: 0.1rem solid $dark;
				padding: 1.5rem 2.4rem;
				transition: all 0.1s ease;
				svg {
					display: block;
				}
				&:hover {
					background-color: $dark-green;
					color: $gold;
					transition: all 0.2s ease;
					svg {
						path {
							fill: $gold;
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
		.the-header {
			&__auth,
			&__avatar,
			.nav {
				width: 95%;
			}
		}
	}
</style>
