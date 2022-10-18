<template>
	<div class="v-call" @click="this.$emit('open-popup')" v-once>
		<img
			src="/img/icons/general/call-circle.svg"
			class="v-call__img"
			alt="call"
		/>
	</div>
</template>

<script>
	import { requestSupportForm } from '@/mixins/support';

	export default {
		name: 'vCall',
		mixins: [requestSupportForm],
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.v-call {
		cursor: pointer;
		user-select: none;
		border-radius: 50%;
		overflow: hidden;
		box-shadow: 0 0 1rem 0.3rem $white;
		position: fixed;
		bottom: 5rem;
		right: 5rem;
		width: 6rem;
		height: 6rem;
		z-index: 2;
		animation: bounceInUp 1s;
		&__img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
	@media (max-width: 1050px) {
		.v-call {
			display: none;
		}
	}
</style>
