import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';
import TradeIn from '../views/TradeIn.vue';
import Academ from '../views/Academ.vue';
import CRM from "../views/CRM";
import FixClient from '../views/FixClient.vue';

import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Cabinet from '../views/Cabinet.vue';

import NotFound from '../views/NotFound.vue';

import { getApartments, getApartmentsOnTheFloor } from "../api/academ";
import { getFavoriteApartmentNumber } from "../api/favorite";

import store from '../store';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: '3DOM',
		}
	},
	{
		path: '/trade-in',
		name: 'TradeIn',
		component: TradeIn,
		meta: {
			title: 'Trade-in',
		}
	},
	{
		path: '/academ',
		name: 'Academ',
		component: Academ,
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
		component: CRM,


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
		component: FixClient,
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
		component: Login,

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
		component: Register,

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
		component: Cabinet,

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
		component: NotFound,
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