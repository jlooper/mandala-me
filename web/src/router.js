import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/mandala',
			name: 'mandala',
			component: () => import('./views/Mandala.vue'),
		},
		{
			path: '/build',
			name: 'build',
			component: () => import('./views/Build.vue'),
		},
	],
});
