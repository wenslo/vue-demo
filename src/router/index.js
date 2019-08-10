import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '',
			redirect: '/login'
		},
		{
			path: '/user',
			name: 'user',
			component: () => import('@/views/layout/index'),
			redirect: '/user/list',
			children: [
				{
					name: 'userList',
					path: '/user/list',
					meta: { title: '首页' },
					component: () => import('@/views/user/list')
				}
			]
		},
		{
			name: 'login',
			path: '/login',
			meta: { title: '登录' },
			component: () => import('@/views/login')
		},
		{
			name: 'noFound',
			path: '/404',
			meta: { title: '404' },
			component: () => import('@/views/noFound')
		}
	]
})
