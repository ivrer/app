<template>
	<view>
		<view class="icons">
			<view class="icons-item">
				<view class="container">
					<image src="./images/icon1.png" mode=""></image>
					<text>运动裤子</text>
				</view>

			</view>
			<view class="icons-item">
				<view class="container">
					<image src="./images/icon2.png" mode=""></image>
					<text>衣服</text>
				</view>

			</view>
			<view class="icons-item">
				<view class="container">
					<image src="./images/icon3.png" mode=""></image>
					<text>鞋子</text>
				</view>

			</view>
			<view class="icons-item">
				<view class="container">
					<image src="./images/icon4.png" mode=""></image>
					<text>背包</text>
				</view>
			</view>
			<view class="icons-item">
				<view class="container">
					<image src="./images/icon4.png" mode=""></image>
					<text>运动裤子</text>
				</view>
			
			</view>
			<view class="icons-item">
				<view class="container">
					<image src="./images/icon3.png" mode=""></image>
					<text>运动裤子</text>
				</view>
			
			</view>
			<view class="icons-item">
				<view class="container">
					<image src="./images/icon2.png" mode=""></image>
					<text>运动裤子</text>
				</view>
			
			</view>
			<view class="icons-item">
				<view class="container">
					<image src="./images/icon1.png" mode=""></image>
					<text>运动裤子</text>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		name:"Icons",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.icons{
		width: 100%;
		height: 400rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	.icons-item{
		width: 25%;
		height: 140rpx;
		
		.container{
			width:100rpx;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		
			image{
				width: 100%;
				height: 100rpx;
				border: solid 1rpx black;
				border-radius: 20rpx;
				
			}
			text{
				text-align: center;
				width: 100%;
				height: 40rpx;
				font-size:25rpx;
			}
		}

	}
</style>