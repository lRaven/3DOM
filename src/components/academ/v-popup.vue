<template>
	<div class="academ-popup-wrapper">
		<div class="academ-popup">
			<div class="academ-popup__header">
				<div class="academ-popup__title">
					<h2>КЛУБНЫЙ ДОМ</h2>
					<h3>АКАДЕМИЧЕСКИЙ</h3>
				</div>
				<div class="academ-popup__close" @click="closePopup">
					<img src="/img/icons/academ/close.svg" alt="close" />
				</div>
			</div>
			<div class="academ-popup__body">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'vPopup',
		methods: {
			closePopup() {
				this.$emit('closePopup');
			},
		},
	};
</script>

<style lang="scss">
	@import '@/assets/scss/variables';

	.academ-popup {
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
		background-color: $dark-green;
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
			color: $white;
			font-weight: 600;
			h2 {
				font-size: 1.6rem;
				font-weight: 300;
				margin-bottom: 1rem;
			}
			h3 {
				font-size: 3.8rem;
				font-weight: 300;
			}
			h2,
			h3 {
				text-align: center;
			}
		}

		&__body {
			display: flex;
			flex-direction: column;
			position: relative;
			padding: 5rem 9.5rem;
			height: 100%;
			color: $gray;
			.academ-button {
				align-self: center;
				margin-top: 5rem;
				padding: 2rem 5rem;
				border-radius: 4.5rem;
			}
			.v-checkbox {
				margin-top: 2.8rem;
			}
		}
		&__description {
			text-transform: inherit !important;
			font-size: 1.8rem !important;
			color: $white;
			font-weight: 500;
			line-height: 1.3;
			margin-bottom: 6rem;
		}

		&__close {
			position: absolute;
			right: 1.5rem;
			top: 1.5rem;
			cursor: pointer;
			width: 2rem;
			height: 2rem;
			img {
				width: 100%;
			}
		}
	}

	@media (max-width: 620px) {
		.academ-popup {
			width: 95%;
			height: max-content;
			max-height: inherit;
			&__header {
				padding: 6rem 1.5rem;
			}
			&__body {
				padding: 5rem;
			}
		}
	}

	@media (max-width: 480px) {
		.academ-popup {
			height: auto;
			&__title {
				text-align: center;
				h2,
				h3 {
					word-break: break-all;
				}
			}
			&__body {
				padding: 1.7rem 1rem 3rem 1rem;
				.academ-button {
					margin-top: 3rem;
				}
			}
			&__description {
				margin-bottom: 3rem;
			}
		}
	}
</style>
