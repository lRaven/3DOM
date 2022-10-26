<template>
	<div class="v-slider">
		<div class="v-slider__values">
			<template v-if="params.isMinVisible">
				<div class="v-slider__min">
					<span class="v-slider__min-description">От</span>
					<span class="v-slider__min-value">{{ params.min }}</span>
				</div>
				<div class="v-slider__max">
					<span class="v-slider__max-description">до</span>
					<span class="v-slider__max-value">{{ selectedValue }}</span>
				</div>
			</template>

			<template v-else>
				<div class="v-slider__sum">
					<span class="v-slider__value">{{ selectedValue }}</span>
					<span
						class="v-slider__text"
						v-if="descriptionDeclension || params.description"
					>
						{{ descriptionDeclension || params.description }}
					</span>
				</div>
			</template>
		</div>

		<div class="v-slider__range-container">
			<span class="v-slider__range-circle v-slider__range-circle-start"></span>
			<input
				class="v-slider__range"
				type="range"
				:min="params.min"
				:max="params.max"
				:step="params.step"
				v-model="selectedValue"
				@input="$emit('update:modelValue', +selectedValue)"
			/>
			<span class="v-slider__range-circle v-slider__range-circle-end"></span>
		</div>
	</div>
</template>

<script>
	import { ref, computed } from 'vue';
	import { wordDeclension } from '@/js/wordDeclension';

	export default {
		name: 'vSlider',
		props: {
			params: {
				value: Object,
				default: {
					value: 0,
				},
			},
		},
		setup(props) {
			const selectedValue = ref(props.params.value);

			const descriptionDeclension = computed(() => {
				if (props.params.descriptionDeclension) {
					return wordDeclension(
						+selectedValue.value,
						props.params.descriptionDeclension
					);
				} else return null;
			});

			return {
				selectedValue,
				descriptionDeclension,
			};
		},
		methods: {
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
			// this.setMaxValue();
			// this.setValue();
			// this.setWordDeclension();
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.v-slider {
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
		}
		&__value {
			margin-right: 0.6rem;
		}

		&__min {
			&-description {
				color: $middle-gray;
				margin-right: 0.5rem;
			}
			&-value {
				color: $gray;
			}
		}
		&__max {
			&-description {
				color: $middle-gray;
				margin-right: 0.5rem;
			}
			&-value {
				color: $gray;
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
			}
			&-circle {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				display: inline-block;
				border-radius: 50%;
				height: 1.2rem;
				width: 1.2rem;
				background-color: $middle-gray;
				&-start {
					left: 0;
				}
				&-end {
					right: 0;
				}
			}
		}
	}
</style>
