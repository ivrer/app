<template>
	<view>
		<text>asdasd</text>
	</view>
	<uni-popup ref="share" type="message" safeArea backgroundColor="#fff">
		<uni-popup-message type="info" :message="messageText" :duration="4000"></uni-popup-message>
	</uni-popup>
</template>

<script setup>
	import {ref} from 'vue'
	import { onReady } from '@dcloudio/uni-app'
	let share = ref(null)	
	let messageText = ref('asdas')
 	uni.getLocation(
		{
			type:'wgs84',
			success:function(res){
				console.log(res,"地理位置")
				messageText.value = "当前地址为111"
				
				
			},
			fali:()=>{
				console.log("失败地理")
				messageText.value ="获取不到当前地址，程序不支持或是定位功能未开启"
			},
			complete:() => {
				console.log("完成地理")
			}
		}
	)
	onReady(()=>{
		console.log('onready',messageText.value)
		share.value.open()
	})
</script>

<style lang="scss">

</style>
