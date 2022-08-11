<template>
	<div class="page-cabinet theme-container">
		<the-header :isCabinetVersion="true"></the-header>
		<main class="page-cabinet__wrapper">
			<aside class="page-cabinet__aside" ref="aside">
				<the-navigation
					@openPopup="openPopup"
					@minimizeNav="minimizeNav"
					@maximizeNav="maximizeNav"
				></the-navigation>
				<div class="page-cabinet__hint" v-if="isHintVisible">
					<p>
						Есть вопросы <br />
						или предложения?
					</p>
					<v-button
						:text="'Напишите нам'"
						:type="'button'"
						class="gray"
					></v-button>
				</div>
			</aside>
			<div class="page-cabinet__main">
				<the-profile
					class="animate__animated animate__fadeIn wow"
					v-if="tab === 'profile'"
				/>
				<the-booking
					class="animate__animated animate__fadeIn wow"
					v-if="tab === 'booking'"
				/>
				<the-favorites
					class="animate__animated animate__fadeIn wow"
					v-if="tab === 'favorites'"
				/>
				<the-appointments
					class="animate__animated animate__fadeIn wow"
					v-if="tab === 'meetings'"
				/>
				<the-services
					class="animate__animated animate__fadeIn wow"
					v-if="tab === 'services'"
				/>
				<the-bonuses
					class="animate__animated animate__fadeIn wow"
					v-if="tab === 'bonuses'"
				></the-bonuses>
				<the-feedback
					class="animate__animated animate__fadeIn wow"
					v-if="tab === 'feedback'"
				></the-feedback>
			</div>
		</main>
		<the-footer />
		<transition>
			<popup-kolotok
				v-if="isPopupVisible"
				@closePopup="closePopup"
			></popup-kolotok>
		</transition>
	</div>
</template>

<script>
	import { mapState } from "vuex";

	import TheHeader from "@/components/general/TheHeader";

	import TheNavigation from "@/components/cabinet/TheNavigation";
	import vButton from "@/components/UI/general/v-button";
	import TheProfile from "@/components/cabinet/TheProfile";
	import TheBooking from "@/components/cabinet/TheBooking";
	import TheFavorites from "@/components/cabinet/TheFavorites";
	import TheAppointments from "@/components/cabinet/TheAppointments";
	import TheServices from "@/components/cabinet/TheServices";
	import TheBonuses from "@/components/cabinet/TheBonuses";
	import TheFeedback from "@/components/cabinet/TheFeedback";
	import PopupKolotok from "@/components/general/PopupKolotok";

	import TheFooter from "@/components/general/TheFooter";

	import { getFavoriteApartmentNumber } from "@/api/favorite";

	export default {
		name: "PageCabinet",
		components: {
			TheHeader,

			TheNavigation,
			vButton,

			TheProfile,
			TheBooking,
			TheFavorites,
			TheAppointments,
			TheServices,
			TheBonuses,
			TheFeedback,
			PopupKolotok,

			TheFooter,
		},

		data: () => ({
			isPopupVisible: false,
			isHintVisible: true,
		}),
		computed: { ...mapState({ tab: (state) => state.cabinet.tab }) },

		methods: {
			//* функция скрытия и раскрытия навигационной панели
			showHideNav() {
				const aside = document.querySelector(".page-cabinet__aside");
				const nav = document.querySelector(".navigation");
				const arrow = document.querySelector(".navigation__hide");
				const hint = document.querySelector(".page-cabinet__hint");

				arrow.addEventListener("click", () => {
					if (nav.classList.contains("minimize")) {
						nav.removeAttribute("style");

						setTimeout(() => {
							nav.classList.remove("minimize");
							hint.removeAttribute("style");
							aside.classList.remove("minified");
						}, 400);
					} else {
						nav.classList.add("minimize");
						hint.setAttribute(
							"style",
							"transform: translateX(-20rem)"
						);
						setTimeout(() => {
							nav.setAttribute("style", "padding-top: 6rem");
							aside.classList.add("minified");
						}, 300);
					}
				});
			},

			minimizeNav() {
				setTimeout(() => {
					this.$refs.aside.classList.add("minimize");
					this.isHintVisible = false;
				}, 300);
			},

			maximizeNav() {
				this.$refs.aside.classList.remove("minimize");
				this.isHintVisible = true;
			},

			openPopup() {
				this.isPopupVisible = true;
				document.body.classList.add("locked");
			},
			closePopup() {
				this.isPopupVisible = false;
				document.body.classList.remove("locked");
			},
		},
		mounted() {
			getFavoriteApartmentNumber();
		},
	};
</script>

<style lang="scss" scoped>
	.theme-container {
		display: grid;
		grid-template-rows: 1fr 8rem;
		height: 100%;
		min-height: 100vh;
		background-color: #fff;
	}

	.page-cabinet {
		&__wrapper {
			padding-top: 8.5rem;
			padding-bottom: 5rem;
			display: grid;
			grid-template-columns: max-content 1fr;
		}

		&__aside {
			position: sticky;
			left: 0;
			top: 8.5rem;
			transform: translateY(-8.5rem);
			overflow-y: auto;
			height: max-content;
			width: 34rem;
			background-color: #fff;
			z-index: 2;
			transition: all 0.3s ease;
			-ms-overflow-style: none;
			scrollbar-width: none;

			&::-webkit-scrollbar {
				display: none;
			}

			&.minimize {
				width: calc(7rem);
				transition: all 0.3s ease;
			}
		}

		&__hint {
			position: relative;
			margin-top: 9rem;
			padding: 0 0 8rem 2.5rem;
			transition: all 0.3s ease;

			p {
				font-size: 1.6rem;
				font-weight: 500;
				margin-bottom: 2rem;
			}
		}

		&__main {
			padding: 6rem 2rem 17rem 2rem;
			width: 100%;
			transition: all 0.3s ease;
		}
	}
</style>
