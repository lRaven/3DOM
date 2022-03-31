const state = () => ({
	apartments: [],

	single_room: {},
	two_room: {},
	three_room: {},
})

const getters = {
	APARTMENTS: state => {
		return state.apartments;
	},

	SINGLE_ROOM: state => {
		return state.single_room;
	},
	TWO_ROOM: state => {
		return state.two_room;
	},
	THREE_ROOM: state => {
		return state.three_room;
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