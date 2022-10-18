<template>
	<div data-aos="fade-up" class="catalog-filters">
		<div class="catalog-filters__settings">
			<div class="catalog-filters__type">
				<button
					class="catalog-filters__tab-btn"
					:class="{ active: tab === 'secondary' }"
					@click="tab = 'secondary'"
				>
					Вторичное
				</button>
				<button
					class="catalog-filters__tab-btn"
					:class="{ active: tab === 'commercial' }"
					@click="tab = 'commercial'"
				>
					Коммерческое
				</button>
			</div>

			<div class="catalog-filters__filters">
				<v-dropdown
					description="Тип недвижимости"
					selected="Выберите из списка"
					v-show="tab === 'commercial'"
					:options="['Торговые', 'Офисные', 'Индустриальные', 'Социальные']"
				></v-dropdown>

				<v-dropdown
					description="Район"
					selected="Выберите из списка"
					:options="[
						'Ворошиловский',
						'Дзержинский',
						'Кировский',
						'Красноармейский',
						'Краснооктябрьский',
						'Советский',
						'Тракторозаводской',
						'Центральный',
					]"
				></v-dropdown>

				<v-input text="Улица" placeholder="Введите название улицы"></v-input>

				<div class="catalog-filters__apartments" v-show="tab === 'secondary'">
					<p class="catalog-filters__apartments-title">Комнатность</p>
					<div class="catalog-filters__apartments-list">
						<v-checkbox
							v-for="room in filters.rooms"
							:key="room.id"
							name="rooms"
							:description="room.description"
						></v-checkbox>
					</div>
				</div>

				<div class="catalog-filters__areas">
					<p class="catalog-filters__areas-title">Площадь</p>
					<v-input placeholder="От"></v-input>
					<v-input placeholder="До"></v-input>
				</div>

				<div class="catalog-filters__prices">
					<p class="catalog-filters__prices-title">Стоимость</p>
					<v-input placeholder="От"></v-input>
					<v-input placeholder="До"></v-input>
				</div>
			</div>
		</div>

		<div class="catalog-filters__submit">
			<hr />
			<v-button text="Посмотреть" @click="this.$emit('action_btn')"></v-button>
			<hr />
		</div>
	</div>
</template>

<script>
	import vInput from '@/components/UI/general/v-input.vue';

	export default {
		name: 'CatalogFilters',
		components: { vInput },
		setup() {
			const tab = 'secondary';
			const filters = {
				rooms: [
					{ id: 1, description: 'Студия' },
					{ id: 2, description: '1' },
					{ id: 3, description: '2' },
					{ id: 4, description: '3' },
					{ id: 5, description: '4+' },
				],
			};

			return { tab, filters };
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.catalog-filters {
		box-shadow: $shadow;
		border-radius: 1rem;
		background-color: #fff;
		&__type {
			display: flex;
			margin-bottom: 2rem;
			@media (max-width: 767px) {
				flex-direction: column;
			}
		}
		&__tab {
			&-btn {
				position: relative;
				background-color: transparent;
				width: 100%;
				padding: 2rem 4rem;
				font-size: 2.4rem;
				border-bottom: 0.2rem solid $light-gray;
				transition: border 0.3s ease;
				@media (max-width: 767px) {
					padding: 1rem 2rem;
				}
				@media (max-width: 540px) {
					padding: 1rem;
				}
				&:hover {
					border-color: rgba($blue, 0.6);
				}
				&.active {
					border-color: $blue;
					font-weight: 500;
				}
			}
		}
		&__filters {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 2rem;
			padding: 2rem;
			@media (max-width: 1140px) {
				grid-template-columns: repeat(2, 1fr);
			}
			@media (max-width: 767px) {
				grid-template-columns: 1fr;
			}
			@media (max-width: 540px) {
				padding: 1rem;
			}
		}
		&__areas,
		&__prices {
			display: grid;
			grid-template-columns: repeat(2, 12rem);
			grid-gap: 0 2rem;
			&-title {
				grid-column: 1/3;
				font-size: 1.5rem;
				font-weight: 600;
				color: $gray;
			}
		}
		&__settings {
			margin-bottom: 5rem;
			div {
				width: 100%;
			}
		}
		&__apartments {
			&-title {
				font-size: 1.5rem;
				color: $gray;
				font-weight: 600;
				grid-column: 1/6;
				margin-bottom: 1.3rem;
			}
			&-list {
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				gap: 1.3rem;
			}
		}
		&__submit {
			display: flex;
			align-items: center;
			gap: 5rem;
			padding: 2rem 0;
			@media (max-width: 540px) {
				padding: 1rem;
			}
			hr {
				height: 0.2rem;
				width: 100%;
				background-color: $blue;
				@media (max-width: 540px) {
					display: none;
				}
			}
			.v-button {
				padding: 1.2rem 7rem;
				@media (max-width: 767px) {
					width: 100%;
				}
			}
		}
	}
</style>
