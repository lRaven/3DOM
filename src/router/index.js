import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Academ from '../views/Academ.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Academ,
		meta: {
			title: 'Home',
		}
	},
	{
		path: '/academ',
		name: 'Academ',
		component: Home,
		meta: {
			title: 'Academ',
		}
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router