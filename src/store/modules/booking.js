const state = () => ({
    booking: [],
})

const getters = {
    BOOKING: state => {
        return state.booking;
    },
}

const mutations = {
    SET_BOOKING(state, payload) {
        state.booking = payload;
    },
}

const actions = {}

export default {
    state,
    getters,
    mutations,
    actions
}