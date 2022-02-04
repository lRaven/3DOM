<template>
	<section class="statistics">
		<div class="statistics__container center">
			<div class="statistics__stats">
				<div class="statistics__title">
					<span>ДОМ</span>
					<span>КАК</span>
					<span>ДОМ</span>
				</div>
				<div class="stats">
					<h2>10</h2>
					<p>ЖИЛЫХ</p>
					<p>ЭТАЖЕЙ</p>
				</div>
				<div class="stats">
					<span>*</span>
					<h2>100</h2>
					<p>МАШИНО-</p>
					<p>МЕСТ</p>
				</div>
				<div class="stats">
					<h2>1000</h2>
					<p>КВАДРАТНЫХ</p>
					<p>МЕТРОВ</p>
				</div>
			</div>
			<figure class="statistics__img">
				<img src="img/academ/stats-img.png" alt="" />
			</figure>
		</div>
	</section>
</template>

<script>
	export default {
		name: "Statistics",
	};
</script>

<style lang="scss" scoped>
	.statistics {
		color: var(--gold);
		height: calc(100vh - 6rem);
		overflow: hidden;
		&__container {
			display: grid;
			grid-template-columns: 34rem 1fr;
			grid-gap: 2rem;
		}
		&__stats {
			.stats {
				position: relative;
				display: flex;
				flex-direction: column;
				align-items: center;
				span {
					position: absolute;
					top: 2rem;
					right: 4.7rem;
					font-size: 18px;
					font-weight: 600;
				}
				h2 {
					font-size: 14.4rem;
					font-weight: 300;
				}
				p {
					font-weight: 600;
					font-size: 1.8rem;
					line-height: 2.2rem;
				}
			}
			.stats + .stats {
				margin-top: 2rem;
			}
		}
		&__title {
			display: flex;
			flex-direction: column;
			font-size: 4.8rem;
			font-weight: 300;
			margin: 4rem 0 8rem 0;
		}
		&__img {
			img {
				width: 100%;
			}
		}
	}
</style>
