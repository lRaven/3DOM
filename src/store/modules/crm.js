const state = () => ({
	apartments_on_floor: [],
	fix_status: '',
})

const getters = {}

const mutations = {
	setApartmentsOnFloor(state, payload) { state.apartments_on_floor = payload; },
	clearApartmentsOnFloor(state) { state.apartments_on_floor = [] },

	setFixStatus(state, payload) { state.fix_status = payload; },
	clearFixStatus(state) { state.fix_status = '' },
}

const actions = {
	clearCRMState(context) {
		context.commit('clearApartmentsOnFloor');
		context.commit('clearFixStatus');
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}