<template>
	<div class="blur">
		<div class="apartment-popup">
			<div class="apartment-popup__header">
				<div class="apartment-popup__col">
					<span class="apartment-popup__header-decorative" v-once></span>
					<div class="apartment-popup__text">
						<div class="apartment-popup__info">
							<p class="apartment-popup__rooms" v-if="apartment.type === 5">
								Студия
							</p>
							<p class="apartment-popup__rooms" v-else>
								{{ apartment.type }}-комн
							</p>
							<p class="apartment-popup__number">№{{ apartment.number }}</p>
							<p class="apartment-popup__area">{{ apartment.area }} кв.м.</p>
						</div>
						<p class="apartment-popup__project" v-once>«ЖК Академический»</p>
					</div>
				</div>
				<div class="apartment-popup__col" v-once>
					<div class="apartment-popup__close" @click="closeDialogApartment()">
						<img src="/img/icons/academ/close2.svg" alt="" />
					</div>
				</div>
			</div>
			<div class="apartment-popup__body">
				<div class="apartment-popup__body-row">
					<div class="apartment-popup__body-col">
						<div class="apartment-popup__stats">
							<p
								class="apartment-popup__stats-col apartment-popup__stats-key"
								v-once
							>
								Секция
							</p>
							<p
								class="apartment-popup__stats-col apartment-popup__stats-value"
							>
								{{ apartment.section }}
							</p>

							<p
								class="apartment-popup__stats-col apartment-popup__stats-key"
								v-once
							>
								Этаж
							</p>
							<p
								class="apartment-popup__stats-col apartment-popup__stats-value"
							>
								{{ apartment.floor }}
							</p>

							<p
								class="apartment-popup__stats-col apartment-popup__stats-key"
								v-once
							>
								Адрес
							</p>
							<p
								class="apartment-popup__stats-col apartment-popup__stats-value"
								v-once
							>
								Волгоград, ул. Баррикадная,1.
							</p>

							<p
								class="apartment-popup__stats-col apartment-popup__stats-key"
								v-once
							>
								Цена при 100%
							</p>
							<p
								class="apartment-popup__stats-col apartment-popup__stats-value"
							>
								{{ apartment.cost }}
							</p>

							<p
								class="apartment-popup__stats-col apartment-popup__stats-key"
								v-once
							>
								Цена при ипотеке
							</p>
							<p
								class="apartment-popup__stats-col apartment-popup__stats-value"
							>
								{{ apartment.cost }}
							</p>

							<p
								class="apartment-popup__stats-col apartment-popup__stats-key"
								v-once
							>
								Цена базовая
							</p>
							<p
								class="apartment-popup__stats-col apartment-popup__stats-value"
							>
								{{ apartment.cost }}
							</p>
						</div>
						<div class="apartment-popup__buttons">
							<v-button
								icon="/img/icons/crm/registration.svg"
								color="gold"
								text="Оформить ипотеку"
							></v-button>
							<v-button
								icon="/img/icons/crm/calc.svg"
								color="gray"
								text="Калькулятор ипотеки"
							></v-button>
						</div>
					</div>
					<div class="apartment-popup__body-col">
						<div class="apartment-popup__actions">
							<div
								class="apartment-popup__action"
								v-if="isReserved === false"
								@click="addReservation(this.userID, this.apartment.id)"
							>
								<p class="apartment-popup__action-description" v-once>
									Забронировать
								</p>

								<img
									src="/img/icons/crm/lock.svg"
									alt="icon"
									class="apartment-popup__action-icon"
									v-once
								/>
							</div>
							<div
								class="apartment-popup__action"
								style="cursor: default"
								v-else
							>
								<p class="apartment-popup__action-description" v-once>
									Забронирована
								</p>
								<img
									src="/img/icons/crm/lock.svg"
									alt="icon"
									class="apartment-popup__action-icon"
									v-once
								/>
							</div>

							<div class="apartment-popup__action" v-once>
								<p class="apartment-popup__action-description">
									Запись на просмотр
								</p>
								<img
									src="/img/icons/crm/eye.svg"
									alt="icon"
									class="apartment-popup__action-icon"
								/>
							</div>
							<div class="apartment-popup__action">
								<p class="apartment-popup__action-description">
									<router-link
										style="color: #cc9964"
										:to="{
											name: 'Fix Client',
											query: {
												building: apartment.building,
												apartmentNumber: apartment.number,
												apartmentId: apartment.id,
												apartmentFloor: apartment.floor,
												apartmentArea: apartment.area,
											},
										}"
									>
										Зафиксировать клиента
									</router-link>
								</p>
								<img
									src="/img/icons/crm/fix.svg"
									alt="icon"
									class="apartment-popup__action-icon"
									v-once
								/>
							</div>
							<div class="apartment-popup__action" v-once>
								<p
									class="apartment-popup__action-description"
									@click="this.downloadPDF()"
								>
									Презентация квартиры
								</p>
								<img
									src="/img/icons/crm/presentation.svg"
									alt="icon"
									class="apartment-popup__action-icon"
								/>
							</div>

							<div
								class="apartment-popup__action"
								v-if="isFavorite === false"
								@click="addFavorite"
							>
								<p class="apartment-popup__action-description" v-once>
									В избранное
								</p>

								<img
									src="/img/icons/crm/favorite.svg"
									alt="icon"
									class="apartment-popup__action-icon"
									v-once
								/>
							</div>
							<div
								class="apartment-popup__action"
								style="cursor: default"
								v-else
							>
								<p class="apartment-popup__action-description" v-once>
									В избранном
								</p>
								<img
									src="/img/icons/crm/favorite.svg"
									alt="icon"
									class="apartment-popup__action-icon"
									v-once
								/>
							</div>

							<div class="apartment-popup__action" v-once>
								<p class="apartment-popup__action-description">
									Условия бронирования, оплаты, рассрочки
								</p>
								<img
									src="/img/icons/crm/document.svg"
									alt="icon"
									class="apartment-popup__action-icon"
								/>
							</div>
						</div>
					</div>
				</div>

				<img
					:src="apartment.image"
					alt="Схема квартиры"
					class="apartment-popup__scheme"
				/>
			</div>
			<pdf-page :apartment="apartment" v-show="false" ref="pdf"></pdf-page>
		</div>
	</div>
