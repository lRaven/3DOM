<template>
	<router-view v-slot="{ Component }">
		<transition name="fade" mode="out-in">
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<script>
	import store from "./store";
	import axios from "axios";

	export default {
		store,
		watch: {
			$route(to) {
				document.title = to.meta.title || "Default Title";
			},
		},
		data() {
			return {
				token: localStorage.getItem("token"),
			};
		},
		methods: {
			getUserMe(token) {
				axios
					.get("http://localhost:8001/auth/users/me", {
						headers: { Authorization: `token ${token}` },
					})
					.then((response) => {
						this.setUser(response.data, token);
					})
					.catch((err) => {
						console.error(err);
						console.log(store.getters.TOKEN);
					});
			},
			//*запись данных о себе во vuex
			setUser(user, token) {
				store.commit("SET_USER", user);
				store.commit("SET_TOKEN", token);
				console.log(store.getters.USER);
			},
		},
		mounted() {
			this.getUserMe(this.token);
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
		min-height: calc(100vh - 6rem);
		padding-left: 1.5rem;
		padding-right: 1.5rem;
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
