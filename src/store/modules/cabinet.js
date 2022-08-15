import axios from 'axios';
import store from '@/store';
import cookie from 'vue-cookies';

const state = () => ({
	//* main
	tab: 'profile',

	booking: [],

	favorites: [],
	sort: 'price',

	//* user
	token: cookie.get('auth_token') || null,
	user: {},
})

const getters = {}

const mutations = {
	//* main
	SET_TAB(state, payload) { state.tab = payload; },

	SET_BOOKING(state, payload) { state.booking = payload; },

	SET_FAVORITES(state, payload) { state.favorites = payload; },
	SET_SORT(state, payload) { state.sort = payload; },

	//* user
	SET_TOKEN(state, payload) { state.token = payload; },
	SET_ID(state, payload) { state.user.id = payload; },
	SET_USER(state, payload) { state.user = payload; },
}

const actions = {
	//* user
	getUserId: async (context) => {
		let response = await axios
			.get(`${store.state.baseURL}/auth/users/`, {
				headers: { Authorization: `token ${cookie.get('auth_token')}` },
			})
		if (response.status === 200) {
			for (const key in response.data) {
				if (
					response.data[key].username ===
					store.state.cabinet.user.username
				) {
					const id = response.data[key].id;
					context.commit("SET_ID", id);
				}
			}
		}
	},

	getUser: async (context) => {
		await axios.get(`${store.state.baseURL}/auth/users/me`, {
			headers: { Authorization: `token ${cookie.get('auth_token')}` },
		}).then(response => {
			if (response.status === 200) {
				context.commit("SET_USER", response.data);
				context.dispatch('getUserId');
			} else if (response.status >= 400) {
				//*стереть из vuex,cookies данные юзера и редирект на главную

				cookie.remove('auth_token');

				context.commit("SET_TOKEN", null);
				context.commit("SET_ID", null);
				context.commit("SET_USER", {});
				context.commit("SET_TAB", null);
				context.commit("SET_BOOKING", []);
				context.commit("SET_FAVORITES", null);

				this.$router.push("/");
			}
		}).catch(err => {
			//*стереть из vuex,cookies данные юзера и редирект на главную
			cookie.remove('auth_token');

			context.commit("SET_TOKEN", null);
			context.commit("SET_ID", null);
			context.commit("SET_USER", {});
			context.commit("SET_TAB", null);
			context.commit("SET_BOOKING", []);
			context.commit("SET_FAVORITES", null);

			this.$router.push("/");
			throw new Error(err);
		})
	},
}

export default {
	state,
	getters,
	mutations,
	actions
}