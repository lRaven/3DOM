<template>
	<section class="parking" id="parking">
		<div class="parking__container center">
			<figure class="parking__img">
				<img src="/img/academ/advantage-img2.png" alt="" />
			</figure>
			<div class="parking__content">
				<h2>
					и о погоде… <br />
					погода у нас <br />
					хорошая
				</h2>
				<p>
					Вам больше не придётся счищать с крыши вашего автомобиля
					свежевыпавший снежок или усердно протирать лобовое стекло от
					следов ночного дождя и пыльной бури.
				</p>

				<p>
					Вы просто спускаетесь на лифте в подземный паркинг, заводите
					мотор и спокойно едете по своим делам.
				</p>
				<p>
					А вернувшись вечером домой, открываете багажник, достаёте
					покупки и поднимаетесь на лифте на свой этаж.
				</p>

				<p>
					Лифт, кстати, грузовой, в нём при необходимости поместится и
					шкаф для кухни, и громоздкая ванна.
				</p>
				<v-button
					:text="'Забронировать место'"
					:type="'button'"
					class="gold"
					@click="openPopup"
				></v-button>
			</div>
		</div>
		<div class="parking__footer">
			<div class="parking__container center">
				<div @click="openImage()" class="parking__footer-bottom">
					<img src="/img/academ/parking.svg" alt="" />
				</div>
			</div>
		</div>
		<transition>
			<v-popup v-if="isPopupVisible" @closePopup="closePopup">
				<p class="academ-popup__description">
					Оставьте контактные данные,<br />
					и мы свяжемся с вами в ближайшее время.
				</p>
				<academ-input
					placeholder="Имя"
					type="text"
					v-model="name"
				></academ-input>
				<academ-input
					placeholder="Телефон"
					type="tel"
					v-model="tel"
				></academ-input>
				<v-checkbox
					text="Даю согласие на обработку персональных данных"
					v-model="privacyPolicy"
				></v-checkbox>
				<v-button text="Заказать консультацию" class="gold"></v-button>
			</v-popup>
		</transition>
	</section>
</template>

<script>
	import vButton from "@/components/academ/v-button";
	import vPopup from "@/components/academ/v-popup";
	import academInput from "@/components/academ/academ-input";
	import vCheckbox from "@/components/academ/v-checkbox";

	export default {
		name: "TheParking",
		components: {
			vButton,
			vPopup,
			academInput,
			vCheckbox,
		},
		data() {
			return {
				isPopupVisible: false,

				name: "",
				tel: "",
				privacyPolicy: false,
			};
		},
		methods: {
			openImage() {
				const popup = document.querySelector(".popup");
				const popupImage = popup.querySelector(".popup__image");
				popupImage.setAttribute("src", "/img/academ/parking.svg");
				document.querySelector("body").classList.add("locked");
				popup.classList.add("open");
			},

			closePopup() {
				this.isPopupVisible = false;
				document.body.classList.remove("locked");
			},
			openPopup() {
				this.isPopupVisible = true;
				document.body.classList.add("locked");
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.parking {
		display: block;
		padding: 0;
		&__container {
			display: grid;
			grid-gap: 4rem;
			grid-template-columns: 1fr 53rem;
		}
		&__img {
			max-height: 63rem;
			img {
				transform: translateX(-25%);
				width: 130%;
				height: 100%;
				object-fit: cover;
			}
		}
		&__content {
			padding: 2rem 0;
			h2 {
				text-transform: uppercase;
				font-size: 4.8rem;
				color: $gold;
				font-weight: 300;
				margin-bottom: 5rem;
			}
			p {
				color: $white;
				font-size: 1.8rem;
				line-height: 2.2rem;
				+ p {
					margin-top: 3rem;
				}
				+ .academ-button {
					margin-top: 2rem;
				}
			}
		}
		&__footer {
			min-height: 34rem;
			background: url(/public/img/academ/reserve-seat.png) center / cover
				no-repeat;
			.parking__container {
				div {
					margin-top: 1.5rem;
					display: flex;
					align-items: center;
					gap: 10rem;
				}
			}
			&-bottom {
				width: 100%;
				grid-area: 1/2/1/3;
				cursor: pointer;
				img {
					width: 40rem;
				}
			}
		}
	}

	.academ-popup {
		.academ-button {
			margin-top: 6.5rem !important;
			padding: 1.5rem 6rem !important;
			width: max-content !important;
			font-size: 1.8rem !important;
			height: 4.5rem !important;
		}
	}

	@media (max-width: 1023px) {
		.parking {
			.gold {
				font-size: 3.2rem;
				height: 10rem;
				width: 54rem;
				border-radius: 0 5rem 5rem 0;
			}
			&__container {
				display: block;
			}
			&__img {
				max-height: inherit;
				img {
					width: 100%;
					transform: translate(0);
				}
			}
			&__content {
				padding: 2rem 1.5rem 5rem 1.5rem;
				h2 {
					font-size: 8.1rem;
				}
				p {
					font-size: 3.6rem;
					line-height: inherit;
					+ p {
					}
					+ .academ-button {
					}
				}
			}
			&__footer {
				background: none;
				padding-bottom: 3rem;
				padding-left: 1.5rem;
				padding-right: 1.5rem;
				.parking__container {
					div {
						margin: 0;
					}
				}
				&-bottom {
					overflow-x: auto;
					-ms-overflow-style: none;
					scrollbar-width: none;

					&::-webkit-scrollbar {
						display: none;
					}
					div {
						img {
							height: 41rem;
							width: auto;
						}
					}
				}
			}
		}
	}

	@media (max-width: 767px) {
		.parking {
			.gold {
				width: 24rem;
				height: 4.5rem;
				font-size: 1.5rem;
			}
			&__container {
			}
			&__img {
				img {
				}
			}
			&__content {
				h2 {
					font-size: 3.6em;
				}
				p {
					font-size: 1.5rem;
					+ p {
					}
					+ .academ-button {
					}
				}
			}
			&__footer {
				.parking__container {
					div {
						margin: 0;
					}
				}
				&-bottom {
					div {
						img {
						}
					}
				}
			}
		}
	}

	@media (max-width: 540px) {
		.parking {
			&__content {
				padding: 2rem 1rem;
				h2 {
					font-size: 3.6rem;
					line-height: 4.4rem;
				}
				p {
					font-size: 1.5rem;
				}
			}
			&__footer {
				padding: 0 1rem;
			}
		}
		.academ-popup {
			.academ-button {
				width: auto !important;
				padding: 1.5rem !important;
			}
		}
	}
</style>
