<template>
	<div class="input-wrapper">
		<p class="input__description">{{ text }}</p>
		<input
			:type="type"
			:placeholder="placeholder"
			:pattern="pattern"
			class="input"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
	</div>
</template>

<script>
	export default {
		name: "vInput",
		props: {
			type: String,
			text: String,
			placeholder: String,
			pattern: String,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.input {
		background-color: $white;
		padding: 1.5rem;
		font-size: 1.4rem;
		width: 100%;
		font-weight: 500;
		border: 0.1rem solid $middle-gray;
		transition: all 0.2s ease;
		&:hover {
			border-color: $gray;
		}
		&:focus {
			border-color: $dark;
		}
		&:invalid {
			border-color: $red;
			transition: all 0.2s ease;
		}
		&__description {
			margin-bottom: 0.8rem;
			font-size: 1.3rem;
			color: $middle-gray;
		}
	}
</style>
