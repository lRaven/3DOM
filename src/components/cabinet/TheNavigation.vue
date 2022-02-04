<template>
	<div class="navigation">
		<h1 class="navigation__title animate__animated animate__fadeInUp wow">
			Личный кабинет
		</h1>
		<ul class="navigation__list">
			<li
				class="navigation__item animate__animated animate__fadeInUp wow"
				@click="selectTab(1)"
				title="Профиль"
			>
				<div>
					<img
						v-if="tab === 'profile'"
						src="img/icon/cabinet/profile-selected.svg"
						class="navigation__img"
						alt=""
					/>
					<img
						v-else
						src="img/icon/cabinet/profile.svg"
						class="navigation__img"
						alt=""
					/>
				</div>
				<p
					class="navigation__description-bold"
					v-if="tab === 'profile'"
				>
					Мой профиль
				</p>
				<p class="navigation__description" v-else>Мой профиль</p>
			</li>
			<li
				class="navigation__item animate__animated animate__fadeInUp wow"
				@click="selectTab(2)"
				title="Бронирование"
				v-if="role === 'AdminCRM'"
			>
				<div>
					<img
						v-if="tab === 'booking'"
						src="img/icon/cabinet/booking-selected.svg"
						class="navigation__img"
						alt=""
					/>
					<img
						v-else
						src="img/icon/cabinet/booking.svg"
						class="navigation__img"
						alt=""
					/>
				</div>
				<p
					class="navigation__description-bold"
					v-if="tab === 'booking'"
				>
					Бронирование
				</p>
				<p class="navigation__description" v-else>Бронирование</p>
			</li>
			<li
				class="navigation__item animate__animated animate__fadeInUp wow"
				@click="selectTab(3)"
				title="Избранное"
			>
				<div>
					<img
						v-if="tab === 'favorites'"
						src="img/icon/cabinet/favorites-selected.svg"
						class="navigation__img"
						alt=""
					/>
					<img
						v-else
						src="img/icon/cabinet/favorites.svg"
						class="navigation__img"
						alt=""
					/>
				</div>
				<p
					class="navigation__description-bold"
					v-if="tab === 'favorites'"
				>
					Избранное
				</p>
				<p class="navigation__description" v-else>Избранное</p>
			</li>
			<li
				class="navigation__item animate__animated animate__fadeInUp wow"
				@click="selectTab(4)"
				title="Документы"
				v-if="role === 'AdminCRM'"
			>
				<div>
					<img
						v-if="tab === 'documents'"
						src="img/icon/cabinet/documents-selected.svg"
						class="navigation__img"
						alt=""
					/>
					<img
						v-else
						src="img/icon/cabinet/documents.svg"
						class="navigation__img"
						alt=""
					/>
				</div>
				<p
					class="navigation__description-bold"
					v-if="tab === 'documents'"
				>
					Документы
				</p>
				<p class="navigation__description" v-else>Документы</p>
			</li>
			<li
				class="navigation__item animate__animated animate__fadeInUp wow"
				@click="selectTab(5)"
				title="Встречи"
			>
				<div>
					<img
						v-if="tab === 'meetings'"
						src="img/icon/cabinet/meetings-selected.svg"
						class="navigation__img"
						alt=""
					/>
					<img
						v-else
						src="img/icon/cabinet/meetings.svg"
						class="navigation__img"
						alt=""
					/>
				</div>
				<p
					class="navigation__description-bold"
					v-if="tab === 'meetings'"
				>
					Встречи
				</p>
				<p class="navigation__description" v-else>Встречи</p>
			</li>
			<li
				class="navigation__item animate__animated animate__fadeInUp wow"
				@click="selectTab(6)"
				title="Ипотека"
			>
				<div>
					<img
						v-if="tab === 'mortgage'"
						src="img/icon/cabinet/mortgage-selected.svg"
						class="navigation__img"
						alt=""
					/>
					<img
						v-else
						src="img/icon/cabinet/mortgage.svg"
						class="navigation__img"
						alt=""
					/>
				</div>
				<p
					class="navigation__description-bold"
					v-if="tab === 'mortgage'"
				>
					Ипотека
				</p>
				<p class="navigation__description" v-else>Ипотека</p>
			</li>
			<li
				class="navigation__item animate__animated animate__fadeInUp wow"
				@click="selectTab(7)"
				title="Услуги"
			>
				<div>
					<img
						v-if="tab === 'services'"
						src="img/icon/cabinet/services-selected.svg"
						class="navigation__img"
						alt=""
					/>
					<img
						v-else
						src="img/icon/cabinet/services.svg"
						class="navigation__img"
						alt=""
					/>
				</div>
				<p
					class="navigation__description-bold"
					v-if="tab === 'services'"
				>
					Услуги
				</p>
				<p class="navigation__description" v-else>Услуги</p>
			</li>
			<li
				class="navigation__item animate__animated animate__fadeInUp wow"
				@click="selectTab(8)"
				title="Бонусы"
			>
				<div>
					<img
						v-if="tab === 'bonuses'"
						src="img/icon/cabinet/bonuses-selected.svg"
						class="navigation__img"
						alt=""
					/>
					<img
						v-else
						src="img/icon/cabinet/bonuses.svg"
						class="navigation__img"
						alt=""
					/>
				</div>
				<p
					class="navigation__description-bold"
					v-if="tab === 'bonuses'"
				>
					Бонусы
				</p>
				<p class="navigation__description" v-else>Бонусы</p>
			</li>
			<li
				class="navigation__item animate__animated animate__fadeInUp wow"
				@click="selectTab(9)"
				title="Кабинет CRM"
				v-if="role === 'AdminCRM'"
			>
				<div>
					<img
						v-if="tab === 'crm'"
						src="img/icon/cabinet/crm-selected.svg"
						class="navigation__img"
						alt=""
					/>
					<img
						v-else
						src="img/icon/cabinet/crm.svg"
						class="navigation__img"
						alt=""
					/>
				</div>
				<p class="navigation__description-bold" v-if="tab === 'crm'">
					Кабинет CRM
				</p>
				<p class="navigation__description" v-else>Кабинет CRM</p>
			</li>
			<li
				class="navigation__item animate__animated animate__fadeInUp wow"
				title="Колоток"
				v-if="role === 'DefaultUser'"
			>
				<router-link to="/">
					<div>
						<img
							src="img/icon/cabinet/beater.svg"
							class="navigation__img"
							alt=""
						/>
					</div>
					<p class="navigation__description">Колоток</p>
				</router-link>
			</li>
			<li
				class="navigation__item animate__animated animate__fadeInUp wow"
				@click="selectTab(10)"
				title="Обратная связь"
			>
				<div>
					<img
						v-if="tab === 'feedback'"
						src="img/icon/cabinet/feedback-selected.svg"
						class="navigation__img"
						alt=""
					/>
					<img
						v-else
						src="img/icon/cabinet/feedback.svg"
						class="navigation__img"
						alt=""
					/>
				</div>
				<p
					class="navigation__description-bold"
					v-if="tab === 'feedback'"
				>
					Обратная связь
				</p>
				<p class="navigation__description" v-else>Обратная связь</p>
			</li>
		</ul>
		<div
			class="navigation__hide animate__animated animate__fadeInRight wow"
		>
			<img src="img/icon/cabinet/arrow.svg" alt="" />
			<p>Свернуть</p>
		</div>
	</div>
