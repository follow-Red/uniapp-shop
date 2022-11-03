<template>
	<view class="news-detail">
		<text class="title">标题:{{data.title}}</text>
		<view class="info">
			<text>发表时间：{{data.public_time | formateDate}}</text>
			<text>浏览次数：{{data.click}}</text>
		</view>
		<view class="content">
			<!-- {{data.content}} -->
			<rich-text :nodes="data.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				data:{}
			}
		},
		onLoad(options) {
			this.id=options.id
			this.getNewsDetail()
		},
		methods: {
			async getNewsDetail(){
				const res =  await this.$myRequest({
					url:"getNewsDetail.json"
				})
				this.data = res.data.message[0]
			}
		}
	}
</script>

<style lang="scss">
	.news-detail{
		font-size: 30rpx;
		padding: 0 20rpx;
		.title{
			text-align: center;
			width: 710rpx;
			display: block;
			margin: 20rpx 0;
		}
		.info{
			display: flex;
			justify-content: space-between;
		}
	}
</style>
