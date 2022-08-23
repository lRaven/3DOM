<template>
	<div class="the-favorites">
		<div class="the-favorites__header">
			<h1 class="the-favorites__title">
				{{
					isAllApartmentVisible
						? "Добавление в избранное"
						: "Избранное"
				}}
			</h1>

			<transition mode="out-in">
				<v-button
					text="Моё избранное"
					v-show="isAllApartmentVisible"
					@click="isAllApartmentVisible = false"
				></v-button
			></transition>
		</div>

		<transition mode="out-in" name="fade-up-fast">
			<div
				class="the-favorites__empty"
				v-show="favorites.length === 0 && !isAllApartmentVisible"
			>
				<img src="/img/cabinet/empty.svg" alt="" />
				<div class="the-favorites__empty-text">
					<p>Вы пока ничего не добавили в избранное</p>
					<v-button
						text="Выбрать планировку"
						type="button"
						@click="isAllApartmentVisible = true"
					></v-button>
				</div>
			</div>
		</transition>

		<div
			class="the-favorites__sort-panel"
			v-show="favorites.length !== 0 && !isAllApartmentVisible"
		>
			<p>Сортировать по:</p>
			<label class="the-favorites__sort">
				<input
					type="radio"
					name="sort"
					value="cost"
					class="the-favorites__radio-real"
					v-model="sortBy"
					checked
				/>
				<span class="the-favorites__radio-fake"> Цене </span>
			</label>
			<label class="the-favorites__sort">
				<input
					type="radio"
					name="sort"
					value="area"
					class="the-favorites__radio-real"
					v-model="sortBy"
				/>
				<span class="the-favorites__radio-fake"> Площади </span>
			</label>
		</div>

		<transition mode="out-in" name="fade-up-fast">
			<div
				class="the-favorites__body"
				v-show="favorites.length !== 0 && !isAllApartmentVisible"
			>
				<favorites-apartment
					v-for="apartment in sortedFavoriteApartments"
					:key="apartment.id"
					:apartment="apartment"
					:favorites="favorites"
				></favorites-apartment>

				<v-button
					text="Показать ещё"
					class="the-favorites__body-more"
					@click="isAllApartmentVisible = true"
				></v-button>
			</div>
		</transition>

		<transition mode="out-in" name="fade-up-fast">
			<div class="the-favorites__body" v-show="isAllApartmentVisible">
				<favorites-apartment
					v-for="apartment in favoritesAndApartments"
					:key="apartment.id"
					:apartment="apartment"
					:favorites="favorites"
				></favorites-apartment>
			</div>
		</transition>
	</div>
</template>

<script>
	import FavoritesApartment from "@/components/cabinet/FavoritesApartment.vue";
	import { mapState, mapMutations } from "vuex";

	import { getApartments } from "@/api/academ";
	import { sortArrayByNumberKey } from "@/js/sortArray";

	export default {
		name: "TheFavorites",
		components: { FavoritesApartment },
		computed: {
			...mapState({
				favorites: (state) => state.cabinet.favorites,
				apartments: (state) => state.academ.apartments,
			}),

			favoritesAndApartments() {
				const favorites = this.apartments.reduce((acc, cur) => {
					const finded = this.favorites.find((apartment) => {
						return apartment.id === cur.id;
					});
					if (finded) {
						acc.push(cur);
					}
					return acc;
				}, []);

				const otherApartments = this.apartments.reduce((acc, cur) => {
					const finded = this.favorites.find((apartment) => {
						return apartment.id === cur.id;
					});
					if (!finded) {
						acc.push(cur);
					}
					return acc;
				}, []);

				return [...favorites, ...otherApartments];
			},
		},
		watch: {
			isAllApartmentVisible() {
				if (this.isAllApartmentVisible) {
					getApartments();
					window.scrollTo(0, 0);
				}
			},
			favorites: {
				handler() {
					this.sortedFavoriteApartments = [...this.favorites];
				},
				deep: true,
			},

			sortBy() {
				this.sortedFavoriteApartments = sortArrayByNumberKey({
					array: this.favorites,
					key: this.sortBy,
					direction: "ascending",
				});
			},
		},
		data: () => ({
			isAllApartmentVisible: false,
			sortBy: "cost",

			sortedFavoriteApartments: [],
		}),
		methods: {
			...mapMutations([
				"SET_SORT",
				"SET_TAB",
				"SET_FAVORITES",
				"CLEAR_APARTMENTS",
			]),

			//* функция для открытия всплывающего окна
			openPopup() {
				const images = document.querySelectorAll(".favorite__layout");
				images.forEach((image) => {
					image.addEventListener("click", () => {
						const src = image
							.querySelector("img")
							.getAttribute("src");
						const popup = document.querySelector(".popup");
						const popupImg = popup.querySelector(".popup__image");

						popupImg.setAttribute("src", src);
						document
							.querySelector("body")
							.setAttribute("style", "overflow: hidden");
						popup.classList.add("open");
					});
				});
			},
		},
		created() {
			this.SET_TAB("favorites");
			this.sortedFavoriteApartments = [...this.favorites];
		},
		unmounted() {
			this.CLEAR_APARTMENTS();
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-favorites {
		color: $dark;
		display: grid;

		&__header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 5rem;
			margin-bottom: 4rem;
			min-height: 5rem;
		}

		.v-button {
			border-radius: 1rem;
		}

		&__title {
			font-size: 3rem;
			font-weight: 600;
		}
		&__empty {
			display: flex;
			gap: 4rem;
			box-shadow: $shadow;
			border-radius: 3rem;
			padding: 6rem;
			grid-area: 3/1/3/1;
			&-text {
				padding: 1rem 0;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				p {
					font-size: 3rem;
					font-weight: 600;
				}
			}
		}

		&__sort {
			cursor: pointer;
			&-panel {
				display: flex;
				align-items: center;
				font-size: 1.6rem;
				font-weight: 500;
				gap: 4rem;
				margin-bottom: 5rem;
				p {
					color: #979797;
				}
			}
		}
		&__radio {
			&-real {
				display: none;
				&:checked + .the-favorites__radio-fake {
					color: $blue;
				}
			}
			&-fake {
				text-decoration: underline;
			}
		}

		&__body {
			grid-area: 3/1/3/1;
			&-more {
				margin: auto;
				margin-top: 4rem;
			}
		}
	}
</style>
