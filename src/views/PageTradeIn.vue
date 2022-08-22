<template>
	<div class="page-trade-in theme-container">
		<the-header
			@openMortgageCalculator="openMortgageCalculator"
		></the-header>
		<main class="main">
			<the-banner />
			<the-service />
			<the-steps />
			<the-catalog
				title="Выбрать квартиру в одном из наших проектов"
			></the-catalog>
			<the-price />
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

	import MortgageCalculator from "@/components/academ/MortgageCalculator.vue";

	export default {
		name: "PageTradeIn",
		data: () => ({ isMortgageCalculatorOpen: false }),
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
		},
	};
</script>

<style lang="scss">
	@import "@/assets/scss/variables";

	.page-trade-in {
		.router-link-active {
			color: $blue !important;
		}
	}
</style>
