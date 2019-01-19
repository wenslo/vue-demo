<template>
<el-dialog :title="title" width="40%" center :visible.sync="visible" @closed="closedFileUpload">
	<div class="hm-title-cell">编辑剧本信息</div>
	<el-form :model="model" size="small" ref="ruleForm" label-width="100px">
		<el-form-item label="剧本名称：" prop="title" :rules="[{required: true, message: '剧本名称不能为空', trigger: 'change'}]">
			<el-input v-model="model.title" placeholder="请输入剧本名称" clearable></el-input>
		</el-form-item>
		<el-form-item label="编剧：" prop="author" :rules="[{required: true, message: '编剧不能为空', trigger: 'change'}]">
			<el-input v-model="model.author" placeholder="请输入编剧" clearable></el-input>
		</el-form-item>
		<el-form-item label="类型：" prop="categoryName" :rules="[{required: true, message: '类型不能为空', trigger: 'change'}]">
			<el-select v-model="model.categoryName" placeholder="请选择类型" clearable>
				<el-option label="电影" value="movie"></el-option>
				<el-option label="电视剧" value="dianshiju"></el-option>
			</el-select>
		</el-form-item>
	</el-form>
	<div class="hm-title-cell">上传书籍</div>
	<el-upload
		ref="elUpload"
		drag
		:auto-upload="false"
		:action="baseURL + '/adminUserAuth/scriptReport/uploadBook44'"
		:limit="limit"
		:accept="accept"
		:on-exceed="onExceed"
		:on-change="onChange"
		:before-upload="beforeFileUpload"
		:on-progress="progressFileUpload"
		:on-success="successFileUpload"
		:on-error="errorFileUpload"
		:disabled="uploading"
	>
		<i class="el-icon-upload"></i>
		<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
		<div class="el-upload__tip" slot="tip">
			只能上传后缀为
			<el-tag style="margin: 0 3px;" size="mini" v-for="(i, index) in acceptArr" :key="index">{{i}}</el-tag>
			的文件，且不超过{{maxFileSize}}KB
		</div>
	</el-upload>
	<div class="mt-25 hm-text-center">
		<el-button type="primary" size="small" @click="submit">确定</el-button>
		<el-button class="ml-40" type="primary" size="small" @click="visible = false">取消</el-button>
	</div>
</el-dialog>
</template>

<script>
import API from '@/api'
import store from '@/store'
export default {
	name: 'HmScriptUpload',
	data () {
		return {
			baseURL: API.defaults.baseURL,
			visible: false,
			uploading: false,
			title: '文件上传',
			maxFileSize: 500, // 限制上传文件最大多少KB
			limit: 2,
			accept: '.txt,.doc,.docx',
			model: {}
		}
	},
	computed: {
		acceptArr () {
			return this.accept.split(',')
		}
	},
	methods: {
		submit () {
			this.$refs.elUpload.submit()
			this.visible = false
		},
		onExceed (file, fileList) {
			this.$message.error(`一次最多只能上传${this.limit}个文件!`)
		},
		onChange (file, fileList) {
			const isLt2M = file.size / 1024 < this.maxFileSize
			!isLt2M && this.$message.error(`上传文件大小不能超过 ${this.maxFileSize}KB!`)
		},
		beforeFileUpload (file) {
			const isLt2M = file.size / 1024 < 500
			if (!isLt2M) {
				this.$message.error('上传文件大小不能超过 500KB!')
			}
			return isLt2M
		},
		progressFileUpload (event, file, fileList) {
			this.uploading = true
			this.onProgressFileUpload()
		},
		successFileUpload (response, file, fileList) {
			this.uploading = false
			if (response.errorCode) {
				this.onErrorFileUpload(this, response)
			} else {
				this.onSuccessFileUpload(this, response)
			}
			this.onCompleteFileUpload(this, response)
		},
		errorFileUpload (response, file, fileList) {
			this.uploading = false
			this.onErrorFileUpload(this, response)
			this.onCompleteFileUpload(this, response)
		},
		closedFileUpload () {
			this.$el.parentNode.removeChild(this.$el)
		}
	}
}
</script>
