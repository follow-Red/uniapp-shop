<template>
	<view class="news">
		<new-item :list = "news" @itemClick="goDetail"></new-item>
	</view>
</template>

<script>
	import newItem from "../../components/new-item/news-item.vue"
	export default {
		components:{newItem},
		data() {
			return {
				news:[]
			}
		},
		onLoad() {
			this.getNews()
		},
		methods: {
			async getNews(){
				const res = await this.$myRequest({
					url:"getNews.json"
				})
				console.log(res)
				this.news= res.data.message
			},
			goDetail(id){
				console.log(id)
				uni.navigateTo({
					url:'/pages/detail/detail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	
</style>
