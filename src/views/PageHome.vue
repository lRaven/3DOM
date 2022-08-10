<template>
	<div class="page-home theme-container">
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
			closeIcon="/img/icon/cabinet/close.svg"
			light="light"
		></mortgage-calculator>
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

	import TheFooter from "@/components/general/TheFooter";

	export default {
		name: "PageHome",
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
	};
</script>
