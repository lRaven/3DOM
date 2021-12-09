<template>
	<section class="mortgage center" id="mortgage">
		<div class="mortgage__header">
			<div class="mortgage__title">
				<h2>Встречайте: Ипотека — 4,2%</h2>
				<p>
					Как вы полагаете, оформить ипотеку просто или очень просто?
					Так вот, оформить — легко, а выплачивать — комфортно.
				</p>
				<h3>Предложение наше — выгода ваша</h3>
			</div>
			<img src="img/mortgage/mortgage-top.png" alt="" />
		</div>
		<div class="mortgage__main">
			<form action="#">
				<div class="mortgage__item">
					<toggle-switch
						:description="'Семья с детьми'"
					></toggle-switch>
					<range-slider
						:min="100000"
						:max="30000000"
						:value="5000000"
						:step="100000"
						class="value"
						:minMax="false"
					></range-slider>
					<range-slider
						:min="2"
						:max="300"
						:value="5"
						:step="5"
						class="value"
						:minMax="false"
					></range-slider>
				</div>
				<div class="mortgage__item"></div>
				<div class="mortgage__item"></div>
			</form>
		</div>
	</section>
</template>

<script>
	import ToggleSwitch from "./ToggleSwitch.vue";
	import RangeSlider from "./RangeSlider.vue";

	export default {
		name: "Mortgage",
		components: {
			ToggleSwitch,
			RangeSlider,
		},
	};
</script>

<style lang="scss" scoped>
	.mortgage {
		&__header {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 6rem;
		}
		&__title {
			h2 {
				margin-top: 10rem;
				font-size: var(--text-42);
				color: var(--dark);
				font-weight: 600;
				margin-bottom: 6rem;
			}
			p {
				font-size: var(--text-16);
				font-weight: 600;
				color: var(--gray);
				margin-bottom: 7.7rem;
				line-height: 1.95rem;
			}
			h3 {
				margin-left: 1.5rem;
				font-size: var(--text-24);
				color: var(--dark);
				font-weight: 600;
			}
		}
		&__main {
			form {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
			}
		}
		&__item {
			div + div {
				margin-top: 3rem;
			}
		}
	}
</style>
