<template>
	<input
		:type="type"
		class="text-input"
		:class="dark"
		:placeholder="placeholder"
		@input="$emit('update:modelValue', $event.target.value)"
	/>
</template>

<script>
	export default {
		name: "vInput",
		props: {
			placeholder: String,
			type: String,
			dark: String,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.text-input {
		width: 100%;
		background-color: transparent;
		padding: 1rem 0;
		border-bottom: 0.1rem solid $white;
		color: $white;
		font-size: 1.8rem;
		&:invalid {
			border-color: $red;
		}
		&::placeholder {
			color: $white;
			font-size: 1.8rem;
		}
		+ .text-input {
			margin-top: 2rem;
		}
		&.dark {
			color: $gray;
			border-color: $gray;
			&:invalid {
				border-color: $red;
			}
			&::placeholder {
				color: $gray;
			}
		}
	}
</style>
