<template>
	<button class="v-button" :type="type" :class="color">
		<img :src="icon" alt="icon" class="v-button__icon" />
		<p class="v-button__text">{{ text }}</p>
	</button>
</template>

<script>
	export default {
		name: "vButton",
		props: {
			color: String,
			icon: String,
			type: String,
			text: String,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.v-button {
		user-select: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		border-radius: 0.8rem;
		padding: 0.5rem 1rem 0.5rem 0.5rem;
		border: 0.2rem solid transparent;
		transition: all 0.2s ease;
		&__icon {
			height: 1.8rem;
			width: 1.8rem;
			object-fit: contain;
		}
		&__text {
			font-weight: 700;
		}
		&:active {
			transform: scale(0.95);
		}
		&.gold {
			color: $white;
			background-color: $gold;
			border-color: $gold;
		}
		&.gray {
			color: $middle-gray;
			background-color: $white;
			border-color: $middle-gray;
		}
	}
</style>
