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
				if (to.name === "Academ" || to.name === "CRM") {
					document.body.classList.add("dark");
				} else {
					document.body.classList.remove("dark");
				}
			},

			"$route.path"() {
				//* срабатывает при переходе по router-link
				document.querySelector("body").classList.remove("locked");
			},
		},
		methods: {
			...mapActions(["getDocumentWidth"]),
			getFavoriteApartmentNumber,
		},
		mounted() {
			this.getDocumentWidth();
			if (this.$cookies.get("auth_token")) {
				getFavoriteApartmentNumber();
			}
		},
	};
</script>

<style lang="scss">
	@import "@/assets/scss/center";
	@import "@/assets/scss/animation";
	@import "@/assets/scss/variables";

	* {
		scroll-behavior: smooth;
		font-family: "Montserrat";

		//*chrome/safari
		&::-webkit-scrollbar {
			width: $scrollbarWidth; /* ширина scrollbar */
		}
		&::-webkit-scrollbar-track {
			background: $scrollbarBg; /* цвет дорожки */
		}
		&::-webkit-scrollbar-thumb {
			background-color: $scrollbarThumb; /* цвет плашки */
			border-radius: $scrollbarBorderRadius; /* закругления плашки */
			border: $scrollbarBorder; /* padding вокруг плашки */
		}
		//*firefox
		scrollbar-width: thin; /* "auto" или "thin"  */
		scrollbar-color: $scrollbarThumb $scrollbarBg;
	}

	body {
		height: max-content;
		&.locked {
			overflow: hidden;
		}

		&.dark {
			&::-webkit-scrollbar-track {
				background: $dark-green; /* цвет дорожки */
			}
			&::-webkit-scrollbar-thumb {
				background-color: $gold; /* цвет плашки */
				border: $dark-green; /* padding вокруг плашки */
			}
			//*firefox
			scrollbar-color: $scrollbarThumb $dark-green;

			* {
				&::-webkit-scrollbar-track {
					background: $dark-green; /* цвет дорожки */
				}
				&::-webkit-scrollbar-thumb {
					background-color: $gold; /* цвет плашки */
					border: $dark-green; /* padding вокруг плашки */
				}
				//*firefox
				scrollbar-color: $scrollbarThumb $dark-green;
			}
		}
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
		min-height: 100vh;
	}
</style>
