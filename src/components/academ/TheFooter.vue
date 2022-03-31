<template>
	<footer class="footer" id="footer">
		<div class="footer__container center">
			<div class="footer__social">
				<span>Соцсети</span>

				<a href="https://wa.me/79616670163" target="_blank">
					<img src="img/icon/academ/wa.svg" alt="" />
				</a>

				<a
					href="https://instagram.com/3dom_vlg?utm_medium=copy_link"
					target="_blank"
				>
					<img src="img/icon/academ/ig.svg" alt="" />
				</a>

				<a
					href="https://t.me/tridom_vlg"
					target="_blank"
					class="footer__tg"
				>
					<img src="img/icon/academ/tg.svg" alt="" />
				</a>
			</div>
			<nav class="nav">
				<router-link to="/" class="link">Главная</router-link>
				<a class="link" @click="scroll('#apartments')">Квартиры</a>
				<a class="link" @click="scroll('#office')">Офисы</a>
				<a class="link" @click="scroll('#parking')">Парковки</a>
				<a class="link" @click="openPopup">Ипотека</a>
				<router-link to="/trade-in" class="link">Trade-in</router-link>
				<a class="link">Ремонт</a>
			</nav>
		</div>
		<div class="footer__disclaimer">
			Любая информация, представленная на данном сайте, носит
			исключительно информационный характер и ни при каких условиях не
			является публичной офертой, определяемой положениями статьи 437 ГК
			РФ. Информация ПАО «ООООООО»,
			<br />
			раскрываемая в соответствии с Положением о раскрытии информации
			эмитентами эмиссионных ценных бумаг (утв. Банком России 30.12.2014 N
			454-П), размещена на странице Центра раскрытия корпоративной
			информации Интерфакс в сети Интернет
		</div>
	</footer>
</template>

<script>
	export default {
		name: "Footer",
		methods: {
			scroll(id) {
				const section = document.querySelector(id).offsetTop;
				const header = document.querySelector("#header").clientHeight;

				window.scrollTo(0, section - header, { behavior: "smooth" });
			},

			openPopup() {
				const popup = document.querySelector(".popup-full");
				const body = document.querySelector("body");

				body.classList.add("locked");
				popup.classList.add("open");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.footer {
		user-select: none;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 11rem;
		background-color: var(--gold);
		&__container {
			display: flex;
			justify-self: center;
			gap: 14rem;
			width: auto;
			margin-bottom: 1rem;
		}
		&__social {
			display: flex;
			align-items: center;
			a + a {
				margin-left: 2rem;
			}
			img {
				height: 3rem;
			}
		}
		span {
			font-size: 1.6rem;
			font-weight: 600;
			margin-right: 2rem;
		}
		&__disclaimer {
			text-align: center;
			line-height: 1.2rem;
		}
	}
	.nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3rem;
	}
	.link {
		cursor: pointer;
		position: relative;
		user-select: none;
		font-size: 1.6rem;
		color: var(--dark-green);
		width: max-content;
		font-weight: 600;
		&::after {
			content: "";
			position: absolute;
			left: 0;
			bottom: -0.3rem;
			width: 0;
			height: 0.2rem;
			background-color: var(--dark-green);
			transition: all 0.3s ease;
		}
		&:hover {
			&::after {
				width: 100%;
				transition: all 0.3s ease;
			}
		}
	}

	@media (max-width: 1050px) {
		.footer {
			&__container {
				gap: 5rem;
			}
		}
	}

	@media (max-width: 1023px) {
		.footer {
			height: 25rem;
			&__container {
				gap: 1.5rem;
				width: 100%;
			}
			&__social {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				grid-row-gap: 2rem;
				width: 100%;
				span {
					text-align: center;
					font-size: 3.6em;
					font-weight: 600;
					display: block;
					grid-column: 1/4;
					margin-right: 0;
				}
				a {
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 2rem 0;
					+ a {
						margin-left: 0;
					}
					img {
						width: 9.5rem;
						height: 9.5rem;
					}
					&:nth-child(-n + 3) {
						position: relative;
						&::after {
							content: "";
							position: absolute;
							right: 0;
							top: 0;
							height: 100%;
							width: 0.1rem;
							background-color: var(--dark-green);
						}
					}
				}
			}
			&__tg {
				// display: none !important;
			}
			&__disclaimer {
				display: none;
			}
			.nav {
				display: none;
			}
		}
	}

	@media (max-width: 787px) {
		.footer {
			height: 11rem;
			a {
				padding: 0;
				img {
					width: 4.2rem;
					height: 4.2rem;
				}
			}
			span {
				font-size: 1.6rem;
			}
		}
	}
</style>
