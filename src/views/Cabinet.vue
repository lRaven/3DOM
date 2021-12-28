<template>
	<div class="theme-container">
		<Header />
		<main class="cabinet center">
			<aside class="cabinet__aside">
				<Navigation />
				<div class="cabinet__hint">
					<p>
						Есть вопросы <br />
						или предложения?
					</p>
					<Btn :text="'Напишите нам'" class="gray"></Btn>
				</div>
			</aside>
			<div class="cabinet__main">
				<Profile />
			</div>
		</main>
		<Footer />
	</div>
</template>

<script>
	import store from "../store";

	import Header from "../components/general/Header.vue";

	import Navigation from "../components/cabinet/Navigation.vue";
	import Btn from "../components/general/Btn.vue";
	import Profile from "../components/cabinet/Profile.vue";
	// import Dropdown from "../components/general/Dropdown.vue";

	import Footer from "../components/general/Footer.vue";
	export default {
		name: "Cabinet",
		store,
		components: {
			Header,

			Navigation,
			Btn,
			Profile,
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
		padding-bottom: 16rem;
		display: flex;
		&__hint {
			margin-top: 9rem;
			padding-left: 2.5rem;
			p {
				font-size: var(--text-16);
				font-weight: 500;
				margin-bottom: 2rem;
			}
		}
		&__main {
			padding: 6rem 2rem;
			width: 100%;
		}
	}
	footer {
	}
	section {
		padding: 0;
	}
</style>
