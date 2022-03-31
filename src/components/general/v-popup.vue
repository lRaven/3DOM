<template>
	<div class="v-popup-wrapper">
		<div class="v-popup">
			<div class="v-popup__header">
				<div class="v-popup__title">{{ title }}</div>
				<div class="v-popup__close" @click="closePopup">
					<img src="img/icon/cabinet/close.svg" alt="close" />
				</div>
			</div>
			<div class="v-popup__body">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Popup",
		props: {
			title: String,
		},

		methods: {
			closePopup() {
				this.$emit("closePopup");
			},

			//* отключение кнопки пока поля не заполнены
			validateForm() {
				const form = document.querySelector(".popup__body");
				const inputs = form.querySelectorAll("input");
				const button = form.querySelector(".button");

				if (
					this.name.length > 0 &&
					this.tel.length > 0 &&
					this.privacyPolicy === true
				) {
					button.setAttribute("type", "submit");
					button.classList.remove("gray");
				} else {
					button.setAttribute("type", "button");
					button.classList.add("gray");
				}

				inputs.forEach((input) => {
					if (input.getAttribute("type") !== "checkbox") {
						input.addEventListener("input", () => {
							if (
								this.name.length > 0 &&
								this.tel.length > 0 &&
								this.privacyPolicy === true
							) {
								button.setAttribute("type", "submit");
								button.classList.remove("gray");
							} else {
								button.setAttribute("type", "button");
								button.classList.add("gray");
							}
						});
					} else {
						input.addEventListener("change", () => {
							if (
								this.name.length > 0 &&
								this.tel.length > 0 &&
								this.privacyPolicy === true
							) {
								button.setAttribute("type", "submit");
								button.classList.remove("gray");
							} else {
								button.setAttribute("type", "button");
								button.classList.add("gray");
							}
						});
					}
				});
			},
		},
		mounted() {},
	};
</script>

<style lang="scss">
	.v-popup {
		display: flex;
		flex-direction: column;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		max-width: 60rem;
		height: 100%;
		max-height: 60rem;
		background-color: var(--white);
		transition: all 0.2s ease;
		border-radius: 3rem;
		overflow: hidden;
		z-index: 5;
		&-wrapper {
			position: fixed;
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
			padding: 6rem;
			max-height: 5rem;
			border-bottom: 0.1rem solid #c4c4c4;
		}
		&__title {
			display: block;
			font-size: 3rem;
			color: var(--dark);
			font-weight: 600;
		}

		&__body {
			display: flex;
			flex-direction: column;
			position: relative;
			padding: 5rem 9.5rem;
			height: 100%;
			color: var(--gray);
			.button {
				align-self: center;
				margin-top: 5rem;
				padding: 2rem 5rem;
				border-radius: 4.5rem;
			}
			.checkbox {
				margin-top: 2.8rem;
			}
		}
		&__description {
			font-size: 1.8rem;
			font-weight: 500;
			line-height: 1.3;
			margin-bottom: 6rem;
		}

		&__close {
			position: absolute;
			right: 1.3rem;
			top: 1.3rem;
			cursor: pointer;
			width: 3rem;
			height: 3rem;
		}
	}

	@media (max-width: 620px) {
		.v-popup {
			width: 95%;
			&__body {
				padding: 5rem;
			}
		}
	}
	@media (max-width: 480px) {
		.v-popup {
			height: auto;
			&__title {
				text-align: center;
			}
			&__body {
				padding: 1.7rem 1rem 3rem 1rem;
				.button {
					margin-top: 3rem;
				}
			}
			&__description {
				margin-bottom: 3rem;
				max-width: 17rem;
				align-self: center;
			}
		}
	}
</style>
