<template>
	<button class="v-button" :type="type">{{ text }}</button>
</template>
<script>
	export default {
		name: "vButton",
		props: {
			text: String,
			type: String,
		},
	};
</script>
<style lang="scss" scoped>
	.v-button {
		cursor: pointer;
		color: var(--dark);
		user-select: none;
		display: flex;
		justify-content: center;
		align-content: center;
		padding: 1.4rem 2.4rem;
		border-radius: 2.5rem;
		min-width: 13.8rem;
		width: fit-content;
		height: fit-content;
		font-size: 1.5rem;
		font-weight: 600;
		box-shadow: 0 0 2rem rgb(0 0 0 / 20%);
		transition: all 0.2s ease;

		&:active {
			transform: scale(0.97);
			transition: all 0.3s ease;
		}

		&.blue {
			background-color: var(--blue);
			color: var(--white);

			&:hover {
				box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.25);
				background-color: var(--middle-blue);
				transition: all 0.2s ease;
			}
		}

		&.white {
			background-color: var(--white);
			color: var(--blue);
		}

		&.gray {
			background-color: var(--light-gray);
			box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
			color: var(--blue);

			&:hover {
				background-color: #e3e3e3;
				transition: all 0.2s ease;
			}
		}
	}
</style>
