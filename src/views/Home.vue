<template>
	<div class="theme-container">
		<page-header></page-header>
		<main class="main">
			<banner></banner>
			<catalog></catalog>
			<mortgage></mortgage>
			<layout></layout>
		</main>
		<page-footer></page-footer>
		<call-button></call-button>
	</div>
</template>

<script>
	import PageHeader from "../components/general/Header.vue";

	import Banner from "../components/general/Banner.vue";
	import Catalog from "../components/general/Catalog.vue";
	import Mortgage from "../components/general/Mortgage.vue";
	import Layout from "../components/general/Layout.vue";
	import CallButton from "../components/general/Call.vue";

	import PageFooter from "../components/general/Footer.vue";

	export default {
		name: "App",
		components: {
			PageHeader,
			Banner,
			Catalog,
			Mortgage,
			Layout,
			CallButton,
			PageFooter,
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

<style>
	@import "../assets/css/variables.css";
	@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap");

	body {
		font-family: "Montserrat", sans-serif;
	}
</style>

<style lang="scss" scoped></style>
