<template>
	<div class="theme-container">
		<Header />
		<main class="main">
			<section class="login-wrapper center">
				<form class="login" @submit="login">
					<h1>Sign in</h1>
					<label>
						User name:
						<input
							required
							v-model="username"
							type="text"
							placeholder="name"
							id="login"
						/>
					</label>
					<label>
						Password:
						<input
							required
							v-model="password"
							type="password"
							placeholder="password"
							id="password"
						/>
					</label>
					<button type="submit">Login</button>
				</form>
			</section>
		</main>
		<Footer />
	</div>
</template>

<script>
	import store from "../store";
	import Header from "../components/general/Header.vue";
	import Footer from "../components/general/Footer.vue";

	export default {
		name: "login",
		store,
		components: {
			Header,
			Footer,
		},

		data() {
			return {
				username: "",
				password: "",
			};
		},
		methods: {
			login(event) {
				event.preventDefault();
				const axios = require("axios");

				axios
					.post("http://localhost:8001/auth/token/login/", {
						username: this.username,
						password: this.password,
					})
					.then((response) => {
						this.setLogined(response.data.auth_token);
						if (response.status == 200) {
							this.$router.push("/");
						}
					})
					.catch((err) => {
						console.error(err.response.status);
					});
			},
			setLogined(token) {
				console.log(token);
			},
		},
		mounted() {
			// const config = {
			// 	headers: {
			// 		Authorization: `token f757c9c6c815f6c885d372b9642682dc3d8fd036`,
			// 	},
			// };
			// const axios = require("axios");
			// axios
			// 	.get("http://127.0.0.1:8001/auth/users/", config)
			// 	.then((responce) => responce.data.users);
		},
	};
</script>

<style lang="scss" scoped>
	section {
		height: calc(100vh - 14rem);
		min-height: inherit;
	}
</style>
