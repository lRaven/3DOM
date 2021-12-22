<template>
	<div class="theme-container">
		<Header />
		<main class="main">
			<Banner />
		</main>
		<Footer />
		<Call />
	</div>
</template>

<script>
	import Header from "../components/general/Header.vue";

	import Banner from "../components/trade-in/Banner.vue";

	import Call from "../components/general/Call.vue";

	import Footer from "../components/general/Footer.vue";

	export default {
		name: "TradeIn",
		components: {
			Header,

			Banner,

			Call,

			Footer,
		},
	};
</script>

<style lang="scss" scoped></style>
