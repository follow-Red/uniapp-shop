const BASE_URL = "http://localhost:8080/static/api/";
//localhost 192.168.43.247 https://gitee.com/jingyu7/uniapp_shop/tree/master/static/api
export const myRequest = (options) => {
	return new Promise((resovle, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			header:options.header || {'Cache-Control':'no-cach'},
			data: options.data || {},
			success: (res) => {
				if (res.data.status !== 0) {
					return uni.showToast({
						title: "获取数据失败"
					})
				}
				resovle(res)
			},
			fail: (err) => {
				uni.showToast({
					title: "请求接口失败"
				})
				reject(err)
			}
		})
	})
}
