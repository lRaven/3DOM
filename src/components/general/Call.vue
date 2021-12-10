<template>
	<figure>
		<a href="#" class="call">
			<img src="img/general/icon/call-circle.svg" alt="" />
		</a>
	</figure>
</template>
<script>
	export default {
		name: "CallButton",
	};
</script>
<style lang="scss" scoped>
	figure {
		position: fixed;
		bottom: 5rem;
		right: 5rem;
		width: 8.4rem;
		height: 8.4rem;
		pointer-events: none;
	}
	.call {
		user-select: none;
		pointer-events: fill;
		position: absolute;
		bottom: 0;
		right: 0;
	}
</style>
