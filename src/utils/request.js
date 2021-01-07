// 这个模块，专门用于封装对于axios的配置处理
import axios from 'axios'
import store from '@/store'

// 如果要基于原本的axios进行配置，配置出自己项目需要的axios实例
// http实例，实际和原来有的axios一致，只是在原来的axios基础上，添加了一些配置

const http = axios.create({
  baseURL: 'http://toutiao-app.itheima.net/', // 基础地址
  timeout: 5000 // 超时时间
})

// 以后这里还有其他配置项 例如：拦截器
// 添加请求拦截器：若有的axios请求，在真正呗发送出去之前，都会先经过请求拦截器
http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // config 就是请求的配置信息，决定了最终如何请求的
  // console.log('发送请求了', config)
  const token = store.state.user.tokenInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

// http.get('url').then(...)
export default http
