<template>
	<label class="text-radio">
		<input
			type="radio"
			class="text-radio__real"
			:name="radioGroup"
			:checked="modelValue === value"
			@change="$emit('update:modelValue', value)"
		/>
		<span class="text-radio__fake">{{ description }}</span>
	</label>
</template>

<script>
	export default {
		name: 'TextRadio',
		props: {
			modelValue: [String, Number],
			value: [String, Number],
			description: {
				value: [String, Number],
				default: 'Radio',
			},
			radioGroup: {
				value: String,
				default: 'radio',
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.text-radio {
		&__real {
			display: none;
			&:checked + .text-radio__fake {
				background-color: $blue;
				color: $white;
				transition: all 0.3s ease;
			}
		}
		&__fake {
			cursor: pointer;
			user-select: none;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: $light-gray;
			color: $dark;
			border-radius: 2rem;
			padding: 1.5rem 3rem;
			font-size: 1.8rem;
			transition: all 0.3s ease;
			&:hover {
				background-color: $blue;
				color: $white;
				transition: all 0.5s ease;
			}
		}
	}
</style>
