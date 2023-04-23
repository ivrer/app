<template>
	<view class="index">

		<MyNavBar :screenTop="status.windowInfo.screenTop"></MyNavBar>

			<view class="topbar">
				<MyTopbar></MyTopbar>
			</view>
			<swiper class="content-wrap" :style="{height:`${status.swiperItemHeight}`}">
				<swiper-item>
					<view class="content" >
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
				</swiper-item>
			</swiper>

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
	import MyTopbar from '@/components/Topbar/Topbar.vue'
	import { onReady } from '@dcloudio/uni-app'
	import {defineComponent, reactive} from 'vue'
	import {useStore} from 'vuex'
	defineComponent({MySwiper,MyCard,MyNavBar,MyRecommend,MyBanner,MyIcons,MyHot,MyShop,MyTopbar})
	
	let store  = useStore()
	let status = reactive(
		{
			swiperItemHeight:'',
			windowInfo:{
				screenTop:'100rpx'
			}
		}
		
		)
	
	onReady(()=>{
		let view = uni.createSelectorQuery().select('.content')
		console.log(view,'onload view')
		view.boundingClientRect((data)=>{
			if(data.height){
				status.swiperItemHeight = data.height + 'px'
			}
		}).exec()
		
		//获取手机屏幕参数
		
		store.dispatch("getWindowInfo").then(()=>{
			if(store.state.windowInfo){
				
				status.windowInfo.screenTop  = store.state.windowInfo.screenTop
			console.log('	store.state.windowInfo.screenTop:', 	store.state.windowInfo.screenTop)
			}
		})
		
		
		// 测试uni参数是否正常
		console.group('1')
		console.log('uni',uni)
		console.log("getCurrentPage",uni,getCurrentPages())
		console.log("getSystemInfo",
			uni.getSystemInfo({
								success: function (res) {
									console.log(res.appName)
								}
								})
					)
		console.log("getwindowInfo",uni.getWindowInfo())
		console.groupEnd('2')
	})
	
</script>

<style lang="scss" scoped>


	.status-bar{
		height: 100rpx;
		width: 100%;
	
	}
	.content-wrap{
		width: 100%;
	}


</style>
