<template>
	<div class="theme-container">
		<the-header />
		<main class="main">
			<the-banner />
			<the-service />
			<the-steps />
			<the-catalog />
		</main>
		<the-footer />
		<v-call />
	</div>
</template>

<script>
	import TheHeader from "../components/general/TheHeader.vue";

	import TheBanner from "../components/trade-in/TheBanner.vue";
	import TheService from "../components/trade-in/TheService.vue";
	import TheSteps from "../components/trade-in/TheSteps.vue";
	import TheCatalog from "../components/trade-in/TheCatalog.vue";

	import VCall from "../components/general/v-call.vue";

	import TheFooter from "../components/general/TheFooter.vue";

	export default {
		name: "TradeIn",
		components: {
			TheHeader,

			TheBanner,
			TheService,
			TheSteps,
			TheCatalog,

			VCall,

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
