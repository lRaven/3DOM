import axios from 'axios';
import store from '@/store';
import cookie from 'vue-cookies';

const state = () => ({
	//* main
	tab: 'profile',
	tabs_user: [
		{ id: 1, icon: '/img/icon/cabinet/profile.svg', icon_selected: '/img/icon/cabinet/profile-selected.svg', description: 'Мой профиль', tab: 'profile', link: { name: 'Profile' } },
		{ id: 2, icon: '/img/icon/cabinet/favorites.svg', icon_selected: '/img/icon/cabinet/favorites-selected.svg', description: 'Избранное', tab: 'favorites', link: { name: 'Favorites' } },
		{ id: 3, icon: '/img/icon/cabinet/appointments.svg', icon_selected: '/img/icon/cabinet/appointments-selected.svg', description: 'Встречи', tab: 'appointments', link: { name: 'Appointments' } },
		{ id: 4, icon: '/img/icon/cabinet/mortgage.svg', icon_selected: '/img/icon/cabinet/mortgage-selected.svg', description: 'Ипотека', tab: 'mortgage', link: { name: 'Mortgage' } },
		{ id: 5, icon: '/img/icon/cabinet/services.svg', icon_selected: '/img/icon/cabinet/services-selected.svg', description: 'Услуги', tab: 'services', link: { name: 'Services' } },
		{ id: 6, icon: '/img/icon/cabinet/bonuses.svg', icon_selected: '/img/icon/cabinet/bonuses-selected.svg', description: 'Бонусы', tab: 'bonuses', link: { name: 'Bonuses' } },
		{ id: 7, icon: '/img/icon/cabinet/beater.svg', icon_selected: null, description: 'Колоток', tab: 'kolotok', link: null },
		{ id: 8, icon: '/img/icon/cabinet/feedback.svg', icon_selected: '/img/icon/cabinet/feedback-selected.svg', description: 'Обратная связь', tab: 'feedback', link: { name: 'Feedback' } },
		{ id: 9, icon: '/img/icon/cabinet/appeals.svg', icon_selected: '/img/icon/cabinet/appeals-selected.svg', description: 'Обращения', tab: 'appeals', link: { name: 'Appeals' } },
	],
	tabs_admin: [
		{ id: 1, icon: '/img/icon/cabinet/profile.svg', icon_selected: '/img/icon/cabinet/profile-selected.svg', description: 'Мой профиль', tab: 'profile', link: { name: 'Profile' } },
		{ id: 2, icon: '/img/icon/cabinet/booking.svg', icon_selected: '/img/icon/cabinet/booking-selected.svg', description: 'Бронирование', tab: 'booking', link: { name: 'Booking' } },
		{ id: 3, icon: '/img/icon/cabinet/favorites.svg', icon_selected: '/img/icon/cabinet/favorites-selected.svg', description: 'Избранное', tab: 'favorites', link: { name: 'Favorites' } },
		{ id: 4, icon: '/img/icon/cabinet/documents.svg', icon_selected: '/img/icon/cabinet/documents-selected.svg', description: 'Документы', tab: 'documents', link: { name: 'Documents' } },
		{ id: 5, icon: '/img/icon/cabinet/appointments.svg', icon_selected: '/img/icon/cabinet/appointments-selected.svg', description: 'Встречи', tab: 'appointments', link: { name: 'Appointments' } },
		{ id: 6, icon: '/img/icon/cabinet/mortgage.svg', icon_selected: '/img/icon/cabinet/mortgage-selected.svg', description: 'Ипотека', tab: 'mortgage', link: { name: 'Mortgage' } },
		{ id: 7, icon: '/img/icon/cabinet/services.svg', icon_selected: '/img/icon/cabinet/services-selected.svg', description: 'Услуги', tab: 'services', link: { name: 'Services' } },
		{ id: 8, icon: '/img/icon/cabinet/bonuses.svg', icon_selected: '/img/icon/cabinet/bonuses-selected.svg', description: 'Бонусы', tab: 'bonuses', link: { name: 'Bonuses' } },
		{ id: 9, icon: '/img/icon/cabinet/crm.svg', icon_selected: '/img/icon/cabinet/crm-selected.svg', description: 'Кабинет CRM', tab: '', link: { name: "CRM" } },
		{ id: 10, icon: '/img/icon/cabinet/feedback.svg', icon_selected: '/img/icon/cabinet/feedback-selected.svg', description: 'Обратная связь', tab: 'feedback', link: { name: 'Feedback' } },
		{ id: 11, icon: '/img/icon/cabinet/appeals.svg', icon_selected: '/img/icon/cabinet/appeals-selected.svg', description: 'Обращения', tab: 'appeals', link: { name: 'Appeals' } },
	],

	booking: [],

	favorites: [],

	//* user
	token: cookie.get('auth_token') || null,
	user: {},
	user_auth: null,
})

const getters = {}

const mutations = {
	//* main
	SET_TAB(state, payload) { state.tab = payload; },
	CLEAR_TAB(state) { state.tab = 'profile' },

	SET_BOOKING(state, payload) { state.booking = payload; },
	CLEAR_BOOKING(state) { state.booking = [] },

	SET_FAVORITES(state, payload) { state.favorites = payload; },
	CLEAR_FAVORITES(state) { state.favorites = [] },

	//* user
	SET_ID(state, payload) { state.user.id = payload; },
	SET_USER(state, payload) { state.user = payload; },
	CLEAR_USER(state) { state.user = {} },

	SET_USER_AUTH(state, payload) { state.user_auth = payload; },
	CLEAR_USER_AUTH(state) { state.user_auth = false },
}

const actions = {
	getUserId: async (context) => {
		try {
			const response = await axios
				.get(`${store.state.baseURL}/auth/users/`, {
					headers: { Authorization: `token ${cookie.get('auth_token')}` },
				})
			if (response.status === 200) {
				const userMe = response.data.find(user => {
					return user.username === context.state.user.username;
				})
				context.commit("SET_ID", userMe.id);
			}
		}
		catch (err) { throw new Error(err) }
	},

	getUser: async (context) => {
		try {
			const response = await axios.get(`${store.state.baseURL}/auth/users/me`, {
				headers: { Authorization: `token ${cookie.get('auth_token')}` },
			})

			if (response.status === 200) {
				context.commit("SET_USER", response.data);
				context.dispatch('getUserId');
				context.commit('SET_USER_AUTH', true);
			}
			else if (response.status >= 400) {
				//* clear cookies, cabinet data
				cookie.remove('auth_token');

				context.dispatch('clearCabinetState');
			}

			return response;
		}
		catch (err) {
			//* clear cookies, cabinet data
			cookie.remove('auth_token');

			context.dispatch('clearCabinetState');

			throw new Error(err);
		}
	},

	clearCabinetState(context) {
		context.commit('CLEAR_TAB');
		context.commit('CLEAR_BOOKING');
		context.commit('CLEAR_FAVORITES');
		context.commit('CLEAR_USER');
		context.commit('CLEAR_USER_AUTH');
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}