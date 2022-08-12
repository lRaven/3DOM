<template>
	<div class="page-catalog">
		<v-card-min></v-card-min>
	</div>
</template>

<script>
	import vCardMin from "@/components/general/catalog/v-card-min.vue";

	export default {
		name: "PageCatalog",
		components: {
			vCardMin,
		},
	};
</script>

<style lang="scss" scoped>
	.page-catalog {
	}
</style>
