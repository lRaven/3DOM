<template>
	<div class="card">
		<div class="card__top">
			<img :src="src" alt="" />
		</div>
		<div class="card__body">
			<div class="card__title">
				<div>
					<h4 class="animate__animated animate__fadeInUp wow">{{ subtitle }}</h4>
					<h3 class="animate__animated animate__fadeInUp wow">{{ title }}</h3>
				</div>
				<div class="card__title-middle animate__animated animate__fadeInUp wow">
					<div class="card__address">ул. Калинина, 54, Волгоград</div>
					<div class="card__min">
						<span>от</span>
						<span>{{ min }}</span>
					</div>
				</div>
				<div class="card__title-right animate__animated animate__fadeInUp wow">
					<img src="img/icon/trade-in/periscope.svg" alt="" />
				</div>
			</div>
			<div class="card__prices">
				<div class="card__price card__studios animate__animated animate__fadeInUp wow">
					<p>Студии</p>
					<div class="card__min">
						<span>от</span>
						<span>{{ studios }}</span>
					</div>
				</div>
				<div class="card__price card__single animate__animated animate__fadeInUp wow">
					<p>1-комн. квартиры</p>
					<div class="card__min">
						<span>от</span>
						<span>{{ singleRoom }}</span>
					</div>
				</div>
				<div class="card__price card__two animate__animated animate__fadeInUp wow">
					<p>2-комн. квартиры</p>
					<div class="card__min">
						<span>от</span>
						<span>{{ twoRoom }}</span>
					</div>
				</div>
				<div class="card__price card__three animate__animated animate__fadeInUp wow">
					<p>3-комн. квартиры</p>
					<div class="card__min">
						<span>от</span>
						<span>{{ threeRoom }}</span>
					</div>
				</div>
			</div>
			<div class="card__bottom animate__animated animate__fadeInUp wow">
				<div class="card__date">
					<p>Заселение до 30.08.2022</p>
				</div>
				<div class="card__finishing">
					<p>с отделкой</p>
				</div>
				<div class="card__more">
					<a>Подробнее</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CardWide",
		props: {
			src: String,
			title: String,
			subtitle: String,
			min: String,
			studios: String,
			singleRoom: String,
			twoRoom: String,
			threeRoom: String,
		},
	};
</script>

<style lang="scss" scoped>
	.card {
		border-radius: 3rem;

		&__top {
			border-radius: 3rem;
			overflow: hidden;
			max-height: 62rem;
			box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
			img {
				width: 100%;
				object-fit: cover;
			}
		}
		&__address {
			font-size: var(--text-18);
			color: #979797;
		}
		&__body {
			background-color: var(--white);
			position: relative;
			top: -5rem;
			border-radius: 3rem;
			z-index: 1;
			box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
		}
		&__title {
			display: grid;
			grid-template-columns: 1fr 30rem 1fr;
			justify-content: space-between;
			align-items: flex-end;
			gap: 1.5rem;
			color: #52555a;
			border-bottom: 0.1rem solid #c4c4c4;
			padding: 3rem 6rem;
			&-middle {
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: flex-end;
			}
			&-right {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				height: 100%;
			}
			h3 {
				font-size: var(--text-36);
				font-weight: 600;
				text-transform: uppercase;
			}
			h4 {
				font-size: var(--text-24);
				font-weight: 600;
				margin-bottom: 1rem;
				margin-top: 0.2rem;
			}
			div:nth-child(2) {
				display: flex;
				flex-direction: column;

				img {
					height: 4rem;
					margin-bottom: 1.2rem;
				}
			}
		}
		&__min {
			display: flex;
			flex-direction: row !important;
			justify-content: flex-end;
			span {
				font-size: var(--text-18);
				font-weight: 600;
				+ span {
					margin-left: 0.5rem;
				}
			}
			span:nth-child(1) {
				color: #979797;
			}
			span:nth-child(2) {
				color: var(--blue);
			}
		}
		&__prices {
			padding: 4rem 6rem;
		}
		&__price {
			display: grid;
			grid-template-columns: 1fr 30rem 1fr;
			justify-content: space-between;
			+ .card__price {
				margin-top: 2rem;
			}
			p {
				font-size: var(--text-18);
				color: var(--gray);
			}
		}
		&__three {
			border-bottom: 0.1rem solid #c4c4c4;
			padding-bottom: 4rem;
		}
		&__bottom {
			display: grid;
			grid-template-columns: 1fr 30rem 1fr;
			grid-gap: 2rem;
			padding: 0 6rem 4rem 6rem;
			justify-content: space-between;
			color: #979797;
			font-size: var(--text-18);
		}
		&__finishing,
		&__more {
			text-align: right;
		}
		&__more a {
			cursor: pointer;
			position: relative;
			color: var(--blue);
			font-weight: 600;
			&::after {
				content: "";
				position: absolute;
				left: 0;
				bottom: -0.2rem;
				width: 0;
				height: 0.2rem;
				background-color: var(--blue);
				transition: width 0.2s ease;
			}
			&:hover {
				&::after {
					width: 100%;
					transition: width 0.3s ease;
				}
			}
		}
	}
</style>
