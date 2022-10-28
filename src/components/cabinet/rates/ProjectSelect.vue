<template>
	<div class="project-select">
		<h2 class="project-select__title" v-once>Параметры квартиры</h2>

		<div class="project-select__content">
			<div class="project-select__row">
				<p class="project-select__row-title" v-once>Выберите тип жилья</p>
				<div class="project-select__row-list">
					<TextRadio
						v-for="item in estates"
						:key="item.id"
						radioGroup="estates"
						:description="item.description"
						:value="item.id"
						v-model="selectedEstate"
					></TextRadio>
				</div>
			</div>

			<div class="project-select__row">
				<transition mode="out-in" name="fade-up-fast">
					<div class="project-select__row-el" v-show="selectedEstate === 1">
						<p class="project-select__row-title" v-once>Выберите проект</p>
						<div class="project-select__row-list">
							<TextRadio
								v-for="item in projects"
								:key="item.id"
								radioGroup="projects"
								:description="item.description"
								:value="item.id"
								v-model="selectedProject"
							></TextRadio>
						</div>
					</div>
				</transition>

				<transition mode="out-in" name="fade-up-fast">
					<div class="project-select__row-el" v-show="selectedEstate === 2">
						<p class="project-select__request project-select__request_bold">
							Оставьте заявку на бесплатный выезд мастера на обект.
						</p>
						<p class="project-select__request">
							Стоимость работ будет рассчитана индивидуально исходя из состояния
							вашей квартиры, объема демонтажных работ и ваших пожеланий.
						</p>
					</div>
				</transition>
			</div>
		</div>

		<div class="project-select__bottom">
			<v-button
				text="Назад"
				direction="reverse"
				color="white"
				class="project-select__prev"
				@click="$emit('prev-step')"
			>
				<template #icon>
					<svg
						width="25"
						height="12"
						viewBox="0 0 25 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="project-select__prev-icon"
					>
						<path
							d="M0.469669 6.53033C0.176777 6.23744 0.176777 5.76256 0.469669 5.46967L5.24264 0.696699C5.53553 0.403806 6.01041 0.403806 6.3033 0.696699C6.59619 0.989593 6.59619 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.59619 10.5355 6.59619 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.469669 6.53033ZM25 6.75H1V5.25H25V6.75Z"
							fill="#007BFC"
						/>
					</svg>
				</template>
			</v-button>

			<v-button
				:disabled="!selectedProject"
				text="Следующий шаг"
				color="white"
				class="project-select__next"
				@click="$emit('next-step')"
			>
				<template #icon>
					<svg
						width="25"
						height="13"
						viewBox="0 0 25 13"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="project-select__next-icon"
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
		name: 'ProjectSelect',
		setup(_, { emit }) {
			const estates = [
				{ id: 1, description: 'Новостройка' },
				{ id: 2, description: 'Вторичное жилье' },
			];
			const selectedEstate = ref(null);
			watch(selectedEstate, () => {
				emit('update:estate', estates[selectedEstate.value - 1]);
				if (selectedEstate.value && selectedProject.value !== null) {
					selectedProject.value = null;
				}
			});

			const projects = [{ id: 1, description: 'ЖК «Академический»' }];
			const selectedProject = ref(null);
			watch(selectedProject, () => {
				emit('update:project', projects[selectedProject.value - 1]);
			});

			return {
				estates,
				selectedEstate,

				projects,
				selectedProject,
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.project-select {
		&__title {
		}

		&__content {
			margin-bottom: 8rem;
		}
		&__row {
			&:nth-child(2) {
				display: grid;
				grid-template-columns: 1fr;
			}
			&-el {
				grid-area: 1/1;
			}
			+ .project-select__row {
				margin-top: 4rem;
			}
			&-title {
				font-size: 1.6rem;
				font-weight: 500;
				margin-bottom: 1.5rem;
			}
			&-list {
				display: flex;
				flex-wrap: wrap;
				gap: 2rem;
			}
		}

		&__request {
			font-size: 1.6rem;
			+ .project-select__request {
				margin-top: 2rem;
			}
			&_bold {
				font-weight: 700;
			}
		}

		&__bottom {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&__next {
			&:disabled {
				.project-select__next-icon {
					path {
						fill: $middle-gray;
					}
				}
			}
		}
	}
</style>
