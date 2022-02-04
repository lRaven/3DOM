<template>
	<router-view v-slot="{ Component }">
		<transition name="fade" mode="out-in">
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<script>
	import store from "./store";
	import { getFavoriteApartmentNumber } from "./api/favorite";

	export default {
		store,
		watch: {
			$route(to) {
				document.title = to.meta.title || "Default Title";
			},

			"$route.path"() {
				//* срабатывает при переходе по router-link
			},
		},

		beforeCreate() {
			store.dispatch("getUser");
		},
		mounted() {
			if (store.getters.TOKEN !== null) {
				getFavoriteApartmentNumber();
			}
		},
	};
</script>

<style lang="scss">
	@import "./assets/scss/center.scss";
	@import "./assets/css/variables.css";
	@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;800&display=swap");

	* {
		scroll-behavior: smooth;
		font-family: "Montserrat";
	}

	section {
		padding: 5rem 1.5rem;
		overflow: hidden;
	}

	main {
		padding-top: 6rem;
	}

	img,
	svg {
		user-select: none;
		pointer-events: none;
	}
</style>

<style lang="scss" scoped>
	#app,
	.theme-container {
		height: 100%;
		min-height: 100vh;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: all 0.5s ease;
		transform: translateY(0rem);
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
		transform: translateY(3rem);
		transition: all 1s ease;
	}
</style>
