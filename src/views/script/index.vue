<template>
<div class="hm-main-cell">
	<Hm-Header />
	<div class="hm-layout-cell pt-20 pb-20">
		<transition name="el-fade-in">
			<router-view></router-view>
		</transition>
	</div>
</div>
</template>

<script>
import HmHeader from '@/views/layout/header'
export default {
	name: 'name',
	components: {
		HmHeader
	}
}
</script>
