<template>
	<view>
	
		<swiper :indicator-dots="true" :autoplay="true" :interval="5000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-img" src="../../static/images/swiper2.webp" mode="aspectFill"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-img"  src="../../static/images/swiper4.jpg" mode="aspectFill"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-img"  src="../../static/images/swiper1.webp" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			  
		}
	}
</script>

<style scoped>
	.swiper{
		background-color: red;
		height: 500rpx;
	}
 image{
	 display: block;
	 width: 100%;
 }
</style>
