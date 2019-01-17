<template>
<div id="app" v-cloak>
    <!-- 需要缓存的页面 -->
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <!-- 不缓存的页面 -->
    <router-view v-if="!$route.meta.keepAlive"/>
</div>
</template>
<script>
export default {
	watch: {
		// 根据路由配置meta的title动态配置页面title信息
		'$route': {
			handler (val, oldVal) {
				let title = val.meta && val.meta.title ? `${val.meta.title} - ` : ''
				document.title = `${title}好好集团管理系统`
			}
		}
	}
}
</script>
<style lang="scss">
body {
	.el-upload {
		width: 100%;
	}
	.el-upload-dragger {
		width: 100%;
	}
	.el-dialog--center .el-dialog__body {
		padding: 10px 25px 30px;
	}
}
.hm-layout-cell {
	width: 1160px;
	margin: 0 auto;
}
.hm-title-cell {
	position: relative;
	height: 24px;
	line-height: 24px;
	font-weight: 700;
	padding-left: 15px;
	margin-bottom: 20px;
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 5px;
		background-color: $--color-primary;
		border-radius: 20px;
	}
}
.hm-text-center {
	text-align: center;
}
.hm-flex {
	display: flex;
}
</style>
