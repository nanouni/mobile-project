import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)

// axios封装
import http from '@/utils/request.js'
// 按需导入封装
import '@/utils/vant-ui.js'
// 作用：动态设置html font-size，公式：HTML的font-size = 当前的屏幕宽度 / 10
import 'amfe-flexible'
import '@/style/index.scss'

Vue.config.productionTip = false

// 将http实例，挂载到原型
Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
