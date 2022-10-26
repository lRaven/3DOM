<template>
	<div
		class="subcategory-card"
		:class="{ active: isActive }"
		@click="$emit('select-subcategory', subcategory.id)"
	>
		<img
			:src="subcategory.img || `/img/cabinet/catalog__photo-default.svg`"
			alt="icon"
			class="subcategory-card__img"
			v-once
		/>
		<p class="subcategory-card__text" v-once>{{ subcategory.name }}</p>
	</div>
</template>

<script>
	import { computed } from 'vue';

	export default {
		name: 'SubcategoryCard',
		emits: ['select-subcategory'],
		props: {
			subcategory: {
				value: Object,
				required: true,
			},
			selectedSubcategory: {
				value: Number,
				required: true,
			},
		},
		setup(props) {
			const isActive = computed(
				() => props.subcategory.id === props.selectedSubcategory
			);

			return {
				isActive,
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables.scss';

	.subcategory-card {
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 1.2rem;
		padding: 1rem;
		border-radius: 1rem;
		width: 100%;
		box-shadow: $shadow;
		background-color: $white;
		border: 0.1rem solid $white;
		transition: all 0.2s ease;
		&:hover {
			border-color: $blue;
		}
		&.active {
			border-color: $blue;
		}
		&__img {
			height: 5rem;
			width: 5rem;
			object-fit: contain;
		}
		&__text {
			color: $dark-blue;
			font-size: 1.4rem;
			line-height: 1.3;
		}
	}
</style>
