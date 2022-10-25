<template>
	<div class="v-discount" v-once>-{{ discount }}%</div>
</template>

<script>
	export default {
		name: 'vDiscount',
		props: {
			discount: Number,
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables.scss';

	.v-discount {
		user-select: none;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		background-color: $yellow;
		font-size: 1.6rem;
		font-weight: 600;
		color: $dark-blue;
		@media (max-width: 767px) {
			width: 4rem;
			height: 4rem;
			font-size: 1.4rem;
		}
	}
</style>
