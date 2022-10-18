<template>
	<section class="page-rates">
		<h1 class="page-rates__title" v-once>Индивидуальный расчёт</h1>

		<div class="page-rates__steps">
			<div
				v-for="item in steps"
				:key="item.id"
				class="page-rates__step"
				:class="{ active: item.id <= step }"
			>
				<p class="page-rates__step-number" :class="{ active: item.id <= step }">
					{{ item.id }} шаг
				</p>
				<p
					class="page-rates__step-description"
					:class="{ active: item.id <= step }"
				>
					{{ item.description }}
				</p>
			</div>
		</div>

		<div class="page-rates__tabs">
			<transition mode="out-in" name="fade-left">
				<RateSelect
					v-show="step === 1"
					class="page-rates__tab"
					@next-step="nextStep"
				></RateSelect>
			</transition>

			<transition mode="out-in" name="fade-left">
				<ProjectSelect
					v-show="step === 2"
					class="page-rates__tab"
				></ProjectSelect>
			</transition>
		</div>
	</section>
</template>

<script>
	import { useStore } from 'vuex';
	import { ref } from 'vue';

	import RateSelect from '@/components/cabinet/rates/RateSelect.vue';
	import ProjectSelect from '@/components/cabinet/rates/ProjectSelect.vue';

	export default {
		name: 'PageRates',
		components: { RateSelect, ProjectSelect },
		setup() {
			const store = useStore();
			store.commit('setTab', 'rates');

			const steps = [
				{ id: 1, description: 'Выбор тарифа' },
				{ id: 2, description: 'Выбор проекта' },
				{ id: 3, description: 'Настройка конфигурации' },
				{ id: 4, description: 'Параметры квартиры' },
				{ id: 5, description: 'Итоги расчёта' },
			];
			const step = ref(2);
			const nextStep = () => {
				step.value++;
			};

			return { steps, step, nextStep };
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.page-rates {
		&__title {
			margin-bottom: 3rem;
		}
		&__steps {
			user-select: none;
			display: flex;
			margin-bottom: 5rem;
		}
		&__step {
			padding: 1.2rem 0;
			width: 100%;
			border-bottom: 0.2rem solid #f2f2f2;
			transition: all 0.2s ease;
			&.active {
				border-color: $blue;
			}
			&-number {
				margin-bottom: 1rem;
				font-weight: 500;
				font-size: 1.6rem;
				color: #757575;
				transition: all 0.2s ease;
				&.active {
					color: $blue;
				}
			}
			&-description {
				font-weight: 600;
				font-size: 1.6rem;
				color: #8f8f8f;
				transition: all 0.2s ease;
				&.active {
					color: #1f1f1f;
				}
			}
		}

		&__tabs {
			display: grid;
			grid-template-columns: 1fr;
		}
		&__tab {
			grid-area: 1/1;
		}
	}
</style>

<style lang="scss">
	@import '@/assets/scss/variables';

	.page-rates {
		&__tabs {
			h2 {
				font-size: 3rem;
				color: $dark;
				margin-bottom: 3.7rem;
			}
		}
	}
</style>
