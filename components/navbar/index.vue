<template>
		<view class="nav-wrap">
			<!-- 整个导航栏的宽度 -->
			<view class="nav-top">
				<!-- 可书写的内容距离顶部的高度 -->
			</view>
			<view class="nav-content-wrap">
				<view class="nav-content">
					<!-- 内容 -->
					<view class="title">
						<text>{{"newPin"}}</text>
					</view>
					<view class="search-wrap">
						<view class="search">
							<view class="iconfont icon-sousuo" id="searchIcon">	
							</view>
							<input type="text" class="search-input" placeholder="请输入搜索">
						</view>
					</view>
				</view>
				<view class="nav-right">
					<!-- 距离微信程序右侧按钮的距离 -->
				</view>
			</view>
			<view class="box" >
				asdasdasd
			</view>
		</view>
</template>

<script >
	export default {

	}
</script>

<style lang="scss">
	.box{
		background-color: red;
	}

	.nav-wrap{

			height:180rpx;
			.nav-top{
				background-color: green;
				height: 90rpx;
			}
			.nav-content-wrap{
				height: 90rpx;
				background-color: #FFC300;
				color: black;
				.nav-content{
					float: left;	
					width: 500rpx;
					height: 90rpx;
				
					.title{
						float: left;
						align-items: center;
						font-size: 1.5rem;
						width: 200rpx;	
						height: 90rpx;
						font-weight: bold;
			
						margin-right:10rpx ;
						overflow:hidden;
					}
					.search-wrap{
						height: 90rpx;
						.search{
							height: inherit;
							display: flex;
							justify-content: center;
							align-items: center;
							
							#searchIconfont{
								height: 100rpx;
								width: 50rpx;
								flex: 1 1 basic;
								
							}
							.search-input{
								margin-left: 10rpx;
								flex: 1 1 basic;
								height: 50rpx;
								border: solid 1rpx black;
								border-radius :20rpx; 
							}
						}
		
					}
		
				}
				.nav-right{
					float: right;
					height: inherit;
					width: 180rpx;
				}
				&::after{
					content: '';
					display: block;
					overflow: hidden;
					clear: both;
				}
				
			}
		}
	
</style>


