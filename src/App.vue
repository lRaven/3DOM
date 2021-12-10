<template>
	<page-header></page-header>
	<router-view></router-view>
	<page-footer></page-footer>
</template>

<script>
	import PageHeader from "./components/global/Header.vue";
	import PageFooter from "./components/global/Footer.vue";

	export default {
		components: {
			PageHeader,
			PageFooter,
		},
	};
</script>

<style lang="scss">
	@import "./assets/scss/center.scss";

	* {
		scroll-behavior: smooth;
	}
	section {
		min-height: calc(100vh - 6rem);
	}
	main {
		padding-top: 6rem;
	}
</style>

<style lang="scss" scoped>
	#app,
	.theme-container {
		height: auto;
	}
</style>
