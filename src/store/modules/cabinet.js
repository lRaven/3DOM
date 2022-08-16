import axios from 'axios';
import store from '@/store';
import cookie from 'vue-cookies';

const state = () => ({
	//* main
	tab: 'profile',
	tabs_user: [
		{ id: 1, icon: '/img/icon/cabinet/profile.svg', icon_selected: '/img/icon/cabinet/profile-selected.svg', description: 'Мой профиль', tab: 'profile', link: { name: 'Profile' } },
		{ id: 2, icon: '/img/icon/cabinet/favorites.svg', icon_selected: '/img/icon/cabinet/favorites-selected.svg', description: 'Избранное', tab: 'favorites', link: { name: 'Favorites' } },
		{ id: 3, icon: '/img/icon/cabinet/meetings.svg', icon_selected: '/img/icon/cabinet/meetings-selected.svg', description: 'Встречи', tab: 'meetings', link: { name: 'Meetings' } },
		{ id: 4, icon: '/img/icon/cabinet/mortgage.svg', icon_selected: '/img/icon/cabinet/mortgage-selected.svg', description: 'Ипотека', tab: 'mortgage', link: { name: 'Mortgage' } },
		{ id: 5, icon: '/img/icon/cabinet/services.svg', icon_selected: '/img/icon/cabinet/services-selected.svg', description: 'Услуги', tab: 'services', link: { name: 'Services' } },
		{ id: 6, icon: '/img/icon/cabinet/bonuses.svg', icon_selected: '/img/icon/cabinet/bonuses-selected.svg', description: 'Бонусы', tab: 'bonuses', link: { name: 'Bonuses' } },
		{ id: 7, icon: '/img/icon/cabinet/beater.svg', icon_selected: null, description: 'Колоток', tab: 'kolotok', link: null },
		{ id: 8, icon: '/img/icon/cabinet/feedback.svg', icon_selected: '/img/icon/cabinet/feedback-selected.svg', description: 'Обратная связь', tab: 'feedback', link: { name: 'Feedback' } },
	],
	tabs_admin: [
		{ id: 1, icon: '/img/icon/cabinet/profile.svg', icon_selected: '/img/icon/cabinet/profile-selected.svg', description: 'Мой профиль', tab: 'profile', link: { name: 'Profile' } },
		{ id: 2, icon: '/img/icon/cabinet/booking.svg', icon_selected: '/img/icon/cabinet/booking-selected.svg', description: 'Бронирование', tab: 'booking', link: { name: 'Booking' } },
		{ id: 3, icon: '/img/icon/cabinet/favorites.svg', icon_selected: '/img/icon/cabinet/favorites-selected.svg', description: 'Избранное', tab: 'favorites', link: { name: 'Favorites' } },
		{ id: 4, icon: '/img/icon/cabinet/documents.svg', icon_selected: '/img/icon/cabinet/documents-selected.svg', description: 'Документы', tab: 'documents', link: { name: 'Documents' } },
		{ id: 5, icon: '/img/icon/cabinet/meetings.svg', icon_selected: '/img/icon/cabinet/meetings-selected.svg', description: 'Встречи', tab: 'meetings', link: { name: 'Meetings' } },
		{ id: 6, icon: '/img/icon/cabinet/mortgage.svg', icon_selected: '/img/icon/cabinet/mortgage-selected.svg', description: 'Ипотека', tab: 'mortgage', link: { name: 'Mortgage' } },
		{ id: 7, icon: '/img/icon/cabinet/services.svg', icon_selected: '/img/icon/cabinet/services-selected.svg', description: 'Услуги', tab: 'services', link: { name: 'Services' } },
		{ id: 8, icon: '/img/icon/cabinet/bonuses.svg', icon_selected: '/img/icon/cabinet/bonuses-selected.svg', description: 'Бонусы', tab: 'bonuses', link: { name: 'Bonuses' } },
		{ id: 9, icon: '/img/icon/cabinet/crm.svg', icon_selected: '/img/icon/cabinet/crm-selected.svg', description: 'Кабинет CRM', tab: '', link: { name: "CRM" } },
		{ id: 10, icon: '/img/icon/cabinet/feedback.svg', icon_selected: '/img/icon/cabinet/feedback-selected.svg', description: 'Обратная связь', tab: 'feedback', link: { name: 'Feedback' } },
	],

	booking: [],

	favorites: [],
	sort: 'price',

	//* user
	token: cookie.get('auth_token') || null,
	user: {},
	user_auth: null,
})

const getters = {}

const mutations = {
	//* main
	SET_TAB(state, payload) { state.tab = payload; },

	SET_BOOKING(state, payload) { state.booking = payload; },

	SET_FAVORITES(state, payload) { state.favorites = payload; },
	SET_SORT(state, payload) { state.sort = payload; },

	//* user
	SET_ID(state, payload) { state.user.id = payload; },
	SET_USER(state, payload) { state.user = payload; },
	SET_USER_AUTH(state, payload) { state.user_auth = payload; },
}

const actions = {
	getUserId: async (context) => {
		try {
			const response = await axios
				.get(`${store.state.baseURL}/auth/users/`, {
					headers: { Authorization: `token ${cookie.get('auth_token')}` },
				})
			if (response.status === 200) {
				for (const key in response.data) {
					if (
						response.data[key].username ===
						store.state.cabinet.user.username
					) {
						const id = response.data[key].id;
						context.commit("SET_ID", id);
					}
				}
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
				//* стереть из vuex,cookies данные юзера
				cookie.remove('auth_token');

				context.commit('SET_USER_AUTH', false);
				context.commit("SET_ID", null);
				context.commit("SET_USER", {});
				context.commit("SET_TAB", null);
				context.commit("SET_BOOKING", []);
				context.commit("SET_FAVORITES", null);
			}

			return response;
		}
		catch (err) {
			//* стереть из vuex,cookies данные юзера
			cookie.remove('auth_token');

			context.commit("SET_ID", null);
			context.commit("SET_USER", {});
			context.commit("SET_TAB", null);
			context.commit("SET_BOOKING", []);
			context.commit("SET_FAVORITES", null);

			throw new Error(err);
		}
	},
}

export default {
	state,
	getters,
	mutations,
	actions
}