<template>
	<Header />
</template>

<script>
	import Header from "../components/academ/Header.vue";

	export default {
		components: {
			Header,
		},
	};
</script>

<style lang="scss" scoped>
	section {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		min-height: calc(100vh - 6rem);
		overflow: hidden;
		background: var(--dark-green);
		display: flex;
	}
	h1,
	h2,
	h3,
	h4 {
		text-transform: uppercase;
	}

	a {
		user-select: none;
		font-size: 1.6rem;
		color: var(--dark-green);
		font-weight: 600;
	}

	img,
	svg {
		user-select: none;
		pointer-events: none;
	}

	.nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3rem;
	}
	.link {
		position: relative;
		&::after {
			content: "";
			position: absolute;
			left: 0;
			bottom: -0.3rem;
			width: 0;
			height: 0.2rem;
			background-color: var(--dark-green);
			transition: all 0.3s ease;
		}
		&:hover {
			&::after {
				width: 100%;
				transition: all 0.3s ease;
			}
		}
	}
</style>

<style lang="scss" scoped></style>
