<template>
	<div class="blur">
		<div class="popup">
			<div class="popup__header">
				<div class="popup__title">
					<p>
						Волгоград, ул. Баррикадная, 1, секция
						{{ sectionCustom }}, план 4-13 этажей.
					</p>
				</div>
				<div class="popup__close" @click="closePopup()">
					<img src="img/icon/academ/close.svg" alt="" />
				</div>
			</div>
			<div class="popup__body">
				<div
					class="popup__button popup__fullscreen"
					v-if="fullscreen === false"
					@click="fullscreenPopup(1)"
				>
					<img src="img/icon/academ/fullscreen.svg" alt="" />
				</div>
				<div
					class="popup__button popup__default"
					v-if="fullscreen === true"
					@click="fullscreenPopup(2)"
				>
					<img src="img/icon/academ/minimize.svg" alt="" />
				</div>
				<div class="popup__col">
					<div class="popup__description">
						<p>
							Волгоград,<br />
							ул. Баррикадная, 1, секция {{ sectionCustom }},
							<br />
							план 4-13 этажей.
						</p>
						<p>Планировки квартир</p>
					</div>
					<div class="popup__full-scheme">
						<div
							class="popup__section2"
							@click="selectSection(2)"
							@mouseenter="paintSections(2)"
							@mouseleave="paintSections"
						>
							<section-two-scheme></section-two-scheme>
						</div>
						<div
							class="popup__section3"
							@click="selectSection(3)"
							@mouseenter="paintSections(3)"
							@mouseleave="paintSections"
						>
							<section-three-scheme></section-three-scheme>
						</div>
						<div
							class="popup__section1"
							@click="selectSection(1)"
							@mouseenter="paintSections(1)"
							@mouseleave="paintSections"
						>
							<section-one-scheme></section-one-scheme>
						</div>
					</div>
				</div>
				<div class="popup__col popup__section">
					<section-svg
						:section="sectionCustom"
						@openApartment="openApartment"
					></section-svg>
				</div>
				<div class="popup__col">
					<svg
						width="114"
						height="116"
						viewBox="0 0 114 116"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="compass"
					>
						<path
							d="M48.6809 49.6387L57.3232 58.281H46.5203H14.1117L48.6809 49.6387Z"
							fill="#CFD0D0"
							stroke="#00212D"
							stroke-width="0.37371"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="compass__side compass__west"
						/>
						<path
							d="M57.3232 58.2812L48.6809 66.9236L14.1117 58.2812H46.5203H57.3232Z"
							fill="#00212D"
							stroke="#00212D"
							stroke-width="0.37371"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M57.3232 58.2812V69.0841V101.493L48.6809 66.9236L57.3232 58.2812Z"
							fill="#CFD0D0"
							stroke="#00212D"
							stroke-width="0.37371"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="compass__side compass__south"
						/>
						<path
							d="M57.323 58.2812L65.9653 66.9236L57.323 101.493V69.0841V58.2812Z"
							fill="#00212D"
							stroke="#00212D"
							stroke-width="0.37371"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M65.9654 49.6387L100.535 58.281H68.126H57.3231L65.9654 49.6387Z"
							fill="#00212D"
							stroke="#00212D"
							stroke-width="0.37371"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M100.535 58.2812L65.9654 66.9236L57.3231 58.2812H68.126H100.535Z"
							fill="#CFD0D0"
							stroke="#00212D"
							stroke-width="0.37371"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="compass__side compass__east"
						/>
						<path
							d="M57.323 15.0693L65.9653 49.6386L57.323 58.2809V47.478V15.0693Z"
							fill="#CFD0D0"
							stroke="#00212D"
							stroke-width="0.37371"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="compass__side compass__north"
						/>
						<path
							d="M57.3232 15.0693V47.478V58.2809L48.6809 49.6386L57.3232 15.0693Z"
							fill="#00212D"
							stroke="#00212D"
							stroke-width="0.37371"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M57.737 8.26602C57.0208 8.26602 56.3715 8.11207 55.7892 7.80418C55.2136 7.48959 54.7584 7.05787 54.4238 6.50902C54.0958 5.95347 53.9318 5.32765 53.9318 4.63154C53.9318 3.93544 54.0958 3.31296 54.4238 2.76411C54.7584 2.20856 55.2136 1.77684 55.7892 1.46895C56.3715 1.15436 57.0241 0.99707 57.747 0.99707C58.3561 0.99707 58.9049 1.10416 59.3936 1.31835C59.8889 1.53254 60.3038 1.84043 60.6385 2.24203L59.5944 3.20587C59.1191 2.65701 58.5301 2.38259 57.8273 2.38259C57.3923 2.38259 57.004 2.47964 56.6627 2.67375C56.3213 2.86116 56.0536 3.12555 55.8595 3.46691C55.6721 3.80827 55.5784 4.19648 55.5784 4.63154C55.5784 5.06661 55.6721 5.45482 55.8595 5.79618C56.0536 6.13754 56.3213 6.40527 56.6627 6.59938C57.004 6.78679 57.3923 6.8805 57.8273 6.8805C58.5301 6.8805 59.1191 6.60273 59.5944 6.04718L60.6385 7.01102C60.3038 7.41931 59.8889 7.73055 59.3936 7.94474C58.8982 8.15893 58.3461 8.26602 57.737 8.26602Z"
							fill="#00212D"
						/>
						<path
							d="M112.675 57.7099C113.103 57.8371 113.431 58.0446 113.659 58.3324C113.886 58.6202 114 58.975 114 59.3966C114 60.0191 113.762 60.5044 113.287 60.8524C112.819 61.2005 112.146 61.3745 111.269 61.3745H107.805V54.3465H111.078C111.895 54.3465 112.531 54.5038 112.986 54.8184C113.441 55.133 113.669 55.5814 113.669 56.1638C113.669 56.5118 113.582 56.8197 113.408 57.0874C113.234 57.3485 112.989 57.556 112.675 57.7099ZM109.422 57.2581H110.938C111.293 57.2581 111.56 57.1878 111.741 57.0473C111.922 56.9 112.012 56.6858 112.012 56.4047C112.012 56.1303 111.918 55.9195 111.731 55.7722C111.55 55.625 111.286 55.5513 110.938 55.5513H109.422V57.2581ZM111.209 60.1697C111.972 60.1697 112.353 59.8685 112.353 59.2661C112.353 58.6838 111.972 58.3926 111.209 58.3926H109.422V60.1697H111.209Z"
							fill="#00212D"
						/>
						<path
							d="M58.9489 107.889C59.6517 107.889 60.2842 108.046 60.8465 108.361C61.4154 108.675 61.8605 109.11 62.1818 109.666C62.5031 110.215 62.6637 110.834 62.6637 111.523C62.6637 112.213 62.5031 112.835 62.1818 113.391C61.8605 113.939 61.4154 114.371 60.8465 114.686C60.2842 115 59.6517 115.158 58.9489 115.158C58.3198 115.158 57.7441 115.034 57.222 114.786C56.7 114.532 56.2682 114.18 55.9269 113.732C55.5922 113.277 55.378 112.758 55.2843 112.176H54.3607V115.037H52.7442V108.009H54.3607V110.77H55.3044C55.4115 110.208 55.6324 109.709 55.9671 109.274C56.3084 108.832 56.7368 108.491 57.2522 108.25C57.7676 108.009 58.3331 107.889 58.9489 107.889ZM58.9489 113.772C59.3371 113.772 59.6885 113.678 60.0031 113.491C60.3177 113.304 60.5654 113.039 60.7461 112.698C60.9268 112.356 61.0172 111.965 61.0172 111.523C61.0172 111.081 60.9268 110.69 60.7461 110.348C60.5654 110.007 60.3177 109.743 60.0031 109.555C59.6885 109.368 59.3371 109.274 58.9489 109.274C58.5607 109.274 58.2093 109.368 57.8947 109.555C57.5801 109.743 57.3325 110.007 57.1518 110.348C56.971 110.69 56.8807 111.081 56.8807 111.523C56.8807 111.965 56.971 112.356 57.1518 112.698C57.3325 113.039 57.5801 113.304 57.8947 113.491C58.2093 113.678 58.5607 113.772 58.9489 113.772Z"
							fill="#00212D"
						/>
						<path
							d="M5.08498 57.7099C5.49327 57.8505 5.8112 58.0714 6.03877 58.3726C6.27304 58.6671 6.39017 59.0118 6.39017 59.4067C6.39017 59.8351 6.24961 60.2065 5.96849 60.5211C5.68737 60.8357 5.30586 61.0767 4.82394 61.244C4.34871 61.4113 3.82663 61.495 3.2577 61.495C2.77578 61.495 2.29386 61.4348 1.81194 61.3143C1.33671 61.1938 0.884916 61.0097 0.456543 60.7621L0.958542 59.5974C1.26644 59.7849 1.60445 59.9288 1.97258 60.0292C2.34741 60.1229 2.71219 60.1697 3.06694 60.1697C3.54886 60.1697 3.94711 60.0827 4.2617 59.9087C4.58298 59.7347 4.74362 59.4903 4.74362 59.1758C4.74362 58.9147 4.63318 58.7173 4.4123 58.5834C4.19811 58.4495 3.9036 58.3826 3.52878 58.3826H1.81194V57.1577H3.4083C3.73627 57.1577 3.99062 57.0908 4.17134 56.9569C4.35875 56.8231 4.45246 56.639 4.45246 56.4047C4.45246 56.1303 4.31859 55.9161 4.05086 55.7622C3.78982 55.6082 3.4518 55.5312 3.03682 55.5312C2.72893 55.5312 2.41099 55.5748 2.08302 55.6618C1.75505 55.7421 1.44381 55.8659 1.1493 56.0332L0.657343 54.7682C1.4003 54.3867 2.2035 54.1959 3.06694 54.1959C3.61579 54.1959 4.12114 54.2762 4.58298 54.4369C5.04482 54.5975 5.41295 54.8318 5.68737 55.1397C5.9618 55.4476 6.09901 55.8057 6.09901 56.214C6.09901 56.5486 6.00865 56.8465 5.82793 57.1075C5.64721 57.3686 5.39956 57.5694 5.08498 57.7099Z"
							fill="#00212D"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M50.8702 3.47715C25.5296 6.27861 5.409 26.3994 2.60791 51.7401H4.76566C7.54711 27.5848 26.7149 8.41673 50.8702 5.6349V3.47715ZM63.0192 5.6348V3.47705C88.3602 6.27815 108.481 26.3992 111.282 51.7401H109.125C106.343 27.5845 87.1749 8.41627 63.0192 5.6348ZM109.125 63.8892C106.426 87.3252 88.3017 106.066 65.1636 109.702V111.872C89.4879 108.204 108.56 88.5107 111.282 63.8892H109.125ZM4.76575 63.8892H2.608C5.38303 88.991 25.1525 108.971 50.1559 112.068V109.906C26.3381 106.833 7.52004 87.8056 4.76575 63.8892Z"
							fill="#00212D"
						/>
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import store from "../../store";

	import sectionSvg from "./sectionSvg";
	import sectionOneScheme from "./sectionOneScheme";
	import sectionTwoScheme from "./sectionTwoScheme";
	import sectionThreeScheme from "./sectionThreeScheme";

	import { getApartmentsOnTheFloor } from "../../api/academ";

	export default {
		name: "SectionPopup",
		store,
		components: {
			sectionSvg,

			sectionOneScheme,
			sectionTwoScheme,
			sectionThreeScheme,
		},
		props: {
			section: Number,
		},
		data() {
			return {
				fullscreen: false,
				sectionCustom: this.section,
				apartmentsInSection: [],
			};
		},
		computed: {
			rooms: () => {
				return store.getters.APARTMENT_TYPE;
			},
			apartmentsOnFloor: () => {
				return store.getters.APARTMENTS_ON_FLOOR;
			},
		},
		methods: {
			//* открытие и закрытие этой модалки
			closePopup() {
				const popup = document.querySelector(".popup");
				popup.classList.remove("fullscreen");
				this.fullscreen = false;
				document.querySelector("body").classList.remove("locked");
				this.$emit("closeDialog");
			},
			openPopup() {
				this.$emit("showDialog");
			},

			//*функция перехода модалки в полноэкранный режим
			fullscreenPopup(choice) {
				const popup = document.querySelector(".popup");

				switch (choice) {
					case 1: {
						popup.classList.add("fullscreen");
						this.fullscreen = true;
						break;
					}
					case 2: {
						popup.classList.remove("fullscreen");
						this.fullscreen = false;
						break;
					}
				}
			},

			//* выбор секции
			async selectSection(variation) {
				await getApartmentsOnTheFloor(4);
				switch (variation) {
					case 1: {
						this.sectionCustom = 1;
						let apartments = [];
						store.getters.APARTMENTS_ON_FLOOR.forEach(
							(apartment) => {
								if (apartment.section === 1) {
									apartments.push(apartment);
								}
							}
						);
						this.apartmentsInSection = apartments;

						this.paintCompass("west");
						break;
					}
					case 2: {
						this.sectionCustom = 2;
						let apartments = [];
						store.getters.APARTMENTS_ON_FLOOR.forEach(
							(apartment) => {
								if (apartment.section === 2) {
									apartments.push(apartment);
								}
							}
						);
						this.apartmentsInSection = apartments;

						this.paintCompass("north");
						break;
					}
					case 3: {
						this.sectionCustom = 3;
						let apartments = [];
						store.getters.APARTMENTS_ON_FLOOR.forEach(
							(apartment) => {
								if (apartment.section === 3) {
									apartments.push(apartment);
								}
							}
						);
						this.apartmentsInSection = apartments;

						this.paintCompass("east");
						break;
					}
				}
			},

			//*покраска секции при наведении
			paintSections(variation) {
				switch (variation) {
					case 1: {
						const section =
							document.querySelector(".popup__section1");
						const svgs = section.querySelectorAll(
							".popup__section1-apartment"
						);
						svgs.forEach((svg) => {
							svg.classList.add("colored");
						});
						break;
					}
					case 2: {
						const section =
							document.querySelector(".popup__section2");
						const svgs = section.querySelectorAll(
							".popup__section2-apartment"
						);
						svgs.forEach((svg) => {
							svg.classList.add("colored");
						});
						break;
					}
					case 3: {
						const section =
							document.querySelector(".popup__section3");
						const svgs = section.querySelectorAll(
							".popup__section3-apartment"
						);
						svgs.forEach((svg) => {
							svg.classList.add("colored");
						});
						break;
					}
					default: {
						const section1 =
							document.querySelector(".popup__section1");
						const svgs1 = section1.querySelectorAll(
							".popup__section1-apartment"
						);
						svgs1.forEach((svg) => {
							svg.classList.remove("colored");
						});

						const section2 =
							document.querySelector(".popup__section2");
						const svgs2 = section2.querySelectorAll(
							".popup__section2-apartment"
						);
						svgs2.forEach((svg) => {
							svg.classList.remove("colored");
						});

						const section3 =
							document.querySelector(".popup__section3");
						const svgs3 = section3.querySelectorAll(
							".popup__section3-apartment"
						);
						svgs3.forEach((svg) => {
							svg.classList.remove("colored");
						});
						break;
					}
				}
			},

			//*декортивная перекраска иконки компаса
			paintCompass(variation) {
				const compass = document.querySelector(".compass");
				const compassSides = compass.querySelectorAll(".compass__side");
				compassSides.forEach((compassSide) => {
					compassSide.setAttribute("fill", "#CFD0D0");
				});

				switch (variation) {
					case "north": {
						const north = compass.querySelector(".compass__north");
						north.setAttribute("fill", "var(--gold)");
						break;
					}
					case "west": {
						const west = compass.querySelector(".compass__west");
						west.setAttribute("fill", "var(--gold)");
						break;
					}
					case "east": {
						const east = compass.querySelector(".compass__east");
						east.setAttribute("fill", "var(--gold)");
						break;
					}
					case "south": {
						const south = compass.querySelector(".compass__south");
						south.setAttribute("fill", "var(--gold)");
						break;
					}
				}
			},

			//* открытие модалки квартиры
			openApartment(floor, section, ordinalNumber) {
				this.$emit(
					"showDialogApartment",
					this.apartmentsInSection[ordinalNumber].id,
					section
				);
			},
		},

		mounted() {
			this.selectSection(this.section);
		},
	};
