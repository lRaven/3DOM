<template>
	<section class="the-mortgage"></section>
</template>

<script>
	import { mapMutations } from "vuex";

	export default {
		name: "TheMortgage",
		methods: {
			...mapMutations(["SET_TAB"]),
		},
		created() {
			this.SET_TAB("mortgage");
		},
	};
</script>

<style lang="scss" scoped>
	.the-mortgage {
	}
</style>
