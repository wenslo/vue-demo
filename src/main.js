import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
// import '@/assets/fonts/font-awesome/css/font-awesome.min.css'
import '@/assets/fonts/simple-line-icons/css/simple-line-icons.css'
import '@/assets/scss/common.scss'
// 引入element-ui的全局样式
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
	data: {
		app: {
			name: '好好集团',
			version: '1.0.0'
		}
	},
	router,
	store,
	render: h => h(App)
}).$mount('#app')
