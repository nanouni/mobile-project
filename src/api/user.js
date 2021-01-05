
// 这个js文件中，封装所有和用户相关的请求
// 比如： 登录，获取个人信息，修改个人信息，...

// 这里不是在组件中，要发请求，要拿到http实例
// this.$http错误的，这里需要导入的
import http from '@/utils/request'

export const reqLogin = (mobile, code) => {
  return http({
    method: 'post',
    url: '/v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}
