import Axios from './axios'
class Api {
	constructor () {
		this.defaults = Axios.defaults // 获取axios的默认属性，方便以后使用
	}
	/**
	 * 管理员登录
	 */
	login (params) {
		return Axios.post('/login', params)
	}
	/**
	 * 管理员退出
	 */
	loginOut () {
		return Axios.post('/loginout')
	}
	/**
	 * 获取剧本列表信息数据
	 */
	getScriptList (params = {}) {
		return Axios.get('/adminUserAuth/scriptReport/bookList', {
			params: params
		})
	}
}
export default new Api()
