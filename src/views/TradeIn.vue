<template>
	<div class="theme-container">
		<Header />
		<main class="main">
			<Banner />
			<Service />
			<Steps />
			<Catalog />
		</main>
		<Footer />
		<Call />
	</div>
</template>

<script>
	import Header from "../components/general/Header.vue";

	import Banner from "../components/trade-in/Banner.vue";
	import Service from "../components/trade-in/Service.vue";
	import Steps from "../components/trade-in/Steps.vue";
	import Catalog from "../components/trade-in/Catalog.vue";

	import Call from "../components/general/Call.vue";

	import Footer from "../components/general/Footer.vue";

	export default {
		name: "TradeIn",
		components: {
			Header,

			Banner,
			Service,
			Steps,
			Catalog,

			Call,

			Footer,
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
