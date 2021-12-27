<template>
	<div class="navigation">
		<h1 class="navigation__title">Личный кабинет</h1>
		<ul class="navigation__list">
			<li class="navigation__item" @click="selectTab(1)">
				<label>
					<input type="radio" name="tabs-link" />
					<div>
						<img
							v-if="tab !== 'profile'"
							src="img/icon/cabinet/profile.svg"
							class="navigation__img"
							alt=""
						/>
						<img
							v-if="tab == 'profile'"
							src="img/icon/cabinet/profile-selected.svg"
							class="navigation__img"
							alt=""
						/>
					</div>
					<p class="navigation__description">Мой профиль</p>
				</label>
			</li>
			<li class="navigation__item" @click="selectTab(2)">
				<label>
					<input type="radio" name="tabs-link" />
					<div>
						<img
							v-if="tab !== 'booking'"
							src="img/icon/cabinet/booking.svg"
							class="navigation__img"
							alt=""
						/>
						<img
							v-if="tab == 'booking'"
							src="img/icon/cabinet/booking-selected.svg"
							class="navigation__img"
							alt=""
						/>
					</div>
					<p class="navigation__description">Бронирование</p>
				</label>
			</li>
			<li class="navigation__item" @click="selectTab(3)">
				<label>
					<input type="radio" name="tabs-link" />
					<div>
						<img
							v-if="tab !== 'favorites'"
							src="img/icon/cabinet/favorites.svg"
							class="navigation__img"
							alt=""
						/>
						<img
							v-if="tab == 'favorites'"
							src="img/icon/cabinet/favorites-selected.svg"
							class="navigation__img"
							alt=""
						/>
					</div>
					<p class="navigation__description">Избранное</p>
				</label>
			</li>
			<li class="navigation__item" @click="selectTab(4)">
				<label>
					<input type="radio" name="tabs-link" />
					<div>
						<img
							v-if="tab !== 'documents'"
							src="img/icon/cabinet/documents.svg"
							class="navigation__img"
							alt=""
						/>
						<img
							v-if="tab == 'documents'"
							src="img/icon/cabinet/documents-selected.svg"
							class="navigation__img"
							alt=""
						/>
					</div>
					<p class="navigation__description">Документы</p>
				</label>
			</li>
			<li class="navigation__item" @click="selectTab(5)">
				<label>
					<input type="radio" name="tabs-link" />
					<div>
						<img
							v-if="tab !== 'meetings'"
							src="img/icon/cabinet/meetings.svg"
							class="navigation__img"
							alt=""
						/>
						<img
							v-if="tab == 'meetings'"
							src="img/icon/cabinet/meetings-selected.svg"
							class="navigation__img"
							alt=""
						/>
					</div>
					<p class="navigation__description">Встречи</p>
				</label>
			</li>
			<li class="navigation__item" @click="selectTab(6)">
				<label>
					<input type="radio" name="tabs-link" />
					<div>
						<img
							v-if="tab !== 'mortgage'"
							src="img/icon/cabinet/mortgage.svg"
							class="navigation__img"
							alt=""
						/>
						<img
							v-if="tab == 'mortgage'"
							src="img/icon/cabinet/mortgage-selected.svg"
							class="navigation__img"
							alt=""
						/>
					</div>
					<p class="navigation__description">Ипотека</p>
				</label>
			</li>
			<li class="navigation__item" @click="selectTab(7)">
				<label>
					<input type="radio" name="tabs-link" />
					<div>
						<img
							v-if="tab !== 'services'"
							src="img/icon/cabinet/services.svg"
							class="navigation__img"
							alt=""
						/>
						<img
							v-if="tab == 'services'"
							src="img/icon/cabinet/services-selected.svg"
							class="navigation__img"
							alt=""
						/>
					</div>
					<p class="navigation__description">Услуги</p>
				</label>
			</li>
			<li class="navigation__item" @click="selectTab(8)">
				<label>
					<input type="radio" name="tabs-link" />
					<div>
						<img
							v-if="tab !== 'bonuses'"
							src="img/icon/cabinet/bonuses.svg"
							class="navigation__img"
							alt=""
						/>
						<img
							v-if="tab == 'bonuses'"
							src="img/icon/cabinet/bonuses-selected.svg"
							class="navigation__img"
							alt=""
						/>
					</div>
					<p class="navigation__description">Бонусы</p>
				</label>
			</li>
			<li class="navigation__item" @click="selectTab(9)">
				<label>
					<input type="radio" name="tabs-link" />
					<div>
						<img
							v-if="tab !== 'crm'"
							src="img/icon/cabinet/crm.svg"
							class="navigation__img"
							alt=""
						/>
						<img
							v-if="tab == 'crm'"
							src="img/icon/cabinet/crm-selected.svg"
							class="navigation__img"
							alt=""
						/>
					</div>
					<p class="navigation__description">Кабинет CRM</p>
				</label>
			</li>
			<li class="navigation__item" @click="selectTab(10)">
				<label>
					<input type="radio" name="tabs-link" />
					<div>
						<img
							v-if="tab !== 'feedback'"
							src="img/icon/cabinet/feedback.svg"
							class="navigation__img"
							alt=""
						/>
						<img
							v-if="tab == 'feedback'"
							src="img/icon/cabinet/feedback.svg"
							class="navigation__img"
							alt=""
						/>
					</div>
					<p class="navigation__description">Обратная связь</p>
				</label>
			</li>
		</ul>
		<div class="navigation__hide">
			<img src="img/icon/cabinet/arrow.svg" alt="" />
			<p>Свернуть</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Navigation",
		data() {
			return {
				tab: "",
			};
		},
		methods: {
			selectTab(options) {
				switch (options) {
					case 1: {
						this.tab = "profile";
						break;
					}
					case 2: {
						this.tab = "booking";
						break;
					}
					case 3: {
						this.tab = "favorites";
						break;
					}
					case 4: {
						this.tab = "documents";
						break;
					}
					case 5: {
						this.tab = "meetings";
						break;
					}
					case 6: {
						this.tab = "mortgage";
						break;
					}
					case 7: {
						this.tab = "services";
						break;
					}
					case 8: {
						this.tab = "bonuses";
						break;
					}
					case 9: {
						this.tab = "crm";
						break;
					}
					case 10: {
						this.tab = "feedback";
						break;
					}
				}
			},
		},
		mounted() {
			this.selectTab();
		},
	};
