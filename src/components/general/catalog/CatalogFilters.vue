<template>
	<div class="catalog-filters animate__animated animate__fadeInUp wow">
		<div class="catalog-filters__settings">
			<div class="catalog-filters__type">
				<button
					class="catalog-filters__tab-btn"
					:class="{ active: this.tab === 'secondary' }"
					@click="this.tab = 'secondary'"
				>
					Вторичное
				</button>
				<button
					class="catalog-filters__tab-btn"
					:class="{ active: this.tab === 'commercial' }"
					@click="this.tab = 'commercial'"
				>
					Коммерческое
				</button>
			</div>

			<div class="catalog-filters__filters">
				<v-dropdown
					description="Тип недвижимости"
					selected="Выберите из списка"
					v-if="tab === 'commercial'"
					:options="[
						'Торговые',
						'Офисные',
						'Индустриальные',
						'Социальные',
					]"
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

				<v-input
					text="Улица"
					placeholder="Введите название улицы"
				></v-input>

				<div
					class="catalog-filters__apartments"
					v-if="tab === 'secondary'"
				>
					<p class="catalog-filters__apartments-title">Комнатность</p>
					<v-checkbox
						:items="[
							{ id: 1, text: 'Студия' },
							{ id: 2, text: '1' },
							{ id: 3, text: '2' },
							{ id: 4, text: '3' },
							{ id: 5, text: '4+' },
						]"
						name="dates"
					></v-checkbox>
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
			<v-button
				text="Посмотреть"
				class="blue"
				@click="this.$emit('action_btn')"
			></v-button>
			<hr />
		</div>
	</div>
</template>

<script>
	import vDropdown from "@/components/UI/general/v-dropdown.vue";
	import vInput from "@/components/UI/general/v-input.vue";
	import vCheckbox from "@/components/UI/general/v-checkbox.vue";
	import vButton from "@/components/UI/general/v-button.vue";

	export default {
		name: "CatalogFilters",
		data: () => ({
			tab: "secondary",
			filters: [],
		}),
		components: {
			vDropdown,
			vInput,
			vCheckbox,
			vButton,
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	.catalog-filters {
		box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.15);
		border-radius: 1rem;
		background-color: #fff;
		&__type {
			display: flex;
			margin-bottom: 2rem;
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
			display: grid;
			grid-template-columns: repeat(5, max-content);
			gap: 1.3rem 1.8rem;
			&-title {
				font-size: 1.5rem;
				color: $gray;
				font-weight: 600;
				grid-column: 1/6;
			}
		}
		&__submit {
			display: flex;
			align-items: center;
			gap: 5rem;
			padding: 2rem 0;
			@media (max-width: 1240px) {
			}
			hr {
				height: 0.2rem;
				width: 100%;
				background-color: $blue;
			}
			.v-button {
				padding: 1.2rem 7rem;
			}
		}
	}
</style>
