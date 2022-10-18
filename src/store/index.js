import { createStore } from 'vuex'

import Cabinet from '@/store/modules/cabinet'
import Academ from '@/store/modules/academ'
import CRM from '@/store/modules/crm'
import Catalog from '@/store/modules/catalog'
import Messenger from '@/store/modules/messenger'
import Repair from '@/store/modules/repair'

export default createStore({
	state: {
		baseURL: process.env.VUE_APP_BACKEND_BASEURL,
		documentWidth: document.documentElement.clientWidth,
	},
	getters: { baseURLWithoutProtocol(state) { return state.baseURL.split("/")[2] } },
	mutations: { setDocumentWidth: (state, payload) => state.documentWidth = payload, },
	actions: {
		getDocumentWidth: (context) => {
			context.commit('setDocumentWidth', document.documentElement.clientWidth);
			window.addEventListener("resize", () => {
				setTimeout(() => {
					context.commit('setDocumentWidth', document.documentElement.clientWidth);
				}, 100);
			});
		},
	},
	modules: {
		cabinet: Cabinet,
		academ: Academ,
		crm: CRM,
		catalog: Catalog,
		messenger: Messenger,
		repair: Repair,
	},
	plugins: [],
});