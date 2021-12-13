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
					<img src="/img/academ/circle-img.png" alt="" />
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
					<h2>АКАДЕМИЧЕСКИЙ</h2>
					<svg
						width="1025"
						height="228"
						viewBox="0 0 1025 228"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 0.968826H85.8999C109.455 0.968826 130.201 5.81302 148.137 15.5014C166.289 25.1898 180.336 38.6459 190.276 55.8697C200.433 73.0935 205.512 92.4703 205.512 114C205.512 135.53 200.433 154.907 190.276 172.13C180.336 189.354 166.289 202.81 148.137 212.499C130.201 222.187 109.455 227.031 85.8999 227.031H0V0.968826ZM85.2516 220.895C107.942 220.895 127.823 216.374 144.895 207.331C162.183 198.074 175.474 185.371 184.766 169.224C194.274 152.861 199.029 134.453 199.029 114C199.029 93.5467 194.274 75.2465 184.766 59.0991C175.474 42.7365 162.183 30.034 144.895 20.9915C127.823 11.7337 107.942 7.1048 85.2516 7.1048H6.48302V220.895H85.2516Z"
							fill="#CC9964"
						/>
						<path
							d="M491.468 228C469.642 228 449.869 223.048 432.149 213.145C414.428 203.241 400.49 189.677 390.333 172.453C380.176 155.014 375.098 135.53 375.098 114C375.098 92.4703 380.176 73.0935 390.333 55.8697C400.49 38.4306 414.428 24.7592 432.149 14.8555C449.869 4.95184 469.642 0 491.468 0C513.294 0 533.068 4.95184 550.788 14.8555C568.508 24.7592 582.446 38.4306 592.603 55.8697C602.76 73.0935 607.838 92.4703 607.838 114C607.838 135.53 602.76 155.014 592.603 172.453C582.446 189.677 568.508 203.241 550.788 213.145C533.068 223.048 513.294 228 491.468 228ZM491.468 221.864C511.998 221.864 530.582 217.235 547.222 207.977C564.078 198.504 577.26 185.586 586.768 169.224C596.493 152.646 601.355 134.238 601.355 114C601.355 93.762 596.493 75.4618 586.768 59.0991C577.26 42.5212 564.078 29.6034 547.222 20.3456C530.582 10.8725 511.998 6.13598 491.468 6.13598C470.939 6.13598 452.246 10.8725 435.39 20.3456C418.75 29.6034 405.568 42.5212 395.844 59.0991C386.335 75.4618 381.581 93.762 381.581 114C381.581 134.238 386.335 152.646 395.844 169.224C405.568 185.586 418.75 198.504 435.39 207.977C452.246 217.235 470.939 221.864 491.468 221.864Z"
							fill="#CC9964"
						/>
						<path
							d="M1025 0.968826V227.031H1018.52V14.8555L915.113 195.06H911.223L807.819 15.5014V227.031H801.336V0.968826H806.847L913.168 186.34L1019.49 0.968826H1025Z"
							fill="#CC9964"
						/>
					</svg>
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
		background: url(/img/academ/banner-bg.png) right bottom / 130rem 80rem
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
				h2 {
					font-size: 4.8rem;
					font-weight: 300;
					margin: 27.5rem 0 12.8rem 0;
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
