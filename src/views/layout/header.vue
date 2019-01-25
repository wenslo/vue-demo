<template>
<div>
	<el-header >
		<el-row>
			<el-col :span="4">
				<img class="logo" src="@/assets/images/logo-mini.png" :title="$root.app.name">
			</el-col>
			<el-col :span="20" style="text-align: right">
				<el-dropdown>
					<i class="el-icon-setting" style="margin-right: 15px"></i>
				</el-dropdown>
				<ul class="menu">
					<router-link tag="li" :to="{name:'scriptList'}">用户</router-link>
				</ul>
				<div class="action">
					<Hm-Screenfull></Hm-Screenfull>
				</div>
				<el-dropdown>
				<span class="el-dropdown-link">
					<i class="icon-user mr-5"></i>
					{{user.username}}
				</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item @click.native="userLoginOut"><i class="icon-logout mr-5"></i> 退出</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-row>
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
</style>
