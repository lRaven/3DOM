<template>
	<textarea
		class="v-textarea"
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
	></textarea>
</template>

<script>
	export default {
		name: "vTextarea",
		props: { modelValue: String },
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.v-textarea {
		border: 0.1rem solid #c4c4c4;
		border-radius: 1rem;
		padding: 3rem 1.5rem;
		font-size: 1.8rem;
		font-weight: 500;
		width: 100%;
		resize: none;
		transition: all 0.2s ease;

		-ms-overflow-style: none;
		scrollbar-width: none;
		@media (max-width: 767px) {
			padding: 1rem;
		}
		@media (max-width: 540px) {
			font-size: 1.4rem;
		}

		&::-webkit-scrollbar {
			display: none;
		}

		&:hover {
			border-color: $dark;
			transition: all 0.3s ease;
		}
		&:invalid {
			border-color: $red;
		}
		&:focus {
			border-color: $dark;
			transition: all 0.3s ease;
		}
	}
</style>
