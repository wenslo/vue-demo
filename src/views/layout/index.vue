<template>
	<div>
		<el-container direction="vertical">
			<el-main>
				<div class="hm-layout-cell pt-20 pb-20">
					<transition name="el-fade-in">
						<router-view></router-view>
					</transition>
				</div>
			</el-main>
		</el-container>
	</div>
</template>

<script>
export default {
	name: 'index'
}
</script>
