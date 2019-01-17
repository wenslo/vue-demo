<template>
<div class="hm-notFound-cell hm-layout-cell">
	<div class="newfinno-con">
		<img src="@/assets/images/404.png" width="500" alt="">
	</div>
	<div class="tips">
		<h2 class="b-text">矮油~~您访问的页面不在地球上...</h2>
		<p class="m-box">
			<span class="m-text">休息一下,随便逛逛其他页面吧。</span>
			<router-link to="/">
				<el-button size="small" type="primary">返回首页</el-button>
			</router-link>
		</p>
	</div>
</div>
</template>

<script>
export default {
	name: 'noFound'
}
</script>
<style lang="scss" scoped>
.hm-notFound-cell {
	.newfinno-con {
		text-align: center;
		margin-bottom: 20px;
	}
	.tips {
		margin-top: 10px;
		text-align: center;
		h2{
			font-size: 20px;
			margin-bottom: 10px;
		}
		.m-box{
			width: 295px;
			margin: auto;
		}
		.m-text{
			font-size: 12px;
			line-height: 32px;
		}
	}
}
</style>
