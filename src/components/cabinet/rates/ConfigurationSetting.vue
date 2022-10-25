<template>
	<div class="configuration-setting">
		<h2 class="configuration-setting__title" v-once>
			Выберите нужные элементы
		</h2>
		<div class="configuration-setting__list">
			<div
				class="configuration-setting__item"
				v-for="item in configurations"
				:key="item.id"
			>
				<v-checkbox
					:value="item.id"
					@change="collectConfigurations"
				></v-checkbox>
				<p
					class="configuration-setting__item-description"
					:class="{
						selected: selectedConfigurations.find((el) => el === item.id),
					}"
				>
					{{ item.description }}
				</p>
				<p class="configuration-setting__item-price">{{ item.price }} рублей</p>
			</div>
		</div>

		<h2 class="configuration-setting__title" v-once>Дополнительные товары</h2>
		<div class="configuration-setting__products">
			<CategoryCard
				v-for="category in categories"
				:key="category.id"
				:category="category"
				:products="products"
			></CategoryCard>
		</div>

		<div class="configuration-setting__bottom">
			<v-button
				text="Назад"
				direction="reverse"
				color="white"
				class="configuration-setting__prev"
				@click="$emit('prev-step')"
			>
				<template #icon>
					<svg
						width="25"
						height="12"
						viewBox="0 0 25 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="configuration-setting__prev-icon"
					>
						<path
							d="M0.469669 6.53033C0.176777 6.23744 0.176777 5.76256 0.469669 5.46967L5.24264 0.696699C5.53553 0.403806 6.01041 0.403806 6.3033 0.696699C6.59619 0.989593 6.59619 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.59619 10.5355 6.59619 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.469669 6.53033ZM25 6.75H1V5.25H25V6.75Z"
							fill="#007BFC"
						/>
					</svg>
				</template>
			</v-button>

			<v-button
				:disabled="selectedConfigurations.length === 0"
				text="Следующий шаг"
				color="white"
				class="configuration-setting__next"
				@click="$emit('next-step')"
			>
				<template #icon>
					<svg
						width="25"
						height="13"
						viewBox="0 0 25 13"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="configuration-setting__next-icon"
					>
						<path
							d="M24.5303 7.03033C24.8232 6.73744 24.8232 6.26256 24.5303 5.96967L19.7574 1.1967C19.4645 0.903806 18.9896 0.903806 18.6967 1.1967C18.4038 1.48959 18.4038 1.96447 18.6967 2.25736L22.9393 6.5L18.6967 10.7426C18.4038 11.0355 18.4038 11.5104 18.6967 11.8033C18.9896 12.0962 19.4645 12.0962 19.7574 11.8033L24.5303 7.03033ZM0 7.25H24V5.75H0V7.25Z"
							fill="#007BFC"
						/>
					</svg>
				</template>
			</v-button>
		</div>
	</div>
</template>

<script>
	import { ref, watch, onMounted } from 'vue';
	import { getCategories, getProducts } from '@/api/kolotok';

	import CategoryCard from '@/components/kolotok/CategoryCard.vue';

	export default {
		name: 'ConfigurationSetting',
		components: { CategoryCard },
		emits: ['prev-step', 'next-step', 'update:configurations'],
		setup(_, { emit }) {
			const configurations = [
				{
					id: 1,
					description:
						'Устройство М-образного водяного полотенцесушителя под ключ',
					price: 13000,
				},
				{
					id: 2,
					description: 'Замена пакетной раковины на тумбу',
					price: 7000,
				},
				{
					id: 3,
					description: 'Устройство раздвижного экрана для ванны ',
					price: 7000,
				},
				{ id: 4, description: 'Устройство фартука из плитки', price: 10000 },
				{
					id: 5,
					description:
						'Устройство горизонтальных коробов в санузле для скрытия щели в торце ванны или труб',
					price: 2200,
				},
				{
					id: 6,
					description:
						'Доплата за укладку плитки вместо линолеума в коридоре или кухне',
					price: 1800,
				},
				{
					id: 7,
					description: 'Дополнительные точечные светильники',
					price: 630,
				},
			];
			const selectedConfigurations = ref([]);
			watch(
				selectedConfigurations,
				() => {
					emit('update:configurations', selectedConfigurations.value);
				},
				{ deep: true }
			);

			const collectConfigurations = (value, checked) => {
				const find = selectedConfigurations.value.find((el) => el === value);

				switch (checked) {
					case true: {
						if (!find) selectedConfigurations.value.push(value);
						break;
					}
					case false: {
						selectedConfigurations.value = selectedConfigurations.value.filter(
							(el) => el !== value
						);
						break;
					}
				}
			};

			const categories = ref([]);
			const getCategoryList = async () => {
				try {
					const response = await getCategories();
					if (response.status === 200) {
						categories.value = response.data;
					}
				} catch (err) {
					throw new Error(err);
				}
			};
			onMounted(() => {
				getCategoryList();
			});

			const products = ref([]);
			const getProductList = async () => {
				try {
					const response = await getProducts();
					if (response.status === 200) {
						products.value = response.data.results;
					}
				} catch (err) {
					throw new Error(err);
				}
			};
			onMounted(() => {
				getProductList();
			});

			return {
				configurations,
				selectedConfigurations,
				collectConfigurations,

				categories,
				products,
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.configuration-setting {
		&__list {
			margin-bottom: 8rem;
		}
		&__item {
			display: grid;
			grid-template-columns: max-content 1fr;
			grid-gap: 0.5rem 2rem;
			+ .configuration-setting__item {
				margin-top: 2rem;
			}
			.v-checkbox {
				grid-row: 1/3;
			}
			&-description {
				font-size: 1.6rem;
				&.selected {
					font-weight: 600;
				}
			}
			&-price {
				font-size: 1.2rem;
				color: #757575;
			}
		}

		&__products {
			margin-bottom: 8rem;
		}

		&__bottom {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 5rem;
		}

		&__next {
			&:disabled {
				.configuration-setting__next-icon {
					path {
						fill: $middle-gray;
					}
				}
			}
		}
	}
</style>
