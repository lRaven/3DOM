<template>
	<div class="apartment-parameters">
		<h2 class="apartment-parameters__title" v-once>Выберите нужные элементы</h2>

		<div class="apartment-parameters__row">
			<div class="apartment-parameters__col">
				<p class="apartment-parameters__col-description" v-once>
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
				<p class="apartment-parameters__col-description" v-once>
					Укажите площадь квартиры
				</p>

				<v-slider
					:params="{
						isMinVisible: false,
						value: areaParams.max - areaParams.min,
						step: 0.1,
						...areaParams,
					}"
					v-model="selectedArea"
				></v-slider>
			</div>
		</div>

		<div class="apartment-parameters__row">
			<p class="apartment-parameters__col-description" v-once>
				Планировка квартиры
			</p>

			<FilePicker v-model="layouts"></FilePicker>
		</div>

		<div class="apartment-parameters__bottom">
			<v-button
				text="Назад"
				direction="reverse"
				color="white"
				class="apartment-parameters__prev"
				@click="$emit('prev-step')"
			>
				<template #icon>
					<svg
						width="25"
						height="12"
						viewBox="0 0 25 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="apartment-parameters__prev-icon"
					>
						<path
							d="M0.469669 6.53033C0.176777 6.23744 0.176777 5.76256 0.469669 5.46967L5.24264 0.696699C5.53553 0.403806 6.01041 0.403806 6.3033 0.696699C6.59619 0.989593 6.59619 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.59619 10.5355 6.59619 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.469669 6.53033ZM25 6.75H1V5.25H25V6.75Z"
							fill="#007BFC"
						/>
					</svg>
				</template>
			</v-button>

			<v-button
				:disabled="!selectedRooms"
				text="Следующий шаг"
				color="white"
				class="apartment-parameters__next"
				@click="$emit('next-step')"
			>
				<template #icon>
					<svg
						width="25"
						height="13"
						viewBox="0 0 25 13"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="apartment-parameters__next-icon"
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
	import { ref, watch } from 'vue';

	export default {
		name: 'ApartmentParameters',
		emits: [
			'update:rooms',
			'update:area',
			'update:layouts',
			'prev-step',
			'next-step',
		],
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
			const selectedArea = ref(areaParams.max - areaParams.min);
			watch(selectedArea, () => {
				emit('update:area', selectedArea.value);
			});

			const layouts = ref([]);
			watch(layouts, () => {
				emit('update:layouts', layouts.value);
				console.log(layouts.value);
			});

			return {
				rooms,
				selectedRooms,

				areaParams,
				selectedArea,

				layouts,
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.apartment-parameters {
		&__row {
			&:nth-child(2) {
				display: flex;
				gap: 8rem;
				margin-bottom: 5rem;
			}
			&:nth-child(3) {
				margin-bottom: 8rem;
			}
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

		&__bottom {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 5rem;
		}
		&__next {
			&:disabled {
				.apartment-parameters__next-icon {
					path {
						fill: $middle-gray;
					}
				}
			}
		}
	}
</style>

<style lang="scss">
	.apartment-parameters {
		&__col {
			.v-slider {
				padding: 1.6rem 3rem;
				&__sum {
					display: flex;
					justify-content: center;
					width: 100%;
				}
			}
		}
	}
</style>
