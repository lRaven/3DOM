import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import TradeIn from '../views/TradeIn.vue';
import Academ from '../views/Academ.vue';
import ApartmentReview from "../components/academ/ApartmentReview";
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Cabinet from '../views/Cabinet.vue';
import NotFound from '../views/NotFound.vue';

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
			title: 'Academ',
		}
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
				next()
			} else {
				next("/login")
			}
		},

		meta: {
			title: 'Личный кабинет',
		}
	},
	{
		path: '/apartment-review',
		name: 'ApartmentReview',
		component: ApartmentReview,
		meta: {
			title: 'Просмотр квартиры',
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
		path: "/:catchAll(.*)",
		redirect: '/404'
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

//* переход к странице с координатами x: 0, y: 0
router.beforeEach(() => {
	window.scrollTo(0, 0);
})

export default router