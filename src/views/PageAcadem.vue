<template>
	<div class="page-academ theme-container">
		<the-header
			@openMortgageCalculator="openMortgageCalculator"
			:section="this.$route.query.section"
		></the-header>
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
		<the-footer
			@openMortgageCalculator="openMortgageCalculator"
		></the-footer>
		<image-popup />
		<transition mode="out-in" name="fade-up">
			<mortgage-calculator
				v-if="isMortgageCalculatorOpen"
				closeIcon="/img/icon/academ/close.svg"
				@closeMortgageCalculator="closeMortgageCalculator"
			></mortgage-calculator>
		</transition>
	</div>
</template>

<script>
	import TheHeader from "@/components/academ/TheHeader";

	import TheBanner from "@/components/academ/TheBanner";
	import TheApartments from "@/components/academ/TheApartments";
	import TheLocation from "@/components/academ/TheLocation";
	import TheGallery from "@/components/academ/TheGallery";
	import TheInfrastructure from "@/components/academ/TheInfrastructure";
	import TheBroadcast from "@/components/academ/TheBroadcast";
	import TheParking from "@/components/academ/TheParking";
	import ThePantry from "@/components/academ/ThePantry";
	import TheOffice from "@/components/academ/TheOffice";
	import TheFeedback from "@/components/academ/TheFeedback";

	import TheFooter from "@/components/academ/TheFooter";

	import imagePopup from "@/components/academ/image-popup";
	import MortgageCalculator from "@/components/academ/MortgageCalculator";

	import { getApartments, getApartmentsOnTheFloor } from "@/api/academ";

	export default {
		name: "PageAcadem",
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
		data: () => ({ isMortgageCalculatorOpen: false }),
		methods: {
			openMortgageCalculator() {
				this.isMortgageCalculatorOpen = true;
				document.body.classList.add("locked");
			},

			closeMortgageCalculator() {
				this.isMortgageCalculatorOpen = false;
				document.body.classList.remove("locked");
			},
		},
		created() {
			getApartments();
			getApartmentsOnTheFloor(4);
		},
	};
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/variables";

	main {
		background-color: $dark-green;
	}
	section {
		min-height: calc(100vh - 6rem);
		overflow: hidden;
		background: $dark-green;
		display: flex;
	}

	a {
		user-select: none;
		font-size: 1.6rem;
		color: $dark-green;
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
			background-color: $dark-green;
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
