import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/views/PageHome';
import PageCatalog from '@/views/PageCatalog';
import PageTradeIn from '@/views/PageTradeIn';
import PageAcadem from '@/views/PageAcadem';
import PageCRM from "@/views/PageCRM";
import PageFixClient from '@/views/PageFixClient';

import PageLogin from '@/views/PageLogin';
import PageRegistration from '@/views/PageRegistration';

import PageCabinet from '@/views/PageCabinet';
//* cabinet pages
import TheProfile from '@/views/CabinetPages/TheProfile';
import TheBooking from '@/views/CabinetPages/TheBooking';
import TheFavorites from '@/views/CabinetPages/TheFavorites';


import PageNotFound from '@/views/PageNotFound';

import { getApartments, getApartmentsOnTheFloor } from "@/api/academ";

import store from '@/store';
import cookie from 'vue-cookies';

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
		path: '/catalog',
		name: 'Catalog',
		component: PageCatalog,
		meta: {
			title: 'Каталог',
		},
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


		async beforeEnter(to, from, next) {
			if (cookie.get('auth_token')) {
				try {
					const response = await store.dispatch('getUser');

					if (response.status === 200) {
						if (response.data.is_superuser === true || response.data.role === 'AdminCRM') {
							getApartments();
							getApartmentsOnTheFloor(4);
							next();
						}
					}
				}
				catch (err) { throw new Error(err) }
			}
		},

		meta: {
			title: 'CRM',
			requiresAuth: true,
		},
	},
	{
		path: '/fix-client',
		name: 'Fix Client',
		component: PageFixClient,
		props: true,

		async beforeEnter(to, from, next) {
			if (cookie.get('auth_token')) {
				try {
					const response = await store.dispatch('getUser');

					if (response.status === 200) {
						if (response.data.is_superuser === true || response.data.role === 'AdminCRM') {
							getApartments();
							getApartmentsOnTheFloor(4);
							next();
						}
					}
				}
				catch (err) { throw new Error(err) }
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

		meta: {
			title: 'Авторизация',
		}
	},
	{
		path: '/registration',
		name: 'Registration',
		component: PageRegistration,

		meta: {
			title: 'Регистрация',
		}
	},
	{
		path: '/cabinet',
		name: 'Cabinet',
		props: true,
		component: PageCabinet,
		redirect: { name: 'Profile', requiresAuth: true, },

		meta: {
			title: 'Личный кабинет',
		},

		children: [
			{
				path: 'profile',
				name: 'Profile',
				component: TheProfile,
				meta: {
					title: 'Мой профиль',
					requiresAuth: true,
				},
			},
			{
				path: 'booking',
				name: 'Booking',
				component: TheBooking,
				meta: {
					title: 'Бронирование',
					requiresAuth: true,
				},
			},
			{
				path: 'favorites',
				name: 'Favorites',
				component: TheFavorites,
				meta: {
					title: 'Избранное',
					requiresAuth: true,
				},
			},

		],
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
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

router.beforeEach((to) => {
	window.scrollTo(0, 0);

	if (to.meta.requiresAuth === true) {
		if (cookie.get('auth_token')) { return true }
		else { return { name: 'Login' } }
	}
})

export default router