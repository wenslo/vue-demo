<template>
	<div>
		<el-menu
			default-active="1"
			class="el-menu-vertical-demo"
			router
		>
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span slot="title">系统管理</span>
				</template>
				<el-menu-item-group>
					<el-menu-item
						index="1-1"
						route="user"
					>
						用户管理
					</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script>
export default {
	name: 'HmMenu',
	data () {
		return {
		}
	},
	methods: {
	}
}
</script>

<style>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}
</style>
