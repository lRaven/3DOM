const state = () => ({
	apartments_on_floor: [],
	fix_status: '',
})

const getters = {}

const mutations = {
	SET_APARTMENTS_ON_FLOOR(state, payload) { state.apartments_on_floor = payload; },
	CLEAR_APARTMENTS_ON_FLOOR(state) { state.apartments_on_floor = [] },

	SET_FIX_STATUS(state, payload) { state.fix_status = payload; },
	CLEAR_FIX_STATUS(state) { state.fix_status = '' },
}

const actions = {
	clearCRMState(context) {
		context.commit('CLEAR_APARTMENTS_ON_FLOOR');
		context.commit('CLEAR_FIX_STATUS');
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}