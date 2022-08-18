<template>
	<div class="the-favorites">
		<h1 class="the-favorites__title">Избранное</h1>
		<div class="the-favorites__empty" v-show="favorites_length === 0">
			<img src="/img/cabinet/empty.svg" alt="" />
			<div class="the-favorites__empty-text">
				<p>Вы пока ничего не добавили в избранное</p>
				<v-button
					:text="'Выбрать планировку'"
					:type="'button'"
					class="blue"
				></v-button>
			</div>
		</div>
		<div class="the-favorites__header" v-show="favorites_length !== 0">
			<p>Сортировать по:</p>
			<label class="the-favorites__sort">
				<input
					type="radio"
					name="sort"
					class="the-favorites__radio-real"
					checked
				/>
				<span class="the-favorites__radio-fake" @click="sort('price')"
					>Цене</span
				>
			</label>
			<label class="the-favorites__sort">
				<input
					type="radio"
					name="sort"
					class="the-favorites__radio-real"
				/>
				<span class="the-favorites__radio-fake" @click="sort('area')"
					>Площади</span
				>
			</label>
		</div>
		<div class="the-favorites__body" v-show="favorites_length !== 0">
			<favorites-apartment />
		</div>
	</div>
</template>

<script>
	import vButton from "@/components/UI/general/v-button.vue";
	import FavoritesApartment from "@/components/cabinet/FavoritesApartment.vue";
	import { mapState, mapMutations } from "vuex";

	import { sortFavoriteList } from "@/api/favorite";

	export default {
		name: "TheFavorites",
		watch: {
			favorites: {
				handler() {
					this.favorites_length = this.favorites.length;
				},
				deep: true,
			},
		},
		computed: {
			...mapState({
				favorites: (state) => state.cabinet.favorites,
			}),
		},
		data: () => ({
			favorites_length: 0,
		}),
		components: {
			vButton,
			FavoritesApartment,
		},
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
		beforeMount() {
			sortFavoriteList("price");
		},
		created() {
			this.SET_TAB("favorites");
		},
		mounted() {
			this.openPopup();

			if (this.favorites) {
				this.favorites_length = this.favorites.length;
			}
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
				&:checked + .the-favorites__radio-fake {
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
