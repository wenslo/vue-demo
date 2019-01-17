import API from '@/api'
import router from '@/router'
import { Message } from 'element-ui'

export default {
	namespaced: true,
	state: {
		accessToken: localStorage.accessToken || '',
		loginName: localStorage.loginName || ''
	},
	mutations: {
		USER_SET_INFO (state, { accessToken, loginName }) {
			state.accessToken = accessToken
			state.loginName = loginName
			localStorage.setItem('accessToken', accessToken)
			localStorage.setItem('loginName', loginName)
		}
	},
	actions: {
		/**
		 * 用户登录操作,执行登录接口，并更新用户的state信息以及localStorage本地缓存信息
		 * @param {Object} params 登录信息,默认值为 {loginName: '', password: ''}
		 */
		async userLogin ({ commit }, params = {
			loginName: '',
			password: ''
		}) {
			const _data = await API.login(params)
			console.log(_data)
			if (_data.code && _data.code === '200') {
				await commit('USER_SET_INFO', _data.data)
				router.push('/')
			} else {
				Message({
					type: 'error',
					message: `${_data.errorCode}: ${_data.errorMsg}`
				})
			}
		},
		/**
		 * 用户退出登录操作，执行退出接口，并reset用户信息
		 */
		async userLoginOut ({ dispatch }) {
			const _data = await API.loginOut()
			if (_data.code === '200') {
				await dispatch('userReset')
				router.push('/login')
			}
		},
		/**
		 * 重置用户信息
		 */
		async userReset ({ commit }) {
			await commit('USER_SET_INFO', { accessToken: '', loginName: '' })
		}
	}
}
