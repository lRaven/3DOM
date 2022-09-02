<template>
	<section class="the-kolotok">
		<div class="the-kolotok__container center">
			<div class="the-kolotok__column">
				<h2 data-aos="fade-up" class="the-kolotok__title">
					Всё для ремонта
				</h2>
				<h3 data-aos="fade-up" class="the-kolotok__subtitle">
					Удобный интернет-магазин<br />
					от застройщика
				</h3>
				<div class="the-kolotok__tags">
					<span
						data-aos="fade-up"
						data-aos-delay="250"
						class="the-kolotok__tag"
					>
						Дизайн интерьера
					</span>
					<span
						data-aos="fade-up"
						data-aos-delay="500"
						class="the-kolotok__tag"
					>
						Черновые работы
					</span>
					<span
						data-aos="fade-up"
						data-aos-delay="750"
						class="the-kolotok__tag"
					>
						Материалы для ремонта
					</span>
					<span
						data-aos="fade-up"
						data-aos-delay="1000"
						class="the-kolotok__tag"
					>
						Ремонт под ключ
					</span>
				</div>
				<div class="the-kolotok__link" @click="openPopup">
					<img
						data-aos="fade-right"
						data-aos-delay="1200"
						src="/img/icon/general/arrow-long.svg"
						alt=""
					/>
					<p data-aos="fade-up" data-aos-delay="1200">
						Перейти в магазин
					</p>
				</div>
			</div>
			<div class="the-kolotok__column">
				<img
					src="/img/icon/kolotok/logo.svg"
					alt=""
					class="the-kolotok__logo"
				/>
				<div class="the-kolotok__logo-text">
					<p class="the-kolotok__logo-title">КОЛОТОК</p>
					<p class="the-kolotok__logo-subtitle">
						магазин для тех, кто строит
					</p>
				</div>
			</div>
		</div>
		<div class="the-kolotok__tags-mobile">
			<p>Всё для ремонта</p>
			<span
				data-aos="fade-up"
				data-aos-delay="250"
				class="the-kolotok__tag"
			>
				Ремонт под ключ
			</span>
			<span
				data-aos="fade-up"
				data-aos-delay="500"
				class="the-kolotok__tag"
			>
				Материалы для ремонта
			</span>
			<span
				data-aos="fade-up"
				data-aos-delay="750"
				class="the-kolotok__tag"
			>
				Дизайн интерьера
			</span>
			<span
				data-aos="fade-up"
				data-aos-delay="1000"
				class="the-kolotok__tag"
			>
				Черновые работы
			</span>
		</div>
		<transition>
			<popup-kolotok
				v-if="isPopupVisible"
				@closePopup="closePopup"
			></popup-kolotok>
		</transition>
	</section>
</template>

<script>
	import PopupKolotok from "@/components/general/PopupKolotok";

	export default {
		name: "TheKolotok",
		components: { PopupKolotok },
		data: () => ({ isPopupVisible: false }),
		methods: {
			openPopup() {
				this.isPopupVisible = true;
			},
			closePopup() {
				this.isPopupVisible = false;
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-kolotok {
		&__container {
			background: url(/public/img/general/kolotok-bg.png) center / cover
				no-repeat;
			display: flex;
			justify-content: space-between;
			padding: 6rem;
			box-shadow: $shadow;
			color: $white;
			border-radius: 3rem;
			overflow: hidden;
			height: 70rem;
		}
		&__column {
			&:last-child {
				height: fit-content;
				display: flex;
				align-items: baseline;
				gap: 1rem;
			}
		}
		&__title {
			font-size: 5rem;
			font-weight: 600;
			margin-bottom: 2rem;
		}
		&__subtitle {
			font-size: 2.5rem;
			font-weight: 500;
			margin-bottom: 7rem;
			line-height: 3rem;
		}
		&__logo {
			height: min-content;
			&-title {
				font-size: 5.2rem;
				font-weight: 900;
			}
			&-subtitle {
				font-size: 1.4rem;
				font-weight: 700;
			}
		}
		&__tags {
			display: flex;
			flex-wrap: wrap;
			gap: 1.5rem;
			width: 47rem;
			margin-bottom: 8rem;
			&-mobile {
				display: none;
			}
		}
		&__tag {
			background-color: $white;
			color: $dark;
			font-size: 1.6rem;
			font-weight: 600;
			border-radius: 2.5rem;
			padding: 1.2rem 2.7rem;
		}
		&__link {
			cursor: pointer;
			display: flex;
			align-items: center;
			gap: 1.2rem;
			padding: 1rem 0;
			p {
				font-size: 1.8rem;
				font-weight: 600;
				color: $white;
			}
		}
	}

	@media (max-width: 1050px) {
		.the-kolotok {
			&__container {
				flex-direction: column-reverse;
			}
		}
	}

	@media (max-width: 540px) {
		.the-kolotok {
			padding: 1rem;
			padding-bottom: 0;
			&__container {
				height: 50rem;
				justify-content: flex-end;
				gap: 1.5rem;
				padding: 1rem 1.5rem;
				background-position: right center;
			}
			&__column {
				&:last-child {
					flex-direction: column;
				}
			}
			&__title {
				display: none;
			}
			&__subtitle {
				max-width: 25rem;
			}
			&__logo {
				&-title {
				}
				&-subtitle {
				}
				&-text {
					order: -1;
				}
			}
			&__tags {
				display: none;
				&-mobile {
					background-color: #79726a;
					border-radius: 3rem;
					display: flex;
					flex-direction: column;
					padding: 1rem 1.5rem;
					height: max-content;
					transform: translateY(-2rem);
					p {
						text-align: center;
						font-size: 3rem;
						color: $white;
						font-weight: 600;
						margin-bottom: 1rem;
					}
					.the-kolotok__tag {
						display: block;
						width: max-content;
						background-color: #efba1c;
						box-shadow: $shadow;
						&:nth-child(3) {
							align-self: flex-end;
							transform: translateX(-2rem);
						}
						&:nth-child(4) {
							transform: translateX(5rem);
						}
						&:last-child {
							align-self: flex-end;
						}

						+ .the-kolotok__tag {
							margin-top: 1rem;
						}
					}
				}
			}
			&__tag {
				&:nth-child(2) {
				}
				&:nth-child(3) {
				}
				&:nth-child(4) {
				}
			}
			&__link {
				display: none;
				p {
				}
			}
		}
	}

	@media (max-width: 425px) {
		.the-kolotok {
			padding-bottom: 0;
			&__container {
				max-height: 37rem;
			}
			&__logo {
				&-title {
					font-size: 3.4rem;
				}
				&-subtitle {
					font-size: 0.9rem;
				}
			}
			&__title {
			}
			&__subtitle {
				font-size: 1.4rem;
				line-height: 1.7rem;
				max-width: 14rem;
			}
			&__tags {
				&-mobile {
					.the-kolotok__tag {
						&:nth-child(4) {
							transform: translateX(2rem);
						}
					}
					p {
						font-size: 2.4rem;
					}
				}
			}
			&__tag {
				font-size: 1rem;
				padding: 0.7rem 1.7rem;
			}
		}
	}
</style>
