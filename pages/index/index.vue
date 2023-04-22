<template>
	<view class="index">
<!-- #ifdef MP-WEIXIN -->
		<MyNavBar></MyNavBar>
<!-- #endif -->

		<view class="content">
			<view class="siwper-wrap">
				<MySwiper></MySwiper>	
			</view>
			<view class="banner-wrap">
				<MyBanner></MyBanner>
			</view>
			<view class="icons-wrap">
				<MyIcons></MyIcons>
			</view>
			<view class="recommend-wrap">
				<MyRecommend></MyRecommend>
			</view>
			<view class="card-wrap">
				<MyCard title="猜你喜欢"></MyCard>			
			</view>
			<view class="hot-wrap">
				<MyHot></MyHot>
			</view>
			<view class="shop-wrap">
				<MyShop></MyShop>
			</view>
		</view>



		
	</view>

</template>

<script setup>
	import MySwiper from '../../components/swiper/index.vue';
	import MyNavBar from '@/components/navbar/index.vue';
	import MyRecommend from '@/components/recommend/index.vue'
	import MyCard from '@/components/Card/Card.vue'
	import MyBanner from '@/components/Banner/Banner.vue'
	import MyIcons from '@/components/Icons/Icons.vue'
	import MyHot from '@/components/Hot/Hot.vue'
	import MyShop from '@/components/common/shop.vue'
	
	import {defineComponent} from 'vue'
	defineComponent({MySwiper,MyCard,MyNavBar,MyRecommend,MyBanner,MyIcons,MyHot,MyShop})

	
</script>

<style lang="scss">

	.swiper-wrap{
			background-color: red;
	}
	.status-bar{
		height: 100rpx;
		width: 100%;
	
	}
	.content{

	}

</style>
