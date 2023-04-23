<template>
	<view class="pageView">
		<!-- #ifdef MP-WEIXIN -->
				<MyNavBar></MyNavBar>
		<!-- #endif -->

		
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
	</view>
</template>

<script setup>
	import MyNavBar from '@/components/navbar/index.vue';
	import {defineComponent, reactive,ref} from 'vue'
	import { onReady } from '@dcloudio/uni-app'
	defineComponent({MyNavBar})
	let alertDialog = ref(null)
	let nodeFab = ref(null) 
	
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



		let x = params.touches[0].pageX-200
		let y = params.touches[0].pageY -200 
		console.log(x.y);
	
	} 
	
	onReady(()=>{
		// let view = uni.createSelectorQuery().select('.content')
		// console.log(view,'onload view')
		// view.boundingClientRect((data)=>{
		// 	if(data.height){
		// 		status.swiperItemHeight = data.height + 'px'
		// 	}
		// }).exec()
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

</style>