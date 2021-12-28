<template>
	<section class="banner" id="banner">
		<div class="banner__container center">
			<div class="banner__left">
				<div class="banner__order animate__animated animate__fadeInLeft wow">
					<h2>«Зачётная квартира»</h2>
					<p>
						Вам предоставляется уникальная возможность приобрести
						квартиру по программе «Trade-In». Поменяем ваше жилье на
						квартиру в новостройке.
					</p>
					<btn text="Оформить заявку" class="white"></btn>
					<div class="banner__order-decoration">
						<img
							src="img/icon/general/transcripts-list.svg"
							alt=""
						/>
					</div>
				</div>
				<div class="banner__watch  animate__animated animate__fadeInLeft wow">
					<h2>На всё готовенькое!</h2>
					<div class="banner__watch-left">
						<img src="img/general/banner-img2.png" alt="" />
					</div>
					<div class="banner__watch-right">
						<p>
							Квартиры
							<br />
							для молодых семей, со встроенной мебелью,
							<br />
							санузлом
							<br />
							и кухней
						</p>
						<btn text="Смотреть" class="blue"></btn>
					</div>
				</div>
			</div>
			<div class="banner__right">
				<img src="img/general/banner-img1.svg" alt="" class="animate__animated animate__fadeInRight wow"/>
				<div class="banner__right-content animate__animated animate__fadeInRight wow">
					<h2>Легко отделались!</h2>
					<div class="banner__right-text">
						<span>Предчистовая отделка</span>
						<span>Стандарт «Под ключ»</span>
						<span>Комфорт «Под ключ»</span>
					</div>
					<div class="btn">
						<btn text="Заказать отделку" class="white"></btn>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import Btn from "./Btn.vue";

	export default {
		name: "Banner",
		components: {
			Btn,
		},
	};
</script>

<style lang="scss" scoped>
	.banner {
		display: flex;
		align-items: center;
		background-color: var(--light-gray);
		&__container {
			display: flex;
			height: fit-content;
			gap: 2.4rem;
		}
		&__left {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		&__order {
			position: relative;
			padding: 3rem 6rem 3rem 3rem;
			background-color: var(--blue);
			border-radius: 2rem;
			color: var(--white);
			margin-bottom: 4.2rem;
			h2 {
				font-size: var(--text-42);
				font-weight: 600;
				margin-bottom: 2.5rem;
			}
			p {
				font-size: var(--text-15);
				font-weight: 600;
				margin-bottom: 5.8rem;
				line-height: 1.8rem;
			}
			&-decoration {
				position: absolute;
				bottom: 0;
				right: 6.2rem;
				border-radius: 2rem 2rem 0 0;
				padding: 2.2rem 2.6rem 1.7rem 2.6rem;
				background-color: var(--light-blue);
			}
		}
		&__watch {
			display: grid;
			grid-template-columns: 45rem 17.5rem;
			grid-column-gap: 3rem;
			h2 {
				grid-area: 1/1/1/3;
				font-size: var(--text-42);
				font-weight: 600;
				color: var(--dark);
				margin-bottom: 1.5rem;
			}
			&-left {
				grid-area: 2/1;
			}
			&-right {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				grid-area: 2/2;
				p {
					font-size: var(--text-16);
					font-weight: 600;
					color: var(--dark);
					line-height: 1.95rem;
				}
				a {
					width: 16.5rem;
				}
			}
		}
		&__right {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			img {
				margin-bottom: 2rem;
			}
			&-content {
				max-width: 46rem;
				align-self: center;
				display: grid;
				grid-column-gap: 7rem;
				h2 {
					grid-area: 1/1/1/3;
					font-size: var(--text-45);
					font-weight: 600;
					color: var(--dark-blue);
					margin-bottom: 3.6rem;
				}
				.btn {
					display: flex;
					justify-content: center;
					align-items: flex-end;
				}
			}
			&-text {
				span {
					display: block;
					width: max-content;
					font-size: var(--text-16);
					line-height: 2rem;
					color: var(--gray);
					font-weight: 600;
				}
				span + span {
					margin-top: 0.5rem;
				}
			}
		}
	}
</style>
