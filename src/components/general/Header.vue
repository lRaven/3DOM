<template>
	<header class="header" id="header">
		<div class="header__container center">
			<div class="header__left">
				<a href="#" class="header__logo">
					<img src="img/icon/general/logo.svg" alt="logo" />
				</a>
				<nav class="header__nav">
					<a href="#" class="header__link"> Ремонты </a>
					<a class="header__link" @click="goto('#catalog')">
						Квартиры
					</a>
					<a class="header__link" @click="goto('#mortgage')">
						Ипотека
					</a>
					<a href="#" class="header__link">Trade-in</a>
					<a href="#" class="header__link">Услуги</a>
					<a href="#" class="header__link">Офисы продаж</a>
				</nav>
			</div>
			<div class="header__right">
				<a href="#">
					<img src="img/icon/general/call-blue.svg" alt="call" />
				</a>
				<div class="header__tel">
					<span>8 (8442) 607 600</span>
					<span>8 (8442) 600 551</span>
				</div>
				<a href="#" class="header__link">3D-клуб</a>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: "Header",
		methods: {
			goto(id) {
				const section = document.querySelector(id).offsetTop;
				const header = document.querySelector("#header").clientHeight;

				window.scrollTo(0, section - header, { behavior: "smooth" });
			},
		},
		mounted() {
			this.goto("#header");
		},
	};
</script>

<style lang="scss" scoped>
	.header {
		user-select: none;
		background-color: var(--white);
		z-index: 3;
		position: fixed;
		width: 100%;
		height: 6rem;
		box-shadow: 0 0 1.5rem 0 rgb(130, 130, 130);
		font-weight: 600;
		font-size: var(--text-16);
		* {
			color: var(--dark);
		}

		&__container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 100%;
			padding: 0 1.5rem;
			margin: 0 auto;
		}
		&__left {
			display: flex;
			align-items: center;
			gap: 10rem;
		}
		&__logo {
			display: block;
			height: 3.5rem;

			img {
				height: 100%;
			}
		}
		&__nav {
			display: flex;
			gap: 3rem;
		}
		&__link {
			cursor: pointer;
			position: relative;
			&::after {
				content: "";
				position: absolute;
				bottom: -0.3rem;
				left: 0;
				width: 0;
				height: 0.2rem;
				background-color: var(--dark);
				transition: width 0.3s ease-in-out;
			}
			&:hover {
				&::after {
					width: 100%;
					transition: width 0.3s ease-in-out;
				}
			}
		}

		&__right {
			display: flex;
			align-items: center;
			gap: 3rem;
		}
		&__tel {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			+ .header__link {
				margin-left: 3rem;
			}
		}
	}
</style>
