<template>
	<div class="theme-container">
		<Header />
		<main class="main">
			<login />
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
	import store from "../store";

	import Header from "../components/general/Header.vue";

	import Login from "../components/general/Login.vue";
	import Banner from "../components/general/Banner.vue";
	import Catalog from "../components/general/Catalog.vue";
	import Mortgage from "../components/general/Mortgage.vue";
	import Layout from "../components/general/Layout.vue";
	import Call from "../components/general/Call.vue";

	import Footer from "../components/general/Footer.vue";

	export default {
		name: "Home",
		store,
		components: {
			Header,
			Login,
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
			const config = {
				headers: {
					Authorization: `token f757c9c6c815f6c885d372b9642682dc3d8fd036`,
				},
			};
			const axios = require("axios");
			axios
				.get("http://127.0.0.1:8001/auth/users/", config)
				.then((responce) => console.log(responce));
			// let name = store.getters.name;
			// console.log(name);
		},
	};
</script>

<style lang="scss" scoped></style>
