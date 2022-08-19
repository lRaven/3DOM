<template>
	<div class="mortgage-calculator">
		<div class="mortgage-calculator__header" :class="light">
			<button class="mortgage-calculator__close" @click="closePopup">
				<img :src="closeIcon" alt="" />
			</button>
		</div>
		<div class="mortgage-calculator__body">
			<iframe
				src="https://ipoteka.domclick.ru/calc-reg/calculator.html"
				frameborder="0"
				width="100%"
				height="100%"
				name="mortgageCalculator"
				id="mortgageCalculator"
			></iframe>
		</div>
	</div>
</template>

<script>
	export default {
		name: "vPopup",
		props: {
			closeIcon: String,
			light: String,
		},
		methods: {
			closePopup() {
				this.$emit("closeMortgageCalculator");
				document.querySelector("body").classList.remove("locked");
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.mortgage-calculator {
		display: flex;
		flex-direction: column;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 5;
		background-color: $white;
		transition: all 0.2s ease;
		overflow: hidden;
		&__header {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			padding: 1rem;
			background-color: $dark-green;
			max-height: 5rem;
			&.light {
				background-color: $white;
			}
		}
		&__body {
			position: relative;
			height: 100%;
		}

		&__close {
			background-color: transparent;
			cursor: pointer;
			width: 3rem;
			height: 3rem;
		}
	}
</style>
