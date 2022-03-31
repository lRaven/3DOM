<template>
	<div class="slider">
		<div class="slider__minus">
			<span></span>
		</div>

		<input type="range" min="1" max="6" value="1" class="slider__input" />

		<div class="slider__plus">
			<span></span>
			<span></span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ScaleSlider",
		data() {
			return {
				inputValue: 1,
			};
		},
		methods: {
			UpNDownInputValue() {
				const sliders = document.querySelectorAll(".slider");
				sliders.forEach((slider) => {
					const plus = slider.querySelector(".slider__plus");
					const minus = slider.querySelector(".slider__minus");
					const sliderInput = slider.querySelector(".slider__input");

					plus.addEventListener("click", () => {
						sliderInput.value++;
						this.inputValue = sliderInput.value;
					});
					minus.addEventListener("click", () => {
						sliderInput.value--;
						this.inputValue = sliderInput.value;
					});

					sliderInput.addEventListener("input", () => {
						this.inputValue = sliderInput.value;
					});
				});
			},
		},
		mounted() {
			this.UpNDownInputValue();
		},
	};
</script>

<style lang="scss" scoped>
	.slider {
		display: flex;
		align-items: center;
		width: 24rem;
		height: 3.6rem;
		background-color: #aeb3bf;
		transform: rotate(-90deg);
		&__input {
			-webkit-appearance: none;
			width: calc(100% - 7.2rem);
			height: 0.2rem;
			background-color: var(--white);
			outline: none;
			&::-webkit-slider-thumb {
				//* for chrome/safari
				-webkit-appearance: none;
				appearance: none;
				width: 0.7rem;
				height: 3rem;
				background: var(--dark);
				cursor: pointer;
			}
			&::-moz-range-thumb {
				//* for firefox
				width: 0.7rem;
				height: 3rem;
				background: var(--dark);
				cursor: pointer;
			}
		}
		&__plus,
		&__minus {
			cursor: pointer;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: var(--dark);
			height: 3.6rem;
			width: 3.6rem;
			span {
				display: block;
				background-color: var(--white);
				width: 2rem;
				height: 0.5rem;
			}
		}
		&__plus {
			span:first-child {
				transform: rotate(90deg) translateY(-0.8rem);
			}
			span:last-child {
				transform: translateX(-1rem);
			}
		}
		&__minus {
			span {
				transform: rotate(90deg);
			}
		}
	}
	img {
		height: 50rem;
	}
</style>
