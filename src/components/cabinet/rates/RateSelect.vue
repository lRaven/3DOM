<template>
	<div class="rate-select">
		<h2 class="rate-select__title" v-once>Выберите тариф</h2>

		<div class="rate-select__list">
			<RateCard
				v-for="rate in rates"
				:key="rate.id"
				:rate="rate"
				:selected-rate="selectedRate"
				@select-rate="selectRate"
			></RateCard>
		</div>

		<v-button
			:disabled="!selectedRate"
			text="Следующий шаг"
			color="white"
			class="rate-select__next"
			@click="$emit('next-step')"
		>
			<template #icon>
				<svg
					width="25"
					height="13"
					viewBox="0 0 25 13"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="rate-select__next-icon"
				>
					<path
						d="M24.5303 7.03033C24.8232 6.73744 24.8232 6.26256 24.5303 5.96967L19.7574 1.1967C19.4645 0.903806 18.9896 0.903806 18.6967 1.1967C18.4038 1.48959 18.4038 1.96447 18.6967 2.25736L22.9393 6.5L18.6967 10.7426C18.4038 11.0355 18.4038 11.5104 18.6967 11.8033C18.9896 12.0962 19.4645 12.0962 19.7574 11.8033L24.5303 7.03033ZM0 7.25H24V5.75H0V7.25Z"
						fill="#007BFC"
					/>
				</svg>
			</template>
		</v-button>
	</div>
</template>

<script>
	import { useStore } from 'vuex';
	import { computed, ref } from 'vue';

	import RateCard from '@/components/cabinet/rates/RateCard.vue';

	export default {
		name: 'RateSelect',
		emits: ['update:rate', 'next-step'],
		components: { RateCard },
		setup(_, { emit }) {
			const store = useStore();

			const rates = computed(() => store.state.repair.rates);

			const selectedRate = ref(null);
			const selectRate = (rateID) => {
				selectedRate.value = rateID;
				emit('update:rate', rates.value[selectedRate.value - 1]);
			};

			return { rates, selectedRate, selectRate };
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.rate-select {
		&__title {
		}

		&__list {
			display: flex;
			gap: 3rem;
			margin-bottom: 8rem;
		}
		&__next {
			margin-left: auto;
			&:disabled {
				.rate-select__next-icon {
					path {
						fill: $middle-gray;
					}
				}
			}
		}
	}
</style>
