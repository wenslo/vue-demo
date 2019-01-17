import API from '@/api'
import router from '@/router'

export default {
	namespaced: true,
	state: {
		accessToken: localStorage.accessToken || '',
		username: localStorage.username || ''
	},
	mutations: {
		USER_SET_INFO (state, { accessToken, username }) {
			state.accessToken = accessToken
			state.username = username
			localStorage.setItem('accessToken', accessToken)
			localStorage.setItem('username', username)
		}
	},
	actions: {
		/**
		 * 用户登录操作,执行登录接口，并更新用户的state信息以及localStorage本地缓存信息
		 * @param {Object} params 登录信息,默认值为 {username: '', password: ''}
		 */
		async userLogin ({ commit }, params = {
			username: '',
			password: ''
		}) {
			const _data = await API.login(params)
			console.log(_data)
			if (_data) {
				await commit('USER_SET_INFO', _data)
				router.push('/')
			}
		},
		/**
		 * 用户退出登录操作，执行退出接口，并reset用户信息
		 */
		async userLoginOut ({ dispatch }) {
			const _data = await API.loginOut()
			console.log(_data)
			await dispatch('userReset')
			router.push('/login')
		},
		/**
		 * 重置用户信息
		 */
		async userReset ({ commit }) {
			await commit('USER_SET_INFO', { accessToken: '', username: '' })
		}
	}
}
