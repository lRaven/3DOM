<template>
	<div class="profile" v-if="tab === 'profile'">
		<p>sus</p>
	</div>
</template>

<script>
	import store from "../../store";

	export default {
		name: "Profile",
		store,
		data() {
			return {
				tab: store.getters.TAB,
			};
		},
		mounted() {
			document.addEventListener("click", () => {
				this.tab = store.getters.TAB;
			});
		},
	};
</script>

<style lang="scss" scoped></style>
