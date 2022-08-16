import { createStore } from 'vuex'

import Cabinet from '@/store/modules/cabinet'
import Academ from '@/store/modules/academ'
import CRM from '@/store/modules/crm'
import Catalog from '@/store/modules/catalog';

export default createStore({
	state: { baseURL: process.env.VUE_APP_BACKEND_BASEURL, },
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		cabinet: Cabinet,
		academ: Academ,
		crm: CRM,
		catalog: Catalog,
	},
	plugins: [],
});