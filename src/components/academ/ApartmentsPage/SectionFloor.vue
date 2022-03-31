<template>
	<div class="floor">
		<div class="name">Этаж</div>
		<ApartmentPool />
	</div>
</template>

<script>
	import ApartmentPool from "./ApartmentPool";
	export default {
		components: { ApartmentPool },
	};
</script>

<style lang="scss" scoped>
	.floor {
		display: grid;
		grid-template-rows: 4rem 4rem;
		grid-column: 1;
		.name {
			grid-row: 1 / 3;
			font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
			font-style: normal;
			font-weight: bold;
			font-size: 1.3rem;
			color: #d5bfa8;
			background: #634b32;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			border: 0.1rem solid var(--light-gray);
		}
	}
</style>
