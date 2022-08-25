<template>
	<div class="page-favorites">
		<div class="page-favorites__header">
			<h1 class="page-favorites__title">
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

		<div class="page-favorites__body">
			<transition mode="out-in" name="fade-up-fast">
				<div
					class="page-favorites__empty"
					v-show="favorites.length === 0 && !isAllApartmentVisible"
				>
					<img src="/img/cabinet/empty.svg" alt="" />
					<div class="page-favorites__empty-text">
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
				class="page-favorites__sort-panel"
				v-show="favorites.length !== 0 && !isAllApartmentVisible"
			>
				<p>Сортировать по:</p>
				<label class="page-favorites__sort">
					<input
						type="radio"
						name="sort"
						value="cost"
						class="page-favorites__radio-real"
						v-model="sortBy"
						checked
					/>
					<span class="page-favorites__radio-fake"> Цене </span>
				</label>
				<label class="page-favorites__sort">
					<input
						type="radio"
						name="sort"
						value="area"
						class="page-favorites__radio-real"
						v-model="sortBy"
					/>
					<span class="page-favorites__radio-fake"> Площади </span>
				</label>
			</div>

			<transition mode="out-in" name="fade-up-fast">
				<div
					class="page-favorites__list"
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
						class="page-favorites__body-more"
						@click="isAllApartmentVisible = true"
					></v-button>
				</div>
			</transition>

			<transition mode="out-in" name="fade-up-fast">
				<div
					class="page-favorites__list"
					v-show="isAllApartmentVisible && isAllApartmentsLoaded"
				>
					<favorites-apartment
						v-for="apartment in favoritesAndApartments"
						:key="apartment.id"
						:apartment="apartment"
						:favorites="favorites"
					></favorites-apartment>
				</div>
			</transition>

			<v-loader
				v-show="!isAllApartmentsLoaded && isAllApartmentVisible"
			></v-loader>
		</div>
	</div>
</template>

<script>
	import FavoritesApartment from "@/components/cabinet/FavoritesApartment.vue";

	import { mapState, mapMutations } from "vuex";

	import { getApartments } from "@/api/academ";
	import { sortArrayByNumberKey } from "@/js/sortArray";

	export default {
		name: "PageFavorites",
		components: { FavoritesApartment },
		watch: {
			async isAllApartmentVisible() {
				if (this.isAllApartmentVisible) {
					try {
						const response = await getApartments();
						if (response.status === 200) {
							this.isAllApartmentsLoaded = true;
							window.scrollTo(0, 0);
						}
					} catch (err) {
						this.isAllApartmentsLoaded = true;
						throw new Error(err);
					}
				} else {
					this.sortBy = "cost";
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
		data: () => ({
			isAllApartmentVisible: false,
			isAllApartmentsLoaded: false,
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
			this.sortedFavoriteApartments = sortArrayByNumberKey({
				array: this.favorites,
				key: this.sortBy,
				direction: "ascending",
			});
		},
		unmounted() {
			this.CLEAR_APARTMENTS();
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.page-favorites {
		color: $dark;
		position: relative;
		height: 100%;

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
			grid-area: 1/1;

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
				grid-area: 1/1;
				p {
					color: #979797;
				}
			}
		}
		&__radio {
			&-real {
				display: none;
				&:checked + .page-favorites__radio-fake {
					color: $blue;
				}
			}
			&-fake {
				text-decoration: underline;
			}
		}

		&__body {
			display: grid;
			&-more {
				margin: auto;
				margin-top: 4rem;
			}
		}

		&__list {
			grid-area: 2/1;
		}

		.v-loader {
			grid-area: 1/1;
		}
	}
</style>
