const state = () => ({
	token: null,
	user: {},
})
const getters = {
	TOKEN: state => {
		return state.token;
	},
	USER: state => {
		return state.user;
	},
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

}
export default {
	state,
	getters,
	mutations,
	actions
}