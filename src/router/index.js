import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';
import TradeIn from '../views/TradeIn.vue';
import Academ from '../views/Academ.vue';

import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'Home',
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
		meta: {
			title: 'Авторизация',
		}
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
		meta: {
			title: 'Регистрация',
		}
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router