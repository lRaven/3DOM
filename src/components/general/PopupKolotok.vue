<template>
	<div class="popup-kolotok" @click="closePopup($event.target)">
		<img
			src="img/general/kolotok-coming-soon.svg"
			alt=""
			class="popup-kolotok__img"
			ref="image"
		/>
	</div>
</template>

<script>
	export default {
		name: "PopupKolotok",
		methods: {
			closePopup(e) {
				if (e !== this.$refs.image) this.$emit("closePopup");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.popup-kolotok {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 5;
		transition: all 0.3s ease;
		background-color: #fff;
		background-color: rgba(0, 0, 0, 0.7);

		&__img {
			pointer-events: all;
			max-height: 90vh;
			height: 100%;
			max-width: 50vw;
		}
	}
</style>
