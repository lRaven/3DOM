<template>
	<section class="page-mortgage"></section>
</template>

<script>
	import { mapMutations } from "vuex";

	export default {
		name: "PageMortgage",
		methods: {
			...mapMutations(["SET_TAB"]),
		},
		created() {
			this.SET_TAB("mortgage");
		},
	};
</script>

<style lang="scss" scoped>
	.page-mortgage {
	}
</style>
