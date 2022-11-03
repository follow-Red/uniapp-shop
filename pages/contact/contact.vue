<template>
	<view class="contact">
		<image class="img" src="/static/imgs/contact.jpeg">
		</image>
		<view class="info">
			<view @click="callPhone">联系电话：1348849569（点击拨打）</view>
			<view>校区地址：成都市双流区</view>
		</view>
		<!-- https://uniapp.dcloud.io/component/map?id=map -->
		<map class="map" :longitude="longitude" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 120,
				latitude: 30,
				markers: [{
					latitude: 30,
					longitude: 120,
					iconPath: '/static/huojian.png',
					width:30,
					height:30,
				}]
			}
		},
		methods: {
			callPhone(){
				uni.makePhoneCall({
					phoneNumber:"1348849569"
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		.img {
			width: 750rpx;
			height: 320rpx;
		}

		.info {
			padding: 10rpx 20rpx;
			font-size: 30rpx;

			view {
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}

		.map {
			height: 700rpx;
			width: 750rpx;
		}
	}
</style>
