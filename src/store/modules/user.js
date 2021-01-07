// vuex 用户模块

import { getToken, setToken } from '@/utils/storage.js'

// 只要是仓库的数据被修改了，一定是提交了mutation
const state = {
  // token相关信息，初始值，优先从本地获取
  tokenInfo: getToken()
}
const mutations = {
  // 局部模块中的state，就是指自己模块的state
  setTokenInfo (state, tokenObj) {
    state.tokenInfo = tokenObj
    // 只要vuex中的tokenInfo被修改，同步到本地
    setToken(tokenObj)
  }
}
const actions = {}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
