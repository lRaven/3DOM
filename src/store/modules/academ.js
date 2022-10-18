const state = () => ({ apartments: [], })

const getters = {
	singleRoom: state => {
		return state.apartments.filter(el => {
			return el.floor === 4 & (el.type === 1 || el.type === 5)
		})
	},
	twoRoom: state => {
		return state.apartments.filter(el => {
			return el.floor === 4 & el.type === 2
		})
	},
	threeRoom: state => {
		return state.apartments.filter(el => {
			return el.floor === 4 & el.type === 3
		})
	},
}

const mutations = {
	setApartments(state, payload) { state.apartments = payload; },
	clearApartments(state) { state.apartments = [] }
}

const actions = {
	clearAcademState(context) {
		context.commit('clearApartments');
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}