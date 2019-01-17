<template>
	<div class="hm-upload-status" v-if="uploadStatus">
		<el-progress
			:text-inside="true"
			:show-text="false"
			:percentage="percentage"
			:status="progressStatus[uploadStatus]"
			v-if="!percentaged"
		></el-progress>
		<transition name="el-fade-in">
			<span
				:style="{
					'color': uploadStatus === 'success' ? '#67C23A' : '#F56C6C',
					'font-size': '12px'
				}"
				v-if="percentaged"
			>
				{{uploadStatus === 'success' ? '上传成功' : '上传失败'}}
			</span>
		</transition>
	</div>
	<el-button v-else type="text" size="mini" icon="el-icon-upload2" @click="showScriptUpload()">重新上传</el-button>
</template>

<script>
import HmScriptUpload from './upload'
let setInt
export default {
	name: 'HmButtonUpload',
	props: {
		uploadItem: Object
	},
	data () {
		return {
			// 进度条的3中状态
			progressStatus: {
				progress: 'text', // 上传中
				success: 'success', // 上传成功
				error: 'exception' // 上传失败
			},
			uploadStatus: null,
			percentage: 0,
			percentaged: false
		}
	},
	methods: {
		/**
		 * 重新上传弹出框事件
		 */
		showScriptUpload (item) {
			HmScriptUpload.service({
				// 剧本上传中回调
				onProgressFileUpload: () => {
					this.uploadStatus = 'progress' // 修改上传状态为上传中
					this.percentage = 20
					// 假进度条，进度条每秒前移0-20随机值
					setInt = setInterval(() => {
						this.percentage += Math.round(Math.random() * 20)
					}, 1000)
				},
				// 剧本上传成功回调
				onSuccessFileUpload: (self, res) => {
					this.uploadStatus = 'success'
				},
				// 剧本上传失败回调
				onErrorFileUpload: (self, res) => {
					this.uploadStatus = 'error'
				},
				// 剧本上传完成回调（成功失败都会执行）
				onCompleteFileUpload: (self, res) => {
					clearInterval(setInt)
					this.percentage = 100
					setTimeout(_ => {
						this.percentaged = true
						setTimeout(_ => {
							this.uploadStatus = null
						}, 2000)
					}, 800)
				}
			})
		}
	},
	watch: {
		uploadStatus (val, oldVal) {
			if (!val) {
				this.percentaged = false
				this.percentage = 0
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.hm-upload-status {
	display: inline-block;
	width: 67px;
	margin-left: 10px;
}
</style>
