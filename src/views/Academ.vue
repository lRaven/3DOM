<template>
	<div class="theme-container">
		<Header />
		<main class="main" id="main">
			<banner />
			<statistics />
			<apartments />
			<location />
			<gallery />
			<infrastructure />
			<parking />
			<pantry />
			<office />
			<feedback />
			<Footer />
		</main>
		<popup />
	</div>
</template>

<script>
	import Header from "../components/academ/Header.vue";

	import Banner from "../components/academ/Banner.vue";
	import Statistics from "../components/academ/Statistics.vue";
	import Apartments from "../components/academ/Apartments.vue";
	import Location from "../components/academ/Location.vue";
	import Gallery from "../components/academ/Gallery.vue";
	import Infrastructure from "../components/academ/Infrastructure.vue";
	import Parking from "../components/academ/Parking.vue";
	import Pantry from "../components/academ/Pantry.vue";
	import Office from "../components/academ/Office.vue";
	import Feedback from "../components/academ/Feedback.vue";

	import Footer from "../components/academ/Footer.vue";

	import Popup from "../components/academ/Popup.vue";

	export default {
		components: {
			Header,
			Banner,
			Statistics,
			Apartments,
			Location,
			Gallery,
			Infrastructure,
			Parking,
			Pantry,
			Office,
			Feedback,
			Footer,
			Popup,
		},
		methods: {},
	};
</script>

<style lang="scss" scoped>
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
