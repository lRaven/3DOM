<template>
	<div class="v-popup-wrapper">
		<transition name="fade-up" mode="out-in">
			<div class="v-popup" v-if="isPopupContentVisible">
				<div class="v-popup__header">
					<h3 class="v-popup__title">{{ title }}</h3>
					<div class="v-popup__close" @click="closePopup">
						<svg
							width="28"
							height="28"
							viewBox="0 0 28 28"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M14 0.1875C6.38403 0.1875 0.1875 6.38403 0.1875 14C0.1875 21.616 6.38403 27.8125 14 27.8125C21.616 27.8125 27.8125 21.616 27.8125 14C27.8125 6.38403 21.616 0.1875 14 0.1875ZM14 2.3125C20.4664 2.3125 25.6875 7.5337 25.6875 14C25.6875 20.4664 20.4664 25.6875 14 25.6875C7.5337 25.6875 2.3125 20.4664 2.3125 14C2.3125 7.5337 7.5337 2.3125 14 2.3125ZM9.98242 8.45508L8.45508 9.98242L12.4727 14L8.45508 18.0175L9.98242 19.545L14 15.5273L18.0175 19.545L19.545 18.0175L15.5273 14L19.545 9.98242L18.0175 8.45508L14 12.4727L9.98242 8.45508Z"
								fill="#C4C4C4"
							/>
						</svg>
					</div>
				</div>
				<div class="v-popup__body">
					<slot></slot>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		name: "vPopup",
		props: { title: String },
		data: () => ({ isPopupContentVisible: false }),
		methods: {
			closePopup() {
				this.$emit("closePopup");
			},
		},
		mounted() {
			document.body.classList.add("locked");

			setTimeout(() => {
				this.isPopupContentVisible = true;
			}, 300);
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.v-popup {
		display: flex;
		flex-direction: column;
		max-height: 90vh;
		background-color: $white;
		transition: all 0.2s ease;
		border-radius: 3rem;
		@media (max-width: 540px) {
			max-height: inherit;
			height: 100%;
			width: 100%;
			border-radius: 0;
		}
		&-wrapper {
			position: fixed;
			display: flex;
			justify-content: center;
			align-items: center;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			background-color: rgba(0, 0, 0, 0.8);
			z-index: 4;
			transition: all 0.3s ease;
		}

		&__header {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 3rem 6rem;
			border-bottom: 0.1rem solid #c4c4c4;
			@media (max-width: 767px) {
				padding: 2rem;
				display: grid;
				grid-template-columns: 1fr;
			}
			@media (max-width: 375px) {
				padding: 1rem;
			}
		}
		&__title {
			font-size: 3rem;
			color: $dark;
			font-weight: 600;
			grid-area: 1/1;
			@media (max-width: 767px) {
				text-align: center;
				margin: 0 5rem;
			}
			@media (max-width: 375px) {
				font-size: 2.4rem;
			}
		}

		&__body {
			display: flex;
			flex-direction: column;
			position: relative;
			padding: 5rem 9.5rem;
			height: 100%;
			color: $gray;
			@media (max-width: 767px) {
				padding: 2rem;
			}
			@media (max-width: 375px) {
				padding: 1rem;
			}
		}

		&__close {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			right: -7rem;
			top: -7rem;
			cursor: pointer;
			width: 7rem;
			height: 7rem;
			box-shadow: $shadow;
			border-radius: 50%;
			padding: 0.2rem;
			border: 1rem solid rgba(#000, $alpha: 0.2);
			transition: all 0.2s ease;
			@media (max-width: 767px) {
				position: static;
				width: 3rem;
				height: 3rem;
				border: none;
				padding: 0;
				box-shadow: none;
				grid-area: 1/1;
				margin-left: auto;
			}
			&:hover {
				border-color: rgba(#000, $alpha: 0.5);
				svg {
					transform: rotate(90deg);
				}
			}
			&:active {
				svg {
					transform: rotate(180deg);
				}
			}
			svg {
				width: 100%;
				height: 100%;
				object-fit: contain;
				background-color: #fff;
				border-radius: 50%;
				padding: 0.2rem;
				transition: all 0.2s ease;
				path {
					fill: $gray;
					transition: all 0.2s ease;
				}
			}
		}
	}
</style>
