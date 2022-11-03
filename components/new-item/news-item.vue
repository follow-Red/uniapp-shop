<template>
	<view class="news">
		<view class="news-item"
			v-for="(item,index) in list"
			:key = "item.id"
			@click="navigator(item.id)">
			<image :src="item.img_url"></image>
			<view class="right">
				<view class="title">{{item.title}}</view>
				<view class="info">
					<text>发表时间:{{item.public_time | formateDate}}</text>
					<text>浏览次数:{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:["list"],
		// 组件是提供给其他人使用，即使定义了全局顾虑器也不应该删掉组件中的，组件应该保持独立
		filters:{
			formateDate(date){
				const newDate = new Date(date)
				const year = newDate.getFullYear()
				const month = (newDate.getMonth() + 1).toString().padStart(2,"0")
				const day = newDate.getDate().toString().padStart(2,"0")
				return(year+"-"+month+"-"+day)
			}
		},
		methods:{
			navigator(id){
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.news{
		.news-item{
			display: flex;
			padding: 10rpx 20rpx;
			border-bottom: 1rpx solid $shop-color;
			image{
				width: 200rpx;
				height: 155rpx;
			}
			.right{
				margin-left: 15rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.title{
					font-size: 33rpx;
				}
				.info{
					font-size: 26rpx;
					text:nth-child(2){
						margin-left: 30rpx;
					}
				}
			}
			
		}
	}
</style>
