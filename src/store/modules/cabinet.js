const state = () => ({
	tab: 'profile',
})
const getters = {
	TAB: state => {
		return state.tab;
	},
}
const mutations = {
	SET_TAB(state, payload) {
		state.tab = payload;
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