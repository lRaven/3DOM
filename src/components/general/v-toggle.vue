<template>
	<div class="v-toggle">
		<label>
			<input type="checkbox" class="v-toggle__real" />
			<span class="v-toggle__fake"></span>
		</label>
		<p>{{ description }}</p>
	</div>
</template>

<script>
	export default {
		name: "vToggle",
		props: {
			description: String,
		},
	};
</script>

<style lang="scss" scoped>
	.v-toggle {
		display: flex;
		align-items: center;
		gap: 4.4rem;
		border-radius: 2rem;
		background-color: var(--light-gray);
		padding: 1.4rem 1.5rem;
		&__real {
			display: none;
			&:checked + .v-toggle__fake {
				background-color: var(--blue);
				&::before {
					left: 3.5rem;
					background-color: var(--white);
				}
			}
		}
		&__fake {
			cursor: pointer;
			position: relative;
			display: inline-block;
			height: 3rem;
			width: 6rem;
			background-color: var(--middle-gray);
			border-radius: 2.5rem;
			transition: all 0.2s ease;
			&::before {
				content: "";
				position: absolute;
				top: 50%;
				left: 0.5rem;
				transform: translateY(-50%);
				height: 2rem;
				width: 2rem;
				background-color: var(--blue);
				border-radius: 50%;
				transition: all 0.3s ease;
			}
		}
		p {
			color: var(--dark);
			font-size: 1.6rem;
			font-weight: 600;
		}
	}
</style>
