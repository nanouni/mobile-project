<template>
  <div class="login">
    <!-- 导航 -->
    <van-nav-bar title="登录"></van-nav-bar>
    <!-- 输入框 -->
    <van-cell-group>
      <van-field
      v-model="mobile"
      label="手机号"
      placeholder="请输入手机号"
      :error-message="mobileError"
      @input='inputChange'
      required />
      <van-field
      v-model="code"
      label="验证码"
      placeholder="请输入验证码"
      required
      @input='inputChange'
      :error-message="codeError"
      >
        <template #button>
          <van-button size="small" type="info">发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <!-- 按钮 -->
   <div class="btn-login">
      <van-button class="van-btn" type="info" @click="login">登 录</van-button>
   </div>
   <!-- 测试按钮 -->
    <van-button plain hairline type="primary" @click="testFn">获取当前用户信息</van-button>
  </div>
</template>

<script>
import { reqLogin, reqGetProfile } from '@/api/user.js'
import { mapMutations } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      mobile: '19512424521',
      code: '246810',
      mobileError: '',
      codeError: ''
    }
  },
  methods: {
    ...mapMutations('user', ['setTokenInfo']),
    // 专门用于表单内容进行校验，配置对应的提示
    // validate 返回值 ：布尔值 ，true校验通过 / false校验失败
    validate () {
      // 手机号非空
      if (this.mobile.trim() === '') {
        this.mobileError = '手机号不能为空'
        return false
      }

      // 验证格式
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        this.mobileError = '请输入正确的手机号'
        return false
      }

      // 通过校验，错误信息清空
      this.mobileError = ''

      // 验证码非空
      if (this.code.trim() === '') {
        this.codeError = '验证码不能为空'
        return false
      }

      // 验证格式
      if (!/^\d{6}$/.test(this.code)) {
        this.codeError = '请输入正确的验证码'
        return false
      }
      // 通过校验，错误信息清空
      this.codeError = ''

      return true
    },
    inputChange () {
      this.validate()
    },
    async login () {
      if (this.validate()) {
        // 开启loading状态
        this.$toast.loading({
          message: '登录中...',
          forbidClick: true,
          overlay: true
        })
        // const res = await this.$http.post('/v1_0/authorizations', {
        //   mobile: this.mobile,
        //   code: this.code
        // })
        // console.log(res.data)
        const res = await reqLogin(this.mobile, this.code)
        // console.log(res.data)
        console.log(res)
        this.setTokenInfo(res.data.data)
      }
      this.$toast.success('登录成功')
    },
    async testFn () {
      const res = await reqGetProfile()
      console.log(res.data)
    }
  }
}
</script>

<style lang='scss' scoped>
.login {
  .btn-login {
    padding: 20px;
    .van-btn {
      color: #fff;
      width: 100%;
      border-radius: 5px;
    }
}
}
</style>
