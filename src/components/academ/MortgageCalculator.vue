<template>
	<div class="popup popup-full">
		<div class="popup__header" :class="light">
			<div class="popup__close" @click="closePopup()">
				<img :src="closeIcon" alt="" />
			</div>
		</div>
		<div class="popup__body">
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
				const popup = document.querySelector(".popup-full");
				popup.classList.remove("open");
				document.querySelector("body").classList.remove("locked");
			},
		},
		mounted() {},
	};
</script>

<style lang="scss" scoped>
	.popup {
		display: flex;
		flex-direction: column;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -150%);
		z-index: 5;
		height: 100vh;
		width: 100vw;
		background-color: var(--white);
		transition: all 0.2s ease;
		overflow: hidden;
		&__header {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			padding: 1rem;
			background-color: var(--dark-green);
			max-height: 5rem;
			&.light {
				background-color: var(--white);
			}
		}
		&__body {
			position: relative;
			height: 100%;
		}
		&.open {
			transform: translate(-50%, -50%);
			transition: all 0.3s ease;
		}

		&__close {
			cursor: pointer;
			width: 3rem;
			height: 3rem;
		}
	}
</style>
