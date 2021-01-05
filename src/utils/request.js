// 这个模块，专门用于封装对于axios的配置处理
import axios from 'axios'

// 如果要基于原本的axios进行配置，配置出自己项目需要的axios实例
// http实例，实际和原来有的axios一致，只是在原来的axios基础上，添加了一些配置

const http = axios.create({
  baseURL: 'http://toutiao-app.itheima.net/', // 基础地址
  timeout: 5000 // 超时时间
})

// 以后这里还有其他配置项

// http.get('url').then(...)
export default http
