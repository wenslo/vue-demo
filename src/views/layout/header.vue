<template>
	<div class="hm-header-cell">
		<div class="fixed">
			<div class="hm-layout-cell hm-flex">
				<img class="logo" src="@/assets/images/logo-mini.png" :title="$root.app.name">
				<ul class="menu">
					<router-link tag="li" :to="{name:'scriptList'}">用户</router-link>
				</ul>
				<div class="action">
					<Hm-Screenfull></Hm-Screenfull>
				</div>
				<el-dropdown class="user">
				<span class="el-dropdown-link">
					<i class="icon-user mr-5"></i>
					{{user.username}}
				</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item @click.native="userLoginOut"><i class="icon-logout mr-5"></i> 退出</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
	</div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import HmScreenfull from '@/components/screenFull'
export default {
	name: 'HmHeader',
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
	$--menu-li-height: 37px;
	$--hm-header-layout: 13px;
	$--hm-header-height: $--hm-header-layout * 2 + $--menu-li-height;
	.hm-header-cell {
		height: $--hm-header-height;
		font-size: 14px;
		.fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
			width: 100%;
			background-color: #fff;
			box-shadow: 0 1px 4px rgba(0,21,41,.08);
		}
		.logo {
			width: 112px;
			height: $--menu-li-height;
			margin: $--hm-header-layout 0;
		}
		.menu {
			margin: $--hm-header-layout 0 $--hm-header-layout 40px;
			flex: 1;
			li {
				display: inline-block;
				margin: 0 20px;
				color: #575757;
				font-weight: 700;
				line-height: $--menu-li-height;
				transition: $--all-transition;
				cursor: pointer;
				&:hover {
					color: $--color-primary;
				}
			}
		}
		.action {
			height: $--hm-header-height;
			line-height: $--hm-header-height;
			i[class^='icon-'] {
				display: inline-block;
				height: inherit;
				line-height: inherit;
				padding: 0 $--hm-header-layout;
				cursor: pointer;
				&:hover {
					background-color: $--background-color-base;
				}
			}
		}
		.user {
			cursor: pointer;
			> span {
				display: block;
				line-height: $--hm-header-height;
				padding: 0 $--hm-header-layout;
			}
			&:hover {
				> span {
					background-color: $--background-color-base;
				}
			}
		}
	}
</style>
