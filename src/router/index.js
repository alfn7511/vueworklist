import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Worklist',
			component: () => import('@/worklist/index'),
		},
		{
			path: '/guide',
			name: 'GuideIndex',
			component: () => import('@/worklist/guide'),
		},
		{
			path: '/guide/basic',
			name: 'GuideBasic',
			component: () => import('@/worklist/guide/basic'),
		},
		{
			path: '/rules',
			name: 'GuideRules',
			component: () => import('@/worklist/rules'),
		},
		{
			path: '/main',
			name: 'Main',
			component: () => import('@/view/main'),
		},
	],
});
