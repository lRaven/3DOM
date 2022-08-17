<template>
	<div class="textarea-wrapper">
		<p class="textarea__description">{{ description }}</p>
		<textarea
			class="textarea"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		></textarea>
	</div>
</template>

<script>
	export default {
		name: "vTextarea",
		props: {
			modelValue: String,
			description: String,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.textarea {
		border: 0.1rem solid #979797;
		padding: 1.5rem;
		font-size: 1.4rem;
		resize: none;
		transition: all 0.2s ease;
		height: 16rem;
		width: 100%;

		-ms-overflow-style: none;
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
		}

		&:hover {
			border-color: $dark;
			transition: all 0.3s ease;
		}
		&:focus {
			border-color: $dark;
			transition: all 0.3s ease;
		}
		&__description {
			margin-bottom: 0.8rem;
			font-size: 1.3rem;
			color: $middle-gray;
			font-weight: 600;
		}
	}
</style>
