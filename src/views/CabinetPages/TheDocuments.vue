<template>
	<section class="the-documents"></section>
</template>

<script>
	import { mapMutations } from "vuex";

	export default {
		name: "TheDocuments",
		methods: {
			...mapMutations(["SET_TAB"]),
		},
		created() {
			this.SET_TAB("documents");
		},
	};
</script>

<style lang="scss" scoped>
	.the-documents {
	}
</style>
