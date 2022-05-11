<template>
	<div class="page-trade-in theme-container">
		<the-header />
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

	export default {
		name: "PageTradeIn",
		components: {
			TheHeader,

			TheBanner,
			TheService,
			TheSteps,
			TheCatalog,
			ThePrice,

			vCall,

			TheFooter,
		},
		methods: {
			//*красит ссылку Trade-in на странице
			setTradeIn() {
				const linksHeader = document.querySelectorAll(".header__link");
				linksHeader.forEach((link) => {
					if (link.textContent.toLowerCase().includes("trade-in")) {
						link.setAttribute("style", "color: var(--blue);");
					}
				});
				const linksFooter =
					document.querySelectorAll(".footer__link a");
				linksFooter.forEach((link) => {
					if (link.textContent.toLowerCase().includes("trade-in")) {
						link.setAttribute("style", "color: var(--blue);");
					}
				});
			},
		},
		mounted() {
			this.setTradeIn();
		},
	};
</script>

<style lang="scss" scoped></style>
