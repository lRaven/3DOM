<template>
	<div class="v-favorite">
		<svg
			width="29"
			height="27"
			viewBox="0 0 29 27"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="v-favorite__icon"
		>
			<path
				d="M14.5 27L12.3975 25.0578C4.93 18.1864 0 13.6545 0 8.09267C0 3.56076 3.50901 0 7.975 0C10.498 0 12.9195 1.19183 14.5 3.07521C16.0805 1.19183 18.502 0 21.0249 0C25.4911 0 29 3.56076 29 8.09267C29 13.6545 24.0699 18.1864 16.6025 25.0725L14.5 27Z"
				:fill="color"
				@click="isFavorite ? removeFavorite() : addFavorite()"
				class="v-favorite__path"
			/>
		</svg>
	</div>
</template>

<script>
	import { computed } from 'vue';

	export default {
		name: 'vFavorite',
		emits: ['add-favorite', 'remove-favorite'],
		props: { isFavorite: Boolean },
		setup(props, { emit }) {
			const color = computed(() => {
				if (props.isFavorite) return '#fb1174';
				else return '#eaeaea';
			});

			const addFavorite = () => emit('add-favorite');
			const removeFavorite = () => emit('remove-favorite');

			return {
				color,

				addFavorite,
				removeFavorite,
			};
		},
	};
</script>

<style lang="scss" scoped>
	.v-favorite {
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 3rem;
		height: 3rem;
		@media (max-width: 540px) {
			width: 2rem;
			height: 2rem;
		}
		&__icon {
			width: 100%;
			height: 100%;
		}
		&__path {
			pointer-events: all;
		}
	}
</style>