</script>

<style lang="scss" scoped>
	.navigation {
		display: flex;
		flex-direction: column;
		background-color: var(--blue);
		color: var(--white);
		padding: 6rem 3rem;
		border-radius: 0 0 3rem 0;
		width: fit-content;
		&__title {
			font-size: var(--text-30);
			font-weight: 600;
			margin-bottom: 4rem;
		}
		&__list {
		}
		&__item {
			&:nth-child(1) {
				img.selected {
					background: url("/img/icon/cabinet/profile-selected.svg")
						center / contain no-repeat;
				}
			}
			&:nth-child(2) {
				img.selected {
					background: url("/img/icon/cabinet/booking-selected.svg")
						center / contain no-repeat;
				}
			}
			label {
				cursor: pointer;
				display: flex;
				align-items: center;
				gap: 1.9rem;
				padding: 1.7rem 0;
			}
			input {
				display: none;
				&:checked {
					~ p {
						font-weight: 700;
					}
				}
			}
			&:hover {
				p {
					font-weight: 700;
					transition: all 0.2s ease;
				}
			}
			div {
				display: flex;
				justify-content: center;
				width: 3rem;
				height: 2.1rem;
			}
		}
		&__img {
			height: 100%;
		}
		&__description {
			font-size: var(--text-18);
			font-weight: 500;
			transition: all 0.1s ease;
			&.selected {
				font-weight: 700;
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
		}
	}
</style>