</script>

<style lang="scss" scoped>
	.popup {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
		height: calc(100vh - 10rem);
		width: 90vw;
		background-color: var(--white);
		transition: all 0.2s ease;
		overflow: hidden;
		&.fullscreen {
			width: 100vw;
			max-width: inherit;
			height: 100vh;
			transition: all 0.2s ease;
			.popup {
				&__header {
					display: none;
				}
				&__body {
					height: 100%;
				}
				&__button {
				}
				&__image {
					height: 96vh;
					width: 98%;
				}
			}
		}
		&__header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1rem;
			background-color: var(--dark-green);
			max-height: 5rem;
		}
		&__title {
			color: #d5bfa8;
			font-size: 1.8rem;
			font-weight: 900;
		}
		&__body {
			display: grid;
			grid-template-columns: max-content 1fr max-content;
			position: relative;
			padding: 2rem;
			height: calc(100vh - 17rem);
			img {
				width: 100%;
			}
		}
		&__col {
			&:nth-child(2) {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				max-width: 40rem;
			}
			&:last-child {
				display: flex;
				align-items: flex-end;
				padding-right: 3rem;
				svg {
					transform: rotate(-45deg);
				}
			}
		}
		&__description {
			p {
				font-size: 3.6rem;
				color: var(--gold);
				font-weight: 900;
				+ p {
					margin-top: 3rem;
				}
			}
		}
		&__full-scheme {
			display: grid;
			grid-template-columns: 15rem 23rem;
			width: 38rem;
		}
		&__section {
			display: flex;
			align-items: center;
			justify-content: center;
			overflow: hidden;
			&1 {
				cursor: pointer;
				position: relative;
				top: -0.5rem;
				left: 0.1rem;

				svg {
					width: 11.3rem;
				}
			}
			&2 {
				cursor: pointer;
				position: relative;
				left: 0.1rem;

				svg {
					width: 15rem;
				}
			}
			&3 {
				cursor: pointer;

				svg {
					width: 23rem;
				}
			}
		}
		&__button {
			cursor: pointer;
			position: absolute;
			bottom: 2rem;
			right: 1rem;
			width: 3rem;
			height: 3rem;
		}
		&__close {
			cursor: pointer;
			width: 3rem;
			height: 3rem;
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
