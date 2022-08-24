<template>
	<section class="page-documents"></section>
</template>

<script>
	import { mapMutations } from "vuex";

	export default {
		name: "PageDocuments",
		methods: {
			...mapMutations(["SET_TAB"]),
		},
		created() {
			this.SET_TAB("documents");
		},
	};
</script>

<style lang="scss" scoped>
	.page-documents {
	}
</style>
