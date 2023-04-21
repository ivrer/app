<template>
	<view class="card-wrap">
		<view class="card-title">
			<text>{{"—" + title + "—"}}</text>
		</view>
		<view class="card-list">
			<MyCardItem :widthX="widthX"></MyCardItem>
			<MyCardItem :widthX="widthX"></MyCardItem>
			<MyCardItem :widthX="widthX"></MyCardItem>
			<MyCardItem :widthX="widthX"></MyCardItem>
		</view>
	</view>
</template>

<script setup>
	import MyCardItem from '@/components/cardItem/cardItem.vue'
	import {defineComponent, defineProps} from 'vue'
	defineComponent({MyCardItem})
	
	let {title,widthX="50%"} = defineProps(["title","widthX"])

	

</script>

<style lang="scss">
		.card-wrap{
			.card-title{
				height: 100rpx;
				width: 200rpx;
				line-height: 100rpx;
				margin: 0 auto;
				font-weight: bold;
			}
			.card-list{
				&::after{
					clear: both;
					display: block;
					content: '';
					overflow: hidden;
				}
			}
		}

</style>