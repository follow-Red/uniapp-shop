<template>
	<view class="goods-list">
		<view class="goods-item" 
			v-for="item in goods"
			@click="itemClick(item.goods_id)"
		>
			<image :src="item.goods_small_logo"></image>
			<view class="price">
				<text>{{item.goods_price}}</text>
				<text>{{item.goods_price}}</text>
			</view>
			<view class="name">
				{{item.goods_name}}
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		props: ["goods"],
		methods:{
			itemClick(id){
				this.$emit("itemClick",id)
			}
		}
	}
</script>

<style lang="scss">
	.goods-list {
		padding: 0 15rpx; //上下 , 左右
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		background-color: #eee;
		.goods-item {
			background-color: #fff;
			width: 355rpx;
			margin: 10rpx 0;
			padding: 15rpx;
			box-sizing: border-box;

			image {
				width: 80%;
				height: 220rpx;
				margin: 0 auto;
				display: block;
			}
			.price {
				color: $shop-color;
				font-size: 36rpx;
				margin: 10rpx 0 5rpx 0;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
				}
			}
			.name {
				font-size: 30rpx;
				line-height: 50rpx;
				padding-bottom: 15rpx;
				padding-top: 10rpx;
			}
		}
	}
</style>
