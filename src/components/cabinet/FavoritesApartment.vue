<template>
	<div class="favorites-apartment">
		<img :src="apartment.image" alt="" class="favorites-apartment__image" />

		<div class="favorites-apartment__block">
			<p class="favorites-apartment__rooms">
				{{
					apartment.type === 5
						? "Студия"
						: `${apartment.type}-комнатная`
				}}
			</p>

			<div class="favorites-apartment__price-wrapper">
				<p class="favorites-apartment__description">Стоимость:</p>
				<p class="favorites-apartment__price">
					{{ apartment.cost }} руб.
				</p>
			</div>
		</div>

		<div class="favorites-apartment__block">
			<p class="favorites-apartment__description">Площадь</p>
			<p class="favorites-apartment__area favorites-apartment__value">
				{{ apartment.area }} м2
			</p>
		</div>

		<div class="favorites-apartment__block">
			<p class="favorites-apartment__description">Этаж</p>
			<p class="favorites-apartment__floor favorites-apartment__value">
				{{ apartment.floor }}
			</p>
		</div>

		<div class="favorites-apartment__block">
			<p class="favorites-apartment__description">Проект</p>
			<p class="favorites-apartment__project favorites-apartment__value">
				Академический
			</p>
		</div>

		<div class="favorites-apartment__block">
			<p class="favorites-apartment__description">Секция</p>
			<p
				class="favorites-apartment__section favorites-apartment__value centered"
			>
				{{ apartment.section }}
			</p>
		</div>

		<v-button
			text="Получить консультацию"
			type="button"
			color="gray"
		></v-button>

		<v-button
			text="Забронировать"
			type="button"
			class="favorites-apartment__booking"
		></v-button>

		<v-button text="" class="favorites-apartment__link">
			<template v-slot:icon>
				<img
					src="/img/icon/cabinet/link.svg"
					alt=""
					class="favorites-apartment__link-icon"
				/>
			</template>
		</v-button>

		<button
			type="button"
			class="favorites-apartment__favorite"
			@click="isFavorite ? removeFromFavoriteList() : addToFavoriteList()"
		>
			<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
				<path
					:fill="isFavorite ? '#007bfc' : '#fff'"
					d="M62,21a15.28,15.28,0,0,1-4.14,10.47L32,59,6.14,31.42A15.28,15.28,0,0,1,2,21C2,7.8,17.34,1,27.8,8.85L32,12l4.2-3.15C46.7,1,62,7.83,62,21Z"
				/>
				<path
					:fill="isFavorite ? '#007bfc' : 'currentColor'"
					d="M32,61c-1.25,0,.87,1.86-27.32-28.21A17.28,17.28,0,0,1,0,21C0,6.13,17.24-1.56,29,7.25L32,9.5l3-2.25C46.77-1.56,64,6.14,64,21a17.31,17.31,0,0,1-4.68,11.84C31.2,62.78,33.24,61,32,61ZM17.83,7.53A13.45,13.45,0,0,0,4.93,25.85C6.22,29.09,5.8,28.13,32,56.08,59.14,27.14,57.8,29,59.07,25.84A13.3,13.3,0,0,0,57.85,13.7C53.46,7,43.94,5.55,37.4,10.45L33.2,13.6C30.13,15.9,27.33,7.53,17.83,7.53Z"
				/>
			</svg>
		</button>
	</div>
</template>

<script>
	import {
		getFavoriteApartmentNumber,
		addFavorite,
		removeFavorite,
	} from "@/api/favorite";
	import { returnErrorMessages } from "@/js/returnErrorMessages";

	import { mapState } from "vuex";

	import { useToast } from "vue-toastification";

	export default {
		name: "FavoritesApartment",
		props: {
			apartment: {
				value: Object,
				required: true,
			},
			favorites: {
				value: Array,
				required: true,
			},
		},
		computed: {
			...mapState({
				user_id: (state) => state.cabinet.user.id,
			}),

			FavoriteApartment() {
				return this.favorites.find((apartment) => {
					return apartment.id === this.apartment.id;
				});
			},

			isFavorite() {
				const result = this.favorites.find((apartment) => {
					return apartment.id === this.apartment.id;
				});

				if (result) return true;
				else return false;
			},
		},
		methods: {
			addFavorite,
			removeFavorite,

			async addToFavoriteList() {
				try {
					const response = await addFavorite(
						this.user_id,
						this.apartment.id
					);
					if (response.status === 201) {
						this.toast.success(
							`Квартира №${this.apartment.number} добавлена в избранное`
						);
						console.log("Add to favorite");

						getFavoriteApartmentNumber();
					}
					if (response.status === 400) {
						const error_list = returnErrorMessages(response.data);
						error_list.forEach((el) => {
							this.toast.error(el);
						});
					}
				} catch (err) {
					throw new Error(err);
				}
			},

			async removeFromFavoriteList() {
				try {
					const response = await removeFavorite(
						this.FavoriteApartment.favorite_id
					);
					if (response.status === 204) {
						this.toast.success(
							`Квартира №${this.apartment.number} удалена из избранного`
						);
						console.log("Removed from favorite");

						getFavoriteApartmentNumber();
					}
					if (response.status === 400) {
						const error_list = returnErrorMessages(response.data);
						error_list.forEach((el) => {
							this.toast.error(el);
						});
					}
				} catch (err) {
					throw new Error(err);
				}
			},
		},
		setup() {
			const toast = useToast();
			return { toast };
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.favorites-apartment {
		display: grid;
		grid-template-columns: 13rem repeat(5, max-content);
		grid-gap: 2rem;
		justify-content: space-between;
		position: relative;
		padding: 4rem 7.4rem 4.5rem 7.4rem;
		border-radius: 3rem;
		box-shadow: $shadow;
		background-color: #fff;
		font-size: 1.6rem;
		+ .favorites-apartment {
			margin-top: 2.3rem;
		}

		&__image {
			width: 100%;
			height: 100%;
			max-height: 20rem;
			object-fit: contain;
			grid-area: 1/1/3/1;
		}

		&__price {
			font-size: 1.8rem;
			color: $blue;
			font-weight: 700;
			&-wrapper {
				display: flex;
				align-items: center;
				gap: 1rem;
			}
		}

		&__block {
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}

		&__description {
			color: $middle-gray;
			font-weight: 500;
		}

		&__value {
			font-weight: 600;
			&.centered {
				text-align: center;
			}
		}

		&__favorite {
			height: 4rem;
			width: 4rem;
			background-color: transparent;
			margin-left: auto;
			margin-right: auto;
			svg {
				path {
					transition: all 0.2s ease;
				}
			}
		}

		&__booking {
			grid-column: 3/5;
		}

		&__link {
			padding: 1rem !important;
			min-width: inherit;
			&-icon {
				height: 2rem;
				width: 2rem;
			}
		}

		.v-button {
			border-radius: 1rem;
			font-weight: 500;
			padding: 1rem 4rem;
		}

		.v-button,
		.favorites-apartment__favorite {
			margin-top: auto;
		}
	}
</style>
