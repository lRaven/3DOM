<template>
	<input
		:type="type"
		:placeholder="placeholder"
		class="v-input"
		:value="modelValue"
		:class="{ transparent: isTransparent }"
		@input="$emit('update:modelValue', $event.target.value)"
	/>
</template>

<script>
	export default {
		name: "vInput",
		props: {
			isTransparent: {
				value: Boolean,
				default: false,
			},
			modelValue: String,
			type: String,
			placeholder: String,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.v-input {
		border: 0.1rem solid $middle-gray;
		border-radius: 1rem;
		padding: 1.5rem 2rem;
		font-size: 2.2rem;
		transition: all 0.2s ease;
		&.transparent {
			border-color: transparent;
			background-color: transparent;
			padding: 0 2rem;
			&:hover {
				border-color: transparent;
			}
		}
		&:invalid {
			border-color: $red;
			&:hover,
			&:focus {
				border-color: $red;
			}
		}
		&:hover {
			border-color: $dark;
			transition: all 0.3s ease;
		}
		&:focus {
			border-color: $dark;
			transition: all 0.3s ease;
		}
	}
</style>
