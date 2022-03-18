<template>
	<view class="indexContainer">
		<!-- 头部区域 -->
		<view class="indexHeader">
			<image src="../../static/images/logo.png" class="logo"></image>
			<view class="search">
				<text class="iconfont icon-sousuo"></text>
				<input type="text" placeholder="搜索商品" placeholder-class="placeholder" />
			</view>
			<button>我叫张小勇</button>
		</view>
		<!-- nav导航 -->
		<scroll-view scroll-x="true" class="navContainer" enable-flex v-if="indexData.kingKongModule" >
			<view class="navItem" :class="{active: activeIndex === -1}" @click="changeNav(-1, 0)">
				推荐
			</view>
			<view 
				class="navItem" 
				:class="{active: activeIndex === index}" 
				@click="changeNav(index, item.L1Id)" 
				v-for="(item, index) in indexData.kingKongModule.kingKongList" 
				:key="item.L1Id"
			>
				{{item.text}}
			</view>
		</scroll-view>
		<view class="indexContent">
			<Recommend v-if="!cateIndex" />
			<CateList v-else :cateIndex="cateIndex" />
		</view>
	</view>
</template>

<script>
	import {mapActions, mapState} from 'vuex'
	import Recommend from '../../components/recommend/recommend.vue'
	import CateList from '../../components/cateList/cateList.vue'
	export default {
		components: {
			Recommend,
			CateList
		},
		data() {
			return {
				activeIndex: -1, // 控制nav的active标识
				cateIndex: 0 , // 控制cateList和recommend的显示和隐藏
				cateList: [], // 
			};
		},
		mounted() {
			// this.getIndexData()
			// 分发action
			// this.$store.dispatch('getIndexDataAction')
			this.getIndexDataAction()
		},
		methods: {
			// ...mapActions({
			// 	getIndexDataAction: 'getIndexDataAction'
			// }),
			...mapActions(['getIndexDataAction']),
			
			// 获取首页数据
			// async getIndexData() {
			// 	const res = await request('/getIndexData') // 小程序
			// 	// const res = await request('/api/getIndexData') // h5
			// 	this.indexData = res
			// },
			changeNav(index, cateIndex) {
				this.activeIndex = index
				this.cateIndex = cateIndex
			}
		},
		computed: {
			...mapState({
				indexData: state => state.home.indexData
			}),
		}
	}
</script>

<style lang="stylus">
	.indexContainer
		.indexHeader
			display flex
			padding 10rpx 0
			.logo
				width 140rpx
				height 40upx
				padding 10rpx 30rpx
			.search
				position relative
				width 420rpx
				height 60rpx
				background-color #eee
				input
					width 370rpx
					height 60rpx
					padding-left 50rpx
					.placeholder
						font-size 26rpx
				.iconfont
					position absolute
					top 15rpx
					left 10rpx
					font-size 30rpx
					color red
			button
				width 144rpx
				height 60rpx
				line-height 60rpx
				text-align center
				font-size 24rpx
				padding 0 4rpx
				margin 0 10rpx
				color #bb2c08
		.navContainer
			display flex
			border-bottom none;
			white-space nowrap
			.navItem
				display inline-block
				box-sizing border-box
				width 140rpx
				height 80rpx
				font-size 26rpx
				line-height 80rpx
				text-align center
				&.active
					border-bottom 1rpx solid #bb2c08
.test
	font-size 0
</style>
