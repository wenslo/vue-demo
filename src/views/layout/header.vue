<template>
	<div>
		<el-header style="display: flex;width: 800px;">
			<ul class="v-header" >
				<router-link tag="li" :to="{name:'scriptList'}">用户</router-link>
			</ul>
			<div class="v-header" >
				<Hm-Screenfull></Hm-Screenfull>
			</div>
			<el-dropdown class="v-header">
				<span class="el-dropdown-link">
					<i class="icon-user mr-5"></i>
					{{user.username}}
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item @click.native="userLoginOut"><i class="icon-logout mr-5"></i> 退出</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</el-header>
	</div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import HmScreenfull from '@/components/screenFull'
export default {
	name: 'vHeader',
	components: {
		HmScreenfull
	},
	computed: {
		...mapState([
			'user'
		])
	},
	methods: {
		...mapActions({
			userLoginOut: 'user/userLoginOut'
		})
	}
}
</script>

<style lang="scss" scoped>
	.v-header{
		flex:1
	}
</style>
