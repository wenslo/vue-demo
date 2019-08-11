<template>
	<div>
		<el-header>
			<el-col :span="24" class="header">
				<el-col :span="5" class="logo" :class="'logo-width'">
					<a href="/" style="text-decoration:none;color:#000;">
						后台管理系统
					</a>
				</el-col>
			</el-col>
		</el-header>
		<el-container>
			<el-aside width="200px">
				<el-menu
					@open="handleOpen"
					@close="handleClose">
					<el-submenu index="1">
						<template slot="title">系统管理</template>
						<el-menu-item index="1-1">用户管理</el-menu-item>
						<el-menu-item index="1-2">角色管理</el-menu-item>
						<el-menu-item index="1-3">机构管理</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-main>
				<transition name="el-fade-in">
					<router-view></router-view>
				</transition>
			</el-main>
		</el-container>
		<el-footer></el-footer>
	</div>
</template>

<script>
export default {
	name: 'index',
	data () {
		return {
			username: '',
			password: '',
			rememberMe: true
		}
	}
}
</script>
<style>

	.el-footer{
		background-color: #67c23a;
	}

</style>
