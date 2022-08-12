const state = () => ({ apartments: [], })

const getters = {
	SINGLE_ROOM: state => {
		return state.apartments.filter(el => {
			return el.floor === 4 & (el.type === 1 || el.type === 5)
		})
	},
	TWO_ROOM: state => {
		return state.apartments.filter(el => {
			return el.floor === 4 & el.type === 2
		})
	},
	THREE_ROOM: state => {
		return state.apartments.filter(el => {
			return el.floor === 4 & el.type === 3
		})
	},
}

const mutations = {
	SET_APARTMENTS(state, payload) {
		state.apartments = payload;
	},

	SET_SINGLE_ROOM(state, payload) {
		state.single_room = payload;
	},
	SET_TWO_ROOM(state, payload) {
		state.two_room = payload;
	},
	SET_THREE_ROOM(state, payload) {
		state.three_room = payload;
	},
}

const actions = {}

export default {
	state,
	getters,
	mutations,
	actions
}