<template>
	<div class="apartment-parameters">
		<h2 class="apartment-parameters__title">Выберите нужные элементы</h2>

		<div class="apartment-parameters__row">
			<div class="apartment-parameters__col">
				<p class="apartment-parameters__col-description">
					Укажите количество комнат
				</p>
				<div class="apartment-parameters__rooms">
					<TextRadio
						v-for="room in rooms"
						:key="room.id"
						radioGroup="rooms"
						:description="room.description"
						:value="room.id"
						v-model="selectedRooms"
					></TextRadio>
				</div>
			</div>
			<div class="apartment-parameters__col">
				<v-slider
					title="Укажите площадь квартиры"
					:min="areaParams.min"
					:max="areaParams.max"
					:value="areaParams.max - areaParams.min"
					:step="0.1"
					class="value"
					:minMax="false"
				></v-slider>
			</div>
		</div>

		<FilePicker v-model="layouts"></FilePicker>
	</div>
</template>

<script>
	import { ref, watch } from 'vue';

	export default {
		name: 'ApartmentParameters',
		emits: ['update:rooms', 'update:layouts'],
		setup(_, { emit }) {
			const rooms = [
				{ id: 1, description: '1' },
				{ id: 2, description: '2' },
				{ id: 3, description: '3' },
				{ id: 4, description: '4' },
			];
			const selectedRooms = ref(null);
			watch(selectedRooms, () => {
				emit('update:rooms', selectedRooms.value);
			});

			const areaParams = {
				min: 30,
				max: 100,
			};

			const layouts = ref([]);
			watch(layouts, () => {
				emit('update:layouts', layouts.value);
			});

			return {
				rooms,
				selectedRooms,

				areaParams,

				layouts,
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.apartment-parameters {
		&__row {
			display: flex;
			gap: 8rem;
			margin-bottom: 5rem;
		}

		&__col {
			&:nth-child(2) {
				max-width: 26rem;
				width: 100%;
			}
			&-description {
				font-size: 1.6rem;
				font-weight: 500;
				color: $gray;
				margin-bottom: 1.3rem;
			}
		}

		&__rooms {
			display: flex;
			gap: 1.2rem;
		}
		.v-slider {
		}
	}
</style>

<style lang="scss">
	.apartment-parameters {
		&__col {
			.v-slider {
				p {
					font-size: 1.6rem;
					font-weight: 500;
				}
				.slider {
					padding: 1.6rem 3rem;
				}
			}
		}
	}
</style>
