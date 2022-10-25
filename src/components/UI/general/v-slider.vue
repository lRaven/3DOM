<template>
	<div class="v-slider" :class="customClass">
		<p>{{ title }}</p>
		<div class="slider">
			<div class="slider__values" v-if="minMax">
				<div class="slider__min">
					<span>От</span>
					<span class="slider__min-value">{{ min }}</span>
				</div>
				<div class="slider__max">
					<span>до</span>
					<span class="slider__max-value">{{ max }}</span>
				</div>
			</div>
			<div class="slider__sum" v-else>
				<span class="slider__value"></span>
				<span class="slider__text">{{ text }}</span>
			</div>
			<div class="slider__range-container">
				<span class="slider__range-circle1"></span>
				<input
					type="range"
					:min="min"
					:max="max"
					:value="value"
					:step="step"
					:text="text"
					class="slider__range"
				/>
				<span class="slider__range-circle2"></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'vSlider',
		props: {
			title: String,
			text: String,
			min: Number,
			max: Number,
			value: Number,
			step: Number,
			minMax: Boolean,

			customClass: String,
		},
		methods: {
			setMaxValue() {
				const sliders = document.querySelectorAll('.min-max');
				sliders.forEach((slider) => {
					let sliderRange = slider.querySelector('.slider__range');
					let sliderMax = slider.querySelector('.slider__max-value');

					sliderMax.textContent = sliderRange.value;
					sliderRange.addEventListener('input', () => {
						sliderMax.textContent = sliderRange.value;
					});
				});
			},

			setValue() {
				const sliders = document.querySelectorAll('.value');
				sliders.forEach((slider) => {
					const sliderValue = slider.querySelector('.slider__value');
					const sliderRange = slider.querySelector('.slider__range');

					let sliderRangeValue = Number(sliderRange.value);
					sliderValue.textContent = sliderRangeValue.toLocaleString();
					sliderRange.addEventListener('input', () => {
						let sliderRangeValue = Number(sliderRange.value);
						sliderValue.textContent = sliderRangeValue.toLocaleString();
					});
				});
			},
			setWordDeclension() {
				const sliders = document.querySelectorAll('.value');
				sliders.forEach((slider) => {
					const sliderText = slider.querySelector('.slider__text');
					const sliderRange = slider.querySelector('.slider__range');

					if (sliderText.textContent == 'лет') {
						sliderRange.addEventListener('input', () => {
							let sliderValueEnd = sliderRange.value.toString().slice(-1);
							let sliderValueTwoEnd = sliderRange.value.toString().slice(-2);

							if (sliderValueTwoEnd < '11' || sliderValueTwoEnd > '14') {
								if (sliderValueEnd == '1') {
									sliderText.textContent = 'год';
								} else if (sliderValueEnd > '1' && sliderValueEnd <= '4') {
									sliderText.textContent = 'года';
								} else {
									sliderText.textContent = 'лет';
								}
							}
						});
					}
				});
			},
		},
		mounted() {
			this.setMaxValue();
			this.setValue();
			this.setWordDeclension();
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	p {
		font-size: 1.5rem;
		color: $gray;
		font-weight: 600;
		margin-left: 1.5rem;
		margin-bottom: 1.3rem;
	}
	.slider {
		position: relative;
		padding: 2.2rem 1.5rem;
		border-radius: 2rem;
		background-color: $light-gray;
		&__values {
			font-size: 1.6rem;
			font-weight: 600;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&__sum {
			font-size: 1.6rem;
			font-weight: 600;
			color: $gray;
			span + span {
				margin-left: 0.6rem;
			}
		}
		&__min {
			span {
				color: $middle-gray;
				+ span {
					margin-left: 0.5rem;
				}
			}
			&-value {
				color: $gray !important;
			}
		}
		&__max {
			span {
				color: $middle-gray;
				+ span {
					margin-left: 0.5rem;
				}
			}
			&-value {
				color: $gray !important;
			}
		}
		&__range {
			cursor: pointer;
			position: relative;
			left: 1.2rem;
			width: calc(100% - 2.4rem);
			height: 0.2rem;
			&-container {
				position: absolute;
				left: 1.5rem;
				bottom: 0;
				width: calc(100% - 3rem);
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				span {
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					display: inline-block;
					border-radius: 50%;
					height: 1.2rem;
					width: 1.2rem;
					background-color: $middle-gray;
				}
			}
			&-circle1 {
				left: 0;
			}
			&-circle2 {
				right: 0;
			}
		}
	}
	.pale {
		p {
			font-size: 1.8rem;
			color: #979797;
			margin-left: 0;
		}
	}
</style>
