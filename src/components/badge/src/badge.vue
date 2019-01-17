<template>
<span class="hm-badge-cell" :class="['badge-cell-status-' + type]">
	<i></i>
	<slot></slot>
</span>
</template>

<script>
export default {
	name: 'HmBadge',
	props: {
		type: {
			type: String,
			default: 'info'
		}
	}
}
</script>
<style lang="scss" scoped>
$--badge-name-list: close working success warning danger;
$--badge-color-list: $--color-info $--color-primary $--color-success $--color-warning $--color-danger;
.hm-badge-cell {
	i {
		display: inline-block;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		vertical-align: middle;
		position: relative;
		top: -1px;
		&:after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			border: 1px solid transparent;
		}
	}
}
@each $color in $--badge-name-list {
	$i: index($--badge-name-list, $color);
	.badge-cell-status-#{$color} {
		// color: nth($--badge-color-list, $i);
		i {
			background-color: nth($--badge-color-list, $i);
			&:after {
				border-color: nth($--badge-color-list, $i);
				@if $color == 'working' {
					animation: statusProcessing 1.5s infinite ease-in-out;
				}
			}
		}
	}
}
@keyframes statusProcessing {
	0% {
		transform:scale(.8);
		opacity:.5;
	}
	to {
		transform:scale(2);
		opacity:0;
	}
}
</style>
