<template>
	<div class="page-repair theme-container">
		<TheHeader
			@open-mortgage-calculator="openMortgageCalculator"
			@open-popup="openPopup"
		></TheHeader>

		<main class="main page-repair__main">
			<TheBanner />
			<TheBenefits />
			<TheRates />
			<ThePortfolio />
			<TheSteps />
		</main>

		<the-footer />

		<v-call @open-popup="openPopup"></v-call>

		<transition mode="out-in" name="fade-up">
			<mortgage-calculator
				v-if="isMortgageCalculatorOpen"
				closeIcon="/img/icons/cabinet/close.svg"
				light="light"
				@closeMortgageCalculator="closeMortgageCalculator"
			></mortgage-calculator>
		</transition>

		<transition mode="out-in">
			<v-popup
				v-if="isPopupVisible"
				@closePopup="closePopup"
				title="3DOM консультация"
			>
				<form @submit.prevent="" class="page-repair__consultation-request">
					<p class="page-repair__consultation-request-description">
						Отправьте заявку<br />
						для получения консультации
					</p>
					<academ-input
						placeholder="Имя"
						type="text"
						dark="dark"
						v-model="request_support_form_data.name"
					></academ-input>
					<academ-input
						placeholder="Телефон"
						type="tel"
						dark="dark"
						v-model="request_support_form_data.phone_number"
					></academ-input>
					<v-checkbox
						v-model="request_support_form_data.privacyPolicy"
						text="Даю согласие на обработку персональных данных"
						dark="dark"
					></v-checkbox>
					<v-button
						text="Отправить заявку"
						type="submit"
						:disabled="!isRequestSupportFormValid"
					></v-button>
				</form>
			</v-popup>
		</transition>
	</div>
</template>

<script>
	import TheHeader from '@/components/general/TheHeader';

	import TheBanner from '@/components/repair/TheBanner.vue';
	import TheBenefits from '@/components/repair/TheBenefits.vue';
	import TheRates from '@/components/repair/TheRates.vue';
	import ThePortfolio from '@/components/repair/ThePortfolio.vue';
	import TheSteps from '@/components/repair/TheSteps.vue';

	import vCall from '@/components/general/v-call.vue';
	import mortgageCalculator from '@/components/academ/MortgageCalculator.vue';

	import AcademInput from '@/components/academ/academ-input.vue';
	import vCheckbox from '@/components/academ/v-checkbox.vue';

	import TheFooter from '@/components/general/TheFooter.vue';

	import { requestSupportForm } from '@/mixins/support';
	import { ref } from 'vue';

	export default {
		name: 'PageRepair',
		mixins: [requestSupportForm],
		components: {
			TheHeader,

			TheBanner,
			TheBenefits,
			TheRates,
			ThePortfolio,
			TheSteps,

			vCall,
			mortgageCalculator,
			AcademInput,
			vCheckbox,

			TheFooter,
		},
		setup() {
			const isMortgageCalculatorOpen = ref(false);
			const openMortgageCalculator = () => {
				isMortgageCalculatorOpen.value = true;
				document.body.classList.add('locked');
			};
			const closeMortgageCalculator = () => {
				isMortgageCalculatorOpen.value = false;
				document.body.classList.remove('locked');
			};

			const isPopupVisible = ref(false);
			const closePopup = () => {
				isPopupVisible.value = false;
				document.body.classList.remove('locked');
			};
			const openPopup = () => {
				isPopupVisible.value = true;
			};

			return {
				isMortgageCalculatorOpen,
				openMortgageCalculator,
				closeMortgageCalculator,

				isPopupVisible,
				openPopup,
				closePopup,
			};
		},
	};
</script>

<style lang="scss" scoped>
	.page-repair {
		&__consultation-request {
			display: flex;
			flex-direction: column;
			&-description {
				font-size: 1.8rem;
				margin-bottom: 6rem;
				line-height: 1.3;
			}
			.v-checkbox {
				margin: 2rem 0 4rem 0;
			}
			.v-button {
				margin: auto;
				padding: 1.8rem 5rem;
			}
		}

		section {
			padding-top: 4rem;
			padding-bottom: 4rem;
		}
	}
</style>

<style lang="scss">
	@import '@/assets/scss/variables';

	.page-repair {
		.router-link-active {
			color: $blue !important;
		}
	}
</style>
