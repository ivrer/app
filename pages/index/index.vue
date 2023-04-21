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
		
	</view>

</template>

<script>
	import MySwiper from '../../components/swiper/index.vue';
	import MyNavBar from '@/components/navbar/index.vue';
	import MyRecommend from '@/components/recommend/index.vue'
	export default {
		data() {
			return {
				title: 'Helloxczxc'
			}
		},
		components:{MySwiper,MyNavBar,MyRecommend},
		onLoad() {

		},
	
		methods: {

		}
	}
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
