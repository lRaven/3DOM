<template>
	<figure class="animate__animated animate__bounceInUp wow">
		<a href="#" class="call">
			<img src="img/icon/general/call-circle.svg" alt="" />
		</a>
	</figure>
</template>
<script>
	export default {
		name: "Call",
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
		z-index: 2;
	}
	.call {
		user-select: none;
		pointer-events: fill;
		position: absolute;
		bottom: 0;
		right: 0;
	}
</style>
