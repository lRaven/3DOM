<template>
	<div class="theme-container">
		<Header />
		<main class="cabinet center">
			<aside class="cabinet__aside">
				<Navigation />
			</aside>
			<div class="cabinet__main"></div>
		</main>
		<Footer />
	</div>
</template>

<script>
	import store from "../store";

	import Header from "../components/general/Header.vue";

	import Navigation from "../components/cabinet/Navigation.vue";
	// import Dropdown from "../components/general/Dropdown.vue";

	import Footer from "../components/general/Footer.vue";
	export default {
		name: "Cabinet",
		store,
		components: {
			Header,

			Navigation,
			// Dropdown,

			Footer,
		},
		data() {
			return {
				authorized: false,
			};
		},
		methods: {
			checkAuthorized() {
				if (store.getters.TOKEN === false) {
					this.authorized = false;
					this.$router.push("/login");
				} else {
					this.authorized = true;
				}
			},
		},
		mounted() {
			let counter = 1;
			let check = setInterval(() => {
				this.checkAuthorized();
				counter = counter + 1;
				if (counter === 10) {
					clearInterval(check);
				}
			}, 300);
		},
	};
</script>

<style lang="scss" scoped>
	.theme-container {
		display: grid;
		grid-template-rows: 1fr 8rem;
		height: 100%;
		min-height: 100vh;
	}
	.cabinet {
	}
	footer {
	}
	section {
		padding: 0;
	}
</style>
