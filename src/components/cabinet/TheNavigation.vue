<template>
	<div class="the-navigation" ref="nav">
		<h1 class="the-navigation__title" ref="title">Личный кабинет</h1>
		<ul class="the-navigation__list">
			<li
				class="the-navigation__item animate__animated animate__fadeInUp"
				@click="
					selectTab(1);
					scrollTop();
				"
				title="Профиль"
			>
				<div>
					<img
						v-if="tab === 'profile'"
						src="img/icon/cabinet/profile-selected.svg"
						class="the-navigation__img"
						alt=""
					/>
					<img
						v-else
						src="img/icon/cabinet/profile.svg"
						class="the-navigation__img"
						alt=""
					/>
				</div>
				<p
					class="the-navigation__description-bold"
					v-if="tab === 'profile'"
				>
					Мой профиль
				</p>
				<p class="the-navigation__description" v-else>Мой профиль</p>
			</li>
			<li
				class="the-navigation__item animate__animated animate__fadeInUp"
				@click="selectTab(2)"
				title="Бронирование"
				v-if="role === 'AdminCRM' || is_superuser === true"
			>
				<div>
					<img
						v-if="tab === 'booking'"
						src="img/icon/cabinet/booking-selected.svg"
						class="the-navigation__img"
						alt=""
					/>
					<img
						v-else
						src="img/icon/cabinet/booking.svg"
						class="the-navigation__img"
						alt=""
					/>
				</div>
				<p
					class="the-navigation__description-bold"
					v-if="tab === 'booking'"
				>
					Бронирование
				</p>
				<p class="the-navigation__description" v-else>Бронирование</p>
			</li>
			<li
				class="the-navigation__item animate__animated animate__fadeInUp"
				@click="selectTab(3)"
				title="Избранное"
			>
				<div>
					<img
						v-if="tab === 'favorites'"
						src="img/icon/cabinet/favorites-selected.svg"
						class="the-navigation__img"
						alt=""
					/>
					<img
						v-else
						src="img/icon/cabinet/favorites.svg"
						class="the-navigation__img"
						alt=""
					/>
				</div>
				<p
					class="the-navigation__description-bold"
					v-if="tab === 'favorites'"
				>
					Избранное
				</p>
				<p class="the-navigation__description" v-else>Избранное</p>
			</li>
			<li
				class="the-navigation__item animate__animated animate__fadeInUp"
				@click="selectTab(4)"
				title="Документы"
				v-if="role === 'AdminCRM' || is_superuser === true"
			>
				<div>
					<img
						v-if="tab === 'documents'"
						src="img/icon/cabinet/documents-selected.svg"
						class="the-navigation__img"
						alt=""
					/>
					<img
						v-else
						src="img/icon/cabinet/documents.svg"
						class="the-navigation__img"
						alt=""
					/>
				</div>
				<p
					class="the-navigation__description-bold"
					v-if="tab === 'documents'"
				>
					Документы
				</p>
				<p class="the-navigation__description" v-else>Документы</p>
			</li>
			<li
				class="the-navigation__item animate__animated animate__fadeInUp"
				@click="selectTab(5)"
				title="Встречи"
			>
				<div>
					<img
						v-if="tab === 'meetings'"
						src="img/icon/cabinet/meetings-selected.svg"
						class="the-navigation__img"
						alt=""
					/>
					<img
						v-else
						src="img/icon/cabinet/meetings.svg"
						class="the-navigation__img"
						alt=""
					/>
				</div>
				<p
					class="the-navigation__description-bold"
					v-if="tab === 'meetings'"
				>
					Встречи
				</p>
				<p class="the-navigation__description" v-else>Встречи</p>
			</li>
			<li
				class="the-navigation__item animate__animated animate__fadeInUp"
				@click="selectTab(6)"
				title="Ипотека"
			>
				<div>
					<img
						v-if="tab === 'mortgage'"
						src="img/icon/cabinet/mortgage-selected.svg"
						class="the-navigation__img"
						alt=""
					/>
					<img
						v-else
						src="img/icon/cabinet/mortgage.svg"
						class="the-navigation__img"
						alt=""
					/>
				</div>
				<p
					class="the-navigation__description-bold"
					v-if="tab === 'mortgage'"
				>
					Ипотека
				</p>
				<p class="the-navigation__description" v-else>Ипотека</p>
			</li>
			<li
				class="the-navigation__item animate__animated animate__fadeInUp"
				@click="selectTab(7)"
				title="Услуги"
			>
				<div>
					<img
						v-if="tab === 'services'"
						src="img/icon/cabinet/services-selected.svg"
						class="the-navigation__img"
						alt=""
					/>
					<img
						v-else
						src="img/icon/cabinet/services.svg"
						class="the-navigation__img"
						alt=""
					/>
				</div>
				<p
					class="the-navigation__description-bold"
					v-if="tab === 'services'"
				>
					Услуги
				</p>
				<p class="the-navigation__description" v-else>Услуги</p>
			</li>
			<li
				class="the-navigation__item animate__animated animate__fadeInUp"
				@click="selectTab(8)"
				title="Бонусы"
			>
				<div>
					<img
						v-if="tab === 'bonuses'"
						src="img/icon/cabinet/bonuses-selected.svg"
						class="the-navigation__img"
						alt=""
					/>
					<img
						v-else
						src="img/icon/cabinet/bonuses.svg"
						class="the-navigation__img"
						alt=""
					/>
				</div>
				<p
					class="the-navigation__description-bold"
					v-if="tab === 'bonuses'"
				>
					Бонусы
				</p>
				<p class="the-navigation__description" v-else>Бонусы</p>
			</li>
			<li
				class="the-navigation__item animate__animated animate__fadeInUp"
				@click="selectTab(9)"
				title="Кабинет CRM"
				v-if="role === 'AdminCRM' || is_superuser === true"
			>
				<div>
					<img
						v-if="tab === 'crm'"
						src="img/icon/cabinet/crm-selected.svg"
						class="the-navigation__img"
						alt=""
					/>
					<img
						v-else
						src="img/icon/cabinet/crm.svg"
						class="the-navigation__img"
						alt=""
					/>
				</div>
				<p
					class="the-navigation__description-bold"
					v-if="tab === 'crm'"
				>
					Кабинет CRM
				</p>
				<p class="the-navigation__description" v-else>Кабинет CRM</p>
			</li>
			<li
				class="the-navigation__item animate__animated animate__fadeInUp"
				title="Колоток"
				v-if="role === 'DefaultUser' || is_superuser === true"
				@click="openPopup"
			>
				<div>
					<img
						src="img/icon/cabinet/beater.svg"
						class="the-navigation__img"
						alt=""
					/>
				</div>
				<p class="the-navigation__description">Колоток</p>
			</li>
			<li
				class="the-navigation__item animate__animated animate__fadeInUp"
				@click="selectTab(10)"
				title="Обратная связь"
			>
				<div>
					<img
						v-if="tab === 'feedback'"
						src="img/icon/cabinet/feedback-selected.svg"
						class="the-navigation__img"
						alt=""
					/>
					<img
						v-else
						src="img/icon/cabinet/feedback.svg"
						class="the-navigation__img"
						alt=""
					/>
				</div>
				<p
					class="the-navigation__description-bold"
					v-if="tab === 'feedback'"
				>
					Обратная связь
				</p>
				<p class="the-navigation__description" v-else>Обратная связь</p>
			</li>
		</ul>
		<div
			class="the-navigation__hide animate__animated animate__fadeInRight"
			ref="arrow"
			@click="
				isNavMinimized === true
					? (isNavMinimized = false)
					: (isNavMinimized = true)
			"
		>
			<img src="img/icon/cabinet/arrow.svg" alt="" />
			<p>Свернуть</p>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations } from "vuex";

	export default {
		name: "TheNavigation",
		data: () => ({ isNavMinimized: false }),
		watch: {
			isNavMinimized() {
				if (this.isNavMinimized === true) this.minimizeNav();
				else if (this.isNavMinimized === false) this.maximizeNav();
			},
		},
		computed: {
			...mapState({
				tab: (state) => state.cabinet.tab,
				role: (state) => state.cabinet.user.role,
				is_superuser: (state) => state.cabinet.user.is_superuser,
			}),
		},
		methods: {
			...mapMutations(["SET_TAB"]),

			selectTab(options) {
				switch (options) {
					case 1: {
						this.SET_TAB("profile");
						break;
					}
					case 2: {
						this.SET_TAB("booking");
						break;
					}
					case 3: {
						this.SET_TAB("favorites");
						break;
					}
					case 4: {
						this.SET_TAB("documents");
						break;
					}
					case 5: {
						this.SET_TAB("meetings");
						break;
					}
					case 6: {
						this.SET_TAB("mortgage");
						break;
					}
					case 7: {
						this.SET_TAB("services");
						break;
					}
					case 8: {
						this.SET_TAB("bonuses");
						break;
					}
					case 9: {
						this.$router.push("/crm");
						break;
					}
					case 10: {
						this.SET_TAB("feedback");
						break;
					}
				}
			},

			scrollTop: () => window.scrollTo(0, 0),

			minimizeNav() {
				this.$refs.nav.classList.add("minimize");
				this.$emit("minimizeNav");
			},

			maximizeNav() {
				this.$refs.nav.classList.remove("minimize");
				this.$emit("maximizeNav");
			},

			openPopup() {
				this.$emit("openPopup");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.the-navigation {
		display: flex;
		flex-direction: column;
		background-color: var(--blue);
		color: var(--white);
		padding: 14.5rem 3rem 6rem 3rem;
		border-radius: 0 0 3rem 0;
		width: 34rem;
		overflow: hidden;
		transition: all 0.3s ease;

		&.minimize {
			width: 7rem;
			padding-left: 0;
			padding-right: 0;
			transition: all 0.3s ease;
			transition-delay: 0.3s;

			.the-navigation {
				&__title {
					opacity: 0;
					// visibility: hidden;
					width: max-content;
					transition: all 0.3s ease;
				}
				&__list {
					align-items: center;
					transition: all 0.3s ease;
				}

				&__item {
					gap: 0;
					width: 7rem;
					transition: all 0.3s ease;
				}

				&__description {
					opacity: 0;
					width: 0;
					transition: all 0.3s ease;

					&-bold {
						opacity: 0;
						width: 0;
						transition: all 0.3s ease;
					}
				}

				&__hide {
					img {
						transform: rotate(-180deg);
						transition: all 0.3s ease;
					}

					transition: all 0.3s ease;

					p {
						opacity: 0;
						width: 0;
						transition: all 0.3s ease;
					}
				}
			}
		}

		&__title {
			font-size: 3rem;
			font-weight: 600;
			margin-bottom: 4rem;
			transition: all 0.3s ease;
			transition-delay: 0.3s;
		}

		&__list {
			display: flex;
			flex-direction: column;
			transition: all 1s ease;
			transition-delay: 0.3s;
		}

		&__item {
			cursor: pointer;
			display: flex;
			align-items: center;
			gap: 1.9rem;
			padding: 1.7rem 0;
			height: 5.5rem;
			transition: all 0.3s ease;
			transition-delay: 0.3s;
			a {
				display: flex;
				align-items: center;
				gap: 1.9rem;
			}

			div {
				display: flex;
				justify-content: center;
				min-width: 7rem;
				width: 7rem !important;
				height: 2.1rem;
			}

			a {
				color: var(--white);
			}
		}

		&__img {
			height: 100%;
			animation-duration: 0.8s;
		}

		&__description {
			font-size: 1.8rem;
			transition: all 0.3s ease;
			transition-delay: 0.3s;

			&-bold {
				font-size: 1.8rem;
				font-weight: 700;
				transition: all 0.3s ease;
				transition-delay: 0.3s;
			}
		}

		&__hide {
			padding: 1rem;
			cursor: pointer;
			display: flex;
			align-self: flex-end;
			align-items: center;
			font-size: 1.8rem;
			font-weight: 500;
			gap: 1.6rem;
			margin-top: 3rem;

			img {
				transition: all 0.3s ease;
			}

			p {
				transition: all 0.3s ease;
			}
		}
	}
</style>
