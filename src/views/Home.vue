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
		mounted() {
			// const config = {
			// 	headers: {
			// 		Authorization: `token f757c9c6c815f6c885d372b9642682dc3d8fd036`,
			// 	},
			// };
			// const axios = require("axios");
			// axios
			// 	.get("http://127.0.0.1:8001/auth/users/me", config)
			// 	.then((responce) => console.log(responce));
		},
	};
</script>

<style lang="scss" scoped>
	@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap");
	* {
		font-family: "Montserrat";
	}
</style>
