<template>
	<section class="office" id="office">
		<div class="office__left">
			<div class="office__feature">
				<p class="office__feature-word">ቢሮ</p>
				<p class="office__feature-description">
					А вот так пишется «ОФИС»<br />
					на ахмарском языке.
				</p>
			</div>
		</div>
		<div class="office__right">
			<div class="office__right-container">
				<div class="office__right-top">
					<div class="office__right-top-left">
						<h2 class="office__title">офис</h2>
						<h3>
							Правило 3D <br />
							или Делай раз-два-три
						</h3>
						<p class="office__step1">
							<span>1. «Делай раз». Найди своё место.</span>
							Удалённое рабочее место в последнее время —
							общемировой тренд. Но «удалёнка» при внимательном
							рассмотрении может стать «приближёнкой». Но как?<br />
							Как гласит британская поговорка: «Сэкономленный
							пенни – заработанный пенни».
						</p>
					</div>
					<div class="office__right-top-right">
						<img
							src="/img/academ/office-img.png"
							class="office__img"
							alt=""
						/>
					</div>
				</div>
				<div class="office__right-middle">
					<p class="office__step2">
						<span> 2. «Делай два». Просчитай свои плюсы.</span>
						3DOM предлагает не только жильё, но и офис в здании.
						<br />
						В чём плюсы? Если офис находится в другом районе, то в
						среднем на то, чтобы добраться до него, тратится около
						45 минут утром и 45 минут вечером, чтобы выбраться
						обратно. <br />
						Полтора часа в день. А в неделю набегает полноценные 7,5
						часов, практически рабочий день. За год набегает пару
						месяцев.
					</p>
				</div>
				<div class="office__step3-mobile">
					<p>
						<span> 3. «Делай три». Арендуй свои метры.</span>
						Хотите получить дополнительно пару месяцев в году?
						Достаточно арендовать офис в клубном доме
						«АКАДЕМИЧЕСКИЙ». Кстати, количество уменьшенных
						километров и стоимость съэкономленного бензина можете
						посчитать сами.
					</p>
				</div>
				<v-button
					:text="'Выбрать офис'"
					:type="'button'"
					class="gold"
					@click="openPopup"
				></v-button>
				<div class="office__right-bottom">
					<div class="office__schemes">
						<div @click="openImage(1)">
							<img src="/img/academ/office1.svg" alt="" />
							<p>1-й этаж</p>
						</div>
						<div @click="openImage(2)">
							<img src="/img/academ/office2.svg" alt="" />
							<p>
								2-й и 3-й<br />
								этажи
							</p>
						</div>
					</div>
					<div class="office__step3">
						<p>
							<span> 3. «Делай три». Арендуй свои метры.</span>
							Хотите получить дополнительно пару месяцев в году?
							Достаточно арендовать офис в клубном доме
							«АКАДЕМИЧЕСКИЙ». Кстати, количество уменьшенных
							километров и стоимость съэкономленного бензина
							можете посчитать сами.
						</p>
					</div>
				</div>
			</div>
			<img
				src="/img/academ/office-img.png"
				alt=""
				class="office__mobile-img"
			/>
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
	import vButton from "@/components/academ/v-button";
	import vPopup from "@/components/academ/v-popup";
	import academInput from "@/components/academ/academ-input";
	import vCheckbox from "@/components/academ/v-checkbox";

	export default {
		name: "TheOffice",
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
			openImage(imageNumber) {
				const popup = document.querySelector(".popup");
				const popupImage = popup.querySelector(".popup__image");
				const body = document.querySelector("body");

				body.classList.add("locked");
				popup.classList.add("open");

				switch (imageNumber) {
					case 1: {
						popupImage.setAttribute(
							"src",
							"/img/academ/office1.svg"
						);
						break;
					}
					case 2: {
						popupImage.setAttribute(
							"src",
							"/img/academ/office2.svg"
						);
						break;
					}
					default: {
						break;
					}
				}
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

	.office {
		padding: 0;
		display: grid;
		grid-template-columns: 34% 66%;
		&__left {
			position: relative;
			background: url("/public/img/academ/office-bg1.png") center / cover
				no-repeat;
		}
		&__feature {
			position: absolute;
			bottom: 3rem;
			right: 2.5rem;
			display: flex;
			align-items: center;
			gap: 2rem;
			&-word {
				font-size: 5rem;
				font-weight: 100;
			}
			&-description {
				color: $dark-green;
				font-size: 1.3rem;
				font-weight: 600;
			}
		}
		&__title {
			text-transform: uppercase;
			font-weight: 300;
			font-size: 4.8rem;
			color: $gold;
			margin-bottom: 2.5rem;
		}
		&__right {
			background: url("/public/img/academ/office-bg2.png") center / cover
				no-repeat;
			display: flex;

			color: $white;
			font-size: 1.8rem;
			&-container {
				height: fit-content;
				width: 100%;
			}
			&-top {
				display: flex;
				gap: 3rem;
				margin-bottom: 4.5rem;
				padding: 0 6rem;
				&-left {
					padding-top: 5rem;
					h3 {
						font-size: 3.6rem;
						font-weight: 300;
						margin-bottom: 1.5rem;
					}
				}
				&-right {
					img {
						width: 27rem;
					}
				}
			}
			&-middle {
				display: flex;
				width: 100%;
				justify-content: center;
				margin-bottom: 1rem;
			}
			&-bottom {
				margin-top: 1rem;
				display: flex;
				gap: 5rem;
				padding-bottom: 2rem;
			}
		}
		&__step {
			&1,
			&2,
			&3 {
				span {
					font-weight: 600;
					display: block;
				}
			}
			&1 {
				width: 47rem;
			}
			&2 {
				width: 53rem;
			}
			&3 {
				width: 42rem;
				&-mobile {
					display: none;
				}
			}
		}

		.academ-button {
			min-width: 18rem;
			width: min-content;
		}
		&__schemes {
			display: flex;
			gap: 1rem;

			p {
				font-weight: 600;
				text-align: center;
				color: $light-gold;
			}
			div {
				cursor: pointer;
			}
			img {
				cursor: pointer;
				height: 16.3rem;
				width: 100%;

				margin-bottom: 1rem;
			}
		}
		&__mobile-img {
			display: none;
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

	@media (min-width: 1024px) {
		.office {
			&__schemes {
				width: fit-content;

				div {
					max-width: 22rem;
				}
				img {
					max-width: 22rem;
				}
			}
		}
	}

	@media (max-width: 1250px) {
		.office {
			&__right {
				&-top {
					&-right {
						display: none;
					}
				}
			}
		}
	}

	@media (max-width: 1023px) {
		.office {
			display: block;
			&__left {
				height: 48rem;
			}
			&__feature {
				display: none;
				&-word {
				}
				&-description {
				}
			}
			&__title {
				font-size: 8.1rem;
			}
			&__right {
				flex-direction: column;
				background: none;
				&-container {
					padding: 0 1.5rem 1.5rem 1.5rem;
				}
				&-top {
					padding: 0;
					&-left {
						padding-top: 1.5rem;
						h3 {
							font-size: 6.4rem;
						}
					}
					&-right {
					}
				}
				&-middle {
					display: block;
					margin-bottom: 3rem;
				}
				&-bottom {
				}
			}
			&__step {
				&1,
				&2,
				&3 {
					span {
						font-size: 3.2rem;
					}

					font-size: 2.8rem;
					width: auto;
				}
				&1 {
				}
				&2 {
				}
				&3 {
					display: none;
					&-mobile {
						display: block;
						margin-bottom: 4rem;
						span {
							display: block;
							font-size: 3.2rem;
							font-weight: 600;
						}
						font-size: 2.8rem;
					}
				}
			}
			.gold {
				margin-bottom: 5rem;
				font-size: 3.6rem;
				height: 10rem;
				width: 42rem;
				border-radius: 0 5rem 5rem 0;
			}
			&__schemes {
				flex-direction: column;
				// width: 100%;
				p {
					display: none;
				}
				div {
				}
				img {
					height: inherit;
				}
			}
			&__mobile-img {
				display: block;
				object-fit: cover;
				max-height: 30rem;
			}
		}
	}

	@media (max-width: 767px) {
		.office {
			&__title {
				font-size: 4.8rem;
			}
			h3 {
				font-size: 3.6rem;
			}
			span {
				font-size: 1.8rem;
				margin-bottom: 2rem;
			}
			p {
				font-size: 1.6rem;
			}
			&__schemes {
				width: 100%;
			}
			.gold {
				width: 18rem;
				height: 4.5rem;
				font-size: 1.5rem;
			}
		}
	}

	@media (max-width: 540px) {
		.office {
			&__right {
				&-container {
					padding: 2rem 1rem;
				}
			}
			&__step {
				&1,
				&2,
				&3 {
					font-size: 1.6rem;
					width: inherit;
					span {
						font-size: 1.8rem;
					}
				}

				&3 {
					&-mobile {
						width: inherit;
					}
				}
			}
			.gold {
				width: 18rem;
			}

			&__schemes {
				p {
					font-size: 1.5rem;
				}
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
