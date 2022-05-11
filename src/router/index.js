import { createRouter, createWebHashHistory } from 'vue-router'
import PageHome from '@/views/PageHome';
import PageTradeIn from '@/views/PageTradeIn';
import PageAcadem from '@/views/PageAcadem';
import PageCRM from "@/views/PageCRM";
import PageFixClient from '@/views/PageFixClient';

import PageLogin from '@/views/PageLogin';
import PageRegistration from '@/views/PageRegistration';
import PageCabinet from '@/views/PageCabinet';

import PageNotFound from '@/views/PageNotFound';

import { getApartments, getApartmentsOnTheFloor } from "@/api/academ";
import { getFavoriteApartmentNumber } from "@/api/favorite";

import store from '@/store';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: PageHome,
		meta: {
			title: '3DOM',
		}
	},
	{
		path: '/trade-in',
		name: 'TradeIn',
		component: PageTradeIn,
		meta: {
			title: 'Trade-in',
		}
	},
	{
		path: '/academ',
		name: 'Academ',
		component: PageAcadem,
		meta: {
			title: 'Академический',
		},
		props: true,

		beforeEnter(from, to, next) {
			getApartments();
			getApartmentsOnTheFloor(4);
			next();
		},
	},
	{
		path: '/crm',
		name: 'CRM',
		component: PageCRM,


		beforeEnter(from, to, next) {
			if (store.getters.TOKEN === null) {
				router.push('/login');
			}
			else {
				const interval = setInterval(() => {
					if (store.getters.USER.is_superuser !== undefined) {
						clearInterval(interval);

						if (store.getters.USER.is_superuser === true || store.getters.USER.role === 'AdminCRM') {
							getApartments();
							getApartmentsOnTheFloor(4);
							next();
						} else {
							router.push('/');
						}
					}
				}, 0);
			}
		},

		meta: {
			title: 'CRM',
		},
	},
	{
		path: '/fix-client',
		name: 'Fix Client',
		component: PageFixClient,
		props: true,

		beforeEnter(from, to, next) {
			if (store.getters.TOKEN === null) {
				router.push('/login');
			}
			else {
				const interval = setInterval(() => {
					if (store.getters.USER.is_superuser !== undefined) {
						clearInterval(interval);

						if (store.getters.USER.is_superuser === true || store.getters.USER.role === 'AdminCRM') {
							next();
						} else {
							router.push('/');
						}
					}
				}, 0);
			}
		},

		meta: {
			title: 'Зафиксировать клиента',
		},
	},
	{
		path: '/login',
		name: 'Login',
		component: PageLogin,

		beforeEnter(from, to, next) {
			if (store.getters.TOKEN === null) {
				next()
			} else {
				next("/cabinet")
			}
		},

		meta: {
			title: 'Авторизация',
		}
	},
	{
		path: '/register',
		name: 'Register',
		component: PageRegistration,

		beforeEnter(from, to, next) {
			if (store.getters.TOKEN === null) {
				next()
			} else {
				next("/cabinet")
			}
		},

		meta: {
			title: 'Регистрация',
		}
	},
	{
		path: '/cabinet',
		name: 'Cabinet',
		props: true,
		component: PageCabinet,

		beforeEnter(from, to, next) {
			if (store.getters.TOKEN !== null) {
				getApartments();
				next();
			} else {
				next("/login")
			}
		},

		meta: {
			title: 'Личный кабинет',
		}
	},

	{
		path: '/404',
		name: '404',
		component: PageNotFound,
		meta: {
			title: '404',
		}
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/404'
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes,
})

//* переход к странице с координатами x: 0, y: 0
router.beforeEach(() => {
	window.scrollTo(0, 0);
	store.dispatch('getUser');
	getFavoriteApartmentNumber();
})

export default router