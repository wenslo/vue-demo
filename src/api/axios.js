import axios from 'axios'
// import Qs from 'qs'
import router from '@/router'
import store from '@/store'
import { Notification } from 'element-ui'

const Axios = axios.create({
	baseURL: 'http://localhost:8080/',
	headers: {
		'Content-Type': 'application/json;charset=UTF-8'
	},
	// #transformRequest 允许在向服务器发送前，修改传递参数
	// #这里通过Qs.stringify转换为表单查询参数
	// transformRequest: [data => {
	// 	return Qs.stringify(data)
	// }],
	// 设置允许跨域
	withCredentials: true,
	timeout: 80000
})
// request拦截
Axios.interceptors.request.use(config => {
	return config
}, error => {
	return Promise.reject(error)
})
// response响应拦截器
Axios.interceptors.response.use(async response => {
	let resData = response.data
	if (resData.code) {
		// 说明为通用协议
		if (resData.code === 401) {
			await store.dispatch('user/userReset')
			router.push('/login')
		}

		if (resData.code === 200) {
			return resData
		} else {
			Notification.error({
				title: '错误 ' + (resData.code + ':' + '⊙﹏⊙‖∣°'),
				message: resData.msg || '出错了'
			})
		}
	} else {
		// 说明为分页协议
		return resData
	}
}, error => {
	// 对响应错误做点什么
	if (error && error.response) {
		switch (error.response.status) {
		case 500:
			Notification.error({
				title: '服务器错误 ⊙﹏⊙‖∣°',
				message: '出错了'
			})
			break
		case 504:
			break
		case 502:
			// alert('502')
			break
		case 404:
			router.push('/404')
			break
		default:
		}
	}
	return Promise.reject(error)
})
export default Axios
