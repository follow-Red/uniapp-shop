<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper indicator-dots circular>
			<swiper-item v-for="item in swipers">
				<image :src="item.img "></image>
			</swiper-item>
		</swiper>
		<!-- 导航区 -->
		<view class="nav">
			<view class="nav-item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品区 -->
		<view class="hot-goods">
			<view class="title">推荐商品</view>
			<GoodsList :goods="hotGoods"
						@itemClick="goGoodsDetail"
			></GoodsList>
			<!-- <view class="goods-list">
				<view class="goods-item" 
					v-for="item in hotGoods">
					<image :src="item.goods_small_logo"></image>
					<view class="price">
						<text>{{item.goods_price}}</text>
						<text>{{item.goods_price}}</text>
					</view>
					<view class="name">
						{{item.goods_name}}
					</view>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	import GoodsList from '../../components/goods-list/goods-list.vue'
	export default {
		components: {
			GoodsList
		},
		data() {
			return {
				title: 'Hello',
				swipers: [],
				hotGoods: [],
				navs: [{
						icon: 'iconfont icon-jiudian',
						title: '超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-pinglun',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-qianbao',
						title: '社区图片',
						path: '/pages/picture/picture'
					},
					{
						icon: 'iconfont icon-fasong',
						title: '学习视频',
						path: '/pages/video/video'
					}
				]
			}
		},
		onLoad() {
			// 调用请求获取数据 
			this.getSwipers()
			this.getHotGoods()
		},

		methods: {
			// 获取轮播图数据
			async getSwipers() {
				// uni.request({
				// 	url: "http://localhost:8080/static/getlunbo.json",
				// 	success: (res) => {
				// 		console.log(res)
				// 		if(res.data.status!==0){
				// 			return uni.showToast({
				// 				title:"获取数据失败"
				// 			})
				// 		}
				// 		this.swipers=res.data.message
				// 	}

				// })
				const res = await this.$myRequest({
					url: "getlunbo.json"
				})
				console.log("获取轮播图数据:",res)
				this.swipers = res.data.message
			},
			//获取热门商品列表数据
			async getHotGoods() {
				const res = await this.$myRequest({
					url: "getHotGoods.json"
				})
				this.hotGoods = res.data.message.goods
			},
			// 导航栏点击事件
			navItemClick(url) {
				console.log(url);
				uni.navigateTo({
					url
				})
			},
			// 导航商品详情页
			goGoodsDetail(id){
				uni.navigateTo({
					url:"/pages/goodsDetail/goodsDetail?id="+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.nav {
			display: flex;

			.nav-item {
				width: 25%;
				text-align: center;

				view {
					width: 120rpx;
					height: 120rpx;
					background-color: #b50e03;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
					font-size: 50rpx;
					color: #fff;
				}

				text {
					font-size: 30rpx;
				}
			}
		}

		.hot-goods {
			background-color: #eee;
			// text-align: center;
			overflow-y: hidden;
			margin-top: 10rpx;

			.title {
				height: 50rpx;
				line-height: 50rpx;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20rpx;
				background-color: #FFF;
				margin: 10rpx 0;
			}
		}
	}
</style>
