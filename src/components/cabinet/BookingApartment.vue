<template>
	<div class="booking-apartment">
		<div class="booking-apartment__header">
			<div
				class="booking-apartment__close"
				@click="remove(apartment.booking_id, apartment.number)"
				v-once
			>
				<img src="/img/icons/cabinet/close.svg" alt="" />
			</div>
			<div class="booking-apartment__layout">
				<img :src="apartment.image" alt="" />
			</div>
			<div class="booking-apartment__rooms">
				<div>
					<p>
						{{
							apartment.type === 5 ? 'Студия' : `${apartment.type}-комнатная`
						}}
					</p>
				</div>
				<p>
					Предварительное бронирование истекает
					{{ formattedDate }}
				</p>
			</div>
			<div class="booking-apartment__area">
				<div v-once><p>Площадь</p></div>
				<p>{{ apartment.area }} м2</p>
			</div>
			<div class="booking-apartment__floor">
				<div v-once><p>Этаж</p></div>
				<p>{{ apartment.floor }}</p>
			</div>
			<div class="booking-apartment__project" v-once>
				<div>
					<p>Проект</p>
				</div>
				<p>Академический</p>
			</div>
			<div class="booking-apartment__section">
				<div v-once><p>Секция</p></div>
				<p>{{ apartment.section }}</p>
			</div>
			<v-button text="Платное бронирование" type="button"></v-button>
			<div class="booking-apartment__price" v-once>
				<span>Стоимость:</span>
				<p>4 014 433 руб.</p>
			</div>
		</div>

		<div class="booking-apartment__body" v-once>
			<h2 class="booking-apartment__stage">Ход строительства:</h2>
			<div class="booking-apartment__gallery">
				<div class="booking-apartment__photos">
					<div class="booking-apartment__photos-sum">
						<span>1</span>
						<span>из</span>
						<span>95</span>
					</div>
					<img src="/img/cabinet/apartment__photos1.jpg" alt="" />
					<div class="booking-apartment__date">12.12.2012</div>
				</div>
				<div class="booking-apartment__photos">
					<div class="booking-apartment__photos-sum">
						<span>1</span>
						<span>из</span>
						<span>95</span>
					</div>
					<img src="/img/cabinet/apartment__photos2.jpg" alt="" />
					<div class="booking-apartment__date">12.12.2012</div>
				</div>
				<div class="booking-apartment__photos">
					<div class="booking-apartment__photos-sum">
						<span>1</span>
						<span>из</span>
						<span>95</span>
					</div>
					<img src="/img/cabinet/apartment__photos3.jpg" alt="" />
					<div class="booking-apartment__date">12.12.2012</div>
				</div>
				<div class="booking-apartment__photos">
					<div class="booking-apartment__photos-sum">
						<span>1</span>
						<span>из</span>
						<span>95</span>
					</div>
					<img src="/img/cabinet/apartment__photos4.jpg" alt="" />
					<div class="booking-apartment__date">12.12.2012</div>
				</div>
			</div>
			<v-button text="Подробнее" type="button"></v-button>
		</div>
	</div>
</template>