</template>

<script>
	import store from "../../store";

	export default {
		name: "Navigation",
		store,
		data() {
			return {
				tab: store.getters.TAB,
				role: store.getters.USER.role,
			};
		},
		methods: {
			selectTab(options) {
				switch (options) {
					case 1: {
						store.commit("SET_TAB", "profile");
						break;
					}
					case 2: {
						store.commit("SET_TAB", "booking");
						break;
					}
					case 3: {
						store.commit("SET_TAB", "favorites");
						break;
					}
					case 4: {
						store.commit("SET_TAB", "documents");
						break;
					}
					case 5: {
						store.commit("SET_TAB", "meetings");
						break;
					}
					case 6: {
						store.commit("SET_TAB", "mortgage");
						break;
					}
					case 7: {
						store.commit("SET_TAB", "services");
						break;
					}
					case 8: {
						store.commit("SET_TAB", "bonuses");
						break;
					}
					case 9: {
						store.commit("SET_TAB", "crm");
						break;
					}
					case 10: {
						store.commit("SET_TAB", "feedback");
						break;
					}
				}
			},

			scrollTop() {
				const items = document.querySelectorAll(".navigation__item");
				items.forEach((item) => {
					item.addEventListener("click", () => {
						window.scrollTo(0, 0);
					});
				});
			},
		},
		mounted() {
			this.tab = store.getters.TAB;

			document.addEventListener("click", () => {
				this.tab = store.getters.TAB;
			});

			const interval = setInterval(() => {
				if (this.role === undefined) {
					this.role = store.getters.USER.role;
				} else clearInterval(interval);
			}, 10);

			this.scrollTop();
		},
	};
</script>

<style lang="scss" scoped>
	.navigation {
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

			h1 {
				opacity: 0;
				width: max-content;
				transition: all 0.3s ease;
			}

			.navigation {
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
			font-size: var(--text-30);
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
			font-size: var(--text-18);
			transition: all 0.3s ease;
			transition-delay: 0.3s;

			&-bold {
				font-size: var(--text-18);
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
			font-size: var(--text-18);
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
