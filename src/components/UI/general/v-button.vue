<template>
	<button class="v-button" :class="color">{{ text }}</button>
</template>

<script>
	export default {
		name: "vButton",
		props: {
			color: {
				value: String,
				default: "blue",
			},
			text: {
				value: String,
				default: "button",
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.v-button {
		cursor: pointer;
		color: $dark;
		user-select: none;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1.4rem 2.4rem;
		border-radius: 2.5rem;
		min-width: 13.8rem;
		width: max-content;
		font-size: 1.5rem;
		font-weight: 600;
		box-shadow: $shadow;
		transition: all 0.2s ease;

		&:active {
			transform: scale(0.97);
			transition: all 0.3s ease;
		}
		&:disabled {
			cursor: default;
			box-shadow: none;
			color: $middle-gray !important;
			background-color: $light-gray !important;
			border-color: $light-gray;
			&:hover {
				background-color: $light-gray;
				border-color: $light-gray;
				box-shadow: none !important;
			}
			&:active {
				transform: none;
			}
		}

		&.blue {
			background-color: $blue;
			color: $white;

			&:hover {
				box-shadow: $shadow;
				background-color: $middle-blue;
				transition: all 0.2s ease;
			}
		}

		&.white {
			background-color: $white;
			color: $blue;
		}

		&.gray {
			background-color: $light-gray;
			box-shadow: $shadow;
			color: $blue;

			&:hover {
				background-color: #e3e3e3;
				transition: all 0.2s ease;
			}
		}
	}
</style>
