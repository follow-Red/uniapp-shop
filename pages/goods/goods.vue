<template>
	<view>
		<GoodsList 
			:goods="goods"
			@itemClick="goGoodsDetail"
		></GoodsList>
		<!-- v-if 是创建与移除 而不是隐藏和显示 -->
		<view class="isOver" v-if="end">我是有底线的</view>
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
				goods:[],
				pageIndex:0,
				end:false
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		onReachBottom() {
			console.log("触底了")
			// 模拟加载下一页数据
			if(this.goods.length>20){
				return this.end = true
			}
			this.getGoodsList()
			this.pageIndex++
			
		},
		onPullDownRefresh() {
			console.log("下拉刷新了")
			this.goods=[];
			this.pageIndex=0;
			this.end=false
			setTimeout(()=>{
				this.getGoodsList(()=>{
					uni.stopPullDownRefresh()
				})
			},1000)
			
		
		},
		methods: {
			// 获取商品列表数据
			async getGoodsList(callback){
				const res = await this.$myRequest({
					url: "getHotGoods.json"
				})
				this.goods = [...this.goods,...res.data.message.goods]
				callback && callback()
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

<style>
.isOver{
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-size: 28rpx;
}
</style>
