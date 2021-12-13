<template>
	<footer class="footer center" id="footer">
		<div class="footer__top">
			<div class="footer__socials">
				<p>Соцсети</p>
				<a href="#" target="_blank" class="footer__social">
					<img src="img/icon/general/fb.svg" alt="" />
				</a>
				<a href="#" target="_blank" class="footer__social">
					<img src="img/icon/general/wa.svg" alt="" />
				</a>
				<a href="#" target="_blank" class="footer__social">
					<img src="img/icon/general/tg.svg" alt="" />
				</a>
				<a href="#" target="_blank" class="footer__social">
					<img src="img/icon/general/ig.svg" alt="" />
				</a>
				<a href="#" target="_blank" class="footer__social">
					<img src="img/icon/general/vk.svg" alt="" />
				</a>
			</div>
			<ul class="footer__links">
				<li class="footer__link">
					<a href="#" target="_blank">О компании</a>
				</li>
				<li class="footer__link">
					<a href="#" target="_blank">Новости</a>
				</li>
				<li class="footer__link">
					<a href="#" target="_blank">Финансы</a>
				</li>
				<li class="footer__link">
					<a href="#" target="_blank">Trade-in</a>
				</li>
				<li class="footer__link">
					<a href="#" target="_blank">Реквизиты</a>
				</li>
				<li class="footer__link">
					<a href="#" target="_blank">Вакансии</a>
				</li>
				<li class="footer__link">
					<a href="#" target="_blank">Офисы продаж</a>
				</li>
			</ul>
		</div>
		<div class="footer__bottom">
			<p>
				Любая информация, представленная на данном сайте, носит
				исключительно информационный характер и ни при каких условиях не
				является публичной офертой, определяемой положениями статьи 437
				ГК РФ. Информация ПАО «ООООООО»,<br />
				раскрываемая в соответствии с Положением о раскрытии информации
				эмитентами эмиссионных ценных бумаг (утв. Банком России
				30.12.2014 N 454-П), размещена на странице Центра раскрытия
				корпоративной информации Интерфакс в сети Интернет
			</p>
		</div>
	</footer>
</template>

<script>
	export default {
		name: "Footer",
	};
</script>

<style lang="scss" scoped>
	.footer {
		height: 8rem;
		overflow: hidden;

		&__top {
			display: flex;
			justify-content: center;
			gap: 5rem;
			font-size: var(--text-16);
			color: var(--dark);
			height: 4rem;
			p {
				font-weight: 600;
				margin-right: 1rem;
			}
		}
		&__socials {
			display: flex;
			align-items: center;
			max-height: 4rem;
			a {
				height: 100%;
				img {
					height: 100%;
				}
			}
		}
		&__links {
			display: flex;
			align-items: center;
			gap: 3rem;
		}
		&__link {
			a {
				position: relative;
				display: inline-block;
				color: var(--dark);
				height: 100%;
				padding: 1.2rem 0;
				&::after {
					content: "";
					position: absolute;
					bottom: 0.7rem;
					left: 0;
					width: 0;
					height: 0.2rem;
					background-color: var(--dark);
					transition: all 0.2s ease;
				}
				&:hover {
					&::after {
						width: 100%;
						transition: all 0.3s ease;
					}
				}
			}
		}
		&__bottom {
			padding: 0.8rem 0;
			text-align: center;
			height: 4rem;
			color: var(--middle-gray);
		}
	}
</style>
