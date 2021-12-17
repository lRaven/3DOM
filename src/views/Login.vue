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
	import axios from "axios";
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

				axios
					.post("http://localhost:8001/auth/token/login/", {
						username: this.username,
						password: this.password,
					})
					.then((response) => {
						this.setToken(response.data.auth_token);
						if (response.status == 200) {
							//редирект на главную
							// this.$router.push("/");
						}
					})
					.catch((err) => {
						console.error(err.response.status);
					});
			},

			setToken(token) {
				store.commit("SET_TOKEN", token);
				localStorage.setItem("token", token);
				this.getUserMe();
			},
			getUserMe() {
				let token = store.getters.TOKEN;
				axios
					.get("http://localhost:8001/auth/users/me", {
						headers: { Authorization: `token ${token}` },
					})
					.then((response) => this.setUser(response.data));
			},

			setUser(user) {
				store.commit("SET_USER", user);
				console.log(store.state.user.user);
			},
		},
		mounted() {},
	};
</script>

<style lang="scss" scoped>
	section {
		height: calc(100vh - 14rem);
		min-height: inherit;
	}
	.login {
		&-wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			h1 {
				font-size: 4rem;
				text-align: center;
				margin-bottom: 2rem;
			}
			button {
				padding: 2rem 3rem;
			}
			label {
				padding: 2rem 3rem;
				font-size: 2.4rem;
			}
			input {
				border: 1px solid #000;
				height: 100%;
				padding: 2rem 3rem;
			}
		}
	}
</style>
