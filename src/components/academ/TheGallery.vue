<template>
	<section class="gallery" id="gallery">
		<div class="gallery__container center">
			<div class="swiper" v-if="bodyWidth < 1024">
				<academ-swiper-full
					:gallery="gallery"
					:textColor="'color: var(--light-gold)'"
				></academ-swiper-full>
			</div>
			<div class="gallery__photos" v-else>
				<figure>
					<img src="img/academ/apartment-photo1.png" alt="" />
				</figure>
				<figure>
					<img src="img/academ/apartment-photo2.png" alt="" />
				</figure>
			</div>
			<p>уровень комфорта</p>
			<p class="gallery__mobile-text">определяет</p>

			<div class="gallery__footer">
				<v-button
					:text="`Заявка на отделку
					высшего уровня`"
					:type="'button'"
					class="dark"
					@click="openPopup"
				></v-button>
				<div>
					<p>определяет</p>
					<p>уровень жизни</p>
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
					:placeholder="'Имя'"
					type="text"
					v-model="name"
				></academ-input>
				<academ-input
					:placeholder="'Телефон'"
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
	import vButton from "./v-button.vue";
	import academSwiperFull from "./academ-swiper-full.vue";
	import academInput from "./academ-input.vue";
	import vCheckbox from "./v-checkbox.vue";
	import vPopup from "./v-popup.vue";

	export default {
		name: "Gallery",
		components: {
			vButton,
			academSwiperFull,
			vPopup,
			academInput,
			vCheckbox,
		},
		data() {
			return {
				bodyWidth: document.body.clientWidth,
				gallery: [
					{ id: 1, image: "img/academ/apartment-photo1.png" },
					{ id: 2, image: "img/academ/apartment-photo2.png" },
				],
				isPopupVisible: false,

				name: "",
				tel: "",
				privacyPolicy: false,
			};
		},
		methods: {
			checkPageWidth() {
				window.addEventListener("resize", () => {
					this.bodyWidth = document.body.clientWidth;
				});
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
		mounted() {
			this.checkPageWidth();
		},
	};
</script>

<style lang="scss" scoped>
	.gallery {
		padding-bottom: 5rem;
		padding-top: 2rem;
		&__container {
			width: 100%;
		}
		&__photos {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 3rem;
			margin-bottom: 4rem;
			height: 45rem;
			figure {
				max-height: 100%;
				img {
					object-fit: cover;
					height: 45rem;
					width: 100%;
				}
			}
		}
		&__footer {
			display: flex;
			align-items: flex-end;
			gap: 21rem;
			p {
				margin-top: 1rem;
			}
			&:nth-child(4) {
				color: var(--white);
			}
			.dark {
				text-align: left;
			}
		}
		&__mobile-text {
			display: none;
			color: var(--white);
		}
		p {
			text-transform: uppercase;
			font-size: 7.2rem;
			font-weight: 300;
			&:nth-child(2) {
				color: var(--gold);
			}
		}
	}

	.academ-popup {
		.academ-button {
			margin-top: 6.5rem;
			padding: 1.5rem 6rem;
			width: max-content;
		}
	}

	@media (max-width: 1023px) {
		.gallery {
			img {
				display: block;
			}
			&__container {
				display: flex;
				flex-direction: column;
				.swiper {
					width: 100%;
				}
				p:nth-child(2) {
					order: -1;
					margin-bottom: 1rem;
					font-size: 8.1rem;
				}
			}

			&__photos {
				figure {
					img {
					}
				}
			}
			&__footer {
				p {
					text-align: right;
				}
				&:nth-child(3) {
				}
				div {
					width: 100%;
					p:first-child {
						display: none;
					}
					p:last-child {
						text-align: right;
					}
				}
				.dark {
					display: none;
				}
			}
			&__mobile-text {
				display: block;
				order: -1;
				margin-bottom: 2rem;
			}
			p {
				// font-size: 8.1rem;
				&:nth-child(2) {
				}
			}
		}
	}

	@media (max-width: 767px) {
		.gallery {
			min-height: inherit;
			img {
			}
			&__container {
				p {
					font-size: 3.6em !important;
				}
				.swiper {
				}
				p:nth-child(2) {
				}
			}

			&__photos {
				figure {
					img {
					}
				}
			}
			&__footer {
				p {
				}
				&:nth-child(3) {
				}
				div {
					p:first-child {
					}
					p:last-child {
					}
				}
			}
			&__mobile-text {
			}
			p {
				&:nth-child(2) {
				}
			}
		}
	}

	@media (max-width: 540px) {
		.gallery {
			padding: 0;
			p,
			&__footer {
				padding: 0 1rem;
			}
		}
	}
</style>
