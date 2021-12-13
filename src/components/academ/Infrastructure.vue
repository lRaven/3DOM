<template>
	<section class="infrastructure">
		<div class="infrastructure__container center">
			<figure>
				<img
					src="img/academ/infrastructure-img.png"
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
						На первом и втором этаже кружки и секции для детей и
						подростков.
					</p>

					<p>В шаговой доступности бассейн и театр юного зрителя.</p>

					<p>
						Можно гулять без опаски: за порядком проследят
						видеокамеры наблюдения и консьерж-служба.
					</p>

					<p>Посторонних не будет, только свои.</p>
				</div>
				<div class="infrastructure__right">
					<img src="img/academ/circle-img.png" alt="" />
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
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "Infrastructure",
	};
</script>

<style lang="scss" scoped>
	.infrastructure {
		display: block;
		padding-bottom: 3rem;
		&__img {
			margin-bottom: 4rem;
		}
		&__content {
			display: flex;
			align-items: center;
			justify-content: space-around;
		}
		&__left {
			h2 {
				text-transform: uppercase;
				font-size: 4.8rem;
				font-weight: 300;
				color: var(--gold);
				line-height: 6rem;
			}
			h2 + h2 {
				margin-top: 8rem;
			}
		}
		&__middle {
			max-width: 25.7rem;
			color: var(--white);
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
			svg {
				position: absolute;
				z-index: 1;
				transform: rotate(-90deg) translateX(-6rem);
			}
			img {
				width: 20rem;
				height: 20rem;
				z-index: 2;
			}
		}
		&__left,
		&__right {
			width: 41rem;
		}
	}
</style>
