<template>
	<view>
		<MyCard title="热销商品" widthX="33%"></MyCard>
	</view>
</template>

<script setup>
	import {defineComponent} from 'vue'
	import MyCard from '@/components/Card/Card.vue'
	
	defineComponent({MyCard})
</script>

<style lang="scss">

</style>