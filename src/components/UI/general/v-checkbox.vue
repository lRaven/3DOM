<template>
	<label class="v-checkbox" v-for="item in items" :key="item.id">
		<input type="checkbox" class="v-checkbox__real" :name="name" />
		<span class="v-checkbox__fake" :class="circle">{{ item.text }}</span>
	</label>
</template>

<script>
	export default {
		name: "vCheckbox",
		props: {
			items: Array,
			name: String,
			circle: String,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.v-checkbox {
		&__real {
			display: none;
			&:checked + .v-checkbox__fake {
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
			width: 9.5rem;
			border-radius: 2rem;
			padding: 2.2rem 1.3rem;
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
	.circle {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		border-radius: 50%;
		width: 4.5rem;
		height: 4.5rem;
	}
</style>
