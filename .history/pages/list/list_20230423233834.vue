<template>
	<view class="pageView">
		<!-- #ifdef MP-WEIXIN 
				<MyNavBar></MyNavBar>
		#endif -->

		
		<uni-card :is-shadow="false"  title="组件卡片">
			<text class="uni-h6">该页面展示uni内置组件的利用，以及外置组件库的使用，配合一些api实现相应的功能</text>
		</uni-card>

		<!-- <movable-area>
			<movable-view :x="x" :y="y" direction="all" @change="onChange">
				text
			</movable-view>
		</movable-area> -->
		<uni-fab
			:pattern="status.fab.pattern"
			:content="content"
			horizontal="left"
			vertical="bottom"
			direction="horizontal"
			:MyfabShow = "status.fab.fabShow"
			@trigger="trigger"
			@fabClick="fabClick"
			@mouseover="moveFab"
			@touchmove="fabTouchmove"
			ref="nodeFab"
			class="fab"
		></uni-fab>
		
		<button  @click="clearTrigger" >修改fab组件,进行自定义操控</button>
		<button  @click="download" >操控</button>
		<image :src="status.uploadImg.src" mode="" class="showImg"></image>
		<!-- 提示窗口 -->


		<uni-popup ref="alertDialog" type="dialog">
			<uni-popup-dialog type="success" cancelText="关闭" confirmText="同意" title="通知" content="确认下载该文件吗？" @confirm="dialogConfirm"
				@close="dialogClose"></uni-popup-dialog>
		</uni-popup>

		<view class="moveBox" ref="nodeMoveBox"  @touchmove="BoxTouchmove"
			:style="{top:`${movePosition.moveTop}`,left:`${movePosition.moveLeft}`}"
		>移动盒子</view>
		<div class="divBox" ref="divBox">div</div>
	</view>
</template>

