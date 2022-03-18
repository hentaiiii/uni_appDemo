<template>
	<view class="categoryContainer">
		<view class="header">
			<view class="search">搜索商品</view>
		</view>
		<!-- 内容区域 -->
		<view class="categoryContent">
			<view class="categoryLeft">
				<scroll-view class="scrollContainer" scroll-y="true" >
					<view class="scrollItem" :class="{active: currentIndex === index}" v-for="(item, index) in categoryList" :key="item.id" @click="changeNavIndex(index)">{{item.name}}</view>
				</scroll-view>
			</view>
			<view class="categoryRight">
				<image class="bigImg" :src="cateListObj.imgUrl"></image>
				<view class="cateContent">
					<view class="cateItem" v-for="shopItem in cateListObj.subCateList" :key="shopItem.id">
						<image :src="shopItem.wapBannerUrl" mode=""></image>
						<text>{{shopItem.name}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		data() {
			return {
				categoryList: [],
				currentIndex: 0
			}
		},
		mounted() {
			this.getCategoryList()
		},
		methods: {
			async getCategoryList() {
				const res = await request('/getCateGoryDatas')
				this.categoryList = res
			},
			changeNavIndex(index) {
				this.currentIndex = index
			}
		},
		computed: {
			cateListObj() {
				return this.categoryList[this.currentIndex]
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.header
		padding 10rpx 0
		border-bottom 1px solid #eee
		.search
			width 92%
			height 60rpx
			line-height 60rpx
			font-size 26rpx
			text-align center
			background-color #eee
			margin 0 auto
			border-radius 10rpx
			
	.categoryContent
		display flex
		height 800rpx
		.categoryLeft
			box-sizing border-box
			width 20%
			.scrollContainer
				height calc(100vh - 82rpx)
				.scrollItem
					position relative
					text-align center
					font-size 26rpx
					height 80rpx
					line-height 80rpx
					&.active::before
						position absolute
						content ""
						width 2rpx
						height 40rpx
						background-color #BB2C08
						top 20rpx
						left 10rpx
		.categoryRight
			box-sizing border-box
			width 80%
			.bigImg
				display block
				margin 10rpx auto
				width 520rpx
				height 190rpx
			.cateContent
				display flex
				flex-wrap wrap
				.cateItem
					width 33.333%
					text-align center
					image
						width 90%
						height 144rpx
					text
						font-size 24rpx
					
</style>
