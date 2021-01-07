// 进行本地存储的操作封装
// 封装对于本地token的处理
const tokenKey = 'mobile-project-token'

// 设置token
export const setToken = (tokenObj) => {
  localStorage.setItem(tokenKey, JSON.stringify(tokenObj))
}

// 获取token
export const getToken = (getToken) => {
  return JSON.parse(localStorage.getItem(tokenKey)) || {}
}

// 删除token
export const removeToken = () => {
  localStorage.removeItem(tokenKey)
}
