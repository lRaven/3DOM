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
const getters = {
	//* main
	TAB: state => {
		return state.tab;
	},

	BOOKING: state => {
		return state.booking;
	},

	FAVORITES: state => {
		return state.favorites;
	},
	SORT: state => {
		return state.sort;
	},

	//* user
	TOKEN: state => {
		return state.token;
	},
	USER: state => {
		return state.user;
	},
}
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
		let request = await axios
			.get(`${store.getters.BASEURL}/auth/users/`, {
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
		await axios.get(`${store.getters.BASEURL}/auth/users/me`, {
			headers: { Authorization: `token ${context.getters.TOKEN}` },
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