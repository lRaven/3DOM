<template>
	<div class="slider">
		<div class="slider__values">
			<div class="slider__min">
				<span>От</span>
				<span class="slider__min-value">{{ min }}</span>
			</div>
			<div class="slider__max">
				<span>до</span>
				<span class="slider__max-value">{{ max }}</span>
			</div>
		</div>
		<div class="slider__range-container">
			<span class="slider__range-circle1"></span>
			<input
				type="range"
				:min="min"
				:max="max"
				:value="value"
				:step="step"
				class="slider__range"
			/>
			<span class="slider__range-circle2"></span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			min: String,
			max: String,
			value: String,
			step: String,
		},
		setup() {},
		methods: {
			setMaxValue() {
				const slider = document.querySelector(".slider__range");
				let sliderMax = document.querySelector(".slider__max-value");
				sliderMax.textContent = slider.value;

				slider.addEventListener("input", () => {
					let sliderMax =
						document.querySelector(".slider__max-value");
					sliderMax.textContent = slider.value;
				});
			},
		},
		mounted() {
			this.setMaxValue();
		},
	};
</script>

<style lang="scss" scoped>
	.slider {
		position: relative;
		padding: 2.2rem 1.5rem;
		border-radius: 2rem;
		background-color: var(--light-gray);
		&__values {
			font-size: var(--text-16);
			font-weight: 600;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&__min {
			span {
				color: var(--middle-gray);
				+ span {
					margin-left: 0.5rem;
				}
			}
			&-value {
				color: var(--gray) !important;
			}
		}
		&__max {
			span {
				color: var(--middle-gray);
				+ span {
					margin-left: 0.5rem;
				}
			}
			&-value {
				color: var(--gray) !important;
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
					background-color: var(--middle-gray);
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
</style>
