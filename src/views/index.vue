<template>
	<div>
		<v-header/>
		<v-menu/>
	</div>
</template>

<script>
import vHeader from '@/views/layout/header'
import vMenu from '@/views/layout/menu'
export default {
	name: 'noFound2',
	components: {
		vHeader,
		vMenu
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
