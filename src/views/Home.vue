<template>
	<div class="theme-container">
		<the-header />
		<main class="main">
			<the-banner />
			<the-catalog />
			<the-mortgage />
			<the-layout />
		</main>
		<the-footer />
		<v-call />
	</div>
</template>

<script>
	import TheHeader from "../components/general/TheHeader.vue";

	import TheBanner from "../components/general/TheBanner.vue";
	import TheCatalog from "../components/general/TheCatalog.vue";
	import TheMortgage from "../components/general/TheMortgage.vue";
	import TheLayout from "../components/general/TheLayout.vue";
	import VCall from "../components/general/v-call.vue";

	import TheFooter from "../components/general/TheFooter.vue";

	export default {
		name: "Home",
		components: {
			TheHeader,

			TheBanner,
			TheCatalog,
			TheMortgage,
			TheLayout,

			VCall,

			TheFooter,
		},

		data() {
			return {};
		},
		methods: {},
	};
</script>

<style lang="scss" scoped></style>
