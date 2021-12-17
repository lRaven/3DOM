import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';
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
			title: 'Login',
		}
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
		meta: {
			title: 'Register',
		}
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router