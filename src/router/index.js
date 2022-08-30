import { createRouter, createWebHistory } from 'vue-router'

import PageHome from '@/views/PageHome'
import PageLogin from '@/views/PageLogin'
import PageRegistration from '@/views/PageRegistration'
import PageNotFound from '@/views/PageNotFound'

import store from '@/store'
import cookie from 'vue-cookies'


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
		component: () => import(/* webpackChunkName: "catalog" */ '@/views/PageCatalog.vue'),
		meta: {
			title: 'Каталог',
		},
	},
	{
		path: '/trade-in',
		name: 'TradeIn',
		component: () => import(/* webpackChunkName: "tradein" */ '@/views/PageTradeIn.vue'),
		meta: {
			title: 'Trade-in',
		}
	},
	{
		path: '/academ',
		name: 'Academ',
		component: () => import(/* webpackChunkName: "academ" */ '@/views/PageAcadem.vue'),
		meta: {
			title: 'Академический',
		},
	},
	{
		path: '/crm',
		name: 'CRM',
		component: () => import(/* webpackChunkName: "crm" */ '@/views/PageCRM.vue'),

		async beforeEnter(to, from, next) {
			if (cookie.get('auth_token')) {
				try {
					const response = await store.dispatch('getUser');

					if (response.status === 200) {
						if (response.data.is_superuser === true || response.data.role === 'AdminCRM') {
							next();
						}
						else {
							next({ name: 'Home' })
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
		component: () => import(/* webpackChunkName: "fixclient" */ '@/views/PageFixClient.vue'),
		props: true,

		async beforeEnter(to, from, next) {
			if (cookie.get('auth_token')) {
				try {
					const response = await store.dispatch('getUser');

					if (response.status === 200) {
						if (response.data.is_superuser === true || response.data.role === 'AdminCRM') {
							next();
						}
						else {
							next({ name: 'Home' })
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
		component: () => import(/* webpackChunkName: "cabinet" */ '@/views/PageCabinet.vue'),
		redirect: { name: 'Profile', requiresAuth: true, },

		meta: {
			title: 'Личный кабинет',
		},

		children: [
			{
				path: 'profile',
				name: 'Profile',
				component: () => import(/* webpackChunkName: "profile" */ '@/views/CabinetPages/PageProfile.vue'),
				meta: {
					title: 'Мой профиль',
					requiresAuth: true,
				},
			},
			{
				path: 'booking',
				name: 'Booking',
				component: () => import(/* webpackChunkName: "booking" */ '@/views/CabinetPages/PageBooking.vue'),
				meta: {
					title: 'Бронирование',
					requiresAuth: true,
				},
			},
			{
				path: 'favorites',
				name: 'Favorites',
				component: () => import(/* webpackChunkName: "favorites" */ '@/views/CabinetPages/PageFavorites.vue'),
				meta: {
					title: 'Избранное',
					requiresAuth: true,
				},
			},
			{
				path: 'documents',
				name: 'Documents',
				component: () => import(/* webpackChunkName: "feedback" */ '@/views/CabinetPages/PageDocuments.vue'),
				meta: {
					title: 'Документы',
					requiresAuth: true,
				}
			},
			{
				path: 'appointments',
				name: 'Appointments',
				component: () => import(/* webpackChunkName: "appointments" */ '@/views/CabinetPages/PageAppointments.vue'),
				meta: {
					title: 'Встречи',
					requiresAuth: true,
				},
			},
			{
				path: 'mortgage',
				name: 'Mortgage',
				component: () => import(/* webpackChunkName: "mortgage" */ '@/views/CabinetPages/PageMortgage.vue'),
				meta: {
					title: 'Ипотека',
					requiresAuth: true,
				},
			},
			{
				path: 'services',
				name: 'Services',
				component: () => import(/* webpackChunkName: "services" */ '@/views/CabinetPages/PageServices.vue'),
				meta: {
					title: 'Услуги',
					requiresAuth: true,
				}
			},
			{
				path: 'bonuses',
				name: 'Bonuses',
				component: () => import(/* webpackChunkName: "bonuses" */ '@/views/CabinetPages/PageBonuses.vue'),
				meta: {
					title: 'Бонусы',
					requiresAuth: true,
				}
			},
			{
				path: 'feedback',
				name: 'Feedback',
				component: () => import(/* webpackChunkName: "feedback" */ '@/views/CabinetPages/PageFeedback.vue'),
				meta: {
					title: 'Обратная связь',
					requiresAuth: true,
				}
			},
			{
				path: 'appeals',
				name: 'Appeals',
				component: () => import(/* webpackChunkName: "appeals" */ '@/views/CabinetPages/PageAppeals.vue'),
				meta: {
					title: 'Обращения',
					requiresAuth: true,
				}
			},
			{
				path: 'appeal/:id',
				name: 'Appeal',
				component: () => import(/* webpackChunkName: "appeal" */ '@/views/CabinetPages/PageAppeal.vue'),
				meta: {
					title: 'Обращение',
					requiresAuth: true,
				}
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