<template>
	<label class="text-checkbox">
		<input type="checkbox" class="text-checkbox__real" :name="name" />
		<span class="text-checkbox__fake">{{ description }}</span>
	</label>
</template>

<script>
	export default {
		name: 'TextCheckbox',
		props: {
			name: String,
			description: [String, Number],
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.text-checkbox {
		&__real {
			display: none;
			&:checked + .text-checkbox__fake {
				background-color: $blue;
				color: $white;
				transition: all 0.3s ease;
			}
		}
		&__fake {
			cursor: pointer;
			user-select: none;
			display: block;
			text-align: center;
			border-radius: 2rem;
			padding: 1.5rem 2rem;
			min-width: 7rem;
			color: $gray;
			font-size: 1.6rem;
			font-weight: 600;
			background-color: $light-gray;
			filter: drop-shadow(0 0 2rem rgba(0, 0, 0, 0.07));
			transition: all 0.3s ease;
			&:hover {
				background-color: $blue;
				color: $white;
				transition: all 0.5s ease;
			}
		}
	}
</style>
