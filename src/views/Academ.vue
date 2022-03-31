<template>
	<div class="theme-container">
		<the-header />
		<main class="main" id="main">
			<the-banner />
			<the-apartments />
			<the-location />
			<the-gallery />
			<the-infrastructure />
			<the-broadcast />
			<the-parking />
			<the-pantry />
			<the-office />
			<the-feedback />
		</main>
		<the-footer />
		<image-popup />
		<mortgage-calculator
			closeIcon="img/icon/academ/close.svg"
		></mortgage-calculator>
	</div>
</template>

<script>
	import TheHeader from "../components/academ/TheHeader.vue";

	import TheBanner from "../components/academ/TheBanner.vue";
	import TheApartments from "../components/academ/TheApartments.vue";
	import TheLocation from "../components/academ/TheLocation.vue";
	import TheGallery from "../components/academ/TheGallery.vue";
	import TheInfrastructure from "../components/academ/TheInfrastructure.vue";
	import TheBroadcast from "../components/academ/TheBroadcast.vue";
	import TheParking from "../components/academ/TheParking.vue";
	import ThePantry from "../components/academ/ThePantry.vue";
	import TheOffice from "../components/academ/TheOffice.vue";
	import TheFeedback from "../components/academ/TheFeedback.vue";

	import TheFooter from "../components/academ/TheFooter.vue";

	import imagePopup from "../components/academ/image-popup.vue";
	import MortgageCalculator from "../components/academ/MortgageCalculator.vue";

	export default {
		components: {
			TheHeader,

			TheBanner,
			TheApartments,
			TheLocation,
			TheGallery,
			TheInfrastructure,
			TheBroadcast,
			TheParking,
			ThePantry,
			TheOffice,
			TheFeedback,

			TheFooter,

			imagePopup,
			MortgageCalculator,
		},
		methods: {},
	};
</script>

<style lang="scss" scoped>
	main {
		background-color: var(--dark-green);
	}
	section {
		min-height: calc(100vh - 6rem);
		overflow: hidden;
		background: var(--dark-green);
		display: flex;
	}

	a {
		user-select: none;
		font-size: 1.6rem;
		color: var(--dark-green);
		font-weight: 600;
	}

	img,
	svg {
		user-select: none;
		pointer-events: none;
	}

	.nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3rem;
	}
	.link {
		position: relative;
		&::after {
			content: "";
			position: absolute;
			left: 0;
			bottom: -0.3rem;
			width: 0;
			height: 0.2rem;
			background-color: var(--dark-green);
			transition: all 0.3s ease;
		}
		&:hover {
			&::after {
				width: 100%;
				transition: all 0.3s ease;
			}
		}
	}
</style>
