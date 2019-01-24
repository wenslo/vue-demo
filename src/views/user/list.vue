<template>
<div class="hm-script-list-cell">
	<el-table
		size="small"
		:data="listData.content"
		:default-sort = "{prop: 'name', order: 'descending'}"
		@selection-change="handleSelection">
	>
		<el-table-column
			align="center"
			type="selection"
			width="40"
		>
		</el-table-column>
		<el-table-column
			width="135"
			align="center"
			prop="id"
			label="序号"
			sortable
		>
		</el-table-column>
		<el-table-column
			align="center"
			prop="username"
			label="用户名称"
		>
		</el-table-column>
		<el-table-column
			width="105"
			align="center"
			prop="enabled"
			label="启用状态"
			column-key="enabled"
			filter-placement="bottom-end"
		>
			<template slot-scope="scope">
				<!-- close working success warning danger -->
				<hm-badge :type="scope.row.enabled ? 'danger' : 'working'">
					{{scope.row.enabled ? '已禁用' : '已启用'}}
				</hm-badge>
			</template>
		</el-table-column>
		<el-table-column
			align="center"
			prop="roles"
			label="所属角色"
		>
			<template slot-scope="scope">
				<el-tag v-if="scope.row.roles.length === 0">
					{{ '无' }}
				</el-tag>
				<el-tag :key="index" v-for="(role, index) in scope.row.roles">
					{{ role.name}}
				</el-tag>
			</template>
		</el-table-column>
		<el-table-column
			align="center"
			prop="organizations"
			label="机构信息"
		>
			<template slot-scope="scope">
				<el-tag v-if="scope.row.organizations.length === 0">
					{{ '无' }}
				</el-tag>
				<el-tag :key="index" v-for="(organization, index) in scope.row.organizations">
					{{ organization.name}}
				</el-tag>
			</template>
		</el-table-column>
	</el-table>
	<el-pagination
		background
		@size-change="sizeChange"
		@current-change="currentChange"
		:current-page="currentNumber"
		:page-sizes="pageSizes"
		:page-count="listData.totalPages"
		:page-size="listData.size"
		:layout="pageLayout"
		:total="listData.totalElements"
	>
	</el-pagination>
</div>
</template>

<script>
import API from '@/api'
import { timestamp2date } from '@/filter'
import HmBadge from '@/components/badge'
export default {
	data () {
		return {
			listData: [],	// 列表数据列表
			listQuery: {	// 列表数据参数集合，包括分页信息
				pageable: {
					page: 0,
					size: 15
				}
			},
			pageSizes: [10, 15, 20, 25, 30],	// 每页显示个数选择器的选项设置
			pageLayout: 'total, sizes, prev, pager, next, jumper'	// 组件布局，子组件名用逗号分隔
		}
	},
	computed: {
		// 默认后端页面从0开始计算，这里默认+1显示
		currentNumber () {
			return this.listData.number + 1
		}
	},
	mounted () {
		this.getScriptList()
	},
	methods: {
		/**
		 * 获取用户列表信息
		 */
		getScriptList () {
			API.getScriptList(this.listQuery).then(data => {
				this.listData = data
			})
		},
		/**
		 * 每页条数改变时触发
		 */
		sizeChange (num) {
			this.listQuery.pageable.size = num
			this.getScriptList()
		},
		/**
		 * 页码改变时触发
		 */
		currentChange (num) {
			// 后端接口页码从0开始，所以这里要在当前页码基础上-1
			this.listQuery.pageable.page = num - 1
			this.getScriptList()
		},
		/**
		 * 表头复选框change事件
		 */
		handleSelection (val) {
		}
	},
	filters: {
		timestamp2date
	},
	components: {
		HmBadge
	}
}
</script>

<style lang="scss" scoped>
.hm-script-list-cell {
	.el-table th {
		background-color: #cf2626;
	}
	.el-pagination {
		text-align: right;
		margin-top: 20px;
	}
}
</style>
