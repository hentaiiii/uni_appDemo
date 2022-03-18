<template>
	<view class="cateListContainer">
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item class="swiperItem" v-for="item in cateObj.category.bannerUrlList" :key="item">
				<image :src="item" mode=""></image>
			</swiper-item>
		</swiper>
		
		<view class="cateDesc">
			<view class="cateDescTitle">{{ cateObj.category.name }}</view>
			<view class="cateDescFrontName">{{ cateObj.category.frontName }}</view>
		</view>
		
		<ShopList :itemList = "cateObj.itemList" />
	</view>
</template>

<script>
import request from '../../utils/request.js'
import ShopList from '../shoplist/shoplist.vue'
export default {
	components: {
		ShopList
	},
	props: {
		cateIndex: {
			type: String
		}
	},
	data() {
		return {
			indexCateList: []
		}
	},
	mounted() {
		this.getIndexCateList()
	},
	methods: {
		async getIndexCateList() {
			this.indexCateList = await request('/getindexCateList')
		}
	},
	computed: {
		cateObj() {
			return this.indexCateList.find(item => {
				return  item.category.parentId*1 === this.cateIndex*1
			})
		}
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.swiperItem
		width 100%
		height 370rpx
		image
			width 100%
			height 100%
	.cateDesc
		.cateDescTitle
			font-size 34rpx
			line-height 70rpx
			color #333
			text-align center
		.cateDescFrontName
			font-size 24rpx
			line-height 40rpx
			color #999
			text-align center
</style>
