<template>
	<view>
		<scroll-view scroll-x="true"  class="scroll-wrap" :scroll-into-view="'top'+status.active">
			<view class="scroll-item" :id="'top'+index" v-for="(el,index) in item" :key="index" @click="changeColor(index)">
				<text :class="index==status.active?'activeText':'peace'">{{el.title}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
import { reactive } from "vue";

	let item = [{"title":"推荐"},{"title":"运动健康"},{"title":"潮流运动"},{"title":"衣物鞋帽"},{"title":"运动健康"},{"title":"潮流运动"},{"title":"运动"}]
	let status = reactive({"active":0})
	let changeColor = (index)=>{
		 status.active = index
	}

		
	
</script>

<style lang="scss">
	.scroll-wrap{
		width: 100%;
		white-space: nowrap;
		height: 50rpx;
		border-bottom: solid ;r
		.scroll-item{
			display: inline-block;
			width: 150rpx;
			.peace{
				color:black;
			}
			.activeText{
				color:red;
			}
		}
	}
</style>