<template>
	<router-view v-slot="{ Component }">
		<transition name="page" mode="out-in">
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<script>
	import { mapActions } from "vuex";
	import { getFavoriteApartmentNumber } from "@/api/favorite";

	export default {
		watch: {
			$route(to) {
				document.title = to.meta.title || "Default Title";
			},

			"$route.path"() {
				//* срабатывает при переходе по router-link
				document.querySelector("body").classList.remove("locked");
			},
		},
		methods: {
			...mapActions(["getUser"]),
			getFavoriteApartmentNumber,
		},
		mounted() {
			this.getUser();

			if (this.$cookies.get("auth_token")) {
				getFavoriteApartmentNumber();
			}
		},
	};
</script>

<style lang="scss">
	@import "@/assets/scss/center";
	@import "@/assets/scss/animation";

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

	.the-footer {
		flex: 0 0 auto;
	}

	img,
	svg {
		user-select: none;
		pointer-events: none;
	}

	#app,
	.theme-container {
		display: flex;
		flex-direction: column;
		height: 100%;
		min-height: 100vh;
	}
</style>
