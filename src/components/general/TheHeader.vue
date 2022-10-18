<template>
	<header
		data-aos="fade-down"
		class="the-header"
		id="header"
		v-click-away="closeMobileMenu"
	>
		<div class="the-header__container" :class="{ center: !isCabinetVersion }">
			<div class="the-header__col">
				<button
					v-show="documentWidth <= 1050"
					type="button"
					class="the-header__burger"
					@click="
						isMobileMenuOpen === true ? closeMobileMenu() : showMobileMenu()
					"
				>
					<img
						src="/img/icons/general/burger.svg"
						alt=""
						class="the-header__burger-icon"
					/>
				</button>
				<button
					v-show="documentWidth <= 767 && isCabinetVersion"
					type="button"
					class="the-header__sidebar-btn"
					@click="isNavMinimized ? showNavMenu() : closeNavMenu()"
				>
					<img
						src="/img/icons/cabinet/sidebar.svg"
						alt=""
						class="the-header__sidebar-btn-icon"
					/>
				</button>

				<router-link :to="{ name: 'Home' }" class="the-header__logo" v-once>
					<img src="/img/icons/general/logo.svg" alt="logo" />
				</router-link>
			</div>

			<nav class="the-header__nav" :class="{ open: isMobileMenuOpen }">
				<li
					class="the-header__link"
					:class="{
						'the-header__link-mobile': link.action === 'modal',
						selected: link.link.name === this.$route.name,
					}"
					v-for="link in navItems"
					:key="link.id"
					@click="navActions(link.action, link.link)"
				>
					{{ link.description }}
					<svg
						width="7"
						height="12"
						viewBox="0 0 7 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						v-once
					>
						<path
							d="M0.349534 10.9566C-0.0409904 10.5661 -0.0409904 9.93292 0.349534 9.54239L3.88507 6.00686L0.349534 2.47132C-0.0409904 2.0808 -0.0409904 1.44763 0.349534 1.05711C0.740058 0.666586 1.37322 0.666585 1.76375 1.05711L6.00639 5.29975C6.39691 5.69027 6.39691 6.32344 6.00639 6.71396L1.76375 10.9566C1.37322 11.3471 0.740058 11.3471 0.349534 10.9566Z"
							fill="#021921"
						/>
					</svg>
				</li>
			</nav>

			<div class="the-header__col">
				<div
					class="the-header__right"
					:class="{ open: isMobileMenuOpen }"
					v-if="!isAuth"
				>
					<router-link
						:to="{ name: 'Login' }"
						class="the-header__auth-link"
						v-once
					>
						<svg
							width="46"
							height="30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.719 18.156c1.844-.75 3.61-1.125 5.297-1.125 1.687 0 3.437.375 5.25 1.125 1.843.719 2.765 1.672 2.765 2.86v2.015H6v-2.015c0-1.188.906-2.141 2.719-2.86zm8.11-4.312c-.782.781-1.72 1.172-2.813 1.172-1.094 0-2.032-.391-2.813-1.172-.781-.781-1.172-1.719-1.172-2.813S10.421 9 11.203 8.22C11.984 7.406 12.922 7 14.016 7c1.093 0 2.03.406 2.812 1.219C17.61 9 18 9.938 18 11.03c0 1.094-.39 2.031-1.172 2.813z"
								fill="currentColor"
							/>
							<path
								stroke="currentColor"
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
								stroke="currentColor"
								stroke-width="2"
							/>
						</svg>
						Войти
						<span class="the-header__link-full">в 3D-клуб</span>
					</router-link>
					<span v-once>/</span>
					<router-link
						:to="{ name: 'Registration' }"
						class="the-header__auth-link"
						v-once
					>
						Регистрация
					</router-link>
				</div>
				<div
					class="the-header__right-auth"
					:class="{ open: isMobileMenuOpen }"
					v-if="isAuth"
				>
					<router-link
						:to="{ name: 'Favorites' }"
						class="the-header__favorites"
						@click="isMobileMenuOpen = false"
					>
						<img src="/img/icons/general/favorites.svg" alt="" v-once />
						<span
							class="the-header__favorites-sum"
							:class="{ wide: favorites > 99 }"
							v-if="favorites > 0"
						>
							{{ favorites }}
						</span>
					</router-link>
					<router-link
						:to="{ name: 'Cabinet' }"
						class="the-header__avatar"
						@click="isMobileMenuOpen = false"
					>
						<img :src="avatar" alt="avatar" />
					</router-link>
				</div>
				<img
					src="/img/icons/general/call.svg"
					alt=""
					class="the-header__call"
					v-once
				/>
			</div>
		</div>
	</header>

	<transition mode="out-in">
		<div class="blur" v-show="isMobileMenuOpen"></div>
	</transition>
