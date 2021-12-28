import { createStore } from 'vuex'
import User from './modules/user'
import Cabinet from './modules/cabinet'

export default createStore({
	state: {
	},
	getters: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		user: User,
		cabinet: Cabinet,
	}
});