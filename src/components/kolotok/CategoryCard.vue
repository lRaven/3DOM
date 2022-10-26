<template>
	<div class="category-card">
		<div
			class="category-card__header shadow"
			@click="isCardOpen ? (isCardOpen = false) : (isCardOpen = true)"
		>
			<div class="category-card__header-col">
				<img
					class="category-card__icon"
					:src="category.icon || '/img/cabinet/catalog__photo-default.svg'"
					:alt="`Категория '${category.slug}'`"
				/>

				<p class="category-card__name">{{ category.name }}</p>
			</div>

			<button
				class="category-card__toggle"
				:class="{ active: isCardOpen }"
				type="button"
			>
				<svg
					width="24"
					height="13"
					viewBox="0 0 24 13"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="category-card__toggle-icon"
					:class="{ active: isCardOpen }"
				>
					<path
						d="M1 1L11.2929 11.2929C11.6834 11.6834 12.3166 11.6834 12.7071 11.2929L23 0.999999"
						:stroke="isCardOpen ? '#fff' : `#007BFC`"
						stroke-width="2"
						stroke-linecap="round"
					/>
				</svg>
			</button>
		</div>

		<transition mode="out-in" name="fade-up-fast">
			<div
				v-show="isCardOpen"
				class="category-card__body"
				:class="{ active: isCardOpen }"
			>
				<div
					class="category-card__subcategories"
					v-if="currentSubcategories.length > 0"
				>
					<SubcategoryCard
						v-for="subcategory in currentSubcategories"
						:key="subcategory.id"
						:subcategory="subcategory"
						:selected-subcategory="selectedSubcategory"
						@select-subcategory="selectSubcategory"
					></SubcategoryCard>
				</div>
				<p class="category-card__empty" v-else>Подкатегорий нет</p>

				<div class="category-card__products">
					<v-card
						v-for="product in products"
						:key="product.id"
						:card="product"
						@add-product="addProduct"
						@remove-product="removeProduct"
					></v-card>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import { ref, computed, watch } from 'vue';
	import { getProducts } from '@/api/kolotok';

	import SubcategoryCard from '@/components/kolotok/SubcategoryCard.vue';
	import vCard from '@/components/kolotok/v-card.vue';

	export default {
		name: 'CategoryCard',
		components: {
			SubcategoryCard,
			vCard,
		},
		props: {
			category: {
				value: Object,
				required: true,
			},
			subcategories: {
				value: Array,
				required: true,
			},
		},
		setup(props) {
			const isCardOpen = ref(false);
			watch(isCardOpen, () => {
				if (isCardOpen.value && products.value.length === 0) {
					// getProductList();
				}
			});

			const currentSubcategories = computed(() => {
				const find = props.subcategories.filter(
					(el) => el.category.id === props.category.id
				);
				if (find) return find;
				else return [];
			});
			const selectedSubcategory = ref(null);
			const selectSubcategory = (subcategoryId) => {
				selectedSubcategory.value = subcategoryId;
			};
			watch(selectedSubcategory, () => getProductList());

			const products = ref([]);
			const getProductList = async () => {
				try {
					const response = await getProducts(
						`?sub_category=${selectedSubcategory.value}`
					);
					if (response.status === 200) {
						products.value = response.data.results;
					}
				} catch (err) {
					throw new Error(err);
				}
			};

			const addProduct = (product) => {
				console.log(product);
			};
			const removeProduct = (product) => {
				console.log(product);
			};

			return {
				isCardOpen,

				currentSubcategories,
				selectedSubcategory,
				selectSubcategory,

				products,

				addProduct,
				removeProduct,
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.category-card {
		+ .category-card {
			margin-top: 2rem;
		}
		&__header {
			cursor: pointer;
			user-select: none;
			box-shadow: $shadow;
			border-radius: 2rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 5rem;
			background-color: $white;
			overflow: hidden;
			&-col {
				display: flex;
				align-items: center;
				gap: 3rem;
			}
		}

		&__icon {
			width: 10rem;
			height: 6rem;
			object-fit: contain;
		}
		&__name {
			font-size: 1.6rem;
			color: $dark-blue;
		}

		&__toggle {
			background-color: $white;
			padding: 2.6rem 1.6rem;
			transition: background-color 0.2s ease;
			&.active {
				background-color: $blue;
			}
			&-icon {
				width: 2.3rem;
				height: 1.3rem;
				object-fit: contain;
				transition: transform 0.2s ease;
				&.active {
					transform: rotate(180deg);
				}
			}
		}

		&__body {
			&.active {
				padding: 4rem 0 6rem 0;
			}
		}

		&__subcategories {
			display: flex;
			flex-wrap: wrap;
			gap: 3rem;
			margin-bottom: 3rem;
			.subcategory-card {
				min-width: 28rem;
				width: fit-content;
			}
		}
		&__empty {
			font-size: 2rem;
			font-weight: 500;
			color: $gray;
		}

		&__products {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-gap: 4rem;
			transition: padding 0.2s ease;
			@media (min-width: 1700px) {
				grid-template-columns: repeat(5, 1fr);
			}
			@media (max-width: 1390px) {
				grid-template-columns: repeat(3, 1fr);
			}
			@media (max-width: 1390px) {
				grid-template-columns: repeat(3, 1fr);
			}
			@media (max-width: 1170px) {
				grid-template-columns: repeat(2, 1fr);
			}
			@media (max-width: 1050px) {
				grid-template-columns: repeat(3, 1fr);
			}
			@media (max-width: 900px) {
				grid-template-columns: repeat(2, 1fr);
			}
			@media (max-width: 475px) {
				grid-template-columns: 1fr;
			}
		}
	}
</style>
