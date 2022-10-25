<template>
	<label class="v-checkbox">
		<input
			type="checkbox"
			class="v-checkbox__real"
			@change.stop="
				$emit('update:modelValue', value);
				$emit('change', value, $event.target.checked);
			"
		/>
		<span class="v-checkbox__fake">
			<svg
				width="13"
				height="10"
				viewBox="0 0 13 10"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="v-checkbox__fake-icon"
			>
				<path
					d="M1 3.85714L4.5375 8.08376C4.9372 8.56133 5.6715 8.56133 6.0712 8.08376L12 1"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
		</span>
	</label>
</template>

<script>
	export default {
		name: 'vCheckbox',
		props: {
			modelValue: [String, Number],
			value: [String, Number],
			description: [String, Number],
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.v-checkbox {
		display: block;
		width: max-content;
		&__real {
			display: none;
			&:checked + .v-checkbox__fake {
				background-color: $blue;
				transition: all 0.3s ease;
				.v-checkbox__fake-icon {
					opacity: 1;
				}
			}
		}
		&__fake {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 2rem;
			height: 2rem;
			cursor: pointer;
			user-select: none;
			border: 0.1rem solid $blue;
			border-radius: 0.5rem;
			transition: all 0.2s ease;
			&:hover {
				background-color: $blue;
				transition: all 0.3s ease;
				.v-checkbox__fake-icon {
					opacity: 1;
				}
			}
			&-icon {
				opacity: 0;
				width: 1.1rem;
				height: 1.1rem;
				object-fit: contain;
			}
		}
	}
</style>
