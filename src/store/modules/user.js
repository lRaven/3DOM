const state = () => ({
	token: null,
	user: {
		username: '',
		email: '',
		first_name: '',
		last_name: '',
		role: '',
		is_superuser: '',
		avatar: '',
	},
})
const getters = {
	TOKEN: state => {
		return state.token;
	},
	USERS: state => {
		return state.users;
	}
}
const mutations = {
	SET_TOKEN(state, payload) {
		state.token = payload;
	},
	SET_USER(state, payload) {
		state.user = {
			username: payload.username,
			email: payload.email,
			first_name: payload.first_name,
			last_name: payload.last_name,
			role: payload.role,
			is_superuser: payload.is_superuser,
			avatar: payload.avatar,
		};
	},
}
const actions = {
	SET_TOKEN: (context, payload) => {
		context.commit('SET_TOKEN', payload)
	},
	SET_USER: (state, payload) => {
		state.users.push({
			username: payload.username,
			email: payload.email,
			first_name: payload.first_name,
			last_name: payload.last_name,
			role: payload.role,
			is_superuser: payload.is_superuser,
			avatar: payload.avatar,
		});
	}
}
export default {
	state,
	getters,
	mutations,
	actions
}