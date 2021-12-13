<template>
	<router-view></router-view>
</template>

<script>
	export default {
		components: {},
	};
</script>

<style lang="scss">
	@import "./assets/scss/center.scss";
	@import "./assets/css/variables.css";

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
