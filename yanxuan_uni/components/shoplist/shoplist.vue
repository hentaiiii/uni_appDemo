<template>
	<view class="shopListContainer">
		<view class="shopListItem" v-for="(item, index) in itemList" :key="index" @click="goDetail(item)">
			<image :src="item.listPicUrl"></image>
			<p class="goodName">{{item.name}}</p>
			<p class="goodPrice">$ {{item.retailPrice}}</p>
		</view>
	</view>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
	props: ['itemList'],
	data() {
		return {
			index: 0
		}
	},
	mounted() {
	},
	methods: {
		goDetail(item) {
			// 发布消息给detail页面
			// PubSub.publish('test', 'test data')
			wx.navigateTo({
				url: '/pages/detail/detail?shopItem=' +  JSON.stringify(item)
			})
		}
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.shopListContainer
		display  flex
		flex-wrap wrap
		justify-content space-around
		/* 解决最后一行只有一个元素的时候不能靠左布局 */
		&::after
			content ""
			width 345rpx
			height 0
		.shopListItem
			width 345rpx
			display  flex
			flex-direction column
			image
				width 100%
				height 345rpx
			.goodName
				font-size 24rpx
			.goodPrice
				font-size 24rpx
				font-weight bold
				color #BB2C08
</style>
