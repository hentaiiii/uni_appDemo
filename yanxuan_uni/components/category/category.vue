<template>
	<view class="categoryContainer">
		<view class="categoryItem"  v-for="item in categoryModule" :key="item.titleSchemeUrl">
			<!-- 大图 -->
			<image class="titleImg" :src="item.titlePicUrl" mode=""></image>
			<scroll-view class="scrollContainer" scroll-x="true" enable-flex >
				<view class="scrollItem" v-for="shop in item.itemList" :key="item.id">
					<image :src="shop.showPicUrl"></image>
					<text>{{shop.name}}</text>
				</view>
				<view class="more">
					查看更多
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['categoryModule'],
		data() {
			return {}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.categoryItem
		.titleImg
			width 100%
			height 370rpx
		.scrollContainer
			white-space nowrap
			margin-bottom 20rpx
			.more
				display inline-block
				font-size 26rpx
				width 200rpx
				height 200rpx
				background #eee
				text-align center
				line-height 200rpx
			.scrollItem
				width 200rpx
				display inline-block
				vertical-align top
				margin-right 20rpx
			image
				width 200rpx
				height 200rpx
				background-color #eee
			text
				overflow hidden
				text-overflow ellipsis
				white-space pre-wrap
				display -webkit-box
				-webkit-box-orient vertical
				-webkit-line-clamp 2
				font-size 26rpx
</style>
