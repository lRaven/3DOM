<template>
	<header class="header" id="header">
		<div class="header__container center">
			<div class="header__left">
				<a href="#">
					<div class="header__logo">
						<svg
							width="150"
							height="35"
							viewBox="0 0 150 35"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M39.0135 10.7582V34.235H48.9674C60.4602 34.1393 66.1825 25.8197 66.1825 17.5C66.1825 9.18033 60.4602 0.860656 48.9674 0.765026H39.0135V6.12022H44.7839L39.0135 10.7582ZM48.727 6.12022C63.9705 6.12022 63.9224 28.832 48.727 28.832H44.7839V6.12022H48.727Z"
								fill="#D5BFA8"
							/>
							<path
								d="M88.2405 0C83.1914 0 78.1903 1.96038 74.8723 5.88115L78.8636 10.0888C81.1236 7.21995 84.6821 5.78552 88.2405 5.78552C94.059 5.78552 99.9256 9.65847 99.9256 17.5C99.9256 25.3415 94.059 29.2145 88.2405 29.2145C82.3739 29.2145 76.5073 25.3415 76.5073 17.5C76.5073 14.7746 77.2286 12.5273 78.4308 10.7582H71.9871C71.2658 12.7186 70.8811 14.9658 70.8811 17.5C70.8811 29.1667 79.5368 35 88.2405 35C96.8961 35 105.552 29.1667 105.552 17.5C105.552 5.83333 96.8961 0 88.2405 0Z"
								fill="#D5BFA8"
							/>
							<path
								d="M110.569 34.235H116.243L119.225 15.2527L129.323 34.235H131.246L141.345 15.1093L144.326 34.235H150L144.951 0.765026H143.028L130.285 24.8156L117.542 0.765026H111.531L117.542 12.097H113.935L110.569 34.235Z"
								fill="#D5BFA8"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M0 34.0278H25.4961C30.6261 34.0278 34.7848 29.8927 34.7848 24.7917C34.7848 21.8279 33.3808 19.19 31.198 17.5C33.3808 15.81 34.7848 13.1722 34.7848 10.2083C34.7848 5.10737 30.6261 0.972222 25.4961 0.972222H19.1935L16.4354 5.72222H25.4961C28.0283 5.72222 30.0348 7.75615 30.0348 10.2083C30.0348 12.6605 28.0283 14.6944 25.4961 14.6944H11.2258L7.9677 20.3056H25.4961C28.0283 20.3056 30.0348 22.3395 30.0348 24.7917C30.0348 27.2439 28.0283 29.2778 25.4961 29.2778H2.75805L0 34.0278Z"
								fill="#00212D"
							/>
						</svg>
					</div>
				</a>
				<nav class="nav">
					<a href="#" class="link">Главная</a>
					<a class="link" @click="scroll('#apartments')">Квартиры</a>
					<a class="link" @click="scroll('#office')">Офисы</a>
					<a class="link" @click="scroll('#parking')">Парковки</a>
					<a class="link" @click="scroll('#pantry')">Кладовки</a>
					<a href="#" class="link">Ипотека</a>
					<a href="#" class="link">Отделка</a>
					<a href="#" class="link">Trade-in</a>
				</nav>
			</div>
			<div class="header__right">
				<svg
					width="46"
					height="30"
					viewBox="0 0 46 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8.71875 18.1562C10.5625 17.4062 12.3281 17.0312 14.0156 17.0312C15.7031 17.0312 17.4531 17.4062 19.2656 18.1562C21.1094 18.875 22.0312 19.8281 22.0312 21.0156V23.0312H6V21.0156C6 19.8281 6.90625 18.875 8.71875 18.1562ZM16.8281 13.8438C16.0469 14.625 15.1094 15.0156 14.0156 15.0156C12.9219 15.0156 11.9844 14.625 11.2031 13.8438C10.4219 13.0625 10.0312 12.125 10.0312 11.0312C10.0312 9.9375 10.4219 9 11.2031 8.21875C11.9844 7.40625 12.9219 7 14.0156 7C15.1094 7 16.0469 7.40625 16.8281 8.21875C17.6094 9 18 9.9375 18 11.0312C18 12.125 17.6094 13.0625 16.8281 13.8438Z"
						fill="#00212D"
					/>
					<line
						x1="27"
						y1="10"
						x2="39"
						y2="10"
						stroke="#00212D"
						stroke-width="2"
						stroke-linecap="round"
					/>
					<line
						x1="27"
						y1="15"
						x2="39"
						y2="15"
						stroke="#00212D"
						stroke-width="2"
						stroke-linecap="round"
					/>
					<line
						x1="27"
						y1="20"
						x2="39"
						y2="20"
						stroke="#00212D"
						stroke-width="2"
						stroke-linecap="round"
					/>
					<rect
						x="1"
						y="1"
						width="44"
						height="28"
						rx="4"
						stroke="#00212D"
						stroke-width="2"
					/>
				</svg>
				<a href="#" class="link"> Войти в 3D-клуб </a>
				<span>/</span>
				<a href="#" class="link"> Регистрация </a>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: "Header",
		methods: {
			scroll(id) {
				const section = document.querySelector(id).offsetTop;
				const header = document.querySelector("#header").clientHeight;

				window.scrollTo(0, section - header, { behavior: "smooth" });
			},
		},
		mounted() {},
	};
</script>

<style lang="scss" scoped>
	.header {
		position: fixed;
		height: 6rem;
		width: 100%;
		background-color: var(--gold);
		user-select: none;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		z-index: 3;
		&__container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 100%;
		}
		&__left {
			display: flex;
			align-items: center;
			gap: 3rem;
		}

		&__right {
			display: flex;
			align-items: center;
			gap: 1.4rem;
			span {
				font-size: 1.6rem;
				font-weight: 600;
			}
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
	@media (max-width: 768px) {
	}

	@media (max-width: 1024px) {
	}
</style>
