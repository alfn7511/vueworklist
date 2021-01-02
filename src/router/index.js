import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/view/main';
import Worklist from '@/worklist/index';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Worklist',
			component: Worklist,
		},
		{
			path: '/main',
			name: 'Main',
			component: Main,
		},
	],
});
