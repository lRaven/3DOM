<template>
	<div class="the-booking">
		<div class="the-booking__header">
			<h1 class="the-booking__title">Бронирование</h1>
			<div class="the-booking__notification">
				<div>
					<img src="/img/icon/cabinet/notifications.svg" alt="" />
				</div>
				<h3
					class="the-booking__notification-desc"
					v-if="apartments === true"
				>
					У вас есть предварительное бронирование
				</h3>
				<h3
					class="the-booking__notification-desc"
					v-if="apartments === false"
				>
					У вас нет предварительных бронирований
				</h3>
			</div>
		</div>
		<div class="the-booking__body">
			<booking-apartment></booking-apartment>
		</div>
	</div>
</template>

<script>
	import BookingApartment from "@/components/cabinet/BookingApartment.vue";
	import { getBookingList } from "@/api/booking";
	import { mapState, mapMutations } from "vuex";

	export default {
		name: "TheBooking",
		components: { BookingApartment },
		watch: {
			booking: {
				handler() {
					if (this.booking.length > 0) {
						this.apartments = true;
					} else this.apartments = false;
				},
				deep: true,
			},
		},
		computed: {
			...mapState({ booking: (state) => state.cabinet.booking }),
		},
		data: () => ({
			apartments: false,
		}),
		methods: {
			...mapMutations(["SET_TAB"]),

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
		created() {
			this.SET_TAB("booking");
		},
		mounted() {
			this.openPopup();

			getBookingList();

			if (this.booking) {
				if (this.booking.length > 0) {
					this.apartments = true;
				} else this.apartments = false;
			}

			setInterval(() => {
				getBookingList();
			}, 300000);
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-booking {
		color: $dark;

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
				background-color: $blue;
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
