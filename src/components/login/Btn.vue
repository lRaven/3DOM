<template>
	<button :type="type" class="button">{{ text }}</button>
</template>

<script>
	export default {
		name: "Btn",
		props: {
			type: String,
			text: String,
		},
	};
</script>

<style lang="scss" scoped>
	.button {
		display: block;
		width: 100%;
		padding: 2rem 4rem;
		border-radius: 1rem;
		color: var(--white);
		background-color: var(--blue);
		font-weight: 500;
		font-size: var(--text-16);
		transition: all 0.2s ease;
		&:active {
			transform: scale(0.95);
			transition: all 0.3s ease;
		}
		&:disabled {
			background-color: var(--light-gray);
			color: #a7a7a7;
		}
	}
</style>
