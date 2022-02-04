<template>
	<input
		:type="type"
		class="text-input"
		:placeholder="placeholder"
		required
	/>
</template>

<script>
	export default {
		name: "Input",
		props: {
			placeholder: String,
			type: String,
		},
	};
</script>

<style lang="scss" scoped>
	.text-input {
		width: 100%;
		background-color: transparent;
		padding: 1rem 0;
		border-bottom: 1px solid var(--white);
		color: var(--white);
		font-size: 1.8rem;
		&::placeholder {
			color: var(--white);
			font-size: 1.8rem;
		}
		+ .text-input {
			margin-top: 2rem;
		}
	}
</style>
