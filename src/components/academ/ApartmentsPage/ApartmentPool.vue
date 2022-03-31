<template>
	<div>
		<div v-for="n in reversedItems" class="floor" :key="n">{{ n }}</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				numbers: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
			};
		},
		computed: {
			reversedItems() {
				return this.numbers.slice().reverse();
			},
		},
	};
</script>

<style lang="scss" scoped>
	.floor {
		font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
		font-weight: bold;
		font-size: 1.4rem;
		color: #d5bfa8;
		background: #634b32;
		border: 0.1rem solid var(--light-gray);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 4rem;
		height: 4rem;
	}
</style>
