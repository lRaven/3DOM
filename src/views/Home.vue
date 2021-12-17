<template>
	<div class="theme-container">
		<Header />
		<main class="main">
			<banner />
			<catalog />
			<mortgage />
			<layout />
		</main>
		<Footer />
		<Call />
	</div>
</template>

<script>
	import Header from "../components/general/Header.vue";

	import Banner from "../components/general/Banner.vue";
	import Catalog from "../components/general/Catalog.vue";
	import Mortgage from "../components/general/Mortgage.vue";
	import Layout from "../components/general/Layout.vue";
	import Call from "../components/general/Call.vue";

	import Footer from "../components/general/Footer.vue";

	export default {
		name: "Home",
		components: {
			Header,

			Banner,
			Catalog,
			Mortgage,
			Layout,
			Call,
			Footer,
		},

		data() {
			return {};
		},
		methods: {},
		mounted() {},
	};
</script>

<style lang="scss" scoped></style>