</template>

<script>
	import vButton from './v-button.vue';
	import pdfPage from './pdfPage';

	import { addReservation } from '@/api/booking';
	import { addFavorite } from '@/api/favorite';

	import { mapState } from 'vuex';

	export default {
		name: 'apartmentPopup',
		components: {
			vButton,
			pdfPage,
		},
		props: { apartment: Object },
		computed: {
			...mapState({
				userID: (state) => state.cabinet.user.id,
				favorites: (state) => state.cabinet.favorites,
				apartments: (state) => state.academ.apartments,
			}),
			isFavorite() {
				let result = false;
				this.favorites.forEach((favorite) => {
					if (this.apartment.id === favorite.id) result = true;
				});
				return result;
			},
			isReserved() {
				let reserved;
				this.apartments.forEach((apartment) => {
					if (this.apartment.id === apartment.id) {
						reserved = apartment.reserved;
					}
				});
				return reserved;
			},
		},
		data: () => ({ fullscreen: false }),

		methods: {
			addReservation,
			closeDialogApartment() {
				document.querySelector('body').classList.remove('locked');
				this.$emit('closeDialogApartment');
			},

			downloadPDF() {
				let w = window.open();
				w.document.write(this.$refs.pdf.$el.innerHTML);
				w.document.close();
				w.print();
			},

			async addFavorite() {
				await addFavorite(this.userID, this.apartment.id);
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.apartment-popup {
		display: flex;
		flex-direction: column;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		max-width: 90rem;
		max-height: 80rem;
		background-color: $white;
		transition: all 0.2s ease;
		overflow: hidden;
		z-index: 1;

		&__header {
			position: relative;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 0.1rem solid #c4c4c4;
			background-color: #d5bfa8;
			font-size: 1.8rem;
			font-weight: 700;
			color: $dark;
			&-decorative {
				display: block;
				background-color: #bdbdbd;
				height: 4rem;
				width: 2rem;
				border-right: 0.2rem solid #fff;
			}
			.apartment-popup__col {
				&:first-child {
					display: flex;
					align-items: center;
					gap: 2rem;
				}
			}
		}
		&__close {
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 4rem;
			height: 4rem;

			img {
				width: 2rem;
			}
		}

		&__text {
			display: flex;
			align-items: center;
			gap: 5rem;
		}
		&__info {
			display: flex;
			gap: 1.5rem;
		}

		&__body {
			padding: 3rem 2rem 1rem 4rem;
			height: 100%;
			display: flex;
			flex-direction: column;

			&-row {
				display: flex;
				justify-content: space-between;
			}
		}

		&__stats {
			display: grid;
			grid-template-columns: repeat(2, max-content);
			grid-gap: 0.7rem;
			margin-bottom: 2rem;
			&-row {
			}
			&-col {
				font-size: 1.3rem;
			}
			&-key {
			}
			&-value {
				&:nth-child(n + 7) {
					color: $gold;
					font-weight: 700;
				}
			}
		}
		&__buttons {
			display: flex;
			gap: 5rem;
		}
		&__actions {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 100%;
		}
		&__action {
			user-select: none;
			cursor: pointer;
			display: grid;
			grid-template-columns: 18rem 1fr;
			grid-gap: 2.6rem;
			align-items: center;
			justify-content: space-between;

			&-description {
				color: $gold;
				font-weight: 700;
				font-size: 1.3rem;
			}
			&-icon {
				width: 2.2rem;
				height: 2.2rem;
				object-fit: contain;
			}
		}

		&__scheme {
			max-width: 100%;
			padding: 2rem 0;
			display: block;
			max-height: 50rem;
			height: calc(100% - 20rem);
			width: 100%;
			object-fit: contain;
			margin: auto;
		}
	}
	.blur {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.8);
		transition: all 0.3s ease;
	}
</style>
