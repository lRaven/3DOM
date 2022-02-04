<template>
	<div class="theme-container">
		<the-header />
		<main class="main" id="main">
			<the-banner />
			<the-statistics />
			<the-apartments />
			<the-location />
			<the-gallery />
			<the-infrastructure />
			<the-parking />
			<the-pantry />
			<the-office />
			<the-feedback />
			<the-footer />
		</main>
		<popup />
	</div>
</template>

<script>
	import TheHeader from "../components/academ/TheHeader.vue";

	import TheBanner from "../components/academ/TheBanner.vue";
	import TheStatistics from "../components/academ/TheStatistics.vue";
	import TheApartments from "../components/academ/TheApartments.vue";
	import TheLocation from "../components/academ/TheLocation.vue";
	import TheGallery from "../components/academ/TheGallery.vue";
	import TheInfrastructure from "../components/academ/TheInfrastructure.vue";
	import TheParking from "../components/academ/TheParking.vue";
	import ThePantry from "../components/academ/ThePantry.vue";
	import TheOffice from "../components/academ/TheOffice.vue";
	import TheFeedback from "../components/academ/TheFeedback.vue";

	import TheFooter from "../components/academ/TheFooter.vue";

	import Popup from "../components/academ/Popup.vue";

	export default {
		components: {
			TheHeader,

			TheBanner,
			TheStatistics,
			TheApartments,
			TheLocation,
			TheGallery,
			TheInfrastructure,
			TheParking,
			ThePantry,
			TheOffice,
			TheFeedback,

			TheFooter,
			Popup,
		},
		methods: {},
	};
</script>

<style lang="scss" scoped>
	main {
		background-color: var(--dark-green);
	}
	section {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
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
