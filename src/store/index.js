import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import user from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules: {
		user
	},
	strict: debug, // dev模式下开启严格模式
	plugins: debug ? [createLogger()] : [] // dev模式下开启日志插件
})
