<template>
	<a href="#" class="btn">{{ text }}</a>
</template>
<script>
	export default {
		name: "btn",
		props: {
			text: String,
		},
	};
</script>
<style lang="scss" scoped>
	.btn {
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
		font-size: var(--text-15);
		font-weight: 600;
		transition: all 0.2s ease;
		&.blue {
			background-color: var(--blue);
			border: 0.2rem solid var(--blue);
			color: var(--white);
			&:active {
				transform: scale(0.97);
				transition: all 0.3s ease;
			}
		}
		&.white {
			background-color: var(--white);
			border: 0.2rem solid var(--blue);
			color: var(--blue);
			&:active {
				transform: scale(0.95);
				transition: all 0.3s ease;
			}
		}
		&.gray {
			background-color: var(--light-gray);
			box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
			color: var(--blue);
			&:active {
				transform: scale(0.95);
				transition: all 0.3s ease;
			}
		}
	}
</style>