<script setup>
	import MyNavBar from '@/components/navbar/index.vue';
	import {defineComponent, reactive,ref} from 'vue'
	import { onReady } from '@dcloudio/uni-app'
	import {useStore} from 'vuex'
	defineComponent({MyNavBar})

	let store = useStore()
	let alertDialog = ref(null)
	let nodeFab = ref(null) 
	let nodeMoveBox = ref(null)
	let divBox = ref(null)
	let movePosition = reactive({moveTop:"400rpx",moveLeft:"200rpx"})
	let status = reactive({
		fab:{
			fabShow:true,
			pattern: {
				color: '#7A7E83',
				backgroundColor: '#fff',
				selectedColor: '#007AFF',
				buttonColor: '#fff',
				iconColor: '#000000'
			},
		},
		uploadImg:{
			src:"/static/images/upload.jpg"
		}
	})
	let content = [
					{
						iconPath: '/static/images/album.png',
						selectedIconPath: '/static/images/album.png',
						text: '相册',
						active: false
				    },
					{
						iconPath: '/static/images/fav.png',
						selectedIconPath: '/static/images/fav.png',
						text: '收藏',
						active: false
					},
					{
						iconPath: '/static/images/download.png',
						selectedIconPath: '/static/images/download.png',
						text: '下载',
						active: false
					},
						
		         ]
				 
	let trigger=(event)=>{
		console.log('trigger',event)
		if(event.index===0){
			uni.chooseImage({
				success: (chooseImageRes) => {
					const tempFilePaths = chooseImageRes.tempFilePaths;
					console.log(chooseImageRes, 'chooseImageRes')
					status.uploadImg.src  = chooseImageRes.tempFilePaths[0]

					
					// uni.uploadFile({
					// 	url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
					// 	filePath: tempFilePaths[0],
					// 	name: 'file',
					// 	formData: {
					// 		'user': 'test'
					// 	},
					// 	success: (uploadFileRes) => {
					// 		console.log(uploadFileRes.data);
					// 	}
					// });
				}
			});
		}
	}
	let fabClick=(event)=>{
		console.log(event,'fabClick')
	}
	let clearTrigger = ()=>{
		console.log('clearTrigger')
		status.fab.fabShow = !status.fab.fabShow
		console.log(status.fab.fabShow,'fabshow')

	}
	let dialogConfirm = (value)=>{
		console.log(value,'confirm')
	}
	let dialogClose = (value)=>{
		console.log(value,'close')
	}
	let download = ()=>{
		let url = status.uploadImg.src
		uni.getSystemInfo({success:(res)=>{
			 let result = res
			downloadFile(result)}})
		
		function downloadFile(res){
			if(res.platForm){}
		}
		alertDialog.value.open()
		// uni.downloadFile({
		// 	url:url,
		// 	success:(res)=>{
		// 		let filePath = res.tempFilePath
		// 		uni.openDocument({
		// 			filePath:filePath,
		// 			success:()=>{
		// 				console.log('打开路径')
		// 			}
		// 		})
		// 	}
		// })
	}
	let moveFab = (e) => {
		console.log(e,'moveFab');
	}
	
	let fabTouchmove = (params) => {
		// console.log(params.touches[0].pageX,params.touches[0].pageY);



		let x = params.touches[0].pageX
		let y = params.touches[0].pageY
		console.log(x,y);
	
	} 

	let BoxTouchmove = (e) => {

		uni.stopPullDownRefresh()
		//H5端

		let pageX = e.touches[0].pageX 
		let pageY = e.touches[0].pageY

		if(nodeMoveBox.value?.$el){
			let el = nodeMoveBox.value.$el
			let x = e.touches[0].pageX - el.offsetWidth/2+ "px"
			let y =  e.touches[0].pageY - el.offsetHeight/2 +"px"
			el.style.top = y
			el.style.left = x
			
		}
		// 适配微信小程序端
		let el = uni.createSelectorQuery().select('.moveBox')
		el.boundingClientRect((data)=>{
			if(data.height){
				movePosition.moveTop =pageY- data.height/2 + "px"
				movePosition.moveLeft = pageX -data.width/2 + "px"
			}
		}).exec()

		
	}
	
	onReady(()=>{

		// #ifdef MP-WEIXIN
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			console.log('menuButtonInfo:', menuButtonInfo) 
		// #endif	


		console.log('store.state.windowInfo:', store.state.windowInfo)
		// let view = uni.createSelectorQuery().select('.content')
		// console.log(view,'onload view')
		// view.boundingClientRect((data)=>{
		// 	if(data.height){
		// 		status.swiperItemHeight = data.height + 'px'
		// 	}
		// }).exec()


		//微信好像可以直接使用，不需要考虑跨域
		
		// #ifdef MP-WEIXIN
		uni.request({
			url: 'http://localhost:5566/detail/productDetail', //仅为示例，并非真实接口地址。
			methods:"GET",
			header: {
				'custom-header': 'hello' //自定义请求头信息
			},
			success: (res) => {
				console.log("request")
				console.log(res.data);
			},
			complete:()=>{
				console.log('我发送了请求')
			}
		});
		// #endif	

		// #ifdef APP
		console.log('app request');
		uni.request({
			url: 'http://localhost:5173/proxy/detail/productDetail', //仅为示例，并非真实接口地址。
			methods:"GET",
			header: {
				'custom-header': 'hello' //自定义请求头信息
			},
			success: (res) => {
				console.log("request")
				console.log(res.data);
			},
			complete:()=>{
				console.log('我发送了请求')
			}
		});
		//#endif	

		//#fidef H5
		console.log('H5 request');
		//#endif
	})
	
</script>

<style lang="scss" scoped>
	.pageView{
		width: 100%;
	}
image.showImg{
	width: 200rpx;
	height: 200rpx;
}

.pageView{
	position: relative;
}

.moveBox{
	position: fixed;
	width: 100rpx;
	height: 100rpx;
	background-color: #008c8c;
	z-index: 9999;
	border:solid 1rpx #ccc;
	border-radius: 20rpx;
}

</style>