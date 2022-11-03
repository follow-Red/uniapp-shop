<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view 
				:class="active===index ? 'active' : ''"
				v-for="(item,index) in cates"
				:key="item.cat_id"
				@click="leftClick(index,item.cat_id)"
				>{{item.cat_name}}
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view 
				class="item"
				v-for="(item,index) in rightList"
				:key="index">
				<image :src="item.img"
					@click="previewImg(item.img)"></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="rightList.length===0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates:[],
				active:0,
				rightList:[]
			}
		},
		onLoad() {
			this.getPicsCate()
		},
		methods: {
			async getPicsCate(){
				const res = await this.$myRequest({
					url:'getImgCategory.json'
				})
				this.cates= res.data.message
				this.leftClick(0,this.cates[0].cat_id)
				
			},
			async leftClick(index,id){
				this.active = index
				// 获取右侧数据
				const res = await this.$myRequest({
					url:'getDateByCategory.json'
				})
				this.rightList= res.data.message
			},
			previewImg(current){
				const urls = this.rightList.map(item=>{
					return item.img
				})
				uni.previewImage({
					urls,current
				})
			}
		}
	}
</script>

<style lang="scss">
	page{//微信开发者工具里面可以看出外层有个 page 标签
		height: 100%;
	}
	.pics{
		display: flex;
		height: 100%;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #EEE;
			view{
				height: 120rpx;
				line-height: 120rpx;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			.active{
				background-color: $shop-color;
				color:#fff
			}
		}
		.right{
			width: 520rpx;
			height: 100%;
			margin: 10rpx auto;
			.item{
				image{
					width: 520rpx;
					height: 520rpx;
					border-radius: 5rpx;
				}
				text{
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
			
		}
		
	}
</style>
