<template>
	<div>
		<el-header>
			<HmHeader/>
		</el-header>
		<el-aside>
			<HmMenu/>
		</el-aside>
	</div>
</template>

<script>
import HmHeader from '@/views/layout/header'
import HmMenu from '@/views/layout/menu'
export default {
	name: 'noFound2',
	components: {
		HmHeader,
		HmMenu
	}
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
