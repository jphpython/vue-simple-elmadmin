import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = resolve => require(['@/components/Login'], resolve);

const routes = [
	{
		path: '/',
		component: login
	}
];

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
