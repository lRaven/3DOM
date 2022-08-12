import { createStore } from 'vuex'

import Cabinet from '@/store/modules/cabinet'
import Academ from '@/store/modules/academ'
import CRM from '@/store/modules/crm'
import Catalog from '@/store/modules/catalog';

export default createStore({
	state: { baseURL: `http://localhost:8001`, },
	getters: {},
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
		catalog: Catalog,
	},
	plugins: [],
});