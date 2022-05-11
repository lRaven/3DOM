<template>
	<label class="v-checkbox" :class="dark">
		<input
			type="checkbox"
			class="v-checkbox__real"
			@change="$emit('update:modelValue', $event.target.checked)"
			required
		/>
		<div class="v-checkbox__fake" :class="academ">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1024 1024"
				role="img"
			>
				<path
					d="M781.255 338.745a64 64 0 00-90.51 0L448 581.49l-82.745-82.745a64 64 0 00-90.51 90.51l128 128a64 64 0 0090.51 0l288-288a64 64 0 000-90.51z"
				/>
			</svg>
		</div>
		<span class="v-checkbox__text">
			{{ text }}
		</span>
	</label>
</template>

<script>
	export default {
		name: "vCheckbox",
		props: {
			text: String,
			dark: String,
			academ: String,
		},
	};
</script>

<style lang="scss" scoped>
	.v-checkbox {
		user-select: none;
		display: flex;
		align-items: center;
		gap: 1.4rem;

		&__real {
			display: none;
			&:checked + .v-checkbox__fake {
				svg {
					fill: var(--white);
				}
			}
		}
		&__fake {
			cursor: pointer;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 1.6rem;
			height: 1.6rem;
			border: 0.1rem solid var(--white);
			svg {
				fill: transparent;
			}
		}
		&__text {
			font-size: 1.3rem;
			width: 100%;
			color: var(--white);
		}

		&.dark {
			.v-checkbox {
				&__real {
					&:checked + .v-checkbox__fake {
						svg {
							fill: var(--gray);
						}
					}
				}
				&__fake {
					border-color: var(--gray);
				}
				&__text {
					color: var(--gray);
				}
			}
		}
	}

	@media (max-width: 1023px) and (min-width: 768px) {
		.academ {
			.v-checkbox {
				&__text {
					font-size: 4rem;
				}
				&__real {
				}
				&__fake {
					width: 3.5rem;
					height: 3.5rem;

					&::before {
					}
				}
			}
		}
		.dark {
			.v-checkbox {
				&__text {
					font-size: 1.3rem;
				}
				&__fake {
					width: 1.6rem;
					height: 1.6rem;
				}
			}
		}
	}
</style>
