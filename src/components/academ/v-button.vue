<template>
	<button class="academ-button" :type="type">
		{{ text }}
	</button>
</template>

<script>
	export default {
		props: {
			text: String,
			type: String,
		},
		name: "academ-button",
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.academ-button {
		user-select: none;
		cursor: pointer;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 24rem;
		height: 4.5rem;
		border: 0.1rem solid $gold;
		padding-left: 2rem;
		border-radius: 0 2rem 2rem 0;
		font-size: 1.5rem;
		font-weight: 600;
		transition: all 0.3s ease;
		&.gold {
			background-color: $gold;
			color: $dark-green;
			&:hover {
				background-color: $dark-green;
				color: $gold;
				transition: all 0.3s ease;
			}
		}
		&.dark {
			background-color: $dark-green;
			color: $gold;
			&:hover {
				background-color: $gold;
				color: $dark-green;
				transition: all 0.3s ease;
			}
		}
	}
</style>
