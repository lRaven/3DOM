<template>
	<div class="page-mortgage" v-once>
		<iframe
			src="https://ipoteka.domclick.ru/calc-reg/calculator.html"
			frameborder="0"
			width="100%"
			height="100%"
			name="mortgageCalculator"
		></iframe>
	</div>
</template>

<script>
	import { mapMutations } from "vuex";

	export default {
		name: "PageMortgage",
		methods: {
			...mapMutations(["setTab"]),
		},
		created() {
			this.setTab("mortgage");
		},
	};
</script>

<style lang="scss" scoped>
	.page-mortgage {
		height: 100%;
	}
</style>
