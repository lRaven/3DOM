<template>
	<button class="button">{{ text }}</button>
</template>

<script>
	export default {
		name: "Btn",
		props: {
			text: String,
		},
	};
</script>

<style lang="scss" scoped>
	.button {
		padding: 1.4rem 3.4rem;
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
		border-radius: 2.5rem;
	}
</style>
