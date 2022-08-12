<template>
	<div class="v-input input-wrapper">
		<p class="input__description">{{ text }}</p>
		<input
			:type="type"
			:maxlength="maxlength"
			:min="min"
			:max="max"
			:placeholder="placeholder"
			class="input"
		/>
	</div>
</template>

<script>
	export default {
		name: "vInput",
		props: {
			type: String,
			text: String,

			maxlength: Number,
			min: Number,
			max: Number,
			placeholder: String,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.input {
		background-color: $light-gray;
		padding: 1.35rem 2rem;
		border-radius: 2rem;
		font-size: 1.6rem;
		width: 100%;
		font-weight: 500;
		color: $gray;
		&::placeholder {
			color: $middle-gray;
		}
		&:invalid {
			outline: 0.1rem solid $red;
			transition: all 0.2s ease;
		}
		&__description {
			margin-bottom: 1.3rem;
			font-size: 1.5rem;
			font-weight: 600;
			color: $gray;
		}
	}
</style>
