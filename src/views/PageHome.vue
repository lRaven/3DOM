<template>
	<div class="page-home theme-container">
		<the-header
			@openMortgageCalculator="openMortgageCalculator"
			@openPopup="openPopup"
		></the-header>

		<main class="main">
			<the-banner />
			<the-catalog />
			<the-kolotok />
			<the-layout />
			<the-mortgage @openPopup="openPopup"></the-mortgage>
			<the-steps />
			<the-insurance @openPopup="openPopup"></the-insurance>
		</main>

		<the-footer />

		<v-call @openPopup="openPopup"></v-call>

		<transition mode="out-in" name="fade-up">
			<mortgage-calculator
				v-if="isMortgageCalculatorOpen"
				closeIcon="/img/icon/cabinet/close.svg"
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
				<form
					@submit.prevent=""
					class="page-home__consultation-request"
				>
					<p class="page-home__consultation-request-description">
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
	import TheHeader from "@/components/general/TheHeader";

	import TheBanner from "@/components/general/TheBanner";
	import TheCatalog from "@/components/general/TheCatalog";
	import TheKolotok from "@/components/general/TheKolotok";
	import TheLayout from "@/components/general/TheLayout";
	import TheMortgage from "@/components/general/TheMortgage";
	import TheSteps from "@/components/trade-in/TheSteps";
	import TheInsurance from "@/components/general/TheInsurance";

	import vCall from "@/components/general/v-call";
	import mortgageCalculator from "@/components/academ/MortgageCalculator";

	import AcademInput from "@/components/academ/academ-input.vue";
	import vCheckbox from "@/components/academ/v-checkbox.vue";

	import TheFooter from "@/components/general/TheFooter";

	import { requestSupportForm } from "@/mixins/support";

	export default {
		name: "PageHome",
		mixins: [requestSupportForm],
		components: {
			TheHeader,

			TheBanner,
			TheCatalog,
			TheKolotok,
			TheLayout,
			TheMortgage,
			TheSteps,
			TheInsurance,

			vCall,
			mortgageCalculator,
			AcademInput,
			vCheckbox,

			TheFooter,
		},
		data: () => ({
			isMortgageCalculatorOpen: false,
			isPopupVisible: false,
		}),
		methods: {
			openMortgageCalculator() {
				this.isMortgageCalculatorOpen = true;
				document.body.classList.add("locked");
			},
			closeMortgageCalculator() {
				this.isMortgageCalculatorOpen = false;
				document.body.classList.remove("locked");
			},

			closePopup() {
				this.isPopupVisible = false;
				document.body.classList.remove("locked");
			},
			openPopup() {
				this.isPopupVisible = true;
				document.body.classList.add("locked");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.page-home {
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
	}
</style>
