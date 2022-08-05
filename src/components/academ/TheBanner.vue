<template>
	<section class="banner" id="banner">
		<div class="banner__container center">
			<div class="banner__left">
				<div class="banner__left-img">
					<svg
						width="208"
						height="232"
						viewBox="0 0 208 232"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M94 0.999999H1V231H94C131.5 230.5 206.5 206.6 206.5 115C206.5 23.4 131.5 0.833332 94 0.999999Z"
							stroke="#CC9964"
							stroke-width="2"
						/>
					</svg>
					<svg
						width="115"
						height="230"
						viewBox="0 0 115 230"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<mask id="path-1-inside-1_2328_21211" fill="white">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M115 0C51.4873 0 0 51.4873 0 115C0 178.513 51.4873 230 115 230V0Z"
							/>
						</mask>
						<path
							d="M115 0H117V-2H115V0ZM115 230V232H117V230H115ZM2 115C2 52.5918 52.5918 2 115 2V-2C50.3827 -2 -2 50.3827 -2 115H2ZM115 228C52.5918 228 2 177.408 2 115H-2C-2 179.617 50.3827 232 115 232V228ZM117 230V0H113V230H117Z"
							fill="#CC9964"
							mask="url(#path-1-inside-1_2328_21211)"
						/>
					</svg>
					<img src="img/academ/circle-img.png" alt="" />
				</div>
				<div class="banner__left-text">
					<p>Добро пожаловать!</p>
					<p>Дом как дом</p>
					<p>По дороге домой</p>
					<p>Подобрать квартиру</p>
					<p>Долго жить будете. И комфортно.</p>
					<p>До скорой встречи!</p>
				</div>
				<v-button
					:text="'Выбрать квартиру'"
					:type="'button'"
					class="dark"
					@click="scroll()"
				></v-button>
			</div>
			<div class="banner__right">
				<div class="banner__right-content">
					<h3>КЛУБНЫЙ ДОМ</h3>
					<h2>АКАДЕМИЧЕСКИЙ</h2>
					<span>
						14 этажей • 74 машиноместа • 218 квартир • 1000 кв.м.
						жилья
					</span>
					<img src="img/academ/banner-bg.png" alt="" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import vButton from "@/components/academ/v-button";
	import { scroll } from "@/js/scroll";

	export default {
		name: "TheBanner",
		components: {
			vButton,
		},
		methods: {
			scroll() {
				scroll("#apartments");
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.swiper-slide {
		background-color: #fff;
		padding: 5rem;
	}
	.banner {
		padding-top: 5rem;
		padding-bottom: 5rem;
		background-color: $dark-green;
		&__container {
			position: relative;
			display: grid;
			grid-template-columns: 33rem 1fr;
			align-items: center;
			justify-content: space-between;
		}
		&__left {
			position: relative;
			height: 100%;
			&-img {
				position: relative;
				margin-bottom: 4.6rem;
				img {
					display: block;
					position: absolute;
					top: 1.5rem;
					right: -10rem;
					width: 20rem;
					height: 20rem;
					border-radius: 50%;
					overflow: hidden;
				}
			}
			&-text {
				p {
					font-size: 1.8rem;
					color: $white;
				}
				p + p {
					margin-top: 2rem;
				}
			}
		}
		&__right {
			height: 100%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			&-content {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				gap: 2rem;
				text-align: center;
				color: $white;

				h2 {
					font-size: 7.7rem;
					font-weight: 300;
					margin: 0 0 3rem 0;
					letter-spacing: 1rem;
				}
				h3 {
					font-size: 3.3rem;
					margin-bottom: 2rem;
				}
				svg {
					margin-bottom: 3rem;
				}
				span {
					text-transform: uppercase;
					color: $gold;
					font-size: 1.8rem;
					font-weight: 300;
				}
			}
		}
		.academ-button {
			position: absolute;
			left: 0;
			bottom: 15rem;
			width: 19rem;
		}
	}
	* {
		transition: ease all 0.2s;
	}
	@media (max-width: 1360px) {
		.banner {
			&__container {
				display: block;
			}
			&__left {
				display: none;
			}
			&__right {
				justify-content: center;
				&-content {
					div {
					}

					h2 {
					}
					h3 {
					}
					svg {
					}
					span {
						order: 3;
					}
				}
			}
			.academ-button {
			}
		}
	}
	@media (max-width: 1023px) {
		.banner {
			&__container {
			}
			&__right {
				&-content {
					h2 {
						font-size: 6rem;
					}
					h3 {
						font-size: 2.5rem;
					}
					svg {
					}
					span {
						font-size: 3.7rem;
					}
				}
			}
			.academ-button {
			}
		}
	}

	@media (max-width: 767px) {
		.banner {
			min-height: inherit;
			&__container {
			}
			&__right {
				align-items: flex-start;
				&-content {
					width: 100%;
					h2 {
						font-size: 3rem;
					}
					h3 {
						font-size: 1.8rem;
					}
					img {
						width: 90%;
					}
					svg {
					}
					span {
					}
				}
			}
			.academ-button {
			}
		}
	}
	@media (max-width: 540px) {
		.banner {
			padding: 2rem 1rem;
			&__container {
			}

			&__right {
				&-content {
					h2 {
						font-size: 2.5rem;
						letter-spacing: 0.2rem;
					}
					h3 {
						font-size: 1rem;
					}
					svg {
					}
					span {
						position: relative;
						top: -10rem;
						font-size: 1.4rem;
						max-width: 25rem;
						line-height: 1.7rem;
					}
				}
			}
			.academ-button {
			}
		}
	}
</style>
