import Vue from 'vue'
import App from './App'
import { myRequest} from 'util/api.js' 
import './static/iconfont/iconfont.css';
Vue.prototype.$myRequest = myRequest //封装myRequest方法挂载到vue全局
// Vue.filter('formateDate',(date)=>{ //全局过滤器
// 	const newDate = new Date(date)
// 	const year = newDate.getFullYear()
// 	const month = (newDate.getMonth() + 1).toString().padStart(2,"0")
// 	const day = newDate.getDate().toString().padStart(2,"0")
// 	return(year+"-"+month+"-"+day)
// })
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
