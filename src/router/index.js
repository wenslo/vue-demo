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
			path: '/script',
			name: 'script',
			component: () => import('@/views/script/index'),
			redirect: '/script/list',
			children: [
				{
					name: 'scriptList',
					path: '/script/list',
					meta: { title: '首页' },
					component: () => import('@/views/script/list')
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
