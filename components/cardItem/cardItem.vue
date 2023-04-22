<template>
	<view class="card-item" :style="{width:`${widthX}`}">
		<view class="item-img">
			<image src="../recommend/images/shot4.png" mode="" :style="{height:`${imgH}`}"></image>
		</view>
		<view class="item-text">
			<text class="item-title">
				"dasdasdasdasdasdasdasdasdasdasd"
			</text>
			<view class="item-price">
				<text class="price-unit">Y599</text>
				<text class="price">y299</text>
			</view>
		</view>
		
	</view>

</template>

<script setup >
	import {defineProps} from 'vue'
	let {widthX='50%',imgH="400rpx"} = defineProps(["widthX","imgH"])
</script>

<style lang="scss">

	.card-item{
		float: left;
		width: 50%;
		// margin: 0 10rpx;
		.item-img{
			image{
				width: 100%;
			}
		}
		.item-text{
			text-align: center;
			height: 150rpx;
			.item-title{
				-webkit-font-smoothing: antialiased;
				margin: 0;
				padding: 0;
				text-align: center;
				word-break: break-all;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
	}
</style>