<template>
	<div class="theme-container">
		<the-header />
		<main class="cabinet">
			<aside class="cabinet__aside">
				<the-navigation />
				<div class="cabinet__hint">
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
			<div class="cabinet__main">
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
	</div>
</template>

<script>
	import store from "../store";

	import TheHeader from "../components/cabinet/TheHeader.vue";

	import TheNavigation from "../components/cabinet/TheNavigation.vue";
	import vButton from "../components/general/v-button.vue";
	import TheProfile from "../components/cabinet/TheProfile.vue";
	import TheBooking from "../components/cabinet/TheBooking.vue";
	import TheFavorites from "../components/cabinet/TheFavorites.vue";
	import TheAppointments from "../components/cabinet/TheAppointments.vue";
	import TheServices from "../components/cabinet/TheServices.vue";
	import TheBonuses from "../components/cabinet/TheBonuses.vue";
	import TheFeedback from "../components/cabinet/TheFeedback.vue";

	import TheFooter from "../components/general/TheFooter.vue";

	import { getFavoriteApartmentNumber } from "../api/favorite";

	export default {
		name: "Cabinet",
		store,
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

			TheFooter,
		},
		data() {
			return {};
		},
		computed: {
			tab: () => {
				return store.getters.TAB;
			},
		},

		methods: {
			//* функция скрытия и раскрытия навигационной панели
			showHideNav() {
				const aside = document.querySelector(".cabinet__aside");
				const nav = document.querySelector(".navigation");
				const arrow = document.querySelector(".navigation__hide");
				const hint = document.querySelector(".cabinet__hint");

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
		},
		mounted() {
			this.showHideNav();

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

	.cabinet {
		padding-top: 8.5rem;
		padding-bottom: 5rem;
		display: grid;
		grid-template-columns: max-content 1fr;

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

			&.minified {
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

	footer {
	}

	section {
		padding: 0;
	}
</style>
