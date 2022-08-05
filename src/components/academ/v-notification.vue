<template>
	<div class="notification" :class="color">
		<div class="notification__col">
			<img :src="image" alt="icon" />
			<p class="notification__message">{{ message }}</p>
		</div>
		<div class="notification__col" @click="closeNotification">
			<svg
				width="25"
				height="24"
				viewBox="0 0 25 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="notification__close"
			>
				<line
					x1="1.68652"
					y1="22.2132"
					x2="22.8997"
					y2="1.00002"
					stroke="#D5BFA8"
					stroke-width="2"
					stroke-linecap="round"
				/>
				<line
					x1="1"
					y1="-1"
					x2="31"
					y2="-1"
					transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 22.6274 23.6274)"
					stroke="#D5BFA8"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
		</div>
	</div>
</template>

<script>
	export default {
		name: "vNotification",
		props: {
			color: String,
			image: String,
			message: String,
		},
		methods: {
			closeNotification() {
				this.$emit("closeNotification");
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.notification {
		position: fixed;
		top: 7rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 5rem;
		padding: 1rem 2rem;
		height: 6rem;
		max-width: max-content;
		width: 100%;
		border: 0.1rem solid transparent;
		border-radius: 1rem;
		z-index: 4;
		background-color: $dark-green;
		&.green {
			border-color: $green;

			.notification {
				&__close line {
					stroke: $green;
				}
				&__message {
					color: $green;
				}
			}
		}
		&.blue {
			border-color: $middle-blue;
			.notification {
				&__close line {
					stroke: $middle-blue;
				}
				&__message {
					color: $middle-blue;
				}
			}
		}
		&.yellow {
			border-color: yellow;
			.notification {
				&__close line {
					stroke: yellow;
				}
				&__message {
					color: yellow;
				}
			}
		}
		&.red {
			border-color: $red;
			.notification {
				&__close line {
					stroke: $red;
				}
				&__message {
					color: $red;
				}
			}
		}
		&__col {
			display: flex;
			align-items: center;
			gap: 1rem;
			&:last-child {
				cursor: pointer;
			}
		}
		&__message {
			font-size: 1.6rem;
			font-weight: 500;
		}
		&__close {
			width: 2rem;
		}
	}
</style>
