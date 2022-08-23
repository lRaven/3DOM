<template>
	<div class="the-favorites">
		<h1 class="the-favorites__title">
			{{ isAllApartmentVisible ? "Добавление в избранное" : "Избранное" }}
		</h1>

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

		<div
			class="the-favorites__sort-panel"
			v-show="favorites.length !== 0 && !isAllApartmentVisible"
		>
			<p>Сортировать по:</p>
			<label class="the-favorites__sort">
				<input
					type="radio"
					name="sort"
					class="the-favorites__radio-real"
					checked
				/>
				<span class="the-favorites__radio-fake" @click="sort('price')">
					Цене
				</span>
			</label>
			<label class="the-favorites__sort">
				<input
					type="radio"
					name="sort"
					class="the-favorites__radio-real"
				/>
				<span class="the-favorites__radio-fake" @click="sort('area')">
					Площади
				</span>
			</label>
		</div>

		<div
			class="the-favorites__body"
			v-show="favorites.length !== 0 && !isAllApartmentVisible"
		>
			<favorites-apartment
				v-for="apartment in favorites"
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

		<div class="the-favorites__body" v-show="isAllApartmentVisible">
			<favorites-apartment
				v-for="apartment in favoritesAndApartments"
				:key="apartment.id"
				:apartment="apartment"
				:favorites="favorites"
			></favorites-apartment>
		</div>
	</div>
</template>

<script>
	import FavoritesApartment from "@/components/cabinet/FavoritesApartment.vue";
	import { mapState, mapMutations } from "vuex";

	import { getApartments } from "@/api/academ";
	import { sortFavoriteList } from "@/api/favorite";

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
		data: () => ({ isAllApartmentVisible: false }),
		methods: {
			...mapMutations(["SET_SORT", "SET_TAB"]),

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

			//* вызов функции сортировки
			sort(way) {
				switch (way) {
					case "price": {
						this.SET_SORT("price");
						break;
					}
					case "area": {
						this.SET_SORT("area");
						break;
					}
				}
				sortFavoriteList();
			},
		},
		created() {
			this.SET_TAB("favorites");
			getApartments();
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.the-favorites {
		color: $dark;
		&__title {
			font-size: 3rem;
			font-weight: 600;
			margin-bottom: 4rem;
		}
		&__empty {
			display: flex;
			gap: 4rem;
			box-shadow: $shadow;
			border-radius: 3rem;
			padding: 6rem;
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
			&-more {
				margin: auto;
				margin-top: 4rem;
			}
		}
	}

	.button {
		border-radius: 1rem;
	}
</style>