</template>

<script>
	import { mapState } from 'vuex';
	import { directive } from 'vue3-click-away';

	export default {
		name: 'TheHeader',
		emits: [
			'open-mortgage-calculator',
			'open-popup',
			'minimize-nav',
			'maximize-nav',
		],
		props: {
			isCabinetVersion: {
				value: Boolean,
				default: false,
			},
			isNavMinimized: Boolean,
		},
		watch: {
			documentWidth() {
				if (this.documentWidth > 1050 && this.isMobileMenuOpen) {
					this.isMobileMenuOpen = false;
				}
			},
			isMobileMenuOpen() {
				this.isMobileMenuOpen
					? document.body.classList.add('locked')
					: document.body.classList.remove('locked');
			},
		},
		data: () => ({
			isMobileMenuOpen: false,
			navItems: [
				{ id: 1, link: { name: 'Repair' }, description: 'Ремонты' },
				{
					id: 2,
					link: {
						name: 'Academ',
						query: { section: '#apartments' },
					},
					description: 'Квартиры',
				},
				{
					id: 3,
					link: '',
					description: 'Ипотека',
					action: 'modal-mortgage',
				},
				{ id: 4, link: { name: 'TradeIn' }, description: 'Trade-in' },
				{ id: 5, link: '/', description: 'Услуги' },
				{
					id: 6,
					link: {
						name: 'Academ',
						query: { section: '#feedback' },
					},
					description: 'Офисы продаж',
				},
				{
					id: 7,
					link: '',
					description: 'Заказать консультацию',
					action: 'modal',
				},
			],
		}),
		computed: {
			...mapState({
				avatar: (state) => state.cabinet.user.avatar,
				favorites: (state) => state.cabinet.favorites.length,
				isAuth: (state) => state.cabinet.userAuth,
				documentWidth: (state) => state.documentWidth,
			}),
		},
		methods: {
			navActions(action, link) {
				if (this.isMobileMenuOpen) {
					this.isMobileMenuOpen = false;
				}

				action === 'modal-mortgage'
					? this.$emit('open-mortgage-calculator')
					: action === 'modal'
					? this.$emit('open-popup')
					: this.$router.push(link);
			},

			showMobileMenu() {
				this.isMobileMenuOpen = true;
			},
			closeMobileMenu() {
				this.isMobileMenuOpen = false;
			},

			showNavMenu() {
				this.$emit('maximize-nav');
			},
			closeNavMenu() {
				this.$emit('minimize-nav');
			},
		},
		directives: { ClickAway: directive },
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.the-header {
		user-select: none;
		z-index: 4;
		position: fixed;
		width: 100%;
		height: 8.5rem;
		background-color: $white;
		font-weight: 600;
		font-size: 1.6rem;
		border-radius: 0 0 3rem 3rem;
		box-shadow: $shadow;
		color: $dark;
		@media (max-width: 767px) {
			height: 6rem;
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
			@media (max-width: 1250px) {
				gap: 1.5rem;
			}
			@media (max-width: 1050px) {
				background-color: $blue;
				border-radius: 0;
			}
		}

		&__col {
			display: flex;
			align-items: center;
			gap: 2rem;
		}

		&__burger,
		&__sidebar-btn {
			background-color: transparent;
			display: flex;
			height: 3rem;
			color: $white;
			&-icon {
				height: 100%;
				width: 100%;
				object-fit: contain;
			}
		}

		&__logo {
			display: block;
			height: 5rem;
			@media (max-width: 1050px) {
				display: none;
			}

			img {
				height: 100%;
			}
		}

		&__nav {
			display: flex;
			align-items: center;
			height: 100%;
			gap: 4rem;
			@media (max-width: 1250px) {
				gap: 1.5rem;
			}
			@media (max-width: 1050px) {
				display: block;
				position: absolute;
				left: 0;
				transform: translateX(-100vw);
				top: 14.5rem;
				height: fit-content;
				width: 66rem;
				background-color: #fff;
				z-index: -1;
				transition: all 0.3s ease;
			}
			@media (max-width: 767px) {
				width: 100%;
				top: 12rem;
				font-size: 1.4rem;
			}

			&.open {
				@media (max-width: 1050px) {
					transform: none;
				}
			}
			.the-header__link svg {
				display: none;
				@media (max-width: 1050px) {
					display: block;
				}
			}
		}

		&__link {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			cursor: pointer;
			width: max-content;
			transition: all 0.2s ease;
			color: inherit;
			@media (max-width: 1050px) {
				padding: 1.5rem;
				display: flex;
				justify-content: space-between;
				width: 100%;
				transition: all 0.2s ease;
				border-top: 0.1rem solid $blue;
			}
			&:hover {
				color: $blue;
				@media (max-width: 1050px) {
					background-color: $blue;
					color: $white;
					svg path {
						fill: $white;
					}
				}
			}
			&.selected {
				color: $blue;
			}
			&-full {
				color: currentColor;
			}
			&-mobile {
				display: none;
				@media (max-width: 1050px) {
					display: flex;
				}
			}

			svg path {
				transition: all 0.2s ease;
			}
		}

		&__auth {
			&-link {
				display: flex;
				align-items: center;
				gap: 1rem;
				color: $gray;
				transition: all 0.2s ease;
				&:hover {
					color: $blue;
				}

				svg {
					@media (max-width: 1250px) and (min-width: 1051px) {
						display: none;
					}
					@media (max-width: 1050px) {
						display: block;
					}
					@media (max-width: 540px) {
						display: none;
					}
				}
			}
		}

		&__right {
			display: flex;
			align-items: center;
			height: 5rem;
			gap: 1rem;
			@media (max-width: 1050px) {
				position: absolute;
				left: 0;
				transform: translateX(-100vw);
				top: 8.5rem;
				width: 66rem;
				padding: 1.5rem;
				height: 6rem;
				background-color: $white;
				z-index: -1;
				transition: all 0.3s ease;
			}
			@media (max-width: 767px) {
				width: 100%;
				top: 6rem;
				font-size: 1.4rem;
			}

			&.open {
				@media (max-width: 1050px) {
					transform: none;
				}
			}

			&-auth {
				display: flex;
				align-items: center;
				height: 5rem;
				gap: 3rem;
				@media (max-width: 1050px) {
					position: absolute;
					left: 0;
					top: 8.5rem;
					transform: translateX(-100vw);
					width: 66rem;
					padding: 1.5rem;
					height: 6rem;
					background-color: $white;
					z-index: -1;
					transition: all 0.3s ease;
				}
				@media (max-width: 767px) {
					width: 100%;
					top: 6rem;
					font-size: 1.4rem;
				}

				&.open {
					@media (max-width: 1050px) {
						transform: none;
					}
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
				color: $white !important;
				background-color: $blue;
				font-size: 1.4rem;
				border-radius: 50%;
				position: absolute;
				top: 0;
				right: -0.8rem;
				width: 2rem;
				height: 2rem;
				&.wide {
					width: max-content;
					border-radius: 2rem;
					padding: 0 1rem;
					right: -2rem;
				}
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

			@media (max-width: 1050px) {
				display: block;
			}
		}

		&__consultation-request {
			display: flex;
			flex-direction: column;
			&-description {
				font-size: 1.8rem;
				margin-bottom: 6rem;
				line-height: 1.3;
			}
			.v-checkbox {
				margin: 2rem 0 4rem 0;
			}
			.v-button {
				margin: auto;
				padding: 1.8rem 5rem;
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
	}
</style>
