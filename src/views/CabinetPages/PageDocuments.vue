<template>
	<section class="page-documents" v-once></section>
</template>

<script>
	import { mapMutations } from "vuex";

	export default {
		name: "PageDocuments",
		methods: {
			...mapMutations(["setTab"]),
		},
		created() {
			this.setTab("documents");
		},
	};
</script>

<style lang="scss" scoped>
	.page-documents {
	}
</style>
