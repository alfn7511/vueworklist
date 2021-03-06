// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Fragment from 'vue-fragment';
import ElementUI from 'element-ui';
import '@/assets/scss/index.scss';

Vue.config.productionTip = false;
Vue.use(Fragment.Plugin);
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>',
});
