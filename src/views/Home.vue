<template>
	<div class="theme-container">
		<main class="main">
			<banner></banner>
			<catalog></catalog>
			<mortgage></mortgage>
		</main>
		<!-- <page-footer></page-footer> -->
		<call-button></call-button>
	</div>
</template>

<script>
	import Banner from "../components/general/Banner.vue";
	import Catalog from "../components/general/Catalog.vue";
	import Mortgage from "../components/general/Mortgage.vue";
	import CallButton from "../components/general/Call.vue";

	export default {
		name: "App",
		components: {
			Banner,
			Catalog,
			Mortgage,
			CallButton,
			// PageFooter,
		},

		data() {
			return {};
		},
		methods: {},
	};
</script>

<style>
	@import "../assets/css/variables.css";
	@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap");

	body {
		font-family: "Montserrat", sans-serif;
	}
	section {
	}
</style>

<style lang="scss" scoped></style>
