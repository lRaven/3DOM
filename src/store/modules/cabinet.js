import axios from 'axios';
import cookie from 'vue-cookies';

const baseURL = process.env.VUE_APP_BACKEND_BASEURL;

const state = () => ({
	//* main
	tab: 'profile',
	tabsUser: [
		{ id: 1, icon: '/img/icons/cabinet/profile.svg', iconSelected: '/img/icons/cabinet/profile-selected.svg', description: 'Мой профиль', tab: 'profile', link: { name: 'Profile' } },
		{ id: 2, icon: '/img/icons/cabinet/favorites.svg', iconSelected: '/img/icons/cabinet/favorites-selected.svg', description: 'Избранное', tab: 'favorites', link: { name: 'Favorites' } },
		{ id: 3, icon: '/img/icons/cabinet/appointments.svg', iconSelected: '/img/icons/cabinet/appointments-selected.svg', description: 'Встречи', tab: 'appointments', link: { name: 'Appointments' } },
		{ id: 4, icon: '/img/icons/cabinet/mortgage.svg', iconSelected: '/img/icons/cabinet/mortgage-selected.svg', description: 'Ипотека', tab: 'mortgage', link: { name: 'Mortgage' } },
		{ id: 5, icon: '/img/icons/cabinet/services.svg', iconSelected: '/img/icons/cabinet/services-selected.svg', description: 'Услуги', tab: 'services', link: { name: 'Services' } },
		{ id: 6, icon: '/img/icons/cabinet/bonuses.svg', iconSelected: '/img/icons/cabinet/bonuses-selected.svg', description: 'Бонусы', tab: 'bonuses', link: { name: 'Bonuses' } },
		{ id: 7, icon: '/img/icons/cabinet/card.svg', iconSelected: '/img/icons/cabinet/card.svg', description: 'Тарифы', tab: 'rates', link: { name: 'Rates' } },
		{ id: 8, icon: '/img/icons/cabinet/beater.svg', iconSelected: null, description: 'Колоток', tab: 'kolotok', link: null },
		{ id: 9, icon: '/img/icons/cabinet/feedback.svg', iconSelected: '/img/icons/cabinet/feedback-selected.svg', description: 'Обратная связь', tab: 'feedback', link: { name: 'Feedback' } },
		{ id: 10, icon: '/img/icons/cabinet/appeals.svg', iconSelected: '/img/icons/cabinet/appeals-selected.svg', description: 'Обращения', tab: 'appeals', link: { name: 'Appeals' } },
	],
	tabsAdmin: [
		{ id: 1, icon: '/img/icons/cabinet/profile.svg', iconSelected: '/img/icons/cabinet/profile-selected.svg', description: 'Мой профиль', tab: 'profile', link: { name: 'Profile' } },
		{ id: 2, icon: '/img/icons/cabinet/booking.svg', iconSelected: '/img/icons/cabinet/booking-selected.svg', description: 'Бронирование', tab: 'booking', link: { name: 'Booking' } },
		{ id: 3, icon: '/img/icons/cabinet/favorites.svg', iconSelected: '/img/icons/cabinet/favorites-selected.svg', description: 'Избранное', tab: 'favorites', link: { name: 'Favorites' } },
		{ id: 4, icon: '/img/icons/cabinet/documents.svg', iconSelected: '/img/icons/cabinet/documents-selected.svg', description: 'Документы', tab: 'documents', link: { name: 'Documents' } },
		{ id: 5, icon: '/img/icons/cabinet/appointments.svg', iconSelected: '/img/icons/cabinet/appointments-selected.svg', description: 'Встречи', tab: 'appointments', link: { name: 'Appointments' } },
		{ id: 6, icon: '/img/icons/cabinet/mortgage.svg', iconSelected: '/img/icons/cabinet/mortgage-selected.svg', description: 'Ипотека', tab: 'mortgage', link: { name: 'Mortgage' } },
		{ id: 7, icon: '/img/icons/cabinet/services.svg', iconSelected: '/img/icons/cabinet/services-selected.svg', description: 'Услуги', tab: 'services', link: { name: 'Services' } },
		{ id: 8, icon: '/img/icons/cabinet/bonuses.svg', iconSelected: '/img/icons/cabinet/bonuses-selected.svg', description: 'Бонусы', tab: 'bonuses', link: { name: 'Bonuses' } },
		{ id: 9, icon: '/img/icons/cabinet/card.svg', iconSelected: '/img/icons/cabinet/card.svg', description: 'Тарифы', tab: 'rates', link: { name: 'Rates' } },
		{ id: 10, icon: '/img/icons/cabinet/crm.svg', iconSelected: '/img/icons/cabinet/crm-selected.svg', description: 'Кабинет CRM', tab: '', link: { name: "CRM" } },
		{ id: 11, icon: '/img/icons/cabinet/feedback.svg', iconSelected: '/img/icons/cabinet/feedback-selected.svg', description: 'Обратная связь', tab: 'feedback', link: { name: 'Feedback' } },
		{ id: 12, icon: '/img/icons/cabinet/appeals.svg', iconSelected: '/img/icons/cabinet/appeals-selected.svg', description: 'Обращения', tab: 'appeals', link: { name: 'Appeals' } },
	],

	booking: [],

	favorites: [],

	//* user
	token: cookie.get('auth_token') || null,
	user: {},
	userAuth: null,
})

const getters = {
	userTabs(state) {
		if (state.user.role === 'AdminCRM' || state.user.is_superuser === true) {
			return state.tabsAdmin;
		} else return state.tabsUser;
	}
}

const mutations = {
	//* main
	setTab(state, payload) { state.tab = payload; },
	clearTab(state) { state.tab = 'profile' },

	setBooking(state, payload) { state.booking = payload; },
	clearBooking(state) { state.booking = [] },

	setFavorites(state, payload) { state.favorites = payload; },
	clearFavorites(state) { state.favorites = [] },

	//* user
	setID(state, payload) { state.user.id = payload; },
	setUser(state, payload) { state.user = payload; },
	clearUser(state) { state.user = {} },

	setUserAuth(state, payload) { state.userAuth = payload; },
	clearUserAuth(state) { state.userAuth = false },
}

const actions = {
	getUserId: async (context) => {
		try {
			const response = await axios
				.get(`${baseURL}/auth/users/`, {
					headers: { Authorization: `token ${cookie.get('auth_token')}` },
				})
			if (response.status === 200) {
				const userMe = response.data.find(user => {
					return user.username === context.state.user.username;
				})
				context.commit("setID", userMe.id);
			}
		}
		catch (err) { throw new Error(err) }
	},

	getUser: async (context) => {
		try {
			const response = await axios.get(`${baseURL}/auth/users/me`, {
				headers: { Authorization: `token ${cookie.get('auth_token')}` },
			})

			if (response.status === 200) {
				context.commit("setUser", response.data);
				context.dispatch('getUserId');
				context.commit('setUserAuth', true);
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
		context.commit('clearTab');
		context.commit('clearBooking');
		context.commit('clearFavorites');
		context.commit('clearUser');
		context.commit('clearUserAuth');
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}