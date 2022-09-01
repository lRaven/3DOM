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
		document_width: document.documentElement.clientWidth,
	},
	getters: { BASEURL_WITHOUT_PROTOCOL(state) { return state.baseURL.split("/")[2] } },
	mutations: { SET_DOCUMENT_WIDTH: (state, payload) => state.document_width = payload, },
	actions: {
		getDocumentWidth: async (context) => {
			await context.commit('SET_DOCUMENT_WIDTH', document.documentElement.clientWidth);
			await window.addEventListener("resize", () => {
				setTimeout(() => {
					context.commit('SET_DOCUMENT_WIDTH', document.documentElement.clientWidth);
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