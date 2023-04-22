<template>
	<view class="card-wrap">
		<view class="card-title">
			<text>{{"—" + title + "—"}}</text>
		</view>
		<MyBanner></MyBanner>
		<view class="scroll-wrap">
			<scroll-view scroll-x="true" >
				<view class="scroll-item">
					<MyCardItem widthX="100%" imgH="200rpx"></MyCardItem>
				</view>
				<view class="scroll-item">
					<MyCardItem widthX="100%" imgH="200rpx"></MyCardItem>
				</view>
				<view class="scroll-item">
					<MyCardItem widthX="100%" imgH="200rpx"></MyCardItem>
				</view>
				<view class="scroll-item">
					<MyCardItem widthX="100%" imgH="200rpx"></MyCardItem>
				</view>
				<view class="scroll-item">
					<MyCardItem widthX="100%" imgH="200rpx"></MyCardItem>
				</view>
				<view class="scroll-item">
					<MyCardItem widthX="100%" imgH="200rpx"></MyCardItem>
				</view>
				<view class="scroll-item">
					<MyCardItem widthX="100%" imgH="200rpx"></MyCardItem>
				</view>
			</scroll-view>
			<MyBanner></MyBanner>
		</view>
	</view>
	
</template>

<script setup>
	import MyBanner from '@/components/Banner/Banner.vue'
	import MyCard from '@/components/Card/Card.vue'
	import MyCardItem from '@/components/cardItem/cardItem.vue'
	import {defineComponent,defineProps} from 'vue'
	defineComponent({MyBanner,MyCard,MyCardItem})
	let {title} = defineProps({title:{type:String,default:"推荐店铺"}})
</script>

<style lang="scss" scoped>

	.card-wrap{
		.card-title{
			height: 100rpx;
			width: 200rpx;
			line-height: 100rpx;
			margin: 0 auto;
			font-weight: bold;
		}
		.scroll-wrap{
			white-space: nowrap;
			.scroll-item{
				display: inline-block;
				width: 200rpx;
			}
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