
// 这个js文件中，封装所有和用户相关的请求
// 比如： 登录，获取个人信息，修改个人信息，...

// 这里不是在组件中，要发请求，要拿到http实例
// this.$http错误的，这里需要导入的
import http from '@/utils/request'

// 用户登录信息
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

// 获取用户个人资料
export const reqGetProfile = () => {
  return http({
    method: 'get',
    url: '/v1_0/user/profile',
    headers: {
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDk5OTIyODAsInVzZXJfaWQiOjEzNDYyOTI1NTEwOTQ2MzI0NDgsInJlZnJlc2giOmZhbHNlfQ.ZfJzvDkYtinhtw9odYogrBy6R0yeSo1ni_uXjqrQz3A'
    }
  })
}

// vuex localstorage 都要存
// 1.先存到vuex中
// 2.同步到localStorage中

// http.get(url)
// http.post(url, data)
// http({
//   url: 请求地址，
//   method: 请求方式,
//   data: 请求体中的参数，post清气去体的参数,
//   params: 拼接在地址栏中的参数，get请求的参数,
//   headers: {
//     Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU'
//   }
// })
