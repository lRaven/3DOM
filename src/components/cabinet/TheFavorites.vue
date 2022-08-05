<template>
	<div class="favorites">
		<h1 class="favorites__title">Избранное</h1>
		<div class="favorites__empty" v-if="favorites === 0">
			<img src="img/cabinet/empty.svg" alt="" />
			<div class="favorites__empty-text">
				<p>Вы пока ничего не добавили в избранное</p>
				<v-button
					:text="'Выбрать планировку'"
					:type="'button'"
					class="blue"
				></v-button>
			</div>
		</div>
		<div class="favorites__header" v-if="favorites !== 0">
			<p>Сортировать по:</p>
			<label class="favorites__sort">
				<input
					type="radio"
					name="sort"
					class="favorites__radio-real"
					checked
				/>
				<span class="favorites__radio-fake" @click="sort('price')"
					>Цене</span
				>
			</label>
			<label class="favorites__sort">
				<input type="radio" name="sort" class="favorites__radio-real" />
				<span class="favorites__radio-fake" @click="sort('area')"
					>Площади</span
				>
			</label>
		</div>
		<div class="favorites__body" v-if="favorites !== 0">
			<favorites-apartment />
		</div>
	</div>
</template>

<script>
	import store from "../../store";
	import vButton from "../general/v-button.vue";
	import FavoritesApartment from "./FavoritesApartment.vue";

	import {
		getFavoriteApartmentNumber,
		sortFavoriteList,
	} from "../../api/favorite";

	export default {
		store,
		name: "TheFavorites",
		data() {
			return {};
		},
		computed: {
			favorites: () => {
				return store.getters.FAVORITES.length;
			},
		},
		components: {
			vButton,
			FavoritesApartment,
		},
		methods: {
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
						store.commit("SET_SORT", "price");
						break;
					}
					case "area": {
						store.commit("SET_SORT", "area");
						break;
					}
				}
				sortFavoriteList();
			},
		},
		beforeMount() {
			sortFavoriteList("price");
		},
		mounted() {
			this.openPopup();
			getFavoriteApartmentNumber();
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.favorites {
		color: $dark;
		&__title {
			font-size: 3rem;
			font-weight: 600;
			margin-bottom: 4rem;
		}
		&__empty {
			display: flex;
			gap: 4rem;
			box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
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
		&__header {
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
		&__sort {
			cursor: pointer;
		}
		&__radio {
			&-real {
				display: none;
				&:checked + .favorites__radio-fake {
					color: $blue;
				}
			}
			&-fake {
				text-decoration: underline;
			}
		}

		&__body {
		}
	}

	.button {
		border-radius: 1rem;
	}
</style>
