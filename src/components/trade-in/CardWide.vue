<template>
	<div class="card">
		<div class="card__top">
			<img :src="src" alt="" />
		</div>
		<div class="card__body">
			<div class="card__title">
				<div>
					<h4>{{ subtitle }}</h4>
					<h3>{{ title }}</h3>
				</div>
				<div>
					<img src="img/icon/trade-in/periscope.svg" alt="" />
					<span>от</span>
					<span>{{ min }}</span>
				</div>
			</div>
			<div class="card__prices"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Card",
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
		height: calc(100% - 5rem);
		&__top {
			border-radius: 3rem;
			overflow: hidden;
			box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
			img {
				width: 100%;
				object-fit: cover;
			}
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
			display: flex;
			justify-content: space-between;
			gap: 1.5rem;
			color: #52555a;
			border-bottom: 0.1rem solid #c4c4c4;
			padding: 3rem 6rem;
			h3 {
				font-size: var(--text-36);
				font-weight: 600;
				text-transform: uppercase;
			}
			h4 {
				font-size: var(--text-24);
				font-weight: 600;
			}
		}
		&__prices {
			padding: 4rem 6rem;
		}
	}
</style>
