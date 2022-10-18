<template>
	<section class="infrastructure" id="infrastructure" v-once>
		<div class="infrastructure__container center">
			<figure>
				<img
					src="/img/academ/infrastructure-img.png"
					alt=""
					class="infrastructure__img"
				/>
			</figure>
			<div class="infrastructure__content">
				<div class="infrastructure__left">
					<h2>
						погулять
						<br />
						до вечера?
					</h2>
					<h2>не проблема!!</h2>
				</div>
				<div class="infrastructure__middle">
					<p>
						На первом и втором этаже кружки и секции для детей и подростков.
					</p>

					<p>В шаговой доступности бассейн и театр юного зрителя.</p>

					<p>
						Можно гулять без опаски: за порядком проследят видеокамеры
						наблюдения и консьерж-служба.
					</p>

					<p>Посторонних не будет, только свои.</p>
				</div>
				<div class="infrastructure__right">
					<img src="/img/academ/circle-img2.png" alt="" />
					<img src="/img/icons/academ/semicircle.svg" alt="" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'TheInfrastructure',
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.infrastructure {
		display: block;
		padding-bottom: 3rem;
		&__img {
			margin-bottom: 4rem;
		}
		&__content {
			padding: 0 7rem;
			display: flex;
			align-items: center;
			gap: 3rem;
			justify-content: space-between;
		}
		&__left {
			h2 {
				text-transform: uppercase;
				font-size: 4.8rem;
				font-weight: 300;
				color: $gold;
				line-height: 6rem;
			}
			h2 + h2 {
				margin-top: 8rem;
			}
		}
		&__middle {
			max-width: 25.7rem;
			color: $white;
			font-size: 1.8rem;
			line-height: 2.2rem;
			p + p {
				margin-top: 2rem;
			}
		}
		&__right {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 23rem;
			height: 23rem;

			img {
				&:first-child {
					width: 20rem;
					height: 20rem;
					z-index: 2;
				}
				&:last-child {
					position: absolute;
					z-index: 1;
					transform: rotate(-90deg) translateX(-6rem);
				}
			}
		}
		&__left,
		&__right {
			width: 41rem;
		}
	}
	@media (max-width: 1023px) {
		.infrastructure {
			display: none;
		}
	}
</style>
