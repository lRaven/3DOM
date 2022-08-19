<template>
	<div class="v-popup-wrapper">
		<transition name="fade-up" mode="out-in">
			<div class="v-popup" v-if="isPopupContentVisible">
				<div class="v-popup__header">
					<div class="v-popup__title">{{ title }}</div>
					<div class="v-popup__close" @click="closePopup">
						<img src="/img/icon/cabinet/close.svg" alt="close" />
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
		overflow: hidden;
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
			padding: 6rem;
			max-height: 5rem;
			border-bottom: 0.1rem solid #c4c4c4;
		}
		&__title {
			display: block;
			font-size: 3rem;
			color: $dark;
			font-weight: 600;
		}

		&__body {
			display: flex;
			flex-direction: column;
			position: relative;
			padding: 5rem 9.5rem;
			height: 100%;
			color: $gray;
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
			}
		}
	}
</style>
