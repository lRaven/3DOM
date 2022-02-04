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
				<academ-button
					:text="'Выбрать квартиру'"
					:type="'button'"
					class="dark"
				></academ-button>
			</div>
			<div class="banner__right">
				<div class="banner__right-content">
					<div>
						<h3>КЛУБНЫЙ ДОМ</h3>
						<h2>АКАДЕМИЧЕСКИЙ</h2>
						<span>
							14 этажей • 74 машиноместа • 218 квартир • 1000
							кв.м. жилья
						</span>
					</div>
					<img src="img/academ/banner-bg.png" alt="" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import AcademButton from "./academ-button.vue";

	export default {
		name: "Banner",
		components: {
			AcademButton,
		},
	};
</script>

<style lang="scss" scoped>
	.banner {
		padding-top: 2rem;
		padding-bottom: 2rem;
		background-color: var(--dark-green);
		&__container {
			border: 1px solid #fff;
			position: relative;
			display: grid;
			grid-template-columns: 33rem 1fr;
			align-items: center;
			grid-gap: 20rem;
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
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				gap: 2rem;
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
					color: var(--gold);
					font-size: var(--text-18);
					font-weight: 300;
				}
			}
		}
		.academ-button {
			position: absolute;
			left: 0;
			bottom: 15rem;
		}
	}
</style>