<script>
	import { getBookingList, removeReservation } from '@/api/booking';
	import { returnErrorMessages } from '@/js/returnErrorMessages';
	import { utcToLocalDate } from '@/js/utcToLocalDate';

	import { useToast } from 'vue-toastification';

	export default {
		name: 'BookingApartment',
		props: {
			apartment: {
				value: Object,
				required: true,
			},
		},
		computed: {
			formattedDate() {
				return utcToLocalDate(this.apartment.expiration_date);
			},
		},
		methods: {
			//* отмена бронирования
			async remove(apartment_id, apartment_number) {
				try {
					const response = await removeReservation(apartment_id);

					if (response.status === 204) {
						this.toast.success(
							`Бронирование квартиры №${apartment_number} отменено`
						);
						console.log('Apartment booking removed');

						getBookingList();
					}
					if (response.status === 400) {
						const error_list = returnErrorMessages(response.data);
						error_list.forEach((el) => {
							this.toast.error(el);
						});
					}
				} catch (err) {
					throw new Error(err);
				}
			},
		},
		setup() {
			const toast = useToast();
			return { toast };
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.booking-apartment {
		box-shadow: $shadow;
		border-radius: 3rem;

		&__header {
			display: grid;
			grid-template-columns: 19rem repeat(5, max-content);
			grid-template-rows: 10rem 5rem;
			justify-content: space-between;
			grid-gap: 3rem 5rem;
			position: relative;
			padding: 4rem 7.4rem 4.5rem 7.4rem;
			border-bottom: 0.1rem solid #c4c4c4;
			@media (max-width: 1600px) {
				padding: 4rem 1.5rem 2rem 1.5rem;
				grid-gap: 2rem;
				grid-template-columns: 15rem repeat(2, 1fr);
			}
			@media (max-width: 767px) {
				display: flex;
				flex-direction: column;
			}

			.v-button {
				@media (max-width: 1600px) {
					margin-top: auto;
				}
			}
		}

		&__close {
			cursor: pointer;
			position: absolute;
			right: 1.6rem;
			top: 1.3rem;
			height: 2.7rem;

			img {
				height: 100%;
			}
		}

		&__info {
		}

		&__layout {
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			grid-area: 1/1/3/1;
			@media (max-width: 767px) {
				grid-area: inherit;
				height: 30rem;
				justify-content: flex-start;
			}

			img {
				width: 100%;
				max-height: 100%;
				object-fit: contain;
				@media (max-width: 767px) {
					width: inherit;
					max-width: 100%;
				}
			}
		}

		&__rooms {
			font-weight: 600;

			p:nth-child(1) {
				font-size: 2.5rem;
			}

			p:nth-child(2) {
				position: relative;
				top: -0.4rem;
				max-width: 18rem;
				color: $blue;
				line-height: 2rem;
			}
		}

		&__rooms,
		&__area,
		&__floor,
		&__project,
		&__section {
			div {
				display: flex;
				align-items: center;
				margin-bottom: 1.5rem;
				height: 3rem;
			}

			*:nth-child(2) {
				font-weight: 600;
			}

			p {
				font-size: 1.6rem;
			}
		}

		&__area {
		}

		&__floor {
		}

		&__project {
			margin-right: 4rem;
		}

		&__section {
			@media (max-width: 1600px) {
				grid-column: 2/3;
			}
			@media (max-width: 767px) {
				grid-column: inherit;
			}
		}

		&__price {
			grid-area: 2/5/2/7;
			display: flex;
			align-items: flex-end;
			justify-content: flex-end;
			gap: 1rem;
			@media (max-width: 1600px) {
				grid-area: inherit;
				justify-content: flex-start;
				grid-column: 2/4;
			}
			@media (max-width: 767px) {
				grid-column: inherit;
			}

			span {
				color: #979797;
				font-size: 1.6rem;
				font-weight: 500;
			}

			p {
				color: $blue;
				font-weight: 700;
				font-size: 1.8rem;
			}
		}

		&__body {
			padding: 3.5rem 6.4rem 6.2rem 6.4rem;
			display: flex;
			flex-direction: column;
			@media (max-width: 1600px) {
				padding: 2rem 1.5rem;
			}

			.v-button {
				align-self: flex-end;
			}
		}

		&__stage {
			font-size: 2.5rem;
			font-weight: 600;
			margin-bottom: 1rem;
		}

		&__gallery {
			display: grid;
			grid-gap: 2rem;
			grid-template-columns: repeat(2, 1fr);
			margin-bottom: 4.5rem;
			@media (max-width: 767px) {
				grid-template-columns: 1fr;
			}
		}

		&__photos {
			position: relative;
			display: flex;
			flex-direction: column;

			img {
				border-radius: 2.5rem;
				overflow: hidden;
				width: 100%;
			}

			&-sum {
				display: flex;
				gap: 0.5rem;
				align-self: flex-end;
				margin-bottom: 1rem;
				color: #979797;
				font-weight: 600;
				font-size: 1.6rem;
			}
		}

		&__date {
			position: absolute;
			bottom: 0.6rem;
			right: 0.6rem;
			background-color: #20201f;
			color: #dfdfdf;
			font-size: 1.6rem;
			font-weight: 600;
			padding: 1rem 2.2rem;
			border-radius: 2.5rem;
		}

		.v-button {
			border-radius: 1rem;
			font-weight: 500;
			height: max-content;
		}
	}
</style>
