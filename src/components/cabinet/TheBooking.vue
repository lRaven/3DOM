<template>
	<div class="booking">
		<div class="booking__header">
			<h1 class="booking__title">Бронирование</h1>
			<div class="booking__notification">
				<div>
					<img src="img/icon/cabinet/notifications.svg" alt="" />
				</div>
				<h3
					class="booking__notification-desc"
					v-if="apartments === true"
				>
					У вас есть предварительное бронирование
				</h3>
				<h3
					class="booking__notification-desc"
					v-if="apartments === false"
				>
					У вас нет предварительных бронирований
				</h3>
			</div>
		</div>
		<div class="booking__body">
			<booking-apartment></booking-apartment>
		</div>
	</div>
</template>

<script>
	import BookingApartment from "./BookingApartment.vue";
	import store from "../../store";
	import { getBookingList } from "../../api/booking";

	export default {
		name: "TheBooking",
		components: {
			BookingApartment,
		},
		data() {
			return {};
		},
		computed: {
			apartments: () => {
				if (store.getters.BOOKING.length > 0) {
					return true;
				} else return false;
			},
		},
		methods: {
			openPopup() {
				const images = document.querySelectorAll(".apartment__layout");
				images.forEach((image) => {
					image.addEventListener("click", () => {
						const src = image
							.querySelector("img")
							.getAttribute("src");
						const popup = document.querySelector(".popup");
						const popupImg = popup.querySelector(".popup__image");

						popupImg.setAttribute("src", src);
						document
							.querySelector("body")
							.setAttribute("style", "overflow: hidden");
						popup.classList.add("open");
					});
				});
			},
		},
		mounted() {
			this.openPopup();

			getBookingList();

			setInterval(() => {
				getBookingList();
			}, 300000);
		},
	};
</script>

<style lang="scss" scoped>
	.booking {
		color: var(--dark);

		&__header {
			margin-bottom: 3rem;
			padding: 0 2.4rem;
		}

		&__title {
			margin-bottom: 1.5rem;
			font-size: 3rem;
			font-weight: 600;
		}

		&__notification {
			display: flex;
			align-items: center;
			gap: 2.4rem;

			div {
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: var(--blue);
				width: 5.2rem;
				height: 5.2rem;
				border-radius: 50%;
			}

			&-desc {
				font-size: 2rem;
				font-weight: 600;
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
