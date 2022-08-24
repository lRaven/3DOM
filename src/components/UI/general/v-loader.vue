<template>
	<div class="v-loader">
		<svg class="v-loader__icon" viewBox="25 25 50 50">
			<circle
				class="v-loader__path"
				cx="50"
				cy="50"
				r="20"
				fill="none"
				stroke="#007bfc"
				stroke-width="2"
			/>
		</svg>
	</div>
</template>

<script>
	export default {
		name: "v-loader",
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.v-loader {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		&__icon {
			width: 4.8rem;
			height: 4.8rem;
			animation: rotate 2s linear infinite;
		}
		&__path {
			stroke-dasharray: 150, 200;
			stroke-dashoffset: -10;
			animation: dash 1.5s ease-in-out infinite,
				color 6s ease-in-out infinite;
			stroke-linecap: round;
		}
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes dash {
		0% {
			stroke-dasharray: 1, 200;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 89, 200;
			stroke-dashoffset: -35;
		}
		100% {
			stroke-dasharray: 89, 200;
			stroke-dashoffset: -124;
		}
	}

	@keyframes color {
		0% {
			stroke: $blue;
		}
		40% {
			stroke: $blue;
		}
		66% {
			stroke: $blue;
		}
		80%,
		90% {
			stroke: $blue;
		}
	}
</style>
