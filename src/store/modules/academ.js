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
	SET_APARTMENTS(state, payload) { state.apartments = payload; },
	CLEAR_APARTMENTS(state) { state.apartments = [] }
}

const actions = {
	clearAcademState(context) {
		context.commit('CLEAR_APARTMENTS');
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}