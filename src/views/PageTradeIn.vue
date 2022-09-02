<template>
	<div class="page-trade-in theme-container">
		<the-header
			@openMortgageCalculator="openMortgageCalculator"
			@openPopup="openPopup"
		></the-header>

		<main class="main">
			<the-banner @openPopup="openPopup"></the-banner>
			<the-service />
			<the-steps />
			<the-catalog
				title="Выбрать квартиру в одном из наших проектов"
			></the-catalog>
			<the-price @openPopup="openPopup"></the-price>
		</main>

		<the-footer />
		<v-call />

		<transition mode="out-in" name="fade-up">
			<mortgage-calculator
				v-if="isMortgageCalculatorOpen"
				light="light"
				closeIcon="/img/icon/cabinet/close.svg"
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
					class="page-trade-in__consultation-request"
				>
					<p class="page-trade-in__consultation-request-description">
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

	import TheBanner from "@/components/trade-in/TheBanner";
	import TheService from "@/components/trade-in/TheService";
	import TheSteps from "@/components/trade-in/TheSteps";
	import TheCatalog from "@/components/general/TheCatalog";
	import ThePrice from "@/components/trade-in/ThePrice";

	import vCall from "@/components/general/v-call";

	import TheFooter from "@/components/general/TheFooter";

	import MortgageCalculator from "@/components/academ/MortgageCalculator";

	import AcademInput from "@/components/academ/academ-input";
	import vCheckbox from "@/components/academ/v-checkbox";

	import { requestSupportForm } from "@/mixins/support";

	export default {
		name: "PageTradeIn",
		mixins: [requestSupportForm],
		data: () => ({
			isMortgageCalculatorOpen: false,
			isPopupVisible: false,
		}),
		components: {
			TheHeader,

			TheBanner,
			TheService,
			TheSteps,
			TheCatalog,
			ThePrice,

			vCall,

			TheFooter,

			MortgageCalculator,

			AcademInput,
			vCheckbox,
		},
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
			},
		},
	};
</script>

<style lang="scss" scoped>
	.page-trade-in {
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
	@import "@/assets/scss/variables";

	.page-trade-in {
		.router-link-active {
			color: $blue !important;
		}
	}
</style>
