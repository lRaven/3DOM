<template>
	<div class="theme-container">
		<Header />
		<main class="main">
			<section class="cabinet">
				<aside class="cabinet__aside">
					<Navigation />
				</aside>
				<div class="cabinet__main">
					<Dropdown />
					<Dropdown />
					<Dropdown />
				</div>
			</section>
		</main>
		<Footer />
	</div>
</template>

<script>
	import Header from "../components/general/Header.vue";

	import Navigation from "../components/cabinet/Navigation.vue";
	import Dropdown from "../components/general/Dropdown.vue";

	import Footer from "../components/general/Footer.vue";
	export default {
		name: "Cabinet",
		components: {
			Header,

			Navigation,
			Dropdown,

			Footer,
		},
	};
</script>

<style lang="scss" scoped></style>
