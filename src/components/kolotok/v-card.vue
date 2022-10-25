<template>
	<div
		class="v-card-wrapper"
		@mouseenter="isMaximize = true"
		@mouseleave="isMaximize = false"
	>
		<div class="v-card">
			<div class="v-card__main">
				<v-discount
					class="v-card__discount"
					v-show="card.discount_percent"
					:discount="card.discount_percent"
				></v-discount>
				<v-favorite
					@add-favorite="addFavorite"
					@remove-favorite="removeFavorite"
					class="v-card__favorite"
					:is-favorite="isFavorite"
					v-model="isFavorite"
				></v-favorite>

				<img
					:src="card.img ? card.img : '/img/cabinet/catalog__photo-default.svg'"
					alt="photo"
					class="v-card__img"
				/>
			</div>
			<div class="v-card__footer">
				<div class="v-card__row" v-once>
					<p class="v-card__name">{{ card.name }}</p>
				</div>
				<div class="v-card__row" v-once>
					<p class="v-card__price">{{ card.price }}₽.</p>
					<p class="v-card__price-old" v-if="card.price_old">
						{{ card.price_old }}₽.
					</p>
				</div>
			</div>
		</div>
		<transition mode="out-in">
			<v-card-maximize
				v-show="isMaximize"
				:card="card"
				:is-favorite="isFavorite"
				@add-favorite="addFavorite"
				@remove-favorite="removeFavorite"
				@remove-maximize-Card="removeMaximizeCard"
			></v-card-maximize>
		</transition>
	</div>
</template>

<script>
	import { ref } from 'vue';

	import vDiscount from '@/components/kolotok/v-discount';
	import vFavorite from '@/components/kolotok/v-favorite';

	import { defineAsyncComponent } from 'vue';
	const vCardMaximize = defineAsyncComponent(() =>
		import('@/components/kolotok/v-card-maximize.vue')
	);

	export default {
		name: 'vCard',
		components: {
			vDiscount,
			vFavorite,
			vCardMaximize,
		},
		props: { card: Object },
		setup() {
			const isFavorite = ref(false);
			const addFavorite = () => {
				isFavorite.value = true;
			};
			const removeFavorite = () => {
				isFavorite.value = false;
			};

			const isMaximize = ref(false);
			const maximizeCard = () => {
				isMaximize.value = true;
			};
			const removeMaximizeCard = () => {
				isMaximize.value = false;
			};

			return {
				isFavorite,
				addFavorite,
				removeFavorite,

				isMaximize,
				maximizeCard,
				removeMaximizeCard,
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables.scss';

	.v-card {
		position: relative;
		color: $dark-blue;
		transition: all 0.2s ease;
		&-wrapper {
			position: relative;
			min-width: 21rem;
			width: 100%;
			@media (max-width: 1160px) {
				min-width: 23.4rem;
			}
			@media (max-width: 540px) {
				min-width: 14rem;
			}
		}

		&__main {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 1.8rem;
			border-radius: 3rem;
			height: 22rem;
			margin-bottom: 1rem;
			box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.1);
			@media (max-width: 767px) {
				border-radius: 2rem;
			}
			@media (max-width: 540px) and (min-width: 376px) {
				height: 14rem;
			}
		}
		&__discount {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			left: 1.5rem;
			top: 1.5rem;
			width: 5rem;
			height: 5rem;
			border-radius: 50%;
			background-color: $yellow;
			font-size: 1.6rem;
			font-weight: 600;
			animation-delay: 0.2s;
		}
		&__favorite {
			cursor: pointer;
			align-self: flex-end;
			justify-content: flex-start;
			position: absolute;
			right: 1.5rem;
			top: 1.5rem;
			animation-delay: 0.2s;

			&-icon {
				pointer-events: all;
			}
		}
		&__img {
			max-width: 100%;
			max-height: 20rem;
			object-fit: contain;
			@media (max-width: 540px) and (min-width: 376px) {
				max-height: 12rem;
			}
		}

		&__footer {
		}
		&__row {
			display: flex;
			align-items: center;
			gap: 1.3rem;
			+ .v-card__row {
				margin-top: 0.5rem;
			}
		}
		&__price {
			font-weight: 600;
			font-size: 2rem;
			&-old {
				text-decoration: line-through;
				color: $gray;
				font-size: 1.2rem;
			}
		}
		&__name {
			font-weight: 300;
			line-height: 1.3;
			font-size: 1.6rem;
		}
	}
</style>
