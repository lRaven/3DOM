import axios from 'axios';

const state = () => ({
	token: localStorage.getItem('at') || null,
	id: null,
	user: {},
})

const getters = {
	TOKEN: state => {
		return state.token;
	},
	ID: state => {
		return state.id;
	},
	USER: state => {
		return state.user;
	},
}

const mutations = {
	SET_TOKEN(state, payload) {
		state.token = payload;
	},
	SET_ID(state, payload) {
		state.id = payload;
	},
	SET_USER(state, payload) {
		state.user = payload;
	},
}

const actions = {
	getUserId: async (context) => {
		let request = await axios
			.get("http://localhost:8001/auth/users/", {
				headers: { Authorization: `token ${context.getters.TOKEN}` },
			})

		if (request.status === 200) {
			if (context.getters.USER.username !== null) {
				for (const key in request.data) {
					if (
						request.data[key].username ===
						context.getters.USER.username
					) {
						let id = request.data[key].id;
						context.commit("SET_ID", id);
					}
				}
			}

		}
	},

	getUser: async (context) => {
		await axios.get("http://localhost:8001/auth/users/me", {
			headers: { Authorization: `token ${context.getters.TOKEN}` },
		}).then(response => {
			if (response.status === 200) {
				context.commit("SET_USER", response.data);
				context.dispatch('getUserId');
			}
		}).catch(err => {
			//*стереть из vuex, localstorage данные юзера и редирект на главную
			console.error(err);

			localStorage.removeItem("at");
			localStorage.removeItem("pw");

			context.commit("SET_TOKEN", null);
			context.commit("SET_ID", null);
			context.commit("SET_USER", {});
			context.commit("SET_TAB", null);
			context.commit("SET_BOOKING", []);
			context.commit("SET_FAVORITES", null);

			this.$router.push("/");
		})
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}