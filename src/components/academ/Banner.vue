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
			</div>
			<div class="banner__right">
				<Btn :text="'Записаться на просмотр'" class="dark"></Btn>
				<div class="banner__right-content">
					<h1>ЖК</h1>
					<h2>АКАДЕМИЧЕСКИЙ</h2>
					<span>КЛУБНЫЙ</span>
					<span>DОМ</span>
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
		padding-top: 6.8rem;
		padding-bottom: 6rem;
		background: url("/img/academ/banner-bg.png") right bottom / 130rem 80rem
				no-repeat,
			var(--dark-green);
		&__container {
			position: relative;
			display: grid;
			grid-template-columns: 33rem 1fr;
		}
		&__left {
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
					color: var(--white);
				}
				p + p {
					margin-top: 2rem;
				}
			}
		}
		&__right {
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			&-content {
				text-align: center;
				color: var(--white);
				h1 {
					position: relative;
					left: 6rem;
					margin-top: 27.5rem;
					color: var(--gold);
					font-weight: 100;
					font-size: 31rem;
					letter-spacing: 15rem;
				}
				h2 {
					font-size: 6.4rem;
					font-weight: 300;
					margin: 0 0 10rem 0;
					letter-spacing: 1rem;
				}
				svg {
					margin-bottom: 3rem;
				}
				span {
					display: block;
					font-size: 2.4rem;
					font-weight: 300;
					transform: translateX(-2rem);
				}
				span + span {
					margin-top: 1rem;
				}
			}
		}
		.button {
			position: absolute;
			top: 0;
			right: 2.5rem;
		}
	}
</style>
