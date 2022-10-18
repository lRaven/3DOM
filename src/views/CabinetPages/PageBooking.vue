<template>
	<section class="page-booking">
		<div class="page-booking__header">
			<h1 class="page-booking__title" v-once>Бронирование</h1>
			<div class="page-booking__notification" v-once>
				<div class="page-booking__notification-icon-wrapper">
					<img
						src="/img/icons/cabinet/notifications.svg"
						alt="icon"
						class="page-booking__notification-icon"
					/>
				</div>
				<h3 class="page-booking__notification-desc" v-show="booking.length > 0">
					У вас есть предварительное бронирование
				</h3>
				<h3
					class="page-booking__notification-desc"
					v-show="booking.length === 0"
				>
					У вас нет предварительных бронирований
				</h3>
			</div>
		</div>

		<div class="page-booking__body">
			<transition-group mode="out-in" name="fade-up-fast">
				<booking-apartment
					v-for="apartment in booking"
					:key="apartment.id"
					:apartment="apartment"
				></booking-apartment>
			</transition-group>
		</div>
	</section>
</template>

<script>
	import BookingApartment from '@/components/cabinet/BookingApartment.vue';
	import { getBookingList } from '@/api/booking';
	import { mapState, mapMutations } from 'vuex';

	export default {
		name: 'PageBooking',
		components: { BookingApartment },
		computed: {
			...mapState({ booking: (state) => state.cabinet.booking }),
		},
		methods: {
			...mapMutations(['setTab', 'clearBooking']),
		},
		created() {
			this.setTab('booking');
			getBookingList();
		},
		unmounted() {
			this.clearBooking();
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.page-booking {
		color: $dark;

		&__header {
			margin-bottom: 3rem;
			padding: 0 2.4rem;
			@media (max-width: 767px) {
				padding: 0;
			}
		}

		&__title {
			margin-bottom: 1.5rem;
		}

		&__notification {
			display: flex;
			align-items: center;
			gap: 2.4rem;

			&-icon {
				@media (max-width: 540px) {
					width: 50%;
				}
				&-wrapper {
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: $blue;
					width: 5.2rem;
					min-width: 5.2rem;
					height: 5.2rem;
					border-radius: 50%;
					@media (max-width: 540px) {
						width: 3rem;
						min-width: 3rem;
						height: 3rem;
					}
				}
			}

			&-desc {
				font-size: 2rem;
				font-weight: 600;
				@media (max-width: 767px) {
					font-size: 1.6rem;
				}
				@media (max-width: 540px) {
					font-size: 1.4rem;
				}
			}
		}

		&__body {
			display: flex;
			flex-direction: column;
			gap: 2.3rem;
		}

		&__item {
		}
	}
</style>
