const state = () => ({
	favorites: [],
	sort: 'price'
})
const getters = {
	FAVORITES: state => {
		return state.favorites;
	},
	SORT: state => {
		return state.sort;
	}
}
const mutations = {
	SET_FAVORITES(state, payload) {
		state.favorites = payload;
	},
	SET_SORT(state, payload) {
		state.sort = payload
	}
}
const actions = {

}
export default {
	state,
	getters,
	mutations,
	actions
}