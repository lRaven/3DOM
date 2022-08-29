<template>
	<div class="page-appeal"></div>
</template>

<script>
	import { mapMutations } from "vuex";

	export default {
		name: "PageAppeal",
		methods: {
			...mapMutations(["SET_TAB"]),
		},
		created() {
			this.SET_TAB("appeals");
		},
	};
</script>

<style lang="scss" scoped>
	.page-appeal {
	}
</style>
