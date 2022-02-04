<template>
	<div class="popup">
		<div class="popup__close" @click="closePopup()">
			<img src="img/icon/academ/close.svg" alt="" />
		</div>
		<img alt="" :src="src" class="popup__image" />
	</div>
	<div class="blur" @click="closePopup()"></div>
</template>

<script>
	export default {
		name: "Popup",
		props: {
			src: String,
		},
		methods: {
			closePopup() {
				const popup = document.querySelector(".popup");
				popup.classList.remove("open");
				document
					.querySelector("body")
					.setAttribute("style", "overflow: auto");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.popup {
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(0);
		z-index: 5;
		width: max-content;
		height: calc(100vh - 6rem);
		background-color: var(--white);
		padding: 5rem;
		transition: all 0.2s ease;

		&.open {
			transform: translate(-50%, -50%) scale(1);
			transition: all 0.3s ease;

			+ .blur {
				background-color: rgba(0, 0, 0, 0.8);
				z-index: 3;
				transition: all 0.3s ease;
			}
		}

		&__close {
			cursor: pointer;
			position: absolute;
			top: 1rem;
			right: 1rem;
			width: 3rem;
			height: 3rem;
		}

		img {
			height: 100%;
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
	}
</style>
