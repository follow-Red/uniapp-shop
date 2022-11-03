<template>
	<view class="goods-detail">
		<swiper indicator-dots>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>{{info.price}}</text>
				<text>{{info.old_price}}</text>
			</view>
			<view class="name">{{info.title}}</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>货号：{{info.number}}</view>
			<view>库存：{{info.count}}</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="title">详情介绍</view>
			<view class="content">
				<!-- {{info.content}} -->
				<rich-text :nodes="info.content"></rich-text>
			</view>
		</view>
		<view class="goods-nav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
		

	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'

	export default {
		components: {
			uniGoodsNav
		},
		data() {
			return {
				id: 0,
				swipers: [],
				info: {},
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		onLoad(options) {
			console.log(options.id)
			this.id = options.id
			this.getSwiper()
			this.getGoodDetail()
		},
		methods: {
			getSwiper() {
				//模拟请求数据
				if(this.id==="1"){
					this.swipers = [{
							"id": 1,
							"url": "",
							"img": "https://img.alicdn.com/imgextra/i2/1714128138/O1CN01U1FC3x29zFsfq5Kra-1714128138.jpg_430x430q90.jpg"
						},
						{
							"id": 2,
							"url": "",
							"img": "https://img.alicdn.com/imgextra/i2/1714128138/O1CN01u6j1NX29zFlmP6Kbf_!!1714128138.jpg_430x430q90.jpg"
						},
						{
							"id": 3,
							"url": "",
							"img": "https://img.alicdn.com/imgextra/i3/1714128138/O1CN0160JOWT29zFlB1K2Yw_!!1714128138.jpg_430x430q90.jpg"
						}
					]
				}
				if(this.id==="2"){
					this.swipers = [{
							"id": 1,
							"url": "",
							"img": "https://img.alicdn.com/imgextra/i2/1714128138/O1CN01gHcO2h29zFsiCpT4n_!!1714128138.png_430x430q90.jpg"
						},
						{
							"id": 2,
							"url": "",
							"img": "https://img.alicdn.com/imgextra/i4/1714128138/O1CN01h7fWF729zFqh8jh7I_!!1714128138.jpg_430x430q90.jpg"
						},
						{
							"id": 3,
							"url": "",
							"img": "https://img.alicdn.com/imgextra/i3/1714128138/O1CN011CqZ5s29zFqdeLL95_!!1714128138.jpg_430x430q90.jpg"
						}
					]
				}
				
			},
			async getGoodDetail() {
				// 模拟请求数据
				const res = await this.$myRequest({
					url: 'getGoodDetail.json'
				})
				if(this.id==="1"){
					this.info = res.data.message[0]
				}
				if(this.id==="2"){
					this.info = res.data.message[1]
				}
	
			},
			onClick(e) {
				console.log(e)
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		}
	}
</script>

<style lang="scss">
	.goods-detail {
		swiper {
			height: 700rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.box1 {
			padding: 20rpx;

			.price {
				font-size: 35rpx;
				color: $shop-color;
				line-height: 80rpx;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					text-decoration: line-through;
					margin-left: 20rpx;
				}
			}

			.name {
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}

		.line {
			height: 15rpx;
			width: 750rpx;
			background-color: #eee;
		}

		.box2 {
			padding: 0 20rpx;
			font-size: 32rpx;
			line-height: 60rpx;
		}

		.box3 {
			padding-right: 50rpx;
			.title {
				font-size: 32rpx;
				padding-left: 20rpx;
				border-bottom: 1px solid #eee;
				line-height: 70rpx;
			}

			.content {
				padding: 20rpx;
				font-size: 28rpx;
				color: #333;
				line-height: 50rpx;
				// .img-ks-lazyload{
				// 	width: 750rpx;
				// }
				// 图片样式不起作用，放到全局App.vue文件
			}
		}
		.goods-nav{
			position: fixed;
			bottom: 0;
			width: 100%;
		}
	}
</style>
