<template>
	<router-view v-slot="{ Component }">
		<transition name="fade" mode="out-in">
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<script>
	import store from "./store";

	export default {
		store,
		watch: {
			$route(to) {
				document.title = to.meta.title || "Default Title";
			},

			"$route.path"() {
				//* срабатывает при переходе по router-link
				document.querySelector("body").classList.remove("locked");
			},
		},
	};
</script>

<style lang="scss">
	@import "./assets/scss/center.scss";
	@import "./assets/css/variables.css";
	@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;800&display=swap");

	body {
		&.locked {
			overflow: hidden;
		}
	}

	* {
		scroll-behavior: smooth;
		font-family: "Montserrat";
	}

	section {
		padding: 2rem 1.5rem;
		overflow: hidden;
	}

	.main {
		display: flex;
		flex-direction: column;
		flex: 1 0 auto;
		padding-top: 6rem;
	}

	.footer {
		flex: 0 0 auto;
	}

	img,
	svg {
		user-select: none;
		pointer-events: none;
	}

	.v-enter-active,
	.v-leave-active {
		transition: opacity 0.3s ease;
	}

	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}

	#app,
	.theme-container {
		display: flex;
		flex-direction: column;
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
