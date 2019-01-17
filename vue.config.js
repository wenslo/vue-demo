module.exports = {
	baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
	devServer: {
		// 设置为true可以修复热更新失效的问题
		disableHostCheck: true,
		port: 8081
	},
	css: {
		loaderOptions: {
			sass: {
				data: `@import '@/assets/scss/hm-variables.scss';` // 配置全局sass变量
			}
		}
	}
}
