<template>
	<label class="checkbox">
		<input type="checkbox" class="checkbox__real" required />
		<span class="checkbox__fake"> </span>
		<span class="checkbox__text">
			{{ text }}
		</span>
	</label>
</template>

<script>
	export default {
		name: "Checkbox",
		props: {
			text: String,
		},
	};
</script>

<style lang="scss" scoped>
	.checkbox {
		display: flex;
		align-items: center;
		gap: 1.4rem;
		margin-top: 2.8rem;
		margin-bottom: 6rem;
		&__real {
			display: none;
			&:checked + .checkbox__fake {
				&::before {
					width: 0.5rem;
				}
				&::after {
					width: 0.8rem;
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
			border: 1px solid var(--white);
			&::before {
				content: "";
				position: absolute;
				left: 20%;
				height: 0.2rem;
				background-color: var(--white);
				transform: rotate(45deg);
			}
			&::after {
				content: "";
				position: absolute;
				left: 30%;
				top: 35%;
				height: 0.2rem;
				background-color: var(--white);
				transform: rotate(-45deg);
			}
		}
		&__text {
			font-size: 1.3rem;
		}
	}
</style>
