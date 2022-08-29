import axios from 'axios';
import store from '@/store';
import cookie from 'vue-cookies';

const state = () => ({
	chats: [],
	messages: [],
	topics: [
		{ id: 1, value: "Вопрос по покупке" },
		{ id: 2, value: "Вопрос по заселению" },
		{ id: 3, value: "Вопрос по стройке" },
		{ id: 4, value: "Вопрос по проживанию" },
		{ id: 5, value: "Обращение в службу безопасности" },
		{ id: 6, value: "Предложение о сотрудничестве" },
		{ id: 7, value: "Сообщить об ошибке на сайте" },
		{ id: 8, value: "Другое" },
	],
})

const getters = {}

const mutations = {
	SET_CHATS: (state, payload) => state.chats = payload,
	CLEAR_CHATS: (state) => state.chats = [],

	SET_MESSAGES: (state, payload) => state.messages = payload,
	CLEAR_MESSAGES: (state) => state.messages = [],
}

const actions = {
	getChats: async (context) => {
		try {
			const response = await axios.get(`${store.state.baseURL}/users/support`,
				{ headers: { Authorization: `token ${cookie.get('auth_token')}` } }
			);

			context.commit('SET_CHATS', response.data)

			return response;
		}
		catch (err) { throw new Error(err) }
	},

	clearMessengerState(context) {
		context.commit('CLEAR_CHATS');
		context.commit('CLEAR_MESSAGES');
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}