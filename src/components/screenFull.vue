<template>
	<i :class="isFullscreen ? 'icon-size-actual' : 'icon-size-fullscreen'" @click="screenfullFun" v-if="screenfullStatus"></i>
</template>

<script>
import screenfull from 'screenfull'
export default {
	name: 'HmScreenfull',
	data () {
		return {
			isFullscreen: false,
			screenfullStatus: false
		}
	},
	created () {
		// 如果浏览器支持全屏，显示图标
		if (screenfull.enabled && !navigator.userAgent.match(/Trident.*rv:11\./)) {
			this.screenfullStatus = true
		}
		// 监听全屏状态切换图标
		document.addEventListener(screenfull.raw.fullscreenchange, () => {
			this.isFullscreen = screenfull.isFullscreen
		})
	},
	methods: {
		screenfullFun () {
			screenfull.toggle()
			this.isFullscreen = screenfull.isFullscreen
		}
	}
}
</script>
