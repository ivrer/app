<template>
	<view class="recommend-wrap">
		<view class="recommend-item">
			<view class="item-img">
				<image src="./images/shirt1.png"></image>
			</view>
			<view class="item-microImg">
				<image src="./images/shot1.jpg"></image>
				<image src="./images/shot2.png"></image>
				<image src="./images/shirt1.png"></image>
			</view>
			
		</view>
		<view class="recommend-item">
			<view class="item-img">
				<image src="./images/shirt2.png"></image>
			</view>
			<view class="item-microImg">
				<image src="./images/shirt1.png"></image>
				<image src="./images/shirt4.png"></image>
				<image src="./images/shirt1.png"></image>
			</view>
			
		</view>
		<view class="recommend-item">
			<view class="item-img">
				<image src="./images/shirt4.png"></image>
			</view>
			<view class="item-microImg">
				<image src="./images/shot4.png"></image>
				<image src="./images/shirt2.png"></image>
				<image src="./images/shot3.jpg"></image>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"ads",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.recommend-item{
		width: 95%;
		height: 600rpx;
		margin: 10rpx auto;
		border: solid 1rpx #ccc;
		border-radius: 20rpx;
		box-sizing: content-box;
		overflow: hidden;
		.item-img{
			image{
				width:100%;
				height: 300rpx;
			}
		}
		.item-microImg{
			height:300rpx;
			display:flex;
			image{
				flex: 1 1 auto;
				height:300rpx;
			}
		}
	}
</style>