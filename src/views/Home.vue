<template>
	<div class="theme-container">
		<the-header />
		<main class="main">
			<the-banner />
			<the-catalog />
			<the-kolotok />
			<the-layout />
			<the-mortgage />
			<the-steps />
			<the-insurance />
		</main>
		<the-footer />
		<v-call />
		<mortgage-calculator
			closeIcon="img/icon/cabinet/close.svg"
			light="light"
		></mortgage-calculator>
	</div>
</template>

<script>
	import TheHeader from "../components/general/TheHeader.vue";

	import TheBanner from "../components/general/TheBanner.vue";
	import TheCatalog from "../components/general/TheCatalog.vue";
	import TheKolotok from "../components/general/TheKolotok.vue";
	import TheLayout from "../components/general/TheLayout.vue";
	import TheMortgage from "../components/general/TheMortgage.vue";
	import TheSteps from "../components/trade-in/TheSteps.vue";
	import TheInsurance from "../components/general/TheInsurance.vue";

	import vCall from "../components/general/v-call.vue";
	import mortgageCalculator from "../components/academ/MortgageCalculator.vue";

	import TheFooter from "../components/general/TheFooter.vue";

	export default {
		name: "Home",
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

			TheFooter,
		},

		data() {
			return {};
		},
		methods: {},
	};
</script>

<style lang="scss" scoped></style>
