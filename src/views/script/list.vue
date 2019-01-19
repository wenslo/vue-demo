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
			prop="createdAt"
			label="日期"
			sortable
		>
			<template slot-scope="scope">
				{{scope.row.createdAt | timestamp2date}}
			</template>
		</el-table-column>
		<el-table-column
			align="center"
			prop="title"
			label="剧本名称"
			show-overflow-tooltip
		>
		</el-table-column>
		<el-table-column
			align="center"
			prop="author"
			label="用户名称"
		>
		</el-table-column>
		<el-table-column
			align="center"
			prop="author"
			label="编剧"
		>
		</el-table-column>
		<el-table-column
			width="80"
			align="center"
			prop="categoryName"
			label="剧本类型"
		>
		</el-table-column>
		<el-table-column
			width="105"
			align="center"
			prop="calcuStatus"
			label="智能分析状态"
			column-key="calcuStatus"
			:filters="[
				{ text: '正在分析', value: 0 },
				{ text: '分析完成', value: 1 }
			]"
			:filter-method="filterCalcuStatus"
			filter-placement="bottom-end"
		>
			<template slot-scope="scope">
				<!-- close working success warning danger -->
				<hm-badge :type="scope.row.calcuStatus ? 'success' : 'working'">
					{{scope.row.calcuStatus ? '分析完成' : '正在分析'}}
				</hm-badge>
			</template>
		</el-table-column>
		<el-table-column
			align="center"
			prop="status"
			label="编辑状态"
		>
			<template slot-scope="scope">
				{{scope.row.calcuStatus}}/10
			</template>
		</el-table-column>
		<el-table-column
			width="250"
			align="center"
			label="操作"
		>
			<template slot-scope="scope">
				<el-button :data="scope" type="text" size="mini" icon="el-icon-edit">编辑报告</el-button>
				<el-button type="text" size="mini" icon="el-icon-download">下载剧本</el-button>
				<hm-buttonUpload />
			</template>
		</el-table-column>
		<el-table-column
			align="center"
			label="报告确认"
		>
			<template slot-scope="scope">
				<el-button :data="scope" type="primary" size="mini">确认报告</el-button>
			</template>
		</el-table-column>
	</el-table>
	<el-pagination
		background
		@size-change="sizeChange"
		@current-change="currentChange"
		:current-page="currentNumber"
		:page-sizes="pageSizes"
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
import HmButtonUpload from '@/components/buttonUpload'
export default {
	data () {
		return {
			listData: [],	// 剧本数据列表
			listQuery: {	// 剧本数据参数集合，包括分页信息
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
		},
		filterCalcuStatus (val, row, column) {
			return row.calcuStatus === val
		}
	},
	filters: {
		timestamp2date
	},
	components: {
		HmBadge,
		HmButtonUpload
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
