<template>
	<view class="card-item">
		<view class="item-img">
			<image src="../recommend/images/shot4.png" mode=""></image>
		</view>
		<view class="item-text">
			<text>
				"dasdasdasdasdasdasdasdasdasdasd"
			</text>
			
			<text class="item-price">
				<text class="price-unit">Y</text>
				<text class="price">299</text>
			</text>
		</view>
		
	</view>

</template>

<script>
	export default {
		name:"cardItem",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

	.card-item{
		width: 300rpx;
		float: left;
		margin: 0 35rpx;
		.item-img{
			image{
				width: 100%;
				height:400rpx
			}
		}
		.item-text{
			text-align: center;
			height: 150rpx;
			text{
				-webkit-font-smoothing: antialiased;
				list-style: none;
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
			.item-price{
				width: 100%;
				color: black;
				.price-unit{
					width: 50rpx;
					float: left;
					margin-left: 80rpx;
				}
				.price{
					width: 80rpx;
				}
				
			}
		}
	}
</style>