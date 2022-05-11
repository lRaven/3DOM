<template>
	<span class="v-tag">{{ text }}</span>
</template>

<script>
	export default {
		name: "vTag",
		props: {
			text: String,
		},
	};
</script>

<style lang="scss" scoped>
	.v-tag {
		padding: 1.05rem 2.5rem;
		border-radius: 2rem;
		background-color: #47494c;
		color: #dfdfdf;
		font-size: 1.4rem;
		font-weight: 500;
	}
</style>
