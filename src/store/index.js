import { createStore } from 'vuex'

import User from './modules/user'
import Apartments from './modules/apartments'
import Cabinet from './modules/cabinet'
import Booking from './modules/booking'
import Favorites from './modules/favorites'

export default createStore({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		user: User,
		apartments: Apartments,
		cabinet: Cabinet,
		booking: Booking,
		favorites: Favorites,
	},
});