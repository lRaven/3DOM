<template>
	<label class="v-radio" v-for="item in items" :key="item.id">
		<input type="radio" class="v-radio__real" :name="name" />
		<span class="v-radio__fake">{{ item.text }}</span>
	</label>
</template>

<script>
	export default {
		name: "vRadio",
		props: {
			items: Array,
			name: String,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.v-radio {
		&__real {
			display: none;
			&:checked + .v-radio__fake {
				background-color: $blue;
				color: $white;
				transition: all 0.3s ease;
			}
		}
		&__fake {
			cursor: pointer;
			user-select: none;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: $light-gray;
			color: $dark;
			border-radius: 50%;
			width: 4.5rem;
			height: 4.5rem;
			transition: all 0.3s ease;
			&:hover {
				background-color: $blue;
				color: $white;
				transition: all 0.5s ease;
			}
		}
	}
</style>
