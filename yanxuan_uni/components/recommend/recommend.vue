<template>
	<view class="recommendContainer">
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/a64f1bb6383da9a04791027ff580171e.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/dd6c3b2181338b2a87e11b13d2d460de.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/a64f1bb6383da9a04791027ff580171e.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/dd6c3b2181338b2a87e11b13d2d460de.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/a64f1bb6383da9a04791027ff580171e.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		
		<!-- policyDescList 三个图标按钮 -->
		<view class="policyDescList">
			<view class="policyItem" v-for="item in indexData.policyDescList" :key="item.item.desc">
				<image :src="item.icon" mode=""></image>
				<text>{{item.desc}}</text>
			</view>
		</view>
		
		<!-- 十个小图标区域 -->
		<view class="kingKongList">
			<view class="kingKongListItem" v-for="item in indexData.kingKongModule.kingKongList" :key="item.L1Id">
				<image :src="item.picUrl" mode=""></image>
				<text>{{item.text}}</text>
			</view>
		</view>
		
		<!-- 分类模块 -->
		<Category :categoryModule="indexData.categoryModule" />
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	import Category from '../category/category.vue'
	export default {
		components: {
			Category
		},
		data() {
			return {
			}
		},
		computed: {
			...mapState({
				indexData: state => state.home.indexData
			})
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.swiper
		width 100%
		height 375rpx
		image
			width 100%
			height 375rpx
	.policyDescList
		display flex
		.policyItem
			flex 1
			text-align center
			image
				width 32rpx
				height 32rpx
			text
				font-size 24rpx
				
				
	.kingKongList
		display flex
		flex-wrap wrap
		margin-bottom 20rpx
		.kingKongListItem
			display flex
			flex-direction column
			width 20%
			text-align center
			image
				width 110rpx
				height 110rpx
				margin 10rpx auto
			text
				font-size 26rpx
</style>
