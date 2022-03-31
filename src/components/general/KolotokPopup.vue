<template>
	<div class="popup-kolotok">
		<img src="img/general/kolotok-coming-soon.svg" alt="" />
	</div>
	<div class="blur kolotok" @click="closePopup()"></div>
</template>

<script>
	export default {
		name: "Coming soon",
		methods: {
			closePopup() {
				const popup = document.querySelector(".popup-kolotok");
				const blur = document.querySelector(".blur.kolotok");

				blur.classList.remove("open");
				popup.classList.remove("open");
				document.querySelector("body").classList.remove("locked");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.popup-kolotok {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(0);
		z-index: 5;
		transition: all 0.3s ease;
		padding: 1rem;
		background-color: #fff;
		max-width: 34rem;
		width: 100%;
		img {
			width: 100%;
		}
		&.open {
			transform: translate(-50%, -50%) scale(1);
		}
	}
	.blur {
		cursor: pointer;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0);
		z-index: -1;
		transition: all 0.3s ease;
		&.open {
			z-index: 4;
			background-color: rgba(0, 0, 0, 0.7);
		}
	}
</style>
