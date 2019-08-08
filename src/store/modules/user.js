import API from '@/api'
import router from '@/router'

export default {
	namespaced: true,
	state: {
		username: localStorage.username || ''
	},
	mutations: {
		USER_SET_INFO (state, { username }) {
			console.log('username is ' + username)
			state.username = username
			localStorage.setItem('username', username)
		}
	},
	actions: {
		/**
		 * 用户登录操作,执行登录接口，并更新用户的state信息以及localStorage本地缓存信息
		 * @param commit
		 * @param {Object} params 登录信息,默认值为 {username: '', password: ''}
		 */
		async userLogin ({ commit }, params = {
			username: '',
			password: ''
		}) {
			const _result = await API.login(params)
			if (_result) {
				const _data = _result.data
				if (_data) {
					await commit('USER_SET_INFO', _data.user)
					router.push('/user')
				}
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
			await commit('USER_SET_INFO', { username: '' })
		}
	}
}
