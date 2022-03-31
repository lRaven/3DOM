const state = () => ({
	apartment: {},
	apartments_on_floor: [],
	fix_status: '',
})

const getters = {
	APARTMENT: state => {
		return state.apartment;
	},
	APARTMENTS_ON_FLOOR: state => {
		return state.apartments_on_floor;
	},
	FIX_STATUS: state => {
		return state.fix_status;
	}
}

const mutations = {
	SET_APARTMENT(state, payload) {
		state.apartment = payload;
	},
	SET_APARTMENTS_ON_FLOOR(state, payload) {
		state.apartments_on_floor = payload;
	},
	SET_FIX_STATUS(state, payload) {
		state.fix_status = payload;
	}
}

const actions = {}

export default {
	state,
	getters,
	mutations,
	actions
}