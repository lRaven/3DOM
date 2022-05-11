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
		background-color: var(--dark-green);
		&.green {
			border-color: #00ff00;

			.notification {
				&__close line {
					stroke: #00ff00;
				}
				&__message {
					color: #00ff00;
				}
			}
		}
		&.blue {
			border-color: var(--middle-blue);
			.notification {
				&__close line {
					stroke: var(--middle-blue);
				}
				&__message {
					color: var(--middle-blue);
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
			border-color: var(--red);
			.notification {
				&__close line {
					stroke: var(--red);
				}
				&__message {
					color: var(--red);
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
