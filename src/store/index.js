import { createStore } from 'vuex'

import Cabinet from './modules/cabinet'
import Academ from './modules/academ'
import CRM from './modules/crm'

export default createStore({
	state: {
		baseURL: `http://localhost:8001`,
	},
	getters: {
		BASEURL: state => {
			return state.baseURL;
		}
	},
	mutations: {
		SET_BASEURL(state, payload) {
			state.baseURL = payload;
		}
	},
	actions: {},
	modules: {
		cabinet: Cabinet,
		academ: Academ,
		crm: CRM,
	},
	plugins: [],
});