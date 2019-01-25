<template>
<div>
	<el-container direction="vertical">
		<v-header/>
		<v-menu/>
		<el-main>
			<div class="hm-layout-cell pt-20 pb-20">
				<transition name="el-fade-in">
					<router-view></router-view>
				</transition>
			</div>
		</el-main>
	</el-container>
</div>
</template>

<script>
import vHeader from '@/views/layout/header'
import vMenu from '@/views/layout/menu'
export default {
	name: 'name',
	components: {
		vHeader,
		vMenu
	}
}
</script>
