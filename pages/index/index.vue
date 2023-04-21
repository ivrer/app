<template>
	<view class="index">
<!-- #ifdef MP-WEIXIN -->
		<MyNavBar></MyNavBar>
<!-- #endif -->

		<view class="content">
			<view class="siwper-wrap">
				<MySwiper></MySwiper>	
			</view>
		</view>
		
		<MyRecommend></MyRecommend>
		<MyCard title="猜你喜欢"></MyCard>
		
	</view>

</template>

<script setup>
	import MySwiper from '../../components/swiper/index.vue';
	import MyNavBar from '@/components/navbar/index.vue';
	import MyRecommend from '@/components/recommend/index.vue'
	import MyCard from '@/components/Card/Card.vue'
	import {defineComponent} from 'vue'
	defineComponent({MySwiper,MyCard,MyNavBar,MyRecommend})

	
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
